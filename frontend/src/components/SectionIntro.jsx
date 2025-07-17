// src/components/SectionIntro.jsx
import React from 'react';

const benefits = [
  {
    icon: '📃',
    title: 'Experience Letter',
    desc: 'Receive official documentation of your volunteering experience with SWET that validates your contributions and skills gained.',
  },
  {
    icon: '📜',
    title: 'Authorized Certificate',
    desc: 'Get certified recognition for your contributions that enhances your academic and professional portfolio.',
  },
  {
    icon: '🚀',
    title: 'Real Projects & Events',
    desc: 'Work on meaningful projects with real social impact across education, welfare, and community development.',
  },
  {
    icon: '🌍',
    title: 'National-Level Exposure',
    desc: 'Gain experience working with nationwide initiatives that address pressing social issues.',
  },
  {
    icon: '💼',
    title: 'Boost Your Resume',
    desc: 'Add valuable social sector experience to your profile that stands out to academic institutions and employers.',
  },
  {
    icon: '🎯',
    title: 'Leadership Growth',
    desc: 'Develop essential leadership and management skills through project ownership and team collaboration.',
  },
  {
    icon: '🔄',
    title: 'Flexible Work Schedule',
    desc: 'Contribute based on your availability with options for part-time and remote volunteering.',
  },
  {
    icon: '🤝',
    title: 'Mentorship Opportunities',
    desc: 'Learn from experienced professionals and develop a strong professional network.',
  },
];

const SectionIntro = () => {
  return (
    <div className="info-box">
      <h2 className="info-box-title" style={{ color: '#2563eb', marginBottom: 8 }}>
        Join Our Mission
      </h2>
      <h3 style={{ fontWeight: 'bold', color: '#111', marginBottom: 12 }}>
        "Be the Change You Want to See in the World"
      </h3>
      <p style={{ color: '#222', fontSize: '1.08em', marginBottom: 18 }}>
        Become part of <span style={{ color: '#2563eb', fontWeight: 600 }}>Shwetansh Welfare and Educational Trust</span> to make a meaningful impact while developing valuable skills and experiences for your future.
      </p>

      <h3 className="info-box-title" style={{ color: '#2563eb', marginTop: 24, marginBottom: 10 }}>
        Benefits of Joining
      </h3>
      <p style={{ color: '#222', fontWeight: 500, marginBottom: 24 }}>
        Be part of something meaningful while building your future
      </p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '28px 32px',
          marginBottom: 32,
        }}
      >
        {benefits.map((benefit) => (
          <div
            key={benefit.title}
            style={{
              background: '#fff',
              borderRadius: 12,
              boxShadow: '0 2px 12px rgba(37,99,235,0.08)',
              padding: '22px 18px 18px 18px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              minHeight: 120,
              border: '1.5px solid #eaf2ff',
            }}
          >
            <span style={{ fontSize: 32, marginBottom: 10 }}>{benefit.icon}</span>
            <div style={{ fontWeight: 700, color: '#2563eb', fontSize: '1.08em', marginBottom: 8 }}>
              {benefit.title}
            </div>
            <div style={{ color: '#222', fontWeight: 500, fontSize: '0.98em', lineHeight: 1.6 }}>
              {benefit.desc}
            </div>
          </div>
        ))}
      </div>

      <h4
        className="info-box-subtitle connect-heading"
        style={{
          color: '#111',
          fontWeight: 'bold',
          letterSpacing: '0.01em',
          marginTop: 24,
          marginBottom: 8,
        }}
      >
        Connect with us:
      </h4>
      <p className="contact-info">
        <span className="contact-label" style={{ color: '#2563eb', fontWeight: 'bold' }}>📞 Call us:</span>{' '}
        <a href="tel:+918989973328" className="contact-link" style={{ color: '#111', fontWeight: 'bold' }}>
          +91 8989973328
        </a>
      </p>
      <p className="contact-info">
        <span className="contact-label" style={{ color: '#2563eb', fontWeight: 'bold' }}>📸 Instagram:</span>{' '}
        <a
          href="https://www.instagram.com/swetansh_welfare_educational_trust"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
          style={{ color: '#111', fontWeight: 'bold' }}
        >
          @swetansh_welfare_educational_trust
        </a>
      </p>
      <p className="contact-info">
        <span className="contact-label" style={{ color: '#2563eb', fontWeight: 'bold' }}>🔗 LinkedIn:</span>{' '}
        <a
          href="https://www.linkedin.com/company/swetansh-welfare-and-educational-trust/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
          style={{ color: '#111', fontWeight: 'bold' }}
        >
          Shwetansh Welfare And Educational Trust
        </a>
      </p>
      <p style={{ color: '#e53935', fontWeight: 'bold', marginTop: 16 }}>
        * All fields marked with <span style={{ color: '#e53935' }}>*</span> are mandatory.
      </p>
    </div>
  );
};

export default SectionIntro;