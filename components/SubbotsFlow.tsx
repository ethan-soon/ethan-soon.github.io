'use client'

import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  type Node,
  type Edge,
  MarkerType,
  BackgroundVariant,
} from 'reactflow'
import 'reactflow/dist/style.css'

const base: React.CSSProperties = {
  padding: '10px 14px',
  borderRadius: '8px',
  fontSize: '11px',
  fontFamily: 'monospace',
  fontWeight: 600,
  textAlign: 'center',
  minWidth: '120px',
  lineHeight: 1.4,
}

const nodeStyles: Record<string, React.CSSProperties> = {
  sensor:   { ...base, background: '#1f2937', border: '1px solid #6b7280', color: '#e5e7eb' },
  ros:      { ...base, background: '#0f766e', border: '1px solid #2dd4bf', color: '#ccfbf1' },
  smc:      { ...base, background: '#6d28d9', border: '1px solid #a78bfa', color: '#ede9fe' },
  thrust:   { ...base, background: '#92400e', border: '1px solid #fbbf24', color: '#fef3c7' },
  hardware: { ...base, background: '#9f1239', border: '1px solid #fb7185', color: '#ffe4e6' },
  sim:      { ...base, background: '#1e3a5f', border: '1px solid #3b82f6', color: '#bfdbfe' },
}

const nodes: Node[] = [
  { id: 'dvl',      position: { x: 0,   y: 0   }, data: { label: 'DVL\nVelocity'          }, style: nodeStyles.sensor },
  { id: 'imu',      position: { x: 0,   y: 80  }, data: { label: 'IMU\nOrientation'        }, style: nodeStyles.sensor },
  { id: 'depth',    position: { x: 0,   y: 160 }, data: { label: 'Depth Sensor\nPressure'  }, style: nodeStyles.sensor },
  { id: 'cam',      position: { x: 0,   y: 240 }, data: { label: 'Camera\nVision'          }, style: nodeStyles.sensor },
  { id: 'ros',      position: { x: 220, y: 80  }, data: { label: 'ROS 2\nState Estimation' }, style: nodeStyles.ros },
  { id: 'traj',     position: { x: 220, y: 200 }, data: { label: 'ROS 2\nTrajectory Plan'  }, style: nodeStyles.ros },
  { id: 'smc',      position: { x: 440, y: 80  }, data: { label: 'SMC\nPosition'           }, style: nodeStyles.smc },
  { id: 'smc_ori',  position: { x: 440, y: 200 }, data: { label: 'SMC\nOrientation'        }, style: nodeStyles.smc },
  { id: 'alloc',    position: { x: 660, y: 140 }, data: { label: 'Thrust Allocator\n8-thruster mix' }, style: nodeStyles.thrust },
  { id: 't200',     position: { x: 880, y: 80  }, data: { label: 'T200 Thrusters\nPropulsion'      }, style: nodeStyles.hardware },
  { id: 'robot',    position: { x: 880, y: 200 }, data: { label: 'AUV Body\nPhysical plant'        }, style: nodeStyles.hardware },
  { id: 'gazebo',   position: { x: 220, y: 340 }, data: { label: 'Gazebo\nPhysics sim'    }, style: nodeStyles.sim },
  { id: 'simulink', position: { x: 440, y: 340 }, data: { label: 'Simulink\nControl tuning' }, style: nodeStyles.sim },
]

const solid = {
  type: 'smoothstep' as const,
  markerEnd: { type: MarkerType.ArrowClosed, color: '#4ade80' },
  style: { stroke: '#4ade80', strokeWidth: 1.5 },
}

const dashed = {
  type: 'smoothstep' as const,
  markerEnd: { type: MarkerType.ArrowClosed, color: '#6b7280' },
  style: { stroke: '#6b7280', strokeWidth: 1.2, strokeDasharray: '5 4' },
}

const edges: Edge[] = [
  { id: 'e1',  source: 'dvl',      target: 'ros',      ...solid },
  { id: 'e2',  source: 'imu',      target: 'ros',      ...solid },
  { id: 'e3',  source: 'depth',    target: 'ros',      ...solid },
  { id: 'e4',  source: 'cam',      target: 'traj',     ...solid },
  { id: 'e5',  source: 'ros',      target: 'smc',      ...solid },
  { id: 'e6',  source: 'traj',     target: 'smc_ori',  ...solid },
  { id: 'e7',  source: 'smc',      target: 'alloc',    ...solid },
  { id: 'e8',  source: 'smc_ori',  target: 'alloc',    ...solid },
  { id: 'e9',  source: 'alloc',    target: 't200',     ...solid },
  { id: 'e10', source: 't200',     target: 'robot',    ...solid },
  { id: 'e11', source: 'robot',    target: 'dvl',      ...dashed,
    label: 'feedback', labelStyle: { fill: '#9ca3af', fontSize: 9 } },
  { id: 'e12', source: 'gazebo',   target: 'ros',      ...dashed },
  { id: 'e13', source: 'simulink', target: 'smc',      ...dashed },
  { id: 'e14', source: 'gazebo',   target: 'simulink', ...dashed },
]

const legend = [
  { color: '#6b7280', label: 'Sensors'        },
  { color: '#2dd4bf', label: 'ROS 2'          },
  { color: '#a78bfa', label: 'SMC Controller' },
  { color: '#fbbf24', label: 'Thrust Alloc'   },
  { color: '#fb7185', label: 'Hardware'       },
  { color: '#3b82f6', label: 'Simulation'     },
]

export default function SubbotsFlow() {
  return (
    <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #30363d' }}>
      <div style={{ width: '100%', height: '460px' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          fitView
          fitViewOptions={{ padding: 0.2 }}
          proOptions={{ hideAttribution: true }}
        >
          <Background variant={BackgroundVariant.Dots} gap={20} size={1} color="#30363d" />
          <Controls style={{ background: '#1f2937', border: '1px solid #374151', borderRadius: '8px' }} />
          <MiniMap
            nodeColor={(n) => (n.style?.background as string) ?? '#1f2937'}
            style={{ background: '#0d1117', border: '1px solid #30363d', borderRadius: '8px' }}
            maskColor="rgba(0,0,0,0.6)"
          />
        </ReactFlow>
      </div>
      <div style={{
        display: 'flex', gap: '1rem', flexWrap: 'wrap',
        padding: '10px 14px',
        background: '#0d1117',
        borderTop: '1px solid #30363d',
        fontSize: '10px',
        fontFamily: 'monospace',
      }}>
        {legend.map(({ color, label }) => (
          <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#9ca3af' }}>
            <div style={{ width: 10, height: 10, borderRadius: 2, background: color, opacity: 0.8 }} />
            {label}
          </div>
        ))}
      </div>
    </div>
  )
}
