import React from 'react';

const Modal = function({ handler, show, children }) {
    const showHideClassName = show ? "modal modal-display-block" : "modal modal-display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                {children}
                <button type="button" onClick={handler}>Close</button>
            </section>
        </div>
    );
}

export default Modal;
