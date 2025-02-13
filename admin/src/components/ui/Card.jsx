import React from "react";

const Card = ({ children, className }) => {
  return (
    <div className={`rounded-lg ring ring-black/10 sm:p-1 ${className}`}>
      {children}
    </div>
  );
};

const CardHeader = ({ children, className }) => {
  return <div className={`border-b border-black/20 p-4 ${className}`}>{children}</div>;
};

const CardContent = ({ children, className }) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};

const CardTitle = ({ children, className }) => {
  return <h3 className={`font-semibold text-lg ${className}`}>{children}</h3>;
};

export { Card, CardHeader, CardContent, CardTitle };