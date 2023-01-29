import React from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AdBillings = ({refetch}) => {
  const navigate = useNavigate();
  //event handler
  const handelAddBilling = (event) => {
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
    fetch("http://localhost:5000/add-billing", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(billingdata),
    })
      .then((res) => res.json())
        .then((data) => {
        refetch()
        navigate("/");
        toast.success("Successfully Added!");
      });
  };

  return (
    <div>
      <input type='checkbox' id='my-modal-3' className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box relative'>
          <label
            htmlFor='my-modal-3'
            className='btn btn-sm btn-circle absolute right-2 top-2'
          >
            ✕
          </label>
          <form onSubmit={handelAddBilling}>
            <div className='grid grid-cols-1 gap-3'>
              {/* Full Name */}
              <input
                type='text'
                name='fullName'
                placeholder='Fullname'
                className='input input-bordered input-primary w-full max-w-xs mx-auto block'
                required
              />
              {/* Email */}
              <input
                type='email'
                name='email'
                placeholder='Email'
                className='input input-bordered input-primary w-full max-w-xs mx-auto block'
                required
              />
              {/* Phone */}
              <input
                type='number'
                name='phone'
                placeholder='Phone Number'
                className='input input-bordered input-primary w-full max-w-xs mx-auto block'
                required
              />
              {/* Amount */}
              <input
                type='number'
                name='paidAmount'
                placeholder='Amount'
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

export default AdBillings;
