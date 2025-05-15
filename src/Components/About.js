import React from 'react';
import BannerImage from '../Assets/banneryeni.jpg';
export function About() {
  return (
    <div className='container m-auto text-center h-5/6'>
      <div className='w-full h-2/3 bg-contain bg-center bg-no-repeat my-6 mt-10' style={{ backgroundImage: `url(${BannerImage})` }}></div>
      <div>
        <h1 className='font-bold text-3xl py-6'>Hakkımızda</h1>
        <p className='text-lg'>Büyükten küçüğe ailenin her ferdinin favorilerinden olan hamburger tarifleri sizlerle buluşuyor.
          Islak hamburgerden tutun da minimize edilmiş küçük hamburger çeşitleri ve garnitürlerine kadar
          aradığınız her hamburger tarifini burada bulabilirsiniz. Klasik hamburger, vegan hamburger, nohut burger,
          cheeseburger ve tavuk hamburger gibi hayal ettiğiniz veya aklınıza henüz gelmeyen çok kolay ve ev yapımı
          burger çeşitlerini hemen deneyin! Fotoğraflı, videolu hamburger tarifleriyle sofranızı bereketlendirin.
          Büyükten küçüğe ailenin her ferdinin favorilerinden olan hamburger tarifleri sizlerle buluşuyor.
          Islak hamburgerden tutun da minimize edilmiş küçük hamburger çeşitleri ve garnitürlerine kadar
          aradığınız her hamburger tarifini burada bulabilirsiniz. 

        </p>
      </div>
    </div>
  )
}

