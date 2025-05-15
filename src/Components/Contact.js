import React from 'react'
import BannerImage from '../Assets/banner.png';
export function Contact() {
  return (
    <div className='container m-auto h-3/4 flex items-center'>

      <div className='w-1/2 h-2/3 bg-contain bg-center bg-no-repeat my-6 mt-10' style={{ backgroundImage: `url(${BannerImage})` }}></div>
      <div className='w-1/2 h-full flex flex-col items-start justify-center'>
        <h1 className='w-full text-3xl pb-6'>Bizimle İletişime Geçin</h1>
        <form className='flex flex-col w-full'>
          <label className='text-xl py-3 font-medium text-gray-600'>Ad Soyad</label>
          <input
            className='p-3 border border-gray-500 text-black'
            type='text'
            name='name'
            placeholder='Lütfen adınızını soyadınızı giriniz...'
          />
          <label className='text-xl py-3 font-medium text-gray-600'>Email</label>
          <input
            className='p-3 border border-gray-500 text-black'
            type='email'
            name='email'
            placeholder='Lütfen emailinizi giriniz...'
          />
          <label className='text-xl py-3 font-medium text-gray-600'>Mesajınız</label>
          <textarea
            className='p-3 border border-gray-500 text-black'
            rows="6"
            name='message'
            placeholder='Lütfen mesajınızı giriniz...'
          ></textarea>

        </form>
        <button className='w-1/4 bg-red-700 py-3 my-3 rounded-full text-white font-bold text-lg'>Gönder</button>
      </div>

    </div>
  )
}

