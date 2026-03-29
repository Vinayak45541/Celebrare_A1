# 🎉 Celebrare Assignment — React Auth + Firestore Events Dashboard

This project implements authentication, protected routing, session persistence, and Firestore-based event management using React, Firebase, and Context API.

It is built incrementally across Assignment 1 and Assignment 2.

---

# 🚀 Features

## 🔐 Authentication (Assignment 1)

* Google Login using Firebase Authentication
* Protected Route (`/dashboard`)
* Redirect to login if not authenticated
* User session stored in `localStorage`
* Session restored automatically on refresh
* Session expiry using TTL (24 hours)
* Logout clears stored session

---

## 📊 Events Dashboard (Assignment 2)

* Firestore database integration
* Fetch events from Firestore
* Display events in responsive card grid
* Real-time search filtering
* Remember last clicked event
* Restore highlighted card after refresh
* Move last clicked card to top
* Remove highlight when clicking empty space
* Loading skeleton shown during data fetch

---

# 🧠 Tech Stack

```text
React (Vite)
Firebase Authentication
Firestore Database
React Context API
React Router
Tailwind CSS
localStorage
```

---

# 📂 Project Structure

```text
src/

├── components/
│   ├── EventCard.jsx
│   ├── EventGrid.jsx
│   ├── SearchBar.jsx
│   └── LoadingSkeleton.jsx
│
├── context/
│   ├── AuthContext.jsx
│   └── EventContext.jsx
│
├── firebase/
│   └── firebase.js
│
├── pages/
│   ├── Login.jsx
│   └── Dashboard.jsx
│
├── routes/
│   └── ProtectedRoute.jsx
│
├── utils/
│   └── appStorage.js
│
├── App.jsx
└── main.jsx
```

---

# 🔐 Authentication Flow

```text
User clicks Login
↓
Firebase Google Authentication
↓
User data stored in localStorage
↓
TTL expiry timestamp stored
↓
Dashboard access allowed
```

---

# ⏳ TTL (Time-To-Live)

TTL ensures session expiration after 24 hours.

### TTL Logic:

```text
Current Time + 24 hours = Expiry Time
```

### Why TTL Exists:

* Prevent stale sessions
* Improve security
* Automatically expire login session
* Avoid permanent login storage

---

# 📦 Firestore Integration

Firestore is used to store event data.

Collection:

```text
events
```

Each document contains:

```text
name → string  
date → string  
location → string  
```

Example document:

```text
name: Music Night  
date: 2026-04-10  
location: Bangalore
```

---

# 📊 Event Flow

```text
Dashboard loads
↓
fetchEvents() runs
↓
Firestore queried
↓
Events stored in Context
↓
Cards rendered
```

---

# 🔎 Search Functionality

Search filters events in real-time.

```text
User types text
↓
Events filtered locally
↓
Matching cards displayed
```

No reload required.

---

# ⭐ Last Clicked Event Persistence

Behavior:

```text
User clicks event
↓
Event ID stored in localStorage
↓
Page refresh
↓
Same event highlighted
↓
Event moved to top
```

Only the **last clicked event** is remembered.

---

# 🧱 Loading Skeleton

Skeleton UI appears while fetching events.

Includes:

```text
Dashboard header skeleton
Search bar skeleton
Event card skeletons
```

Improves perceived performance.

---

# 🛡 Protected Routes

Dashboard access is restricted.

Logic:

```text
If user exists → allow access  
If user missing → redirect to login  
```

Prevents unauthorized access.

---

# 🧩 Context API Usage

Two contexts are used:

## AuthContext

Provides:

```text
user
login()
logout()
loading
```

Handles authentication state.

---

## EventContext

Provides:

```text
events
loading
selectedEventId
selectEvent()
clearSelection()
fetchEvents()
```

Handles:

* Firestore fetching
* Event storage
* Highlight persistence

---

# 🔁 Session Restore Flow

```text
Page refresh
↓
localStorage checked
↓
TTL validated
↓
Session restored if valid
↓
User stays logged in
```

---

# 🖥 UI Behavior

### Event Cards

* Responsive grid layout
* Hover animation
* Highlighted selected card
* Selected card moves to top

---

### Highlight Behavior

```text
Click card → highlight  
Click another → previous removed  
Refresh → last clicked highlighted  
Click empty space → highlight removed  
```

Only **one highlighted card** at a time.

---

# 📦 Installation

Clone repository:

```bash
git clone https://github.com/Vinayak45541/Celebrare_A1.git
```

Install dependencies:

```bash
npm install
```

Run project:

```bash
npm run dev
```

---

# 🔧 Firebase Setup

1. Create Firebase project
2. Enable Google Authentication
3. Enable Firestore Database
4. Create collection:

```text
events
```

Add 5–10 sample documents.

Update:

```text
src/firebase/firebase.js
```

With your Firebase config.

---

# 🎯 Assignment Objectives Covered

## Assignment 1

```text
✔ React + Vite setup
✔ Google login
✔ Protected routes
✔ localStorage session
✔ TTL expiry logic
✔ Logout handling
```

---

## Assignment 2

```text
✔ Firestore database usage
✔ Fetch events
✔ Display card grid
✔ Real-time search
✔ Highlight persistence
✔ Loading skeleton
✔ Context-based global state
```

---

# 🧪 Testing Scenarios

Verified behaviors:

```text
✔ Login → Skeleton → Cards
✔ Search filters correctly
✔ Click card → refresh restores
✔ Selected card moves to top
✔ Empty click clears highlight
✔ Logout redirects to login
✔ Protected routes enforced
```

---

# 📌 Key Concepts Demonstrated

```text
React Context API
State Management
Firestore Integration
Authentication Flow
Session Persistence
UI Loading States
Event Handling
Protected Routing
```

---

# 🎥 Demo Requirements Covered

The implementation demonstrates:

```text
✔ Dashboard loading events from Firestore
✔ Search filtering working live
✔ Last clicked card restoring after refresh
✔ Context usage explanation
✔ Loading skeleton behavior
```

---

# 👨‍💻 Author

**Vinayak**
Computer Science Engineering Student
Backend & Full Stack Development Focus
