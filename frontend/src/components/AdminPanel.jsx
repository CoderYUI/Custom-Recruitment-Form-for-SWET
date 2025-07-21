import React, { useState } from 'react';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const AdminPanel = () => {
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [applications, setApplications] = useState([]);
  const [error, setError] = useState('');
  const [selectedApp, setSelectedApp] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch(`${BACKEND_URL}/api/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (data.success) {
        setLoggedIn(true);
        fetchApplications();
      } else {
        setError('Invalid password');
      }
    } catch {
      setError('Server error');
    }
  };

  const fetchApplications = async () => {
    try {
      const res = await fetch(`${BACKEND_URL}/api/admin/applications`, {
        credentials: 'include',
      });
      if (res.ok) {
        const data = await res.json();
        setApplications(data);
      } else {
        setError('Unauthorized or error fetching applications');
      }
    } catch {
      setError('Server error');
    }
  };

  const handleLogout = async () => {
    await fetch(`${BACKEND_URL}/api/admin/logout`, {
      method: 'POST',
      credentials: 'include',
    });
    setLoggedIn(false);
    setApplications([]);
    setPassword('');
  };

  const handleNameClick = (app) => {
    setSelectedApp(app);
  };

  const handleCloseDetails = () => {
    setSelectedApp(null);
  };

  if (!loggedIn) {
    return (
      <div className="form-container" style={{ maxWidth: 400, margin: '40px auto' }}>
        <h2 className="info-box-title" style={{ color: '#2563eb', marginBottom: 18 }}>
          Admin Login
        </h2>
        <form onSubmit={handleLogin}>
          <div className="form-field-group">
            <label className="form-label" htmlFor="admin-password">
              Password <span className="required-asterisk">*</span>
            </label>
            <input
              id="admin-password"
              type="password"
              className="input-style"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
          </div>
          <button
            type="submit"
            className="submit-button"
            style={{ marginTop: 24, width: '100%' }}
          >
            Login
          </button>
          {error && (
            <span style={{ color: '#e53935', marginTop: 12, display: 'block', textAlign: 'center' }}>
              {error}
            </span>
          )}
        </form>
      </div>
    );
  }

  return (
    <div className="form-container" style={{ maxWidth: 1200, margin: '40px auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <h2 className="info-box-title" style={{ color: '#2563eb' }}>All Applications</h2>
        <button className="submit-button" style={{ background: '#e53935', color: '#fff', fontWeight: 700 }} onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff' }}>
          <thead>
            <tr style={{ background: '#eaf2ff', color: '#222', fontWeight: 700 }}>
              <th style={{ padding: 10, border: '1px solid #e0e7ef' }}>Name</th>
              <th style={{ padding: 10, border: '1px solid #e0e7ef' }}>Email</th>
              <th style={{ padding: 10, border: '1px solid #e0e7ef' }}>Mobile</th>
              <th style={{ padding: 10, border: '1px solid #e0e7ef' }}>University</th>
              <th style={{ padding: 10, border: '1px solid #e0e7ef' }}>Departments</th>
              <th style={{ padding: 10, border: '1px solid #e0e7ef' }}>Payment Status</th>
              <th style={{ padding: 10, border: '1px solid #e0e7ef' }}>Razorpay Payment ID</th>
              <th style={{ padding: 10, border: '1px solid #e0e7ef' }}>Submitted At</th>
            </tr>
          </thead>
          <tbody>
            {applications.map(app => (
              <tr key={app._id} style={{ borderBottom: '1px solid #e0e7ef' }}>
                <td style={{ padding: 8 }}>
                  <button
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#2563eb',
                      textDecoration: 'underline',
                      cursor: 'pointer',
                      fontWeight: 700,
                      fontSize: '1em',
                      padding: 0,
                    }}
                    onClick={() => handleNameClick(app)}
                  >
                    {app.name}
                  </button>
                </td>
                <td style={{ padding: 8 }}>{app.emailId}</td>
                <td style={{ padding: 8 }}>{app.contactNumber}</td>
                <td style={{ padding: 8 }}>{app.universityCollege}</td>
                <td style={{ padding: 8 }}>{(app.interestedDepartments || []).join(', ')}</td>
                <td style={{ padding: 8, color: app.paymentStatus === 'success' ? '#219653' : '#e53935', fontWeight: 700 }}>
                  {app.paymentStatus ? app.paymentStatus.charAt(0).toUpperCase() + app.paymentStatus.slice(1) : 'Pending'}
                </td>
                <td style={{ padding: 8 }}>{app.razorpayPaymentId || '-'}</td>
                <td style={{ padding: 8 }}>{app.createdAt ? new Date(app.createdAt).toLocaleString() : '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {applications.length === 0 && (
        <div style={{ textAlign: 'center', color: '#e53935', marginTop: 24 }}>
          No applications found.
        </div>
      )}

      {/* User Details Modal/Box */}
      {selectedApp && (
        <div
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0,0,0,0.25)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onClick={handleCloseDetails}
        >
          <div
            className="info-box"
            style={{
              maxWidth: 520,
              width: '95%',
              background: '#fff',
              borderRadius: 14,
              boxShadow: '0 4px 32px rgba(37,99,235,0.18)',
              padding: '32px 24px',
              position: 'relative',
              zIndex: 1001,
              maxHeight: '90vh',
              overflowY: 'auto'
            }}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={handleCloseDetails}
              style={{
                position: 'absolute',
                top: 10,
                right: 14,
                background: 'none',
                border: 'none',
                fontSize: 22,
                color: '#e53935',
                cursor: 'pointer',
                fontWeight: 700,
              }}
              aria-label="Close"
            >
              ×
            </button>
            <h2 style={{ color: '#2563eb', marginBottom: 10 }}>Application Details</h2>
            <div style={{ marginBottom: 10 }}><b>Name:</b> {selectedApp.name}</div>
            <div style={{ marginBottom: 10 }}><b>Email:</b> {selectedApp.emailId}</div>
            <div style={{ marginBottom: 10 }}><b>Mobile:</b> {selectedApp.contactNumber}</div>
            <div style={{ marginBottom: 10 }}><b>University:</b> {selectedApp.universityCollege}</div>
            <div style={{ marginBottom: 10 }}><b>Departments:</b> {(selectedApp.interestedDepartments || []).join(', ')}</div>
            <div style={{ marginBottom: 10 }}><b>Year of Study:</b> {selectedApp.yearOfStudy || '-'}</div>
            <div style={{ marginBottom: 10 }}><b>State/City of University:</b> {selectedApp.stateCityUniversity || '-'}</div>
            <div style={{ marginBottom: 10 }}><b>Resume URL:</b> {selectedApp.resumeUrl ? (
              <a href={selectedApp.resumeUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
                {selectedApp.resumeUrl}
              </a>
            ) : '-'
            }</div>
            <div style={{ marginBottom: 10 }}><b>Instagram ID:</b> {selectedApp.instagramId ? (
              <a href={selectedApp.instagramId} target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
                {selectedApp.instagramId}
              </a>
            ) : '-'
            }</div>
            <div style={{ marginBottom: 10 }}><b>LinkedIn ID:</b> {selectedApp.linkedinId ? (
              <a href={selectedApp.linkedinId} target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline' }}>
                {selectedApp.linkedinId}
              </a>
            ) : '-'
            }</div>
            <div style={{ marginBottom: 10 }}><b>Current GPA:</b> {selectedApp.currentGpa || '-'}</div>
            <div style={{ marginBottom: 10 }}><b>Specialization:</b> {selectedApp.specialization || '-'}</div>
            <div style={{ marginBottom: 10 }}><b>Payment Status:</b> <span style={{ color: selectedApp.paymentStatus === 'success' ? '#219653' : '#e53935', fontWeight: 700 }}>{selectedApp.paymentStatus ? selectedApp.paymentStatus.charAt(0).toUpperCase() + selectedApp.paymentStatus.slice(1) : 'Pending'}</span></div>
            <div style={{ marginBottom: 10 }}><b>Razorpay Payment ID:</b> {selectedApp.razorpayPaymentId || '-'}</div>
            <div style={{ marginBottom: 18 }}><b>Submitted At:</b> {selectedApp.createdAt ? new Date(selectedApp.createdAt).toLocaleString() : '-'}</div>
            {/* Show info details for each applied department */}
            {(selectedApp.interestedDepartments || []).map((dept) => {
              // Find all fields for this department
              const deptKey = dept.toLowerCase().replace(/\s/g, '');
              const deptFields = Object.entries(selectedApp)
                .filter(([key]) =>
                  key.toLowerCase().includes(deptKey)
                );
              // If no fields, don't render
              if (deptFields.length === 0) return null;
              return (
                <div key={dept} style={{
                  background: '#f7faff',
                  borderRadius: 8,
                  padding: '14px 12px',
                  marginBottom: 12,
                  border: '1.5px solid #eaf2ff'
                }}>
                  <div style={{ fontWeight: 700, color: '#2563eb', marginBottom: 6, fontSize: '1.08em' }}>
                    {dept} Info Details
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {deptFields.map(([key, value]) => (
                      <div key={key} style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 8,
                        fontSize: '1em',
                        color: '#222'
                      }}>
                        <span style={{ fontWeight: 600, minWidth: 180, color: '#475569' }}>
                          {key
                            .replace(deptKey, '')
                            .replace(/([A-Z])/g, ' $1')
                            .replace(/^./, str => str.toUpperCase())
                            .replace(/([a-z])([A-Z])/g, '$1 $2')
                            .replace(/([A-Z]{2,})/g, ' $1')
                            .replace(/([a-z])([0-9])/g, '$1 $2')
                            .replace(/([A-Z])([0-9])/g, '$1 $2')
                            .replace(/([a-z])([A-Z])/g, '$1 $2')
                            .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2')
                            .replace(/_/g, ' ')
                            .replace(/\s+/g, ' ')
                            .trim()
                          }:
                        </span>
                        <span style={{ fontWeight: 500, color: '#111' }}>{value || '-'}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
