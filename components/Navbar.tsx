'use client'

import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = ['About', 'Projects', 'Contact']

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: scrolled ? 'rgba(15, 20, 16, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <a
        href="#"
        style={{
          color: 'var(--sage-light)',
          fontWeight: 700,
          fontSize: '1.1rem',
          textDecoration: 'none',
          letterSpacing: '0.05em',
        }}
      >
        ES<span style={{ color: 'var(--sage)' }}>.</span>
      </a>

      <ul
        style={{
          display: 'flex',
          gap: '2rem',
          listStyle: 'none',
          margin: 0,
          padding: 0,
        }}
      >
        {links.map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              className="hover-underline"
              style={{
                color: 'var(--text-muted)',
                textDecoration: 'none',
                fontSize: '0.9rem',
                letterSpacing: '0.05em',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--sage-light)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          color: 'var(--sage-light)',
          fontSize: '1.5rem',
          cursor: 'pointer',
        }}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {menuOpen && (
        <ul
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(15, 20, 16, 0.97)',
            borderBottom: '1px solid var(--border)',
            listStyle: 'none',
            padding: '1rem 2rem',
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                style={{
                  color: 'var(--text-muted)',
                  textDecoration: 'none',
                  fontSize: '1rem',
                }}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
