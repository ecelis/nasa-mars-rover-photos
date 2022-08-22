import React, { useEffect, useState } from "react";

const Carousel = function (props) {
    const [state, setState] = useState({
        currentSlide: 0
    });
    useEffect(() => {
        document.onkeydown = keyHandler;
    });

    const slideCount = props.items.length - 1;

    const nextHandler = () => {
        if(state.currentSlide === slideCount) {
            setState({...state, ...{currentSlide: 0}})
        } else {
            setState({
                ...state,
                ...{currentSlide: state.currentSlide + 1}
            })
        }
    }

    const keyHandler = (e) => {
        e = e || window.event;
    
        switch (e.code) {
            case 'ArrowRight':  // next, right arrow
                nextHandler();
            break;
            case 'ArrowLeft':  // prev, left arrow
                prevHandler()
            break;
            default:
                break;
        }
    }
    
    const prevHandler = () => {
        if(state.currentSlide === 0) {
            setState({
                ...state,
                ...{currentSlide: slideCount}
            });
        } else {
            setState({
                ...state,
                ...{currentSlide: state.currentSlide - 1}
            })
        }
    }

    return (
        <div className="slider">
            {props.items.map((photo, idx) => {
                return (<div key={photo.id} className={`slide`} style={{
                    transform: `translateX(${100 * (idx - state.currentSlide)}%)`
                }}>
                    <img
                        src={photo.img_src}
                        alt={photo.id}
                    />
                </div>)
            })}
            <button className="btn btn-next"
                onClick={nextHandler}>{'>'}</button>
            <button className="btn btn-prev"
                onClick={prevHandler}>{'<'}</button>
        </div>
    );
}

export default Carousel;
