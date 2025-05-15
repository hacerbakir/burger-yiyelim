import React from 'react';
import { Data } from '../Helpers/Data';
import MenuItem from './MenuItem';

export function Menu() {


  return (
    <div className='container m-auto text-center my-5'>

      <h1 className='text-5xl font-bold p-4'>Burgerlerimiz</h1>
      <div className='grid grid-cols-4 gap-14'>
        {Data.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              content={menuItem.content}
              price={menuItem.price}
            />
          )
        })}

      </div>
    </div>
  )
}

