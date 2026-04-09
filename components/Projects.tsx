'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

const SubbotsFlow = dynamic(() => import('./SubbotsFlow'), { ssr: false })

/* ─── Types ───────────────────────────────────────────────────────── */
interface Project {
  id: string
  title: string
  course: string
  date: string
  tags: string[]
  github: string
  description: string
  hasFlow?: boolean
}

/* ─── Data ────────────────────────────────────────────────────────── */
const projects: Project[] = [
  {
    id: '01',
    title: 'Haptic Feedback Controller',
    course: 'UBC: Introduction to Robotics',
    date: 'Jan 2026 – Present',
    tags: ['ROS 2', 'Simulink', 'Linux', 'RVis', 'Gazebo'],
    github: 'https://github.com/ethan-soon/Falcon_Franka_HapticControl',
    description:
      'Utilizing a Novint Falcon controller to read position and apply haptic forces. Using RVis and Gazebo in a ROS 2 Humble environment on Linux to simulate the 6DOF Franka robot actuator while detecting collision forces in the virtual space. Communicating between ROS 2 nodes to allow the simulation to send force-feedback to the controller. Implementing two 3DOF Novint Falcon controllers to achieve 6DOF control (3DOF translational + 3DOF rotational) of the robot actuator.',
  },
  {
    id: '02',
    title: 'Piano Playing Robot',
    course: 'UBC: EE Design Studio II',
    date: 'Jan 2026 – Present',
    tags: ['STM32', 'PID', 'Altium', 'SolidWorks', 'Embedded C', 'Firmware'],
    github: 'https://github.com/chatrajaman3/ELEC391_25W2_Robo_Maestro',
    description:
      'Designed, simulated, and implemented a PID controller capable of stabilizing a motor rotor to a select angle. Used Altium to develop a custom STM32 motherboard with plug-in board-to-board connections and peripherals to sensor and display. Modelled an 895 DC motor, bracket, and gear system using SolidWorks to aid integration of 3D prints. Developed drivers for a HAL-effect sensor, ILI9341 display, and designed system logic for the robot.',
  },
  {
    id: '03',
    title: 'AR Object Tracking System',
    course: 'UBC: Introduction to Robotics',
    date: 'March 2026',
    tags: ['Python', 'OpenCV', 'YOLOv8'],
    github: 'https://github.com/ethan-soon/AR_Yolo_Detection',
    description:
      'Implemented real-time object detection and tracking using YOLOv8 with bounding box overlay and confidence scoring. Detected and decoded ArUco markers to estimate 6-DOF pose, enabling augmented reality projection onto physical surfaces. Performed full camera calibration using a 7×6 checkerboard pattern, computing intrinsic parameters and distortion coefficients. Developed the detection pipeline, AR projection, and calibration workflows in Python using OpenCV and Ultralytics.',
  },
  {
    id: '04',
    title: 'Ball and Beam Control',
    course: 'Personal Project',
    date: 'August 2025',
    tags: ['STM32', 'PID', 'SPI', 'ToF sensor'],
    github: 'https://github.com/ethan-soon/Beam_PID_Control',
    description:
      'Implemented a PID algorithm capable of maintaining the position of a ball at adjustable set points. Created a system composed of a ToF distance sensor and servo motor interfaced through an STM32 F4 series microcontroller and mounted on a 3D printed tilt frame. Used STM32 CubeIDE to configure GPIO, PWM, timer, and SPI communication peripherals.',
  },
  {
    id: '05',
    title: 'Coin Picking Robot',
    course: 'UBC: EE Design Studio I',
    date: 'April 2025',
    tags: ['Embedded System Design', 'C', 'Bluetooth'],
    github: 'https://github.com/ethan-soon/ELEC291_Project2',
    description:
      'Wired circuits on breadboards based on circuit schematics including electromagnetic field/metal detection, H-bridge, and power distribution. Created a controller with a joystick and buttons capable of controlling robot actions via Bluetooth communication. Interfaced multiple mechanical devices and electrical circuits with two separate microcontrollers programmed in C.',
  },
  {
    id: '06',
    title: 'UBC Subbots — Controls',
    course: 'Engineering Design Team',
    date: 'Sep 2025 – Present',
    tags: ['ROS 2', 'SMC', 'Simulink', 'Gazebo', 'Python'],
    github: 'https://github.com/ethan-soon',
    description:
      'Working with a team of 50+ students to create an autonomous underwater robot for the 2026 RoboSub competition. Developing, simulating, and implementing an SMC algorithm to control robot position and orientation. Using ROS 2 to interface the control system to sensors and thrusters — covering position estimation, trajectory planning, and thrust allocation. Utilizing Simulink and Gazebo to simulate control algorithms for robot competition tasks such as going through a gate or hovering over a dropping zone.',
    hasFlow: true,
  },
]

/* ─── Modal ───────────────────────────────────────────────────────── */
function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        background: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'var(--card-bg, #111)',
          border: '1px solid var(--border, #222)',
          borderRadius: '16px',
          width: '100%',
          maxWidth: '860px',
          maxHeight: '85vh',
          overflowY: 'auto',
          padding: '2.5rem',
          position: 'relative',
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'none',
            border: '1px solid var(--sage-light)',
            borderRadius: '6px',
            color: 'var(--sage-light)',
            fontSize: '0.8rem',
            padding: '0.25rem 0.6rem',
            cursor: 'pointer',
            lineHeight: 1,
          }}
        >
          ✕ close
        </button>

        {/* Header */}
        <p style={{ fontSize: '0.7rem', letterSpacing: '0.2em', color: 'var(--sage)', marginBottom: '0.5rem', fontFamily: 'monospace' }}>
          PROJECT_{project.id}
        </p>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.25rem' }}>
          {project.title}
        </h2>
        <p style={{ fontSize: '0.8rem', color: 'var(--sage)', marginBottom: '1.5rem', fontFamily: 'monospace' }}>
          {project.course}&nbsp;·&nbsp;{project.date}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
          {project.tags.map((tag) => (
            <span key={tag} className="skill-tag">{tag}</span>
          ))}
        </div>

        {/* Description */}
        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: project.hasFlow ? '2rem' : '1.5rem' }}>
          {project.description}
        </p>

        {/* System diagram */}
        {project.hasFlow && (
          <>
            <p style={{ fontSize: '0.7rem', letterSpacing: '0.15em', color: 'var(--sage)', marginBottom: '0.75rem', fontFamily: 'monospace' }}>
              SYSTEM DIAGRAM
            </p>
            <SubbotsFlow />
          </>
        )}

        {/* GitHub */}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            marginTop: '1.5rem',
            fontSize: '0.875rem',
            color: 'var(--sage-light)',
            textDecoration: 'none',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--sage)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--sage-light)')}
        >
          GitHub →
        </a>
      </div>
    </div>
  )
}

/* ─── Main component ──────────────────────────────────────────────── */
export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <section id="projects" className="section" style={{ padding: '100px 2rem' }}>
      <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
        <p className="section-label">03 / Projects</p>
        <h2 className="section-title">What I&apos;ve Built</h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            marginTop: '3rem',
          }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="card"
              onClick={() => setSelected(project)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer',
                transition: 'transform 0.15s, border-color 0.15s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'
              }}
            >
              <div>
                <p style={{ fontSize: '0.7rem', letterSpacing: '0.2em', color: 'var(--sage)', marginBottom: '0.5rem', fontFamily: 'monospace' }}>
                  PROJECT_{project.id}
                </p>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--text)', marginBottom: '0.25rem', lineHeight: 1.4 }}>
                  {project.title}
                </h3>
                <p style={{ fontSize: '0.75rem', color: 'var(--sage)', marginBottom: '1rem', fontFamily: 'monospace' }}>
                  {project.course}&nbsp;·&nbsp;{project.date}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {project.tags.map((tag) => (
                    <span key={tag} className="skill-tag">{tag}</span>
                  ))}
                </div>
              </div>

              <p style={{ fontSize: '0.75rem', color: 'var(--sage-light)', marginTop: '1.25rem' }}>
                click to expand →
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  )
}
