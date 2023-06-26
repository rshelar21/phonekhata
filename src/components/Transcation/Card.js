import React from 'react'

const Card = ({item}) => {
  return (
    <>
      <div className='flex justify-between p-2 items-center border w-full'>
        <div className='flex items-center'>
            <img src="https://www.socialsamosa.com/wp-content/uploads/2023/03/image-58-1024x1024.png"
                className='w-16 h-16 rounded-full' alt="logo"
            />
            <div>
                <h1 className='text-base font-semibold text-black'>{item?.name}</h1>
                <p className='font-normal text-gray-500'>{item?.time}</p>
            </div>
        </div>

        <h3 className='text-base font-bold'>{item?.value}</h3>
      </div>
    </>
  )
}

export default Card
