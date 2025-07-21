import React, { useState } from 'react';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const RAZORPAY_KEY_ID = import.meta.env.VITE_RAZORPAY_KEY_ID;

const AlreadyFilledPayment = () => {
  const [emailId, setEmailId] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [applicant, setApplicant] = useState(null);
  const [error, setError] = useState('');
  const [paymentStatus, setPaymentStatus] = useState(null); // "success" | "failed" | null

  const handleFetch = async (e) => {
    e.preventDefault();
    setError('');
    setApplicant(null);
    setPaymentStatus(null);
    setLoading(true);
    try {
      const res = await fetch(`${BACKEND_URL}/api/applications/by-email-contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ emailId, contactNumber }),
      });
      if (!res.ok) {
        setError('No application found with these details.');
        setLoading(false);
        return;
      }
      const data = await res.json();
      setApplicant(data);
    } catch {
      setError('Server error. Please try again.');
    }
    setLoading(false);
  };

  // Payment retry handler
  const handleRazorpayPayment = () => {
    if (!window.Razorpay) {
      alert('Razorpay SDK not loaded');
      return;
    }
    const options = {
      key: RAZORPAY_KEY_ID,
      amount: 21000,
      currency: 'INR',
      name: 'Shwetansh Welfare And Educational Trust',
      description: 'Recruitment Processing Fee (₹200) + Service Charge (₹10)',
      image: '/swet_logo.jpg',
      handler: async function (response) {
        setPaymentStatus('success');
        // Update payment status in backend
        await fetch(`${BACKEND_URL}/api/applications/${applicant._id}/payment-success`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ razorpayPaymentId: response.razorpay_payment_id }),
        });
      },
      prefill: {
        name: applicant?.name || '',
        email: applicant?.emailId || '',
        contact: applicant?.contactNumber || '',
      },
      theme: { color: '#2563eb' },
      modal: {
        ondismiss: async function () {
          setPaymentStatus('failed');
          // Optionally update backend for failed attempt
        },
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  React.useEffect(() => {
    if (!window.Razorpay) {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="form-container" style={{ maxWidth: 480, margin: '40px auto' }}>
      <h2 className="info-box-title" style={{ color: '#2563eb', marginBottom: 18 }}>
        Already Filled But Payment Failed
      </h2>
      {!applicant && (
        <form onSubmit={handleFetch} style={{ marginBottom: 24 }}>
          <div className="form-field-group">
            <label className="form-label" htmlFor="af-email">
              Email ID <span className="required-asterisk">*</span>
            </label>
            <input
              id="af-email"
              type="email"
              className="input-style"
              value={emailId}
              onChange={e => setEmailId(e.target.value)}
              required
              placeholder="your.email@example.com"
              autoComplete="email"
            />
          </div>
          <div className="form-field-group" style={{ marginTop: 18 }}>
            <label className="form-label" htmlFor="af-contact">
              Mobile Number (without +91) <span className="required-asterisk">*</span>
            </label>
            <input
              id="af-contact"
              type="tel"
              className="input-style"
              value={contactNumber}
              onChange={e => setContactNumber(e.target.value.replace(/[^0-9]/g, ''))}
              required
              placeholder="e.g., 9876543210"
              maxLength={10}
              pattern="[0-9]{10}"
              autoComplete="tel"
            />
          </div>
          <button
            type="submit"
            className="submit-button"
            style={{ marginTop: 28, width: '100%' }}
            disabled={loading}
          >
            {loading ? 'Searching...' : 'Fetch Application'}
          </button>
          {error && (
            <span style={{ color: '#e53935', marginTop: 12, display: 'block', textAlign: 'center' }}>
              {error}
            </span>
          )}
        </form>
      )}

      {applicant && (
        <div className="info-box" style={{ marginTop: 0 }}>
          <h3 style={{ color: '#2563eb', marginBottom: 10 }}>Application Details</h3>
          <div style={{ marginBottom: 10 }}>
            <b>Name:</b> {applicant.name}
          </div>
          <div style={{ marginBottom: 10 }}>
            <b>Mobile:</b> {applicant.contactNumber}
          </div>
          <div style={{ marginBottom: 10 }}>
            <b>Email:</b> {applicant.emailId}
          </div>
          <div style={{ marginBottom: 10 }}>
            <b>Applied For:</b> {(applicant.interestedDepartments || []).join(', ')}
          </div>
          <div style={{ marginBottom: 18 }}>
            <b>Payment Status:</b>{' '}
            <span style={{
              color: applicant.paymentStatus === 'success' ? '#219653' : '#e53935',
              fontWeight: 700
            }}>
              {paymentStatus === 'success'
                ? 'Success'
                : paymentStatus === 'failed'
                ? 'Failed'
                : (applicant.paymentStatus === 'success' ? 'Success' : 'Failed')}
            </span>
          </div>
          {((applicant.paymentStatus !== 'success' && paymentStatus !== 'success')) && (
            <button
              type="button"
              className="submit-button"
              style={{ width: '100%', marginBottom: 14 }}
              onClick={handleRazorpayPayment}
            >
              Pay Now
            </button>
          )}
          {paymentStatus === 'success' && (
            <div style={{
              background: '#e6f9ed',
              color: '#219653',
              borderRadius: 8,
              padding: '16px 10px',
              fontWeight: 600,
              textAlign: 'center',
              marginBottom: 18,
              fontSize: '1.08em',
              border: '1.5px solid #b7e6c9'
            }}>
              Payment successful! Thank you. Your application is now complete.
            </div>
          )}
          {paymentStatus === 'failed' && (
            <div style={{
              background: '#fff3f2',
              color: '#e53935',
              borderRadius: 8,
              padding: '16px 10px',
              fontWeight: 600,
              textAlign: 'center',
              marginBottom: 18,
              fontSize: '1.08em',
              border: '1.5px solid #f8bdbd'
            }}>
              Payment failed. Please try again.
            </div>
          )}
          <div style={{ marginTop: 18, textAlign: 'center' }}>
            <a
              href="/"
              className="submit-button"
              style={{
                background: '#2563eb',
                color: '#fff',
                textDecoration: 'none',
                fontWeight: 700,
                borderRadius: 8,
                padding: '12px 32px',
                display: 'inline-block',
                fontSize: '1.08em'
              }}
            >
              Go to Home
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default AlreadyFilledPayment;
