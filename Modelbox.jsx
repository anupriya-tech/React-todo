// Modelbox.jsx
import React from 'react';

function Modelbox({ showModal }) {
  return (
    <div className='fixed inset-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-200 rounded-lg shadow-lg z-50 p-4'>
      <button
        onClick={showModal}
        className='absolute top-2 right-2 text-gray-600 hover:text-gray-800 bg-gray border-none text-xl'
      >
        x
      </button>
      <div className='border-2 border-gray-300 rounded bg-gray-100 h-48 w-80 p-4'>
        <p className='bg-slate-200 h-12 w-10'>Your modal content goes here</p>
      </div>
    </div>
  );
}

export default Modelbox;
