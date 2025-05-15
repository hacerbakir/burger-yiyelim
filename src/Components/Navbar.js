import React from 'react';
import burgerLogo from '../Assets/burgerlogo.png';
import { Link } from 'react-router-dom';


export function Navbar() {
    return (
        <div className='bg-red-900 text-white sticky top-0 py-4'>
            <div className='h-full flex justify-between items-center container m-auto'>
                <img src={burgerLogo} alt='BurgerLogo'  className='w-[150px]'/>
                <div className=' w-1/3 flex justify-around'>
                    <Link to="/">Anasayfa</Link>
                    <Link to="/menu">Menu</Link>
                    <Link to="/about">Hakkımızda</Link>
                    <Link to="/contact">İlertişim</Link>
                </div>
            </div>
        </div>
    )
}

