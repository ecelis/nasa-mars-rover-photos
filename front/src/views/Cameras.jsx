import React from "react";
import { curiosityCams } from "../common";

const Camera = function(props) {
    const { handler, item, selected } = props;
    let select = '';
    if (selected.toLowerCase() === item.id.toLowerCase()) {
        select = 'selected'
    }
    return (
        <a href={item.id} id={item.id}
            onClick={handler}
            className={`camera ${select}`}>
            {item.value}
        </a>
    );
}

export const cameras = function(handler, state) {
    return curiosityCams.map(item => {
        return {
            id: item.id,
            value: (<Camera
                key={item.id}
                item={item}
                handler={handler}
                selected={state.selected} />)
        }
    });
}
  