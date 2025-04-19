import React from 'react';

const Button = ({ text, variant = 'solid', onClick }) => {
  const baseClass = "px-6 py-3 rounded font-medium";
  const variants = {
    solid: "bg-black text-white",
    outline: "border border-black text-black",
  };

  return (
    <button onClick={onClick} className={`${baseClass} ${variants[variant]}`}>
      {text}
    </button>
  );
};

export default Button;
