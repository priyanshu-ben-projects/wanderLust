<div align="center">

# 🌍 WanderLust

**A full-stack listing platform built to learn and practice production-ready backend development.**

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge\&logo=nodedotjs\&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge\&logo=express\&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge\&logo=mongodb\&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge\&logo=mongoose\&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge\&logo=ejs\&logoColor=black)
![Joi](https://img.shields.io/badge/Joi-0080FF?style=for-the-badge)
![Passport.js](https://img.shields.io/badge/Passport.js-34E27A?style=for-the-badge\&logo=passport\&logoColor=black)

</div>

---

## 📖 About The Project

**WanderLust** is a travel-stay listing platform inspired by Airbnb, where users can browse, search, create, edit, and delete property listings, as well as leave ratings and reviews.

The main purpose of this project is **learning backend engineering by building a real-world application**.

Each feature has been implemented to practise backend concepts such as database relationships, request validation, authentication, authorization, sessions, cookies, flash messages, centralized error handling, reusable middleware, and modular Express architecture.

---

## ✨ Features

### ✅ Implemented

* 🏡 **Listings CRUD** — Create, view, update, and delete listings
* 🔎 **Search** — Case-insensitive search on listing titles
* ⭐ **Reviews** — Add and delete reviews with 1–5 star ratings
* 🔗 **Database Relationships** — One-to-many `Listing → Reviews` relationships using Mongoose references and `populate()`
* ✅ **Server-side Validation** — Joi schemas validate listings and reviews before they reach the database
* 👤 **User Model** — Dedicated Mongoose User model for application users
* 🔐 **Authentication** — User signup, login, and logout using Passport.js
* 🔑 **Password Hashing** — Secure password storage using `passport-local-mongoose`
* 🛡️ **Authentication Middleware** — Protected routes using `req.isAuthenticated()`
* ↩️ **Login Redirects** — Users can be redirected back to the page they originally requested after login
* 🍪 **Sessions & Cookies** — `express-session` with `httpOnly` cookies and 7-day expiry
* 💬 **Flash Messages** — One-time success/error notifications using `connect-flash`
* 🚨 **Centralized Error Handling** — Custom `ExpressError`, `wrapAsync`, and global error-handling middleware
* 🧩 **Reusable Views** — EJS-Mate layouts and reusable partials
* 🌱 **Database Seeding** — Sample listing data through the `init` script

### 🚧 In Progress

* 🛡️ **Authorization** — Owner-only permissions for listings and review authors
* ⚡ **Redis** — Caching and session storage
* ☁️ **Cloud Image Uploads** — Cloudinary integration
* 🚀 **Production Deployment** — Final production deployment and configuration

---

## 🎯 Backend Concepts Covered

| Concept                    | Where it's applied                                                            |
| -------------------------- | ----------------------------------------------------------------------------- |
| **Express Architecture**   | Modular `models/`, `routes/`, `views/`, `utils/`, and `init/` structure       |
| **Database Relationships** | `Listing ↔ Review` one-to-many relationship with `populate()`                 |
| **Mongoose Models**        | Listing, Review, and User models                                              |
| **Express Routers**        | Separate listing, review, and user routes                                     |
| **Middleware**             | Validation, authentication, sessions, flash messages, and reusable middleware |
| **Validation**             | Joi schemas for listings and reviews                                          |
| **Authentication**         | Passport.js with local username/password authentication                       |
| **Password Hashing**       | `passport-local-mongoose`                                                     |
| **Sessions & Cookies**     | `express-session`, `cookie-parser`, and `httpOnly` cookies                    |
| **Flash Messages**         | `req.flash()` exposed to views through `res.locals`                           |
| **Authorization**          | Protected routes using authentication middleware                              |
| **Error Handling**         | `ExpressError` + `wrapAsync` + global error middleware                        |
| **Redirect Handling**      | Saving the originally requested URL before authentication                     |
| **Templating**             | EJS + EJS-Mate layouts and partials                                           |

---

## 🛠️ Tech Stack

| Layer                   | Technology                     |
| ----------------------- | ------------------------------ |
| Runtime                 | Node.js                        |
| Framework               | Express.js                     |
| Database                | MongoDB + Mongoose             |
| Authentication          | Passport.js                    |
| Password Authentication | passport-local-mongoose        |
| Templating              | EJS + ejs-mate                 |
| Validation              | Joi                            |
| Sessions                | express-session                |
| Cookies                 | cookie-parser                  |
| Flash Messages          | connect-flash                  |
| HTTP Method Support     | method-override                |
| Other                   | wrapAsync, custom ExpressError |

---

## 📂 Project Structure

```bash
WanderLust/
│
├── init/                      # Database seeding
│   ├── data.js               # Sample listings
│   └── index.js              # Seed script
│
├── models/                    # Mongoose schemas
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── routes/                    # Express routers
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── views/
│   ├── layout/
│   │   └── boilerplate.ejs
│   ├── listings/             # Listing pages
│   ├── users/                # Signup & Login pages
│   ├── partials/             # Navbar, footer, flash messages
│   └── error.ejs
│
├── utils/
│   ├── ExpressError.js       # Custom error class
│   └── wrapAsync.js          # Async error wrapper
│
├── public/                    # Static assets
├── middleware.js              # Reusable application middleware
├── schema.js                  # Joi validation schemas
├── app.js                     # Application entry point
├── .env                       # Environment variables
└── package.json
```

---

## 🔐 Authentication Flow

WanderLust uses **Passport.js** with `passport-local-mongoose` for username/password authentication.

```text
Signup
   ↓
Create User
   ↓
User.register()
   ↓
Password Hashing
   ↓
User Stored in MongoDB
   ↓
req.login()
   ↓
Session Created
   ↓
Redirect to /listings
```

### Login

```text
Login Form
   ↓
POST /login
   ↓
Passport Local Strategy
   ↓
Find User
   ↓
Verify Password
   ↓
Authentication Successful
   ↓
req.user + Session
   ↓
Redirect
```

### Protected Routes

```text
Protected Route
      ↓
isLoggedIn()
      ↓
req.isAuthenticated()
   ↙             ↘
FALSE            TRUE
  ↓                ↓
Save URL          next()
  ↓
Flash Error
  ↓
/login
```

After successful authentication, the user can be redirected to the originally requested URL.

---

## 🚀 Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) v18+
* MongoDB running locally or a MongoDB connection string
* npm

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/<your-username>/WanderLust.git
cd WanderLust
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure environment variables**

Create a `.env` file and add your required configuration.

4. **Start MongoDB**

Make sure your MongoDB server is running.

5. **Seed the database (optional)**

```bash
node init/index.js
```

6. **Run the application**

```bash
node app.js
```

Or with Nodemon:

```bash
npx nodemon app.js
```

7. Open:

```text
http://localhost:3000
```

---

## 🔗 Routes

### General

| Method | Route | Description              |
| ------ | ----- | ------------------------ |
| GET    | `/`   | Redirects to `/listings` |

### Listings

| Method | Route                        | Description               |
| ------ | ---------------------------- | ------------------------- |
| GET    | `/listings`                  | View all listings         |
| GET    | `/listings/search?q=keyword` | Search listings by title  |
| GET    | `/listings/create`           | Render create form        |
| POST   | `/listings/create`           | Create a listing          |
| GET    | `/listings/:id`              | Show listing with reviews |
| GET    | `/listings/:id/edit`         | Render edit form          |
| PUT    | `/listings/:id`              | Update a listing          |
| DELETE | `/listings/:id`              | Delete a listing          |

### Reviews

| Method | Route                             | Description     |
| ------ | --------------------------------- | --------------- |
| POST   | `/listings/:id/reviews`           | Add a review    |
| DELETE | `/listings/:id/reviews/:reviewId` | Delete a review |

### Users

| Method | Route     | Description              |
| ------ | --------- | ------------------------ |
| GET    | `/signup` | Render signup form       |
| POST   | `/signup` | Register a new user      |
| GET    | `/login`  | Render login form        |
| POST   | `/login`  | Authenticate user        |
| GET    | `/logout` | Log out the current user |

---

## 🧠 Key Learnings

Through WanderLust, I have been learning how individual backend concepts work together inside a real application.

### Database

* Designing Mongoose schemas
* Creating references between collections
* One-to-many relationships
* Using `populate()`
* Database seeding

### Authentication

* Creating a User model
* Passport.js authentication
* Local authentication strategy
* Password hashing
* `User.register()`
* `req.login()`
* `req.logout()`
* `req.user`
* `req.isAuthenticated()`

### Sessions & Requests

* Understanding `req.session`
* Session-based authentication
* Cookies and `httpOnly`
* Preserving redirect URLs
* Using `res.locals` to expose data to EJS

### Error Handling

* Custom error classes
* Async error handling
* Reusable `wrapAsync`
* Centralized Express error middleware

### Application Architecture

* Modular Express routers
* Nested routes
* Reusable middleware
* EJS layouts and partials
* Separating models, routes, utilities, and views

---

## 🗺️ Roadmap

* [x] Listings CRUD
* [x] Search by title
* [x] Reviews
* [x] MongoDB relationships
* [x] Joi server-side validation
* [x] Sessions & cookies
* [x] Flash messages
* [x] Centralized error handling
* [x] User Model
* [x] User Routes
* [x] Signup
* [x] Login / Logout
* [x] Passport.js Authentication
* [x] Password Hashing
* [x] Protected Routes
* [x] Login Redirect Handling
* [ ] Authorization — Owner / Review Author permissions
* [ ] Redis caching / session storage
* [ ] Cascade delete for reviews
* [ ] Cloudinary image uploads
* [ ] Production deployment

---

## 📦 Important NPM Packages

```text
express
mongoose
ejs
ejs-mate
joi
express-session
cookie-parser
connect-flash
passport
passport-local
passport-local-mongoose
method-override
dotenv
```

---

## 👤 Author

**Priyanshu Ben**

* GitHub: https://github.com/priyanshu-ben-projects
* LinkedIn: https://www.linkedin.com/

---

<div align="center">

⭐ If you found this project helpful, consider giving it a star!

</div>
