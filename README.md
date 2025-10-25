# TicketFlow - Vue.js Implementation

A modern, full-featured ticket management application built with Vue 3 Composition API, TypeScript, and Tailwind CSS. This application provides a complete solution for managing support tickets with authentication, dashboard analytics, and full CRUD operations.

🔗 **Live Demo:** [Coming Soon]  
📦 **Repository:** [Coming Soon]

## 🚀 Technologies Used

- **Vue 3** 3.5.22 - Progressive JavaScript framework with Composition API
- **TypeScript** 5.9.3 - Type-safe development
- **Vite** 7.1.11 - Lightning-fast build tool
- **Tailwind CSS** 4.1.16 - Utility-first CSS framework
- **Vue Router** 4.6.3 - Official router for Vue.js
- **Pinia** 3.0.3 - Official state management for Vue
- **lucide-vue-next** 0.548.0 - Beautiful icon library

## 📋 Project Structure

```
src/
├── components/
│   ├── layout/           # Layout components (Header, Footer, AuthLayout)
│   ├── decorative/       # Visual elements (WavyBackground, DecorativeCircle)
│   ├── cards/            # Card components (FeatureCard, StatCard, TicketCard)
│   ├── forms/            # Form components (Input, Button, Textarea, Select)
│   ├── ui/               # UI primitives (Modal, StatusBadge, ToastContainer)
│   └── tickets/          # Ticket-specific components (TicketForm, DeleteConfirmation)
├── stores/               # Pinia stores
│   ├── auth.ts           # Authentication state management
│   ├── toast.ts          # Toast notification system
│   └── ticket.ts         # Ticket state management
├── composables/          # Vue composables
│   └── useForm.ts        # Generic form state composable
├── views/                # Page components
│   ├── Home.vue          # Landing page
│   ├── auth/             # Login & Signup pages
│   ├── Dashboard.vue     # Analytics dashboard
│   └── Tickets.vue       # Ticket management page
├── lib/                  # Utilities
│   ├── auth.ts           # Session management
│   ├── mockAuth.ts       # Mock authentication service
│   ├── validation.ts     # Form validation functions
│   └── ticketStorage.ts  # localStorage persistence
├── router/               # Vue Router configuration
│   └── index.ts          # Routes and navigation guards
├── types/                # TypeScript type definitions
│   └── index.ts          # All type interfaces
└── App.vue               # Root component
```

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone [repository-url]
cd vue
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### 4. Build for Production

```bash
npm run build
```

### 5. Preview Production Build

```bash
npm run preview
```

## ✨ Features Overview

### 🏠 Landing Page
- ✅ Eye-catching hero section with SVG wavy background
- ✅ Decorative circles for modern visual appeal
- ✅ Feature showcase with icon cards
- ✅ Call-to-action buttons (Login, Get Started)
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Max-width 1440px centered layout
- ✅ Consistent footer with dynamic copyright year

### 🔐 Authentication System
- ✅ **Login Page** (`/auth/login`)
  - Email and password authentication
  - Real-time form validation with `useForm` composable
  - Inline error messages
  - Toast notifications for success/error
  - Auto-redirect to dashboard on success
  
- ✅ **Signup Page** (`/auth/signup`)
  - User registration with name, email, password
  - Password confirmation validation
  - Real-time validation on all fields
  - Account creation with auto-login
  
- ✅ **Session Management**
  - localStorage persistence (key: `ticketapp_session`)
  - Session restoration via router navigation guard
  - Protected routes with automatic redirect
  - Secure logout with session clearing

#### 🔑 Test Credentials
- **Email:** test@example.com | **Password:** password123
- **Email:** demo@ticketflow.com | **Password:** demo123
- **Email:** admin@ticketflow.com | **Password:** admin123

### 📊 Dashboard
- ✅ **Summary Statistics**
  - Total tickets count
  - Open tickets (green accent)
  - In Progress tickets (amber accent)
  - Closed/Resolved tickets (gray accent)
  
- ✅ **Quick Actions**
  - Navigate to Ticket Management
  - Logout button with session clearing
  
- ✅ **Responsive Grid**
  - 4 columns on large screens
  - 2 columns on tablets
  - 1 column on mobile
  
- ✅ **Personalized Greeting**
  - Displays authenticated user's name

### 🎫 Ticket Management (Full CRUD)

#### ➕ Create Tickets
- Modal-based ticket creation form
- Required fields: Title, Status, Priority
- Optional description (max 500 characters)
- Real-time validation with inline errors
- Success toast notification on creation
- v-model two-way data binding

#### 📖 Read/Display Tickets
- Card-style ticket display
- Status badges with color coding (open=green, in_progress=amber, closed=gray)
- Priority badges (low=blue, medium=yellow, high=red)
- Ticket description with full text display
- Created date in human-readable format
- Sorted by newest first
- Empty state message when no tickets exist

#### ✏️ Update Tickets
- Edit button on each ticket card
- Modal form pre-filled with ticket data
- Same validation as create form
- Success toast on update
- Reactive list update via Pinia

#### 🗑️ Delete Tickets
- Delete button with confirmation dialog
- Warning message with ticket title
- Cancel option to abort deletion
- Success toast on deletion
- Immediate removal from list

#### ✅ Validation Rules
- **Title**: Required, 3-100 characters
- **Status**: Required, must be "open", "in_progress", or "closed"
- **Priority**: Required, must be "low", "medium", or "high"
- **Description**: Optional, max 500 characters

## 🎨 Design System

### Color Scheme
- **Status Colors**
  - Open: Green (`text-green-700`, `bg-green-50`, `border-green-200`)
  - In Progress: Amber (`text-amber-700`, `bg-amber-50`, `border-amber-200`)
  - Closed: Gray (`text-gray-700`, `bg-gray-50`, `border-gray-200`)

- **Priority Colors**
  - Low: Blue (`text-blue-700`, `bg-blue-50`, `border-blue-200`)
  - Medium: Yellow (`text-yellow-700`, `bg-yellow-50`, `border-yellow-200`)
  - High: Red (`text-red-700`, `bg-red-50`, `border-red-200`)

- **Button Variants**
  - Primary: Blue (`bg-blue-600`, `hover:bg-blue-700`)
  - Secondary: Gray (`bg-gray-200`, `hover:bg-gray-300`)
  - Danger: Red (`bg-red-600`, `hover:bg-red-700`)

### Layout
- **Max Width**: 1440px (centered on large screens)
- **Responsive Breakpoints**
  - Mobile: < 768px (single column)
  - Tablet: 768px - 1024px (2 columns)
  - Desktop: > 1024px (3-4 columns)

### Typography
- Headings: Font weight 700-900
- Body text: Font weight 400-600
- Color hierarchy: gray-900 → gray-700 → gray-600 → gray-500

## ♿ Accessibility Features

- ✅ Semantic HTML5 elements
- ✅ ARIA attributes on all interactive components
- ✅ Keyboard navigation support
- ✅ Focus management in modals (focus trap, ESC key close)
- ✅ Focus state indicators on all interactive elements
- ✅ Sufficient color contrast ratios (WCAG AA compliant)
- ✅ Screen reader friendly labels
- ✅ Error messages associated with form fields (aria-describedby)
- ✅ Backdrop click to close modals

## 🗂️ State Management Architecture

### Pinia Store Pattern (Setup Syntax)
- **authStore**: User authentication state and actions
  - `isAuthenticated`, `user`, `token`, `loading` state
  - `login()`, `signup()`, `logout()`, `restoreSession()` actions
  
- **ticketStore**: Ticket collection and CRUD operations
  - `tickets[]` array, `loading` flag
  - Computed getters: `totalTickets`, `openTickets`, `inProgressTickets`, `closedTickets`
  - `loadTickets()`, `addTicket()`, `updateTicket()`, `deleteTicket()` actions
  - Auto-save via `watch()` with deep: true
  
- **toastStore**: Global notification system
  - `toasts[]` array with auto-dismiss
  - `showToast()`, `removeToast()` actions

### Data Persistence
- **Authentication**: localStorage (`ticketapp_session`)
- **Tickets**: localStorage (`ticketapp_tickets`)
- Auto-save on state changes via watchers
- Auto-load on store initialization

## 🔒 Security & Authorization

- ✅ Protected routes via Vue Router `beforeEach` guard
- ✅ Automatic redirect to login for unauthorized access
- ✅ Session validation on application mount
- ✅ Secure logout with complete session clearing
- ✅ Route meta fields for authentication requirements

## 🧪 Error Handling

- ✅ Form validation errors (inline messages)
- ✅ Network error handling (toast notifications)
- ✅ Unauthorized access (automatic redirect)
- ✅ Try-catch blocks on all async operations
- ✅ User-friendly error messages
- ✅ Graceful error recovery

## 📱 Responsive Design

All pages are fully responsive with mobile-first approach:

- **Mobile** (< 768px): Stacked layouts, full-width cards, vertical headers
- **Tablet** (768px - 1024px): 2-column grids, optimized spacing
- **Desktop** (> 1024px): 3-4 column grids, max-width constraints, full navigation

### Mobile Optimizations
- Text sizing: `text-2xl` → `sm:text-3xl` → `lg:text-5xl`
- Button widths: `w-full` → `sm:w-auto`
- Layout direction: `flex-col` → `sm:flex-row`
- Grid columns: `grid-cols-1` → `md:grid-cols-2` → `lg:grid-cols-3`

## 🛠️ Development Tools

- **TypeScript**: Strict mode enabled for maximum type safety
- **ESLint**: Code linting with Vue and TypeScript rules
- **Vite**: Hot Module Replacement (HMR) for instant updates
- **Tailwind CSS**: JIT compiler for optimal bundle size
- **Vue DevTools**: Browser extension for debugging

## 📦 Build Output

Production build statistics:
```
✓ 1735 modules transformed
✓ dist/index.html          0.43 kB │ gzip:  0.28 kB
✓ dist/assets/index.css   23.51 kB │ gzip:  5.21 kB
✓ dist/assets/index.js   138.12 kB │ gzip: 50.61 kB
✓ built in 4.12s
```

## 🎯 Vue-Specific Features

### Composition API Benefits
- **`<script setup>`**: Simplified component syntax
- **`ref()` and `reactive()`**: Reactive state management
- **`computed()`**: Cached derived state
- **`watch()`**: Side effect handling
- **`storeToRefs()`**: Reactive Pinia store references

### Component Architecture
- **Single File Components (SFC)**: `.vue` files with template, script, style
- **Props & Emits**: Type-safe component communication
- **v-model**: Two-way data binding
- **Teleport**: Render modals to document body
- **Composables**: Reusable reactive logic (useForm)

### Router Features
- **Navigation Guards**: `beforeEach` for route protection
- **Route Meta Fields**: `requiresAuth` for protected routes
- **Programmatic Navigation**: `router.push()` for redirects

## 🚀 Deployment

This application can be deployed to various platforms:

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Deploy dist/ folder to gh-pages branch
```

## 📝 Known Issues

- ESLint warnings for multi-word component names (Modal, Select, Textarea, Dashboard, Tickets) - These are acceptable per Vue naming conventions for page-level components and form elements.

## 🔮 Future Enhancements

Potential features for future releases:
- User profile management
- Ticket assignment to team members
- Comments and activity timeline
- File attachments
- Email notifications
- Advanced filtering and search
- Export to CSV/PDF
- Dark mode support
- Real-time updates with WebSocket

## 📚 Learning Resources

- [Vue 3 Documentation](https://vuejs.org/)
- [Pinia Documentation](https://pinia.vuejs.org/)
- [Vue Router Documentation](https://router.vuejs.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/)

## 📄 License

MIT License - Feel free to use this project for learning or commercial purposes.

## 👤 Author

**HNG Stage 1 Project**  
Built with Vue 3 Composition API, TypeScript, and Tailwind CSS

---

*This is a Vue.js implementation that matches the React version pixel-perfect while following Vue best practices and conventions.*

