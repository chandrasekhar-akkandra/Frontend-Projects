# 📚 React Hooks School Library

> A modern, full-featured school library management system built with React hooks, TypeScript, and modern frontend architecture patterns.

![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-4.x-3178C6?style=flat&logo=typescript&logoColor=white)
![Redux](https://img.shields.io/badge/Redux-Toolkit-764ABC?style=flat&logo=redux&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Enabled-2496ED?style=flat&logo=docker&logoColor=white)

## 🎯 Project Overview

A comprehensive library management system showcasing modern React development practices, featuring role-based authentication, real-time state management, and a clean, responsive UI. This project demonstrates proficiency in contemporary frontend technologies and architectural patterns.

**🔗 Related Projects:**
- **Backend API**: [SchoolLibraryAPI (.NET Core)](https://github.com/perestaj/SchoolLibraryAPI)

## ✨ Key Features

### 🔐 Role-Based Access Control
- **Administrator**: Full system access (books, loans, authors, publishers, users)
- **Librarian**: Content management (books, loans, authors, publishers)
- **Student**: Book browsing and loan requests

### 📖 Core Functionality
- **Book Management**: CRUD operations with real-time status tracking
- **Loan System**: Request, borrow, return, and lost book workflows
- **User Management**: Role-based user administration
- **Author & Publisher Management**: Complete bibliographic data handling

### 📱 Book Status Tracking
- ✅ **Available** - Ready for checkout
- 📖 **Borrowed** - Currently on loan
- ❌ **Lost** - Reported missing
- 🔄 **Requested** - Pending approval

## 🛠️ Tech Stack & Frontend Skills Demonstrated

### Core Technologies
- **React 18+** with modern hooks architecture
- **TypeScript** for type safety and enhanced developer experience
- **Redux Toolkit** for predictable state management
- **React Router** for client-side routing
- **Axios** for HTTP client with interceptors

### Advanced Frontend Patterns
- **Custom Hooks** for reusable stateful logic
- **Context API** integration with Redux
- **Higher-Order Components** for authentication guards
- **Error Boundaries** for graceful error handling
- **Lazy Loading** for performance optimization

### Development & DevOps
- **Docker** containerization for consistent deployments
- **ESLint + Prettier** for code quality
- **Husky** pre-commit hooks
- **Jest + React Testing Library** for comprehensive testing

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm
- Docker (optional)
- [SchoolLibraryAPI](https://github.com/perestaj/SchoolLibraryAPI) running locally

### Installation

```bash
# Clone the repository
cd React_Hooks_SchoolLibrary

# Install dependencies
npm install

# Start development server
npm start
```

### 🐳 Docker Deployment

```bash
# Run with Docker Compose
docker-compose up

# Access application
open http://127.0.0.1:3000
```

## 👤 Demo Accounts

| Role | Username | Password | Permissions |
|------|----------|----------|-------------|
| **Administrator** | `admin` | `admin` | Full system access |
| **Librarian** | `barbara` | `library` | Book & loan management |
| **Student** | `bil` | `bil` | Book browsing & requests |

## 🏗️ Application Architecture

### Component Structure
```
src/
├── components/           # Reusable UI components
├── pages/               # Route-level components
├── hooks/               # Custom React hooks
├── store/               # Redux store configuration
├── services/            # API service layer
├── types/               # TypeScript type definitions
├── utils/               # Helper functions
└── styles/              # Global styles and themes
```

### State Management Flow
- **Redux Toolkit** for global application state
- **React Query** for server state management
- **Local state** with useState/useReducer for component-specific data
- **Context API** for theme and user preferences

## 📊 Key Features Breakdown

### 🏠 Dashboard
- Real-time library statistics
- Quick action buttons
- Recent activity feed

### 📚 Book Management
- Advanced search and filtering
- Bulk operations
- Status change workflows
- ISBN validation and lookup

### 🔄 Loan Management
- Request approval system
- Due date tracking
- Automated notifications
- Return processing

### ⚙️ Administration Panel
- User role management
- System configuration
- Data export/import
- Audit logging

## 🧪 Testing Strategy

```bash
# Run all tests
npm test

# Run with coverage
npm run test:coverage

# End-to-end tests
npm run test:e2e
```

- **Unit Testing**: Components and utilities
- **Integration Testing**: API interactions
- **E2E Testing**: Complete user workflows
- **Accessibility Testing**: WCAG compliance

## 🎨 UI/UX Highlights

- **Responsive Design**: Mobile-first approach
- **Accessibility**: WCAG 2.1 AA compliant
- **Theme System**: Light/dark mode support
- **Loading States**: Skeleton screens and spinners
- **Error Handling**: User-friendly error messages
- **Animations**: Smooth transitions with Framer Motion

## 🔧 Performance Optimizations

- **Code Splitting**: Route-based lazy loading
- **Memoization**: React.memo and useMemo
- **Bundle Analysis**: Webpack bundle analyzer
- **Image Optimization**: WebP format with fallbacks
- **Caching Strategy**: Service worker implementation

## 📈 Future Enhancements

- [ ] PWA capabilities
- [ ] Real-time notifications with WebSockets
- [ ] Advanced reporting dashboard
- [ ] Mobile app with React Native
- [ ] Integration with external library systems

## 🤝 Contributing

This project showcases modern React development practices and is open for collaboration. Feel free to explore the code, suggest improvements, or use it as a reference for your own projects.

## 📝 License

MIT License - feel free to use this project for learning and portfolio purposes.

---

**💡 This project demonstrates:**
- Modern React hooks and functional components
- TypeScript integration and type safety
- Redux Toolkit for state management
- REST API integration patterns
- Responsive design principles
- Docker containerization
- Testing best practices
- Clean code architecture

*