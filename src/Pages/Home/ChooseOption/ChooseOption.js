import React from 'react';
import { BiHeadphone } from 'react-icons/bi';
import { AiOutlineSync } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiFillSetting } from 'react-icons/ai';
const ChooseOption = () => {
    return (
        <div className='bg-violet-200 py-10'>

        <div className='text-center px-10 py-10'>
            <h3 className='text-center text-3xl font-bold pb-4'>WHY CHOOSE US</h3>
            <p>mMarket.com – Recognize the today’s Technology gets obsolete tomorrow so, we keep hawk’s eye on the International trend and bring a solution which is essential, important and worthy to invest.

            mMarket.com have dedicated distribution point in all major cities all over Bangladesh to ensure faster delivery & reliable service.</p>
        </div>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-10 pb-20' >
<div className='bg-violet-300 hover:bg-violet-400 rounded-lg py-4 px-4'>
    
    <AiFillSetting className='text-2xl ml-20' ></AiFillSetting>
    <h2 className='text-center text-2xl font-bold'>Great Value</h2>
    <p className='text-start'>We get you the best value for your money</p>
</div>
<div className='bg-violet-300 hover:bg-violet-400 rounded-lg py-4 px-4'>
    <BiHeadphone className='text-2xl ml-20'/>
    <h2 className='text-center text-2xl font-bold'>24/7 SUPPORT</h2>
    <p className='text-start'>We’re here to support you around the clock</p>
</div>
<div className='bg-violet-300 hover:bg-violet-400 rounded-lg py-4 px-4'>
    <AiOutlineSync className='text-2xl ml-20'/>
    <h2 className='text-center text-2xl font-bold'>Warranty Policy</h2>
    <p className='text-start'>Policy Our warranty policy will give you peace of mind</p>
</div>
<div className='bg-violet-300 hover:bg-violet-400 rounded-lg py-4 px-4'>
    <AiOutlineShoppingCart className='text-2xl ml-20'/>
    <h2 className='text-center text-2xl font-bold'>Free Shipping</h2>
    <p className='text-start'>We often provide free shipping for our products</p>
</div>

      </div>
        </div>

    );
};

export default ChooseOption;