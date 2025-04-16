import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({pricing}) => {
    console.log(pricing);
    const {name, price, description, features} = pricing;
    return (
        <div className='flex flex-col bg-amber-600 text-white border border-black p-4 rounded-2xl space-y-4'>
            {/* Card Header */}
            {
                <div className=''>
                    <h2 className='text-4xl'>{name}</h2>
                    <h3 className='text-2xl'>{price}</h3>
                </div>
            }
            {/* Card Body */}
            {
                <div className='bg-amber-400 p-6 rounded-2xl border border-white flex-1'>
                    <p>{description}</p>
                    {features.map((feature, index )=> <PricingFeature key={index} feature = {feature}></PricingFeature>)}
                </div>
            }
            {/* card button */}
            <button className='btn w-full'>Buy Now</button>
        </div>
    );
};

export default PricingCard;