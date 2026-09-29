import React from 'react';

export default function HomePage() {
  return (
    <main>
      <div className="container" style={{ padding: '80px 24px', textAlign: 'center' }}>
        <span
          style={{
            display: 'inline-block',
            padding: '6px 16px',
            borderRadius: '9999px',
            backgroundColor: 'var(--accent-200)',
            color: 'var(--accent-950)',
            fontWeight: 700,
            fontSize: '13px',
            marginBottom: '16px',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
        >
          Innovative Online Learning Platform
        </span>
        <h1 style={{ marginBottom: '20px' }}>
          Expand Your Horizons with <span style={{ color: 'var(--primary-600)' }}>Online Learning</span>
        </h1>
        <p style={{ maxWidth: '680px', margin: '0 auto', fontSize: '18px', color: 'var(--text-muted)' }}>
          Discover industry-ready courses across design, technology, business, and creative fields. Connect with over 10,000 creators worldwide.
        </p>
      </div>
    </main>
  );
}
