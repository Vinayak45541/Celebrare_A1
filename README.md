# 🔐 React Auth + Protected Routes with TTL (Celebrare Assignment 1)

This project demonstrates a complete authentication flow using **React**, **Firebase Google Authentication**, **Protected Routes**, and **LocalStorage session persistence with TTL (Time-To-Live)**.

---

# 🚀 Features Implemented

## ✅ Google Login (Firebase Authentication)

* User logs in using Google account
* Firebase Authentication handles secure login
* User name and email are retrieved after login

## ✅ Protected Route (`/dashboard`)

* Dashboard is accessible **only when logged in**
* Unauthorized users are automatically redirected to login page

## ✅ LocalStorage with TTL (24 Hours)

* User session stored in localStorage
* Expiry timestamp added (24-hour TTL)
* Expired sessions automatically removed

## ✅ Session Restore on Refresh

* User remains logged in after refreshing page
* Session restored automatically if TTL not expired

## ✅ Logout Functionality

* Clears localStorage
* Ends Firebase session
* Redirects user back to login page

---

# 🧠 What is TTL (Time-To-Live)?

TTL defines how long stored data remains valid.

In this project:

* User data is saved with an expiry timestamp
* TTL is set to **24 hours**
* When the app reloads:

  * Expiry time is checked
  * If expired → session removed
  * If valid → session restored

This prevents stale sessions and improves security.

---

# 🏗️ Project Structure

```
src/
│
├── context/
│   └── AuthContext.jsx        # Authentication state management
│
├── routes/
│   └── ProtectedRoute.jsx     # Route protection logic
│
├── pages/
│   ├── Login.jsx              # Login UI
│   └── Dashboard.jsx          # Dashboard UI
│
├── utils/
│   └── appStorage.js          # TTL storage logic
│
├── firebase/
│   └── firebase.js            # Firebase setup
│
├── App.jsx                    # Route configuration
├── main.jsx                   # App entry point
```

---

# 🔄 Authentication Flow

1. User clicks **Login with Google**
2. Firebase authentication popup opens
3. User selects Google account
4. Name and email are stored in localStorage with TTL
5. User redirected to `/dashboard`
6. On refresh:

   * Stored session checked
   * If valid → dashboard restored
7. On logout:

   * localStorage cleared
   * Redirect to login

---

# 🔐 Protected Route Logic

The dashboard route is wrapped using:

ProtectedRoute

Behavior:

* If user exists → Allow dashboard
* If user does not exist → Redirect to `/`

---

# 🛠️ Technologies Used

* React (Vite)
* Firebase Authentication
* React Router DOM
* Tailwind CSS
* LocalStorage API

---

# ⚙️ Setup Instructions

## 1️⃣ Clone Repository

```
git clone https://github.com/Vinayak45541/Celebrare_A1.git
```

## 2️⃣ Install Dependencies

```
npm install
```

## 3️⃣ Run Development Server

```
npm run dev
```

Open:

```
http://localhost:5173
```

---

# 🧪 Testing Steps

## Login Flow

1. Click **Login with Google**
2. Select Google account
3. Dashboard opens

---

## LocalStorage Check

Open:

DevTools → Application → LocalStorage

Verify:

```
user → value + expiry timestamp
```

---

## Session Restore

Refresh page:

```
F5
```

Expected:

```
Dashboard loads without login
```

---

## Logout Test

Click:

```
Logout
```

Expected:

```
User redirected to login
LocalStorage cleared
```

---

# 📌 Key Files Overview

## AuthContext.jsx

Handles:

* Login
* Logout
* Session restore
* Global authentication state

---

## appStorage.js

Handles:

* Saving user with TTL
* Checking expiry
* Removing expired sessions

---

## ProtectedRoute.jsx

Handles:

* Blocking unauthorized access
* Redirecting users

---

# 🎯 Assignment Coverage

This project fulfills all required tasks:

* React + Vite + Tailwind setup
* Firebase Google login
* Protected dashboard route
* LocalStorage with TTL
* Session restore after refresh
* Logout functionality


---

# 👨‍💻 Author

Vinayak
React Authentication Assignment — Celebrare Internship
