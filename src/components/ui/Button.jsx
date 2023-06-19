import React from 'react';

export default function Button({ text, onClick }) {
  return (
    <button
      type="button"
      className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 rounded-lg text-sm px-5 py-2.5 text-center font-bold"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
