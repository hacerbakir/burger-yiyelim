import React from 'react'

function MenuItem({ image, name, content, price }) {

    return (
        <div className='bg-white h-[400px] cursor-pointer'>
            <div className="rounded overflow-hidden shadow-lg w-full h-full">
                <div className='w-full h-2/3 bg-contain bg-center  bg-no-repeat' style={{ backgroundImage: `url(${image})` }}></div>

                <div className="px-6 py-4">
                    <div className="font-bold text-2xl mb-2">{name}</div>
                    <p className="text-gray-700 text-base">{content}</p>
                </div>
                <p className='text-red-600'><i>{price} TL</i></p>
            </div>

        </div>


    )
}

export default MenuItem