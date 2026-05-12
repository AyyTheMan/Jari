================================================================================
                                    JARI
              Smart City Infrastructure & Civic Engagement Platform
================================================================================

OVERVIEW
--------
Jari is a comprehensive civic technology platform that bridges the gap between
citizens and municipal services. It empowers residents to report infrastructure
issues, track resolutions in real-time, and participate in urban planning
decisions - while providing city operations teams with powerful tools to manage
field crews and optimize response times.

The name "Jari" reflects the flow of communication between citizens and city
services, creating a seamless connection for better urban living.


PROBLEM STATEMENT
-----------------
Cities face significant challenges in maintaining infrastructure and responding
to citizen concerns:

  - Citizens struggle to report issues effectively, often not knowing who to
    contact or how to describe problems
  - Municipal teams lack real-time visibility into field operations and
    emerging problems
  - There is no unified system connecting citizens, field crews, and management
  - Urban planning decisions are made without adequate citizen input
  - Issue tracking is fragmented, leading to duplicate reports and slow
    response times


SOLUTION
--------
Jari provides a unified platform with three distinct user experiences:

  1. CITIZEN APP - Mobile-first interface for residents to:
     - Report issues with AI-powered photo analysis
     - Track report status in real-time
     - View issues on an interactive map
     - Vote on community suggestions and urban planning proposals
     - Submit ideas for neighborhood improvements

  2. FIELD CREW APP - Task management for maintenance workers to:
     - Receive optimized daily task routes
     - Execute and document repairs
     - Capture completion photos for verification
     - Track shift progress and performance

  3. MANAGER DASHBOARD - Operations center for supervisors to:
     - Monitor live city-wide issue heatmaps
     - Track crew locations and availability
     - Manage work orders and assignments
     - Review urban planning proposals
     - Analyze performance metrics


KEY FEATURES
------------

For Citizens:
  - Quick Photo Report: Snap a photo and submit in seconds
  - Detailed Report Form: Categorized issue submission with location picker
  - Duplicate Detection: Prevents redundant reports, allows upvoting existing ones
  - My Reports: Track all submitted issues and their status
  - Interactive Map: View all community reports and their locations
  - Suggestions & Voting: Participate in community improvement proposals
  - District Selection: Focus on your specific neighborhood

For Field Crews:
  - Daily Task Dashboard: Clear overview of assigned work
  - Route Optimization: Efficient navigation between tasks
  - Task Execution: Step-by-step guidance for repairs
  - Photo Documentation: Before/after evidence capture
  - Shift Management: Start/end shift tracking

For Managers:
  - Live Operations Map: Real-time view of issues and crews
  - Alert System: Priority notifications for critical issues
  - Work Order Management: Create, assign, and track repairs
  - Urban Planning Tools: Review and manage citizen proposals
  - Analytics Dashboard: Performance metrics and trends


ISSUE CATEGORIES
----------------
The platform supports reporting of various infrastructure issues:
  - Potholes and road damage
  - Street lighting problems
  - Water leaks and drainage issues
  - Trash and debris accumulation
  - Tree maintenance needs
  - Graffiti and vandalism
  - Broken sidewalks
  - Traffic sign damage
  - General infrastructure concerns


TECHNOLOGY STACK
----------------
  - Framework: Next.js 16 with App Router
  - Language: TypeScript
  - UI Components: shadcn/ui with Radix primitives
  - Styling: Tailwind CSS 4
  - Maps: Google Maps API / Leaflet / React-Leaflet
  - State Management: React Context API
  - Forms: React Hook Form with Zod validation
  - Icons: Lucide React
  - Charts: Recharts
  - Notifications: Sonner toast system


PROJECT STRUCTURE
-----------------
/app                    - Next.js App Router pages
  /auth                 - Authentication page
  /citizen-app          - Main citizen interface
  /map                  - Full-screen map view
  /my-reports           - User's submitted reports
  /report               - Report submission flow
  /report-success       - Success confirmation
  /api                  - API routes

/components             - React components
  /ui                   - Reusable UI primitives (shadcn)
  citizen-app.tsx       - Main citizen navigation
  home-screen.tsx       - Citizen dashboard
  report-form-modal.tsx - Detailed report form
  ai-report-modal.tsx   - Quick photo report
  map-screen.tsx        - Interactive issue map
  manager-dashboard.tsx - Operations center
  crew-task-list.tsx    - Field crew interface
  suggestions-screen.tsx - Community proposals

/context                - React Context providers
  auth-context.tsx      - User authentication state
  data-context.tsx      - Application data management
  location-context.tsx  - Geolocation services

/hooks                  - Custom React hooks
/lib                    - Utility functions
/constants              - App constants (districts, etc.)
/public                 - Static assets


USER ROLES
----------
The platform supports three distinct user roles:

  1. Citizen - Default role for residents reporting issues
  2. Crew - Field workers completing maintenance tasks
  3. Manager - Operations supervisors overseeing city services

Users select their role during onboarding and can switch roles from their
profile settings.


GETTING STARTED
---------------

Prerequisites:
  - Node.js 18+
  - pnpm (recommended) or npm

Installation:
  1. Clone the repository
  2. Install dependencies:
     $ pnpm install

  3. Set up environment variables:
     Create a .env.local file with:
       NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_key

  4. Run the development server:
     $ pnpm dev

  5. Open http://localhost:3000 in your browser


CONFIGURATION
-------------
The application can be configured through:
  - /constants/districts.ts - Define city districts and boundaries
  - Theme customization via globals.css design tokens
  - Map center coordinates in location-context.tsx


DEPLOYMENT
----------
The application is optimized for deployment on Vercel:
  1. Push to GitHub
  2. Connect repository to Vercel
  3. Configure environment variables
  4. Deploy


FUTURE ROADMAP
--------------
  - Backend integration with database persistence
  - Push notifications for report updates
  - AI-powered issue categorization from photos
  - Predictive maintenance analytics
  - Multi-language support (Arabic/English)
  - Integration with municipal work order systems
  - Citizen reward/gamification system


LICENSE
-------
Proprietary - All rights reserved


CONTACT
-------
For questions or support, please contact the development team.

================================================================================
                        Built with care for better cities
================================================================================
