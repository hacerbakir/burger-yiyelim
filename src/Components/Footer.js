import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';

export function Footer() {
    return (
        <div  className='bg-red-900 text-white py-5 flex flex-col justify-center items-center w-full'>
            <div className='p-3'>
                <FacebookIcon className='mx-3'/>
                <InstagramIcon className='mx-3'/>
                <XIcon className='mx-3'/>

            </div>
            <p className='text-lg'>Bütün Haklarımız Saklıdır.</p>
        </div>
    )
}
