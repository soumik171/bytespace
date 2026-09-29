import React from 'react';
import { Link } from 'react-router-dom';

export default function SignupPage() {
  return (
    <div className="container" style={{ padding: '80px 24px', textAlign: 'center' }}>
      <h1>Sign up and come in</h1>
      <p style={{ marginTop: '12px', color: 'var(--text-muted)' }}>
        Join thousands of students and creators on ByteSpace.
      </p>
      <div style={{ marginTop: '24px' }}>
        <Link to="/" style={{ color: 'var(--primary-600)', fontWeight: 600 }}>
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
