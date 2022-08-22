import styled from "styled-components";
import PropTypes from 'prop-types';

export const Grid = styled.div`
    ${props => props.fontFamily ? `font-family: ${props.fontFamily};` : null}
    ${props => props.background ? `background: ${props.background};` : null}
`;

Grid.propTypes = {
    background: PropTypes.string,
    fontFamily: PropTypes.string
}

Grid.defaultProps = {
    background: 'var(--light)',
    fontFamily: "verdana, san-serif"
}

export const Row = styled.div`
    display: flex;
    ${props => props.background ? `background: ${props.background};` : `color: inherit;`}
    ${props => props.color ? `color: ${props.color};` : `color: inherit;`}
    ${props => 
        {
            return `
                ${props.hoverColor ? `&:hover {
                    background: ${props.hoverColor};
                    transition: all 180ms ease-in-out;` : null}
            `;
        }
    };
`;

const commonDefaults = {
    border: 'thin dashed var(--dark)',
    justify: 'left',
    align: 'left',
    collapse: false
}

Row.propTypes = {
    background: PropTypes.string,
    color: PropTypes.string,
    hoverColor: PropTypes.string,
    border: PropTypes.string,
    justify: PropTypes.string,
    align: PropTypes.string,
    collapse: PropTypes.bool
}

Row.defaultProps = commonDefaults;

const media = {
    xs: (styles) => `
    @media only screen and (max-width: 480px) {
        ${styles}
    }`
}

export const Col = styled.div`
    display: flex;
    flex: ${(props) => props.size};
    ${props => props.background ? `background: ${props.background};` : `color: inherit;`}
    ${props => props.border ? `border: ${props.border};` : null}
    ${props => props.color ? `color: ${props.color};` : `color: inherit;`}
    ${props => 
        {
            return `
                ${props.hoverColor ? `&:hover {
                    background: ${props.hoverColor};
                    transition: all 180ms ease-in-out;` : null}
            `;
        }
    };
    ${props => props.justify ? `justify-content: ${props.justify};` : null}
    ${(props) => props.collapse && media[props.collapse](
        `
        display: none;
        text-align: ${props.align};
        `
    )}
`;

Col.propTypes = {
    background: PropTypes.string,
    color: PropTypes.string,
    hoverColor: PropTypes.string,
    border: PropTypes.string,
    justify: PropTypes.string,
    align: PropTypes.string,
    collapse: PropTypes.bool
}

Col.defaultProps = commonDefaults;
