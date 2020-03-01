import React from 'react';

const Overlay = (props) => {
    return (
        <div className={props.show ? "overlay" : "overlay overlay--display"}>
            {props.children}
        </div>
    )
}

export default Overlay;