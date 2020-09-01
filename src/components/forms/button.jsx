import React from 'react';
import { Loader } from '../loading';

const Button = ({ isLoading, children, ...props }) => {
  return (
    <button type={props.type} className="register__btn" disabled={isLoading} {...props}>
      {isLoading ? <Loader /> : children}
    </button>
  );
};

export default Button;
