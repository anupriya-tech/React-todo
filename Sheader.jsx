import React from 'react';

function Sheader() {
  return (
    <div className='flex gap-4 items-center justify-between mt-4 min-h-24 px-4'>
      <div className='min-w-24'>
        <img src="src/logo.jpeg" alt="Logo" className='w-20 h-20' />
      </div>
      <div className='flex gap-4'>
        <div><button>MEN</button></div>
        <div><button>WOMEN</button></div>
        <div><button>KIDS</button></div>
        <div><button>HOME AND LIVING</button></div>
        <div><button>BEAUTY</button></div>
        <div><button>STUDIO</button></div>
      </div>
      <div className='flex gap-10 px-10'>
        <input
          type="text"
          placeholder="Search for Product brands"
          className='w-64 h-10 px-4 border border-gray-300 rounded'
        />
      </div>
      <div className='flex gap-4 px-10'>
        <div><button>Profile</button></div>
        <div><button>Wishlist</button></div>
        <div><button>Bag</button></div>
      </div>
    </div>
  );
}

export default Sheader;
