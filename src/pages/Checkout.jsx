import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Checkout = () => {
  const [selectedPayment, setSelectedPayment] = useState('');
  const navigate = useNavigate();

  const amount = 500; // Example amount in INR (500)
  const userData = { name: "John Doe", email: "john@example.com", phone: "1234567890" }; // Example user data

  const handleRazorpayPayment = async () => {
    try {
      // Step 1: Create an order on your server
      // const response = await axios.post('/api/create-order', { amount: amount * 100 }); // Convert to paise
      const razorpay_order_id = 1; // Make sure this is the correct field

      const options = {
        key: "rzp_test_vNoztmT3ky59rZ", // Enter the Key ID generated from the Dashboard
        amount: amount * 100, // Amount is in currency subunits (e.g., INR)
        currency: "INR",
        name: "IShop",
        description: "HELLO THIS IS ISHOP RAZORPAY",
        image: "http://localhost:3000/image/logo.svg",
        order_id: razorpay_order_id, // Pass the `id` obtained in the response of createOrder().
        handler: function (razorpay_response) {
          // Handle success
          console.log('Payment successful:', razorpay_response);
          navigate(`/thank-you`); // Redirect on success
        },
        prefill: {
          name: "userData.name",
          email:" userData.email",
          contact:" userData.phone",
        },
        theme: {
          color: "#FF4252",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  const handlePayment = () => {
    if (selectedPayment === 'razorpay') {
      handleRazorpayPayment();
    } else if (selectedPayment === 'paypal') {
      navigate('/paypal-checkout');
    } else {
      alert('Please select a payment method.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-semibold text-center mb-6">Choose Payment Option</h1>
        
        <div className="mb-4">
          <input 
            type="radio" 
            id="razorpay" 
            name="payment" 
            value="razorpay" 
            checked={selectedPayment === 'razorpay'}
            onChange={(e) => setSelectedPayment(e.target.value)}
          />
          <label htmlFor="razorpay" className="ml-2">Pay with Razorpay</label>
        </div>
        
        <div className="mb-4">
          <input 
            type="radio" 
            id="paypal" 
            name="payment" 
            value="paypal" 
            checked={selectedPayment === 'paypal'}
            onChange={(e) => setSelectedPayment(e.target.value)}
          />
          <label htmlFor="paypal" className="ml-2">Pay with PayPal</label>
        </div>

        <button
          onClick={handlePayment}
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition"
        >
          Proceed to Pay
        </button>
      </div>
    </div>
  );
};

export default Checkout;
