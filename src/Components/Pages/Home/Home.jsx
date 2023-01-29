import React from "react";
import { useQuery } from "react-query";
import AdBillings from "../../AdBliings/AdBillings";
import Button from "../../Button/Button";

const Home = () => {
  
  const { data: billingList = [], isLoading, refetch } = useQuery({
    queryKey: [''],
    queryFn: async () => {
        try {

            const res = await fetch("http://localhost:5000/billing-list")
            const data = await res.json();
            return data;

        }
        catch (err) {
            console.log(err);
        }
    }
})
  return (
      <div>
          <div className='overflow-x-auto'>
          <table className='table table-normal w-[75%] mx-auto my-10'>
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
            {billingList?.map((data, i) => <tbody key={i}>
              <tr>
                
                    <td>{isLoading?<Button/>:data?._id}</td>
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
      <AdBillings refetch ={refetch}></AdBillings>
    </div>
  );
};

export default Home;
