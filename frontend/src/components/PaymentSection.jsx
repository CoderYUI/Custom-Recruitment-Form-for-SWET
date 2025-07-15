// src/components/PaymentSection.jsx
import React, { useRef } from 'react';
import FormSectionWrapper from './FormSectionWrapper';

const RAZORPAY_KEY_ID = import.meta.env.VITE_RAZORPAY_KEY_ID;
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const PaymentSection = ({ formData }) => {
  const fileInputRef = useRef(null);

  // Auto-submit to backend
  const submitToBackend = async (paymentStatus, paymentId = '') => {
    try {
      const { paymentFile, ...submitData } = formData;
      submitData.paymentStatus = paymentStatus;
      submitData.razorpayPaymentId = paymentId;
      await fetch(`${BACKEND_URL}/api/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submitData),
      });
      localStorage.removeItem('swetFormData');
    } catch (err) {
      // Optionally handle error
    }
  };

  // Razorpay payment handler
  const handleRazorpayPayment = () => {
    if (!window.Razorpay) {
      alert('Razorpay SDK not loaded');
      return;
    }
    const options = {
      key: RAZORPAY_KEY_ID,
      amount: 21000, // 210.00 INR (200 + 10)
      currency: 'INR',
      name: 'Shwetansh Welfare And Educational Trust',
      description: 'Recruitment Processing Fee (₹200) + Service Charge (₹10)',
      image: '/swet_logo.jpg',
      handler: function (response) {
        alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
        submitToBackend('success', response.razorpay_payment_id);
      },
      prefill: {
        name: formData?.name || '',
        email: formData?.emailId || '',
        contact: formData?.contactNumber || '',
      },
      theme: {
        color: '#2563eb',
      },
      modal: {
        ondismiss: function () {
          // Payment failed or closed
          alert('Payment not completed or failed. Your application will still be submitted.');
          submitToBackend('failed', '');
        },
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  // Load Razorpay script if not already loaded
  React.useEffect(() => {
    if (!window.Razorpay) {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <FormSectionWrapper sectionNumber="13">
      <div className="info-box" style={{
        maxWidth: 480,
        margin: '0 auto',
        background: '#f7faff',
        borderRadius: 16,
        boxShadow: '0 2px 16px rgba(37,99,235,0.10)',
        padding: '32px 24px'
      }}>
        <div style={{ textAlign: 'center', marginBottom: 18 }}>
          <img
            src="/swet_logo.jpg"
            alt="SWET Logo"
            style={{
              width: 70,
              height: 70,
              borderRadius: '50%',
              marginBottom: 12,
              boxShadow: '0 2px 8px rgba(37,99,235,0.10)'
            }}
          />
          <h2 className="info-box-title" style={{ marginBottom: 6, color: '#2563eb' }}>
            Thank You for Filling the Form!
          </h2>
          <div style={{ color: '#475569', fontWeight: 500, fontSize: '1.08em', marginBottom: 8 }}>
            You are almost done. Please complete your application by paying the processing fee below.
          </div>
        </div>
        <div
          className="payment-info-text"
          style={{
            background: '#eaf2ff',
            borderRadius: 10,
            padding: '18px 16px',
            marginBottom: 22,
            color: '#222',
            fontWeight: 500,
            fontSize: '1.05em',
            boxShadow: '0 1.5px 6px rgba(37, 99, 235, 0.04)'
          }}
        >
          <div style={{ marginBottom: 10 }}>
            <b>Why a Processing Fee?</b>
            <br />
            This one-time fee helps us cover administrative costs and ensures all selected volunteers receive official benefits such as certificates, experience letters, and access to exclusive events.
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 6,
            marginTop: 10,
            marginBottom: 2
          }}>
            <div style={{ fontWeight: 700, fontSize: '2.0em', marginTop: 4, color: '#2563eb' }}>
              Total Payable: ₹210
            </div>
            <div style={{
              fontSize: '0.98em',
              color: '#475569',
              marginTop: 2,
              background: '#fff',
              borderRadius: 6,
              padding: '4px 12px',
              fontWeight: 600,
              boxShadow: '0 1px 4px rgba(37,99,235,0.06)'
            }}>
              (Processing Fee ₹200 + Service Charge ₹10)
            </div>
          </div>
        </div>
        <div style={{ margin: '24px 0 12px 0', textAlign: 'center' }}>
          <button
            type="button"
            className="submit-button"
            style={{
              background: 'linear-gradient(90deg, #2563eb 60%, #1d4ed8 100%)',
              color: '#fff',
              fontWeight: 700,
              minWidth: 180,
              fontSize: '1.1em',
              border: 'none',
              borderRadius: 10,
              padding: '14px 36px',
              boxShadow: '0 4px 16px rgba(37, 99, 235, 0.10)'
            }}
            onClick={handleRazorpayPayment}
          >
            Pay Now
          </button>
        </div>
        <div
          className="account-details-box"
          style={{
            marginTop: 18,
            fontSize: '0.98em',
            color: '#475569',
            background: '#fff',
            borderRadius: 8,
            padding: '12px 14px',
            boxShadow: '0 1.5px 6px rgba(37, 99, 235, 0.04)',
            textAlign: 'center'
          }}
        >
          <b>Need help?</b> Contact us at{' '}
          <a href="tel:+918989973328" style={{ color: '#2563eb', fontWeight: 600 }}>
            +91 8989973328
          </a>
        </div>
      </div>
    </FormSectionWrapper>
  );
};

export default PaymentSection;