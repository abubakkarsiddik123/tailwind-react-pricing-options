import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';
import DaisyCard from '../DaisyCard/DaisyCard';

const PricingOptins = ({PricingPromice})=>{
    const pricingData=use(PricingPromice)
    console.log(pricingData);
    return (
        <div>
            <h2 className='text-5xl'>Get Our Membership</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {/* {
                   pricingData.map(pricing=> <PricingCard key={pricing.id} pricing={pricing}></PricingCard> )
                } */}
                {
                    pricingData.map(pricing=> <DaisyCard key={pricing.id} pricing={pricing}></DaisyCard>)
                }
            </div>
        </div>
    );
};

export default PricingOptins;