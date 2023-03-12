import React from 'react';
import { useQuery } from '@tanstack/react-query';
const ReportedProduct = () => {

    const {data: reports = [] } = useQuery({
        queryKey: ['userReports'],
        queryFn: async () => {
            const res = await fetch(`https://mobile-phone-server-mu.vercel.app/reports`);
            const data = await res.json();
            return data;
        }
    })

    
    return (
        <div className=''>
            <h2 className='text-3xl'>AllReports</h2>
            <div className="overflow-x-auto ">
        <table className="table w-full">
   
       <thead>
        <tr>
          <th>Picture</th>
          <th>Seller Name</th>
          <th>Seller Email</th>
        </tr>
    </thead>
    <tbody>
        {
            reports.map(report =><tr key={report._id} >
                
                <td>
                <div className="avatar">
                     <div className="w-24 rounded">
                         <img src={report.image} alt=''/>
                     </div>
                 </div>
                 </td>
                <td>{report.name}</td>
                <td>{report.email}</td>
               </tr>)
        }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ReportedProduct;