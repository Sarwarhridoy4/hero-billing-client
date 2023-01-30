import React from "react";
import { toast } from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateBill = () => {
  const navigate = useNavigate();
  const bills = useLoaderData();
  console.log(bills);
  //event handler
  const handelUpdateBill = (event) => {
    event.preventDefault();
    const form = event.target;
    const fullName = form.fullName.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const paidAmount = form.paidAmount.value;

    const billingdata = {
      fullName,
      email,
      phone,
      paidAmount,
    };
    // console.log(bookingdata);
    event.target.reset();
    //posting to server
    fetch(`http://localhost:5000/update-billing/${bills?._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(billingdata),
    })
      .then((res) => res.json())
        .then((data) => {
        navigate("/");
        toast.success("Successfully Updated!");
      });
  };

  return (
    <div>
      
      <div className=''>
        <div className='py-10'>
          <h4 className="text-2xl">Update Document</h4>
          <form onSubmit={handelUpdateBill}>
            <div className='grid grid-cols-1 gap-3'>
              {/* Full Name */}
              <input
                type='text'
                name='fullName'
                placeholder={bills?.fullName}
                className='input input-bordered input-primary w-full max-w-xs mx-auto block'
                required
              />
              {/* Email */}
              <input
                type='email'
                name='email'
                placeholder={bills?.email}
                className='input input-bordered input-primary w-full max-w-xs mx-auto block'
                required
              />
              {/* Phone */}
              <input
                type='number'
                name='phone'
                placeholder={bills?.phone}
                className='input input-bordered input-primary w-full max-w-xs mx-auto block'
                required
              />
              {/* Amount */}
              <input
                type='number'
                name='paidAmount'
                placeholder={bills?.paidAmount}
                className='input input-bordered input-primary w-full max-w-xs mx-auto block'
                required
              />

              <input
                className='btn btn-outline btn-primary w-full max-w-xs mx-auto block'
                type='submit'
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateBill;
