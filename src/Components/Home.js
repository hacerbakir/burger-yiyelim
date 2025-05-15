import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../Assets/banneryeni.jpg';


export function Home() {
  return (
    <div className='h-3/4 bg-cover bg-center relative' style={{ backgroundImage: `url(${BannerImage})` }}>
      <div>
        <Link to="/menu">
          <button className='bg-red-900 absolute bottom-10 left-10 text-white text-xl px-5 py-2 rounded-full text-center '>SİPARİŞ VER</button>
        </Link>
      </div>

    </div>
  )
}

