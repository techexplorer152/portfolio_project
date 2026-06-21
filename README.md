# 💬 Live Chat Web Application

An engineering breakdown of the real-time bidirectional messaging infrastructure.

## 🏗️ Low-Latency Network Flowchart

```mermaid
%%{init: {
  'theme': 'base',
  'themeVariables': {
    'background': '#0c1524',
    'primaryColor': '#1e293b',
    'primaryTextColor': '#ffffff',
    'lineColor': '#38bdf8',
    'actorBorder': '#38bdf8',
    'actorBkg': '#0c1524',
    'actorTextColor': '#ffffff',
    'noteBkgColor': '#fbbf24',
    'noteTextColor': '#060b13',
    'activationBkgColor': 'rgba(56, 189, 248, 0.2)',
    'activationBorderColor': '#38bdf8'
  },
  'themeCSS': '
    .box { stroke: rgba(255, 255, 255, 0.15) !important; stroke-dasharray: 4 !important; }
    .labelBox { fill: #060b13 !important; stroke: #38bdf8 !important; }
    .messageText { fill: #38bdf8 !important; font-weight: 600 !important; font-family: monospace !important; }
    .loopText { fill: #fbbf24 !important; }
    g.actor rect { fill: #0c1524 !important; stroke: #38bdf8 !important; stroke-width: 2px !important; }
  '
}}%%

sequenceDiagram
    autonumber
    actor ClientA as React Client A
    participant Server as Node.js / Socket.IO Server
    actor ClientB as React Client B

    box rgb(12, 21, 36) Frontend Layer
    actor ClientA
    actor ClientB
    end
    box rgb(30, 41, 59) Backend Core
    participant Server
    end

    ClientA->>Server: Establish WebSocket Handshake
    activate Server
    ClientB->>Server: Establish WebSocket Handshake
    activate Server
    
    Note over ClientA,Server: 🟢 Connection Active
    
    ClientA->>Server: emit("send_message", data payload)
    Note over Server: Syncing State
    Server-->>ClientB: broadcast("receive_message", data payload)
    
    deactivate Server
    deactivate Server
    Note right of ClientB: ✨ UI updates instantly