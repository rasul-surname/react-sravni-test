import React from 'react';

interface InterfaceButton {
    value: string;
    onClick?: () => any;
    className?: any;
}

const Button: React.FC<InterfaceButton> = (props) => {
    const {value, onClick, className} = props;

    return (
        <button className={className} onClick={onClick}>{value}</button>
    );
};

export default Button;