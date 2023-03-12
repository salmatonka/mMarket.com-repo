import React from 'react';
import { Link } from 'react-router-dom';

const PhoneBrand = ({brand}) => {
    const {_id,image,description,name,location,resaleprice,sallername,originalprice,yearsofuse}= brand;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
        <figure><img className='w-full' style={{width: "580px", height: "270px"}} src='' alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">hh</h2>
          <p>description</p>
          <div className='flex justify-between'>
            <h3 className='text-xl font-bold text-blue-600'> Price:  </h3>
            <h3 className='text-xl'> originalprice </h3>
          </div>
            <p>Location: <span className='text-primary'>location</span> </p>
            <p>Use:  Years</p>
          <div className="card-actions justify-end">
            <Link to={`/brand/${_id}`}><button className="btn btn-info font-bold text-white">View Details</button></Link>
          </div>
        </div>
      </div>
    );
};


export default PhoneBrand;