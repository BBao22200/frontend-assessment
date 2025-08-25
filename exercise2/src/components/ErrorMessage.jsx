import React from 'react';

const ErrorMessage = ({ error, onRetry }) => (
  <div className="container mx-auto p-4">
    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
      <p className="text-red-600">{error}</p>
      <button
        className="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
        onClick={onRetry}
      >
        Retry
      </button>
    </div>
  </div>
);

export default ErrorMessage;
