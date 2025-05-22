import React from 'react';

const Card = ({ title, children }) => {
  return (
    <div className="p-6 border rounded-lg shadow bg-white w-full">
      <h3 className="text-xl font-bold mb-4"  style={{
                    fontFamily: '"Playfair Display", serif',
                    fontWeight: 800,
                    bold: true,
                    fontSize:30,
                    color: "rgb(13, 13, 13)",
                  }}>{title}</h3>
      {children}
    </div>
  );
};

export default Card;