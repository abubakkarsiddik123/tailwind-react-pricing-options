import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({pricing}) => {
    const {name,price,info,features}=pricing;
    return (
        <div  className='flex flex-col   border bg-amber-600 rounded-2xl p-4' >
            {/* card header */}
            <div>
                <h1 className="text-5xl text-white">{name}</h1>
                <h4 className="text-3xl text-white">{price} </h4>
            </div>
            {/* card body */}
            <div className=' bg-amber-400 rounded-2xl mt-10 p-4 flex-1'>
                <p>{info}</p>
                {
                    features.map((features,index)=> <PricingFeature key={index}  features={features}></PricingFeature> )
                }
            </div>
            <button className="btn w-full">Subscribe</button>
        </div>
    );
};

export default PricingCard;