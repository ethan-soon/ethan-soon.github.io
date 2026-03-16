'use client'
import SubbotsLogo from '@/components/SubbotsLogo'

export default function About() {
  const stats = [
    { value: '3+', label: 'Years studying EE' },
    { value: '5+', label: 'Projects completed' },
  ]

  return (
    <section id="about" className="section" style={{ padding: '100px 2rem' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <p className="section-label">01 / About</p>
        <h2 className="section-title">Who I Am</h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'start',
          }}
        >
          {/* Text */}
          <div>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.9, marginBottom: '1.5rem' }}>
              I&apos;m an Electrical Engineering student at UBC specializing in robotics and control systems,
              and a Software Controls member on UBC Subbots. I&apos;m passionate about designing systems
              that sense, decide, and act in the real world.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.9, marginBottom: '1.5rem' }}>
              My work spans both low and high-level programming, as well as physical hardware,
              modelling, and simulation.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.9 }}>
              Through coursework and my design team, I&apos;ve explored robot kinematics and dynamics,
              trajectory planning, computer vision, and a range of control system methods.
            </p>
          </div>

          {/* Right column: stats + subbots card */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {/* Stats grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {stats.map((stat) => (
                <div key={stat.label} className="card sage-glow" style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      fontSize: '2rem',
                      fontWeight: 800,
                      color: 'var(--sage-light)',
                      marginBottom: '0.25rem',
                    }}
                  >
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* UBC Subbots card */}
            
            <div className="card sage-glow" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.01rem 0.75rem'}}>
            <SubbotsLogo size={200} />
            <div style={{ width: '1px', alignSelf: 'stretch', background: 'var(--border)', flexShrink: 0, marginRight: '0.5rem' }} />
              <div>
                <div style={{ display: 'flex', alignItems: 'center', flexShrink: 0, gap: '0.6rem', marginBottom: '0.4rem' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text)' }}>UBC Subbots</h3>
                  <span
                    style={{
                      fontSize: '0.65rem',
                      fontWeight: 600,
                      color: 'var(--sage-light)',
                      border: '1px solid var(--sage-light)',
                      borderRadius: '999px',
                      padding: '0.1rem 0.5rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    Software Controls
                  </span>
                </div>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.85rem', margin: 0 }}>
                  Student engineering design team building autonomous underwater vehicles for RoboSub. 
                  I work on system modelling, control system implementation, and navigation planning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}