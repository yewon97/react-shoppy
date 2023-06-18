import React from 'react';

export default function User({ user: { displayName, photoURL } }) {
  return (
    <div className="flex items-center gap-2">
      <img
        src={photoURL}
        alt="Avatar Thumbnail"
        className="w-10 h-10 rounded-full"
      />
      <p className="text-lg text-gray-900 hidden md:block">{displayName}</p>
    </div>
  );
}
