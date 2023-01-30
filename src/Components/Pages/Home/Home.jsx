import React from "react";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import AdBillings from "../../AdBliings/AdBillings";
import Button from "../../Button/Button";

const Home = () => {
  const navigate = useNavigate();
  const {
    data: billingList = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: [""],
    queryFn: async () => {
      try {
        const res = await fetch(
          "https://hero-billing-server-0-sarwarhridoy4.vercel.app/billing-list"
        );
        const data = await res.json();
        return data;
      } catch (err) {
        console.log(err);
      }
    },
  });

  const handelDeleteBill = (_id) => {
    // console.log(task);
    fetch(
      `https://hero-billing-server-0-sarwarhridoy4.vercel.app/delete-billing/${_id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        toast.success(`item deleted.`);
        refetch();
        navigate(`/`);
      });
  };
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
          {billingList?.map((data, i) => (
            <tbody key={data._id}>
              <tr>
                <td>{isLoading ? <Button /> : data?._id}</td>
                <td>{data?.fullName}</td>
                <td>{data?.email}</td>
                <td>{data?.phone}</td>
                <td>$ {data?.paidAmount}</td>
                <td className='ml-5'>
                  <button
                    onClick={() => handelDeleteBill(data?._id)}
                    className='btn btn-xs uppercase btn-outline btn-error'
                  >
                    Delete
                  </button>
                  <Link to={`/update-billing/${data?._id}`}>
                    <button className='btn btn-xs btn-info uppercase'>
                      Edit
                    </button>
                  </Link>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      <AdBillings refetch={refetch}></AdBillings>
    </div>
  );
};

export default Home;
