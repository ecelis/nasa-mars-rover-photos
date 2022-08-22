import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Ul = styled.ul`
    ${props => props.axis === 'y' ? `display: flex;` : null}
    list-style-type: none;
    padding: 0;
    margin: 0;
    ${props => props.outerBorder ? `border: thin solid var(--primary);` : null}
    ${props => props.innerBorder ? `
        li {
            ${props => props.axis === 'y' ? `margin-right: 3px;` : null}
            div { 
            border-bottom: thin solid var(--primary);
        };
    ` : null }

`;

const List = (props) => {
    return (
        <Ul {...props}>
            {props.items.map((item, idx) => {
                return (
                    <li key={idx} id={item.id}><div>{item.value}</div></li>
                );
            })}
        </Ul>
    );
}

List.propTypes = {
    items: PropTypes.array.isRequired,
    outerBorder: PropTypes.bool,
    innerBorder: PropTypes.bool,
    hover: PropTypes.bool,
    horizontal: PropTypes.bool
}

export default List;
