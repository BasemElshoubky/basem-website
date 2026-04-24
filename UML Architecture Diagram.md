UML Architecture Diagram (Component-Based)                   
                   
                    ┌────────────────────┐
                    │      main.jsx      │
                    │ (App Entry Point)  │
                    └─────────┬──────────┘
                              │
                              ▼
                    ┌────────────────────┐
                    │      App.jsx       │
                    │  (Main Controller)│
                    │ useState(active)  │
                    └───────┬───────────┘
                            │
        ┌───────────────────┼───────────────────┐
        │                   │                   │
        ▼                   ▼                   ▼
┌───────────────┐   ┌────────────────────┐  (Conditional Rendering)
│   Sidebar     │   │     Main Area      │───────────────┐
│ (Navigation)  │   │ (Dynamic Content)  │               │
└──────┬────────┘   └─────────┬──────────┘               │
       │                      │                          │
       │ onClick()           │                          │
       │ setActive()         │                          │
       ▼                      ▼                          ▼
┌────────────────────────────────────────────────────────────┐
│                  Rendered Components                       │
│                                                            │
│   ┌───────────┐   ┌───────────┐   ┌───────────┐   ┌────────┐│
│   │  Home     │   │  Resume   │   │  Skills   │   │ Contact││
│   │ (Intro UI)│   │ Timeline  │   │ Cards     │   │ Form   ││
│   └───────────┘   └───────────┘   └───────────┘   └────────┘│
│                                                            │
└────────────────────────────────────────────────────────────┘

----------------------------------------------------------------------------------------------------

UML (Class-Level)

App
 ├── state: active
 ├── setActive()
 │
 ├── Sidebar
 │     └── triggers setActive()
 │
 └── Main
       ├── Home
       ├── Resume
       ├── Skills
       └── Contact