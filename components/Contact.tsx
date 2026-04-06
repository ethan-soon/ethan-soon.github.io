'use client'

export default function Contact() {
  const links = [
    {
      label: 'Email',
      value: 'ethan_soon@shaw.ca',
      href: 'ethan_soon@shaw.ca',
      icon: '✉',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/ethan-soon',
      href: 'https://linkedin.com/in/ethan-soon',
      icon: 'in',
    },
    {
      label: 'GitHub',
      value: 'github.com/ethan-soon',
      href: 'https://github.com/ethan-soon',
      icon: '⎇',
    },
  ]

  return (
    <section
      id="contact"
      className="section"
      style={{ padding: '100px 2rem' }}
    >
      <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
        <p className="section-label">04 / Contact</p>
        <h2 className="section-title">Let&apos;s Connect</h2>
        <p
          style={{
            color: 'var(--text-muted)',
            lineHeight: 1.8,
            marginBottom: '3rem',
            fontSize: '1rem',
          }}
        >
          I&apos;m currently open to internships and co-ops starting anytime in May 2026 or later.
          Feel free to reach out via any of the channels below.
        </p>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            alignItems: 'center',
          }}
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card"
              style={{
                width: '100%',
                maxWidth: '420px',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                textDecoration: 'none',
                transition: 'border-color 0.3s, transform 0.3s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--sage)'
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
              }}
            >
              <span
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--sage)',
                  fontSize: '1rem',
                  flexShrink: 0,
                }}
              >
                {link.icon}
              </span>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.1rem' }}>
                  {link.label}
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--sage-light)' }}>
                  {link.value}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          textAlign: 'center',
          marginTop: '6rem',
          paddingTop: '2rem',
          borderTop: '1px solid var(--border)',
          color: 'var(--text-muted)',
          fontSize: '0.8rem',
        }}
      >
        Ethan Soon — EE &amp; Robotics · Built with Next.js &amp; Tailwind · Hosted on GitHub Pages
      </div>
    </section>
  )
}
