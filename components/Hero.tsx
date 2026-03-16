'use client'

export default function Hero() {
  return (
    <section
      className="circuit-bg"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '0 2rem',
      }}
    >
      {/* Radial sage glow in background */}
      <div
        style={{
          position: 'absolute',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(74,103,65,0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Decorative corner brackets */}
      <div style={{ position: 'absolute', top: '120px', left: '40px', color: 'var(--sage-dark)', fontSize: '2rem', opacity: 0.4 }}>⌐</div>
      <div style={{ position: 'absolute', top: '120px', right: '40px', color: 'var(--sage-dark)', fontSize: '2rem', opacity: 0.4 }}>¬</div>
      <div style={{ position: 'absolute', bottom: '40px', left: '40px', color: 'var(--sage-dark)', fontSize: '2rem', opacity: 0.4 }}>L</div>
      <div style={{ position: 'absolute', bottom: '40px', right: '40px', color: 'var(--sage-dark)', fontSize: '2rem', opacity: 0.4 }}>┘</div>

      <div style={{ textAlign: 'center', maxWidth: '800px', position: 'relative', zIndex: 1 }}>
        {/* Status badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: '999px',
            padding: '0.4rem 1rem',
            marginBottom: '2rem',
            fontSize: '0.8rem',
            color: 'var(--text-muted)',
          }}
        >
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: 'var(--sage)',
              display: 'inline-block',
              animation: 'pulse 2s infinite',
            }}
          />
          Open to internships & co-op opportunities
        </div>

        {/* Name */}
        <h1
          className="sage-text-glow"
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: 800,
            color: 'var(--text)',
            lineHeight: 1.1,
            marginBottom: '1rem',
            letterSpacing: '-0.02em',
          }}
        >
          Ethan Soon
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            color: 'var(--sage-light)',
            marginBottom: '1rem',
            fontWeight: 500,
            letterSpacing: '0.05em',
          }}
        >
          Electrical Engineering · UBC
        </p>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#projects" className="btn-primary" style={{ textDecoration: 'none' }}>
            View Projects
          </a>
          <a href="#contact" className="btn-outline" style={{ textDecoration: 'none' }}>
            Contact Info
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: 'absolute',
            bottom: '-80px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
            color: 'var(--text-muted)',
            fontSize: '0.75rem',
            letterSpacing: '0.1em',
          }}
        >
          <span>SCROLL</span>
          <div
            style={{
              width: '1px',
              height: '40px',
              background: 'linear-gradient(to bottom, var(--sage), transparent)',
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  )
}
