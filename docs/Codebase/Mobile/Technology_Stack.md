
# Technology Stack

## iOS Capture Application

### Core Stack
- React Native (v0.74.5) – Cross-platform mobile framework
- Expo SDK (v53.0.0) – Development and build toolchain
- TypeScript (v5.3.0) – Static typing for JavaScript

### State Management
- React Context API – Application state management
  - Authentication context
  - Job management context
  - Asset search context
  - Inspection type context
- React Hook Form (v7.43.9) – Form state management

### Data Storage
- Realm Database (v12.14.0) – Local database for offline capability
- AsyncStorage – Persistent key-value storage
- Expo FileSystem – File management and storage

### Device Integration
- Expo Camera (v15.0.16) – Image capture functionality
- Expo Location (v17.0.1) – GPS and geolocation services
- Expo Media Library (v16.0.5) – Media file management
- Expo Image Picker (v15.0.7) – Photo library access

### Mapping and Geospatial
- Mapbox Maps (@rnmapbox/maps v10.1.20) – Interactive maps
- Supercluster (v8.0.1) – Clustering for map markers
- GeoJSON – Geographic data format support

### UI and Form Components
- React Native Paper (v5.12.5) – Material Design components
- React Native Paper Dates (v0.16.1) – Date picker components
- React Native Dropdown Picker (v5.4.6) – Dropdown selection
- React Native Gesture Handler (v2.16.1) – Touch and gesture handling
- React Native Reanimated (v3.10.1) – Animations and transitions
- React Native SVG (v15.2.0) – Vector graphics support

### Networking and API
- Axios (v1.3.5) – HTTP client for API requests
- Expo Auth Session (v5.5.2) – OAuth authentication flow
- Expo Web Browser (v13.0.3) – In-app browser for auth flows

## Deployment and Infrastructure

### Build System
- Expo EAS Build – Cloud build service for iOS
- Expo Updates (v0.25.27) – Over-the-air updates

### CI/CD Pipeline
- Expo Application Services (EAS) – Build and submit pipeline
- App Store Connect – iOS app distribution

### Monitoring and Error Tracking
- Sentry (@sentry/react-native v6.13.0) – Error tracking and monitoring
- React Native Logs (v5.3.0) – Structured logging

### Monitoring and Logging
- Application Insights – App performance telemetry
- Azure Monitor – Server-level health checks
- Structured Logging – Consistent diagnostic output

## Development Tools

### Editors and IDEs
- Visual Studio Code – Primary development environment
- Xcode – iOS builds and testing

### Build and Package Management
- NPM – Package manager
- Expo CLI – Command line interface for Expo
- EAS CLI – Command line tools for builds and submissions

### Code Quality Tools
- ESLint (v8.40.0) – Code linting
- Prettier (v2.8.8) – Code formatting
- TypeScript – Static type checking

### Version Control
- Git – Source code management

## Third-Party Integrations

### Mapping Services
- Mapbox – Interactive maps and location services
- Google Maps – Alternative mapping provider

### Authentication
- OAuth 2.0 / OpenID Connect – Authentication protocols
- Expo Auth Session – Authentication flow handling

### Device Capabilities
- Camera access – Asset photo capture
- Photo library – Image selection and storage
- Location services – GPS coordinates for assets

### Utilities
- Date-fns (v3.3.1) – Date manipulation library
- Compare-versions (v6.1.1) – Version comparison
