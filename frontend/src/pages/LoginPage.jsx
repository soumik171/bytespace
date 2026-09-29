import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <div className="container" style={{ padding: '80px 24px', textAlign: 'center' }}>
      <h1>Sign in with ease</h1>
      <p style={{ marginTop: '12px', color: 'var(--text-muted)' }}>
        Experience a seamless sign-in process that grants you instant access to knowledge.
      </p>
      <div style={{ marginTop: '24px' }}>
        <Link to="/" style={{ color: 'var(--primary-600)', fontWeight: 600 }}>
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
