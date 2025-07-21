import React from 'react';

const PaymentResult = ({ status }) => {
  if (status === 'success') {
    return (
      <div className="info-box" style={{
        maxWidth: 480,
        margin: '40px auto',
        background: '#f7faff',
        borderRadius: 16,
        boxShadow: '0 2px 16px rgba(37,99,235,0.10)',
        padding: '32px 24px',
        textAlign: 'center'
      }}>
        <h2 style={{ color: '#219653', marginBottom: 10 }}>Payment Successful!</h2>
        <div style={{ color: '#222', fontWeight: 500, fontSize: '1.13em', marginBottom: 18 }}>
          Thank you for paying the processing fee.<br />
          Your application has been recorded.<br />
          We will contact you shortly regarding the next steps.
        </div>
        <div style={{ color: '#475569', fontSize: '0.98em', marginTop: 18 }}>
          <b>Need help?</b> Contact us at{' '}
          <a href="tel:+918989973328" style={{ color: '#2563eb', fontWeight: 600 }}>
            +91 8989973328
          </a>
        </div>
        <div style={{ marginTop: 32 }}>
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
    );
  }

  // Payment failed
  return (
    <div className="info-box" style={{
      maxWidth: 480,
      margin: '40px auto',
      background: '#fff3f2',
      borderRadius: 16,
      boxShadow: '0 2px 16px rgba(229,57,53,0.10)',
      padding: '32px 24px',
      textAlign: 'center'
    }}>
      <h2 style={{ color: '#e53935', marginBottom: 10 }}>Uh Oh! Payment Failed</h2>
      <div style={{ color: '#222', fontWeight: 500, fontSize: '1.13em', marginBottom: 18 }}>
        Your payment was not successful.<br />
        <span style={{ color: '#e53935', fontWeight: 700 }}>But don't worry!</span> <br />
        We have still recorded your application data.<br />
        You can pay the amount later by choosing the option <b>"Already Filled but Payment Failed"</b> on the home screen.
      </div>
      <div style={{ color: '#475569', fontSize: '0.98em', marginTop: 18 }}>
        <b>Need help?</b> Contact us at{' '}
        <a href="tel:+918989973328" style={{ color: '#2563eb', fontWeight: 600 }}>
          +91 8989973328
        </a>
      </div>
      <div style={{ marginTop: 32 }}>
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
  );
};

export default PaymentResult;
