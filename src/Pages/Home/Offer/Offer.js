import React from 'react';
import { Link } from 'react-router-dom';

const Offer = () => {
    return (
      <div className='bg-violet-200 pt-10'>

      <div className='text-center px-10 py-10'>
          <h3 className='text-center text-3xl font-bold pb-4'>Mobile Reviews</h3>
      </div>


          <div className='grid lg:grid-cols-1 md:grid-cols-2 gap-10 px-10 pb-20' >
<div className='bg-violet-300 hover:bg-violet-400 rounded-lg py-4 px-4 '>
   
  
  <h2 className='text-center text-2xl font-bold'>Oppo A17 Review</h2>
  <div className='flex '>
  <img src="https://www.gsmarena.com.bd/images/reviews/thumb/Oppo-A17-Review.jpg" alt="" />
  <p className='pl-6 text-start' >Oppo A17 is a budget smartphone that offers a decent set of features for its price point. The device features a 6.44 inches HD+ display with a resolution of 720 x 1600 pixels. It is powered by a MediaTek Helio P35 processor, paired with 4GB of RAM and 64GB of internal storage, which can be expanded via a microSD card.Oppo A17 has a quad-camera setup on the back, consisting of a 13-megapixel...</p>
  
  </div>
</div>

<div className='bg-violet-300 hover:bg-violet-400 rounded-lg py-4 px-4'>
  
  <h2 className='text-center text-2xl font-bold'>Samsung Galaxy Note 20 Ultra 5G Review</h2>

  <div className='flex '>
    <img src="https://www.gsmarena.com.bd/images/reviews/thumb/Samsung-Galaxy-Note-20-Ultra-5G.jpg" alt="" />
  <p className='pl-6 text-start'>The Samsung Galaxy Note series has always been the smartphone of most professionals, myself included. I was originally connected and haven't been able to walk since then. With Note devices, you feel like you can do whatever matters. And that's the feeling I got again after holding the Samsung Galaxy Note 20 Ultra 5G in my hand. But worth Rs 1 Lakh+ money, is this phone worth it? Read the review for....</p>
  </div>
</div>
<div className='bg-violet-300 hover:bg-violet-400 rounded-lg py-4 px-4'>
  
  <h2 className='text-center text-2xl font-bold'>The A to Z of Galaxy Unpacked 2023 Unveiling the Latest Era of Samsung Galaxy Innovation</h2>
  <div className='flex '>
    <img src="https://www.gsmarena.com.bd/images/news/thumb/Vivo-y-series-new-smartphone-y22.jpg" alt="" />
  <p className='pl-6 text-start'>Every year at Galaxy Unpacked, Samsung Electronics unveils a new era of mobile innovation – and this year was no exception. Together in person for the first time in three years, Samsung unveiled at its latest Unpacked event in San Francisco its exciting new range of additions to the Galaxy family – including the Galaxy S23 series, the Galaxy Book3 series and....</p>
  </div>
  
</div>
<div className='bg-violet-300 hover:bg-violet-400 rounded-lg py-4 px-4'>
  
  <h2 className='text-center text-2xl font-bold'>Vivo Y series New smartphone Y22 comes to the Market</h2>
  <div className='flex '>
    <img src="https://www.gsmarena.com.bd/images/news/thumb/The-a-to-z-of-galaxy-unpacked-2023.jpg" alt="" />
  <p className='pl-6 text-start'>It could be cricket or football however the match is now on the smartphone. If you have to think about the battery charge while watching the match, then anyone will feel good! The Vivo Y -series smartphone charge has eliminated the all problem with its cool feature and powerful battery. The new smartphone of this series is coming to the country, reads....</p>
  </div>
  
</div>

    </div>
      </div>


      
    );
};

export default Offer;