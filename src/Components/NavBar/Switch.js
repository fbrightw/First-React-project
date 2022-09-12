import React from 'react';
import './Switch.css';

const Switch = () => {
    return (
        <div style={{
            position: 'absolute',
            right: 135,
            top: -8,
        }}>
            <input
                className="react-switch-checkbox"
                id={`react-switch-new`}
                type="checkbox"
            />
            <label
                className="react-switch-label"
                htmlFor={`react-switch-new`}
            >
                <span className={`react-switch-button`} />
            </label>
        </div>
    );
};

export default Switch;