import React from 'react'
import { TbArrowBackUp, TbTruckDelivery } from 'react-icons/tb'
import Title from './Title'
import { RiSecurePaymentFill } from 'react-icons/ri'

const Features = () => {
  return (
    <section className='max-padd-container py-6'>
        {/* Title */}
        <Title title={'Our Frature'}  titleStyles={'text-center'}/>
        {/* container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 bg-white rounded-xl">
            <div className='p-4 rounded-3xl'>
                <TbArrowBackUp className='bold-32 mb-3 text-yellow-500' />
                <h4 className='h4 capitalize'>Easy Return</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et totam quia sed nulla error!</p>
            </div>
            <div className='p-4 rounded-3xl'>
                <TbTruckDelivery className='bold-32 mb-3 text-secondary' />
                <h4 className='h4 capitalize'>Fast Delivery</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et totam quia sed nulla error!</p>
            </div>
            <div className='p-4 rounded-3xl'>
                <RiSecurePaymentFill className='bold-32 mb-3 text-red-500' />
                <h4 className='h4 capitalize'>Secure Payment</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et totam quia sed nulla error!</p>
            </div>
        </div>
    </section>
  )
}

export default Features