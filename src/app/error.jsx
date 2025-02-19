"use client";

import React from "react";

const ErrorComponent = ({
  errorMessage = "An unexpected error has occurred.",
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 border border-red-500 bg-red-100 text-red-700">
      <h1 className="text-2xl font-bold mb-4">Error</h1>
      <p className="text-lg mb-4">{errorMessage}</p>
      <img
        src="https://media.giphy.com/media/14uQ3cOFteDaU/giphy.gif"
        alt="Error GIF"
        className="w-64 h-64"
      />
    </div>
  );
};

export default ErrorComponent;
