import React from 'react';

const Message = ({ message, onClose , color }) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
      <div className={`px-4 py-3 bg-${color}-100 border border-[${color}]-400 text-${color}-700 rounded`}>
        <strong>Success!</strong> {message}
        <button
          onClick={onClose}
          className={`ml-4 text-sm font-medium text-${color}-600 hover:text-${color}-500 focus:outline-none`}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Message;