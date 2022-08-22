import React from "react";
import styled from 'styled-components';

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background: var(--light);
  div {
    max-width: 250px;
    img {
        height: 250px;
        width: 250px;
    }
  }
`;

const Photos = function(props) {
    return <PhotoGrid>
        {props.photos.map(photo => {
            return (
                <div key={photo.id}>
                    <img src={photo.img_src} alt={photo.id}
                    onClick={props.modalHandler}
                    className="photo" />
                </div>
            );
        })}
    </PhotoGrid>
}

export default Photos;
