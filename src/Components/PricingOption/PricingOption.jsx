import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';
import DaisyPricingCard from '../DaisyPricingCard/DaisyPricingCard';

const PricingOption = ({pricingPromise}) => {

    const pricingData = use(pricingPromise);
    

    return (

        <div className='mt-16'>
            <h2 className='text-4xl'>Get Our Membership</h2>
            {/* Cards */}
            {/* <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
                {
                    pricingData.map(pricing => <PricingCard key={pricing.id} pricing={pricing}></PricingCard>)
                }
            </div> */}

            {/* Daisy Cards */}
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
                {
                    pricingData.map(pricing => <DaisyPricingCard key={pricing.id} pricing={pricing}></DaisyPricingCard>)
                    
                }
            </div>
        </div>
    );
};

export default PricingOption;