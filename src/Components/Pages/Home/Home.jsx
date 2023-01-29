import React, { useEffect, useState } from "react";
import Button from "../../Button/Button";

const Home = () => {
    const [datas, setDatas] = useState();
    const [loading, setLoading] = useState();
    useEffect(() => {
      setLoading(true)
    fetch("http://localhost:5000/billing-list")
      .then((res) => res.json())
            .then((data) => setDatas(data));
        setLoading(false)
  }, []);
  return (
      <div>
          <div className='overflow-x-auto'>
          <table className='table table-compact w-[75%] mx-auto my-10'>
            <thead>
              <tr>
                
                <th>Billing ID</th>
                <th>Full Name </th>
                <th>Email</th>
                <th>Phone</th>
                <th>Paid amount</th>
                <th>Action</th>
              </tr>
            </thead>
            {datas?.map((data, i) => <tbody key={i}>
              <tr>
                
                    <td>{loading?<Button/>:data?._id}</td>
                <td>{data?.fullName}</td>
                <td>{data?.email}</td>
                <td>{data?.phone}</td>
                <td>$ {data?.paidAmount}</td>
                <td className="ml-5"><button className="btn btn-xs uppercase btn-outline btn-error">Delete</button><button className="btn btn-xs btn-info uppercase">Edit</button></td>
              </tr>
            </tbody>
        
      )}
          </table>
        </div>
    </div>
  );
};

export default Home;
