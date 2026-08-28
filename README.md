# 🍔 Swiggy Clone - Full Stack Food Delivery App

A full-stack food delivery application inspired by Swiggy, built using **React.js, Node.js, Express.js, and MongoDB**.

The project includes restaurant browsing, restaurant menus, user authentication, protected routes, and persistent login sessions.

---

## 🚀 Features

### Frontend

- Swiggy-inspired food delivery UI
- Restaurant listing
- Restaurant cards
- Restaurant details page
- Dynamic restaurant routes
- Restaurant menu categories
- Expandable/collapsible menu sections
- Menu item display
- Discount/offer labels
- Shimmer loading UI
- User authentication UI
- Login and registration
- Protected routes
- Persistent login session
- Global state management using React Context API

### Backend

- REST API built with Express.js
- MongoDB database integration
- Mongoose for database operations
- User registration
- User login
- User logout
- Password hashing using bcryptjs
- JWT-based authentication
- Authentication using HTTP cookies
- Protected API routes
- CORS configuration
- Environment variable configuration using dotenv

---

## 🛠️ Tech Stack

### Frontend

- React.js
- JavaScript
- React Router
- Context API
- Axios
- HTML5
- CSS3
- Vite

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- cookie-parser
- CORS
- dotenv

---

## 📂 Project Structure

```text
Swiggy-Clone/
│
├── Backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── database.js
│   │   │
│   │   ├── controllers/
│   │   │   └── authController.js
│   │   │
│   │   ├── models/
│   │   │   └── userModel.js
│   │   │
│   │   ├── routes/
│   │   │   └── authRoutes.js
│   │   │
│   │   └── app.js
│   │
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── Frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── Utils/
│   │   └── App.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
