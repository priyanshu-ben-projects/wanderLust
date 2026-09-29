<div align="center">

# 🌍 WanderLust

**A full-stack travel listing platform built to learn and practice real-world backend engineering.**

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge&logo=ejs&logoColor=black)
![Joi](https://img.shields.io/badge/Joi-0080FF?style=for-the-badge)
![Passport.js](https://img.shields.io/badge/Passport.js-34E27A?style=for-the-badge&logo=passport&logoColor=black)

</div>

---

## 📖 About The Project

**WanderLust** is an Airbnb-inspired travel-stay listing platform where users can discover properties, search listings, create and manage listings, authenticate securely, and leave reviews.

The primary purpose of this project is **learning backend engineering by building a real-world full-stack application**.

Instead of learning backend concepts in isolation, WanderLust is being developed incrementally, with each new concept implemented directly into the project.

The project currently covers:

- Database relationships
- Mongoose population
- CRUD operations
- Server-side validation
- Authentication & authorization
- Sessions & cookies
- Flash messages
- Protected routes
- Ownership-based access control
- Review systems
- Centralized error handling
- Reusable middleware
- Modular Express architecture
- EJS layouts and partials
- Search functionality
- Database seeding

---

## ✨ Features

### ✅ Implemented

#### 🏡 Listings

- **Listings CRUD** — Create, view, update, and delete property listings
- **Listing Ownership** — Each listing is associated with its owner
- **Ownership Authorization** — Only listing owners can edit or delete their listings
- **Listing Details** — Display listing information along with reviews and owner information
- **Search** — Case-insensitive search based on listing titles

#### ⭐ Reviews

- **Add Reviews** — Authenticated users can submit reviews
- **Star Ratings** — Reviews support ratings from 1–5
- **Delete Reviews** — Review authors can delete their own reviews
- **Review Relationships** — Reviews are connected to both listings and users
- **Review Population** — Review authors are populated when displaying a listing

#### 🔐 Authentication & Authorization

- **User Signup & Login** — Authentication using Passport.js
- **Password Hashing** — Passwords handled through `passport-local-mongoose`
- **Sessions** — Persistent authentication sessions using `express-session`
- **HTTP-only Cookies** — Session cookies configured with `httpOnly`
- **Protected Routes** — Authentication middleware protects sensitive operations
- **Listing Authorization** — `isOwner` middleware verifies listing ownership
- **Review Authorization** — `isAuthor` middleware verifies review ownership
- **Login Redirects** — Users can be redirected back to their originally requested route

#### 🛡️ Validation & Error Handling

- **Joi Validation** — Server-side validation for listings and reviews
- **Custom Errors** — `ExpressError` for structured application errors
- **Async Error Handling** — `wrapAsync` eliminates repetitive `try/catch` blocks
- **Centralized Error Handling** — Application-level error middleware
- **Validation Before Database Operations** — Invalid listing/review data is rejected before persistence

#### 💬 User Experience

- **Flash Messages** — Success and error notifications using `connect-flash`
- **Conditional UI** — Ownership-based action buttons
- **Reusable EJS Partials** — Navbar, footer, flash messages, etc.
- **EJS-Mate Layouts** — Reusable page layouts
- **Responsive Interface**
- **Travel Hero Section** — Featured travel content, CTA, statistics, and visual background
- **Search Interface** — Dedicated listing search functionality

#### 🌱 Database

- **MongoDB Database**
- **Mongoose ODM**
- **Database Relationships**
- **`populate()` for referenced documents**
- **Database Seeding** through the `init` script

---

## 🚧 In Progress

- ⚡ **Redis** — Caching and session storage
- ☁️ **Cloud Image Uploads** — Cloudinary integration
- 🚀 **Production Deployment** — Final production configuration
- 🔍 **Further Search Improvements**
- 🎨 **UI/UX Improvements**

---

## 🎯 Backend Concepts Covered

| Concept                    | Implementation                                                          |
| -------------------------- | ----------------------------------------------------------------------- |
| **Express Architecture**   | Modular `models/`, `routes/`, `views/`, `utils/`, and `init/` structure |
| **Express Routers**        | Separate listing and review route modules                               |
| **CRUD Operations**        | Listing creation, reading, updating, and deletion                       |
| **Database Relationships** | Listing ↔ Review and User ↔ Listing/Review relationships                |
| **Mongoose Models**        | Listing, Review, and User models                                        |
| **Mongoose References**    | Documents connected through ObjectId references                         |
| **Population**             | `populate()` used for owners and review authors                         |
| **Middleware**             | Authentication, authorization, validation, sessions, and flash messages |
| **Server-side Validation** | Joi schemas for listings and reviews                                    |
| **Authentication**         | Passport.js local authentication                                        |
| **Password Hashing**       | `passport-local-mongoose`                                               |
| **Authorization**          | `isOwner` and `isAuthor` middleware                                     |
| **Protected Routes**       | `isLoggedIn`, `isOwner`, and `isAuthor` middleware                      |
| **Sessions**               | `express-session`                                                       |
| **Cookies**                | HTTP-only session cookies                                               |
| **Flash Messages**         | `connect-flash` with view locals                                        |
| **Error Handling**         | `ExpressError` + `wrapAsync` + centralized middleware                   |
| **Search**                 | MongoDB regex-based case-insensitive title search                       |
| **Templating**             | EJS + EJS-Mate                                                          |
| **Reusable Views**         | Layouts and partials                                                    |
| **Database Seeding**       | Sample data through `init` scripts                                      |
| **Redirect Handling**      | Saving and restoring the originally requested URL                       |

---

## 🛠️ Tech Stack

| Layer                       | Technology              |
| --------------------------- | ----------------------- |
| **Runtime**                 | Node.js                 |
| **Framework**               | Express.js              |
| **Database**                | MongoDB                 |
| **ODM**                     | Mongoose                |
| **Authentication**          | Passport.js             |
| **Password Authentication** | passport-local-mongoose |
| **Templating**              | EJS                     |
| **Template Layouts**        | ejs-mate                |
| **Validation**              | Joi                     |
| **Sessions**                | express-session         |
| **Cookies**                 | cookie-parser           |
| **Flash Messages**          | connect-flash           |
| **HTTP Method Support**     | method-override         |
| **Async Error Handling**    | wrapAsync               |
| **Custom Errors**           | ExpressError            |

---

## 📂 Project Structure

```bash
WanderLust/
│
├── init/
│   ├── data.js                 # Sample listing dataset
│   └── index.js                # Database seeding script
│
├── models/
│   ├── listing.js              # Listing schema & model
│   ├── review.js               # Review schema & model
│   └── user.js                 # User schema & model
│
├── public/
│   ├── css/                    # Custom stylesheets
│   ├── js/                     # Client-side JavaScript
│   └── images/                 # Static images
│
├── routes/
│   ├── listing.js              # Listing CRUD & search routes
│   ├── review.js               # Review creation & deletion routes
│   └── user.js                 # Authentication routes
│
├── utils/
│   ├── ExpressError.js         # Custom error class
│   └── wrapAsync.js            # Async error wrapper
│
├── views/
│   ├── layout/
│   │   └── boilerplate.ejs     # Main EJS-Mate layout
│   │
│   ├── listings/
│   │   ├── index.ejs           # Listing index / homepage
│   │   ├── show.ejs            # Listing details
│   │   ├── create.ejs          # Create listing form
│   │   └── edit.ejs            # Edit listing form
│   │
│   ├── partials/
│   │   ├── navbar.ejs          # Navbar
│   │   ├── footer.ejs          # Footer
│   │   └── flash.ejs           # Flash messages
│   │
│   ├── users/
│   │   ├── login.ejs           # Login page
│   │   └── signup.ejs          # Signup page
│   │
│   └── error.ejs               # Global error page
│
├── .env                        # Environment variables
├── .gitignore                  # Git ignored files
├── app.js                      # Main application entry point
├── middleware.js               # Custom authentication/authorization middleware
├── package.json                # Project configuration
├── package-lock.json           # Dependency lockfile
├── schema.js                   # Joi validation schemas
└── README.md                   # Project documentation
```

---

## 🔄 Application Flow

### Listing Flow

```text
User
 │
 ▼
Browse Listings
 │
 ├── Search ──────────────► MongoDB
 │
 └── Select Listing
          │
          ▼
     Listing Details
          │
          ├── Owner Information
          ├── Reviews
          └── Review Authors
```

### Authentication Flow

```text
Signup / Login
      │
      ▼
Passport.js
      │
      ▼
Session Created
      │
      ▼
HTTP-only Cookie
      │
      ▼
Authenticated Requests
      │
      ├── Protected Listing Operations
      └── Review Operations
```

### Authorization Flow

```text
Request
   │
   ▼
isLoggedIn
   │
   ▼
isOwner / isAuthor
   │
   ├── Authorized ───► Continue
   │
   └── Unauthorized ─► Flash Message / Redirect
```

---

## 🔗 Database Relationships

WanderLust uses MongoDB references to model relationships between users, listings, and reviews.

```text
                ┌──────────────┐
                │     User     │
                └──────┬───────┘
                       │
             ┌─────────┴─────────┐
             ▼                   ▼
       ┌──────────┐        ┌──────────┐
       │ Listing  │        │  Review  │
       └────┬─────┘        └──────────┘
            │
            │
            ▼
        Reviews[]
```

### Relationships

- **User → Listings**
  - A user can own multiple listings.

- **User → Reviews**
  - A user can create multiple reviews.

- **Listing → Reviews**
  - A listing can contain multiple reviews.

- **Review → Author**
  - Each review references the user who created it.

Mongoose `populate()` is used to retrieve related documents when required.

---

## 🔎 Search

WanderLust includes a dedicated search route for finding listings by title.

Search is performed using a **case-insensitive regular expression**, allowing users to search without matching the exact capitalization of a listing title.

```text
/search?q=bali
```

The search results are then rendered through the same listing interface.

---

## 🧪 Validation

Both listings and reviews are validated on the server using **Joi**.

### Listing Validation

```text
Request
   │
   ▼
ListingSchema
   │
   ├── Valid ──────► Continue
   │
   └── Invalid ────► ExpressError(400)
```

### Review Validation

```text
Request
   │
   ▼
ReviewSchema
   │
   ├── Valid ──────► Create Review
   │
   └── Invalid ────► ExpressError(400)
```

This prevents invalid request data from being directly stored in the database.

---

## 🚨 Error Handling

WanderLust uses a centralized error-handling architecture.

```text
Route
 │
 ├── Synchronous Error
 │
 └── Async Error
          │
          ▼
      wrapAsync
          │
          ▼
    ExpressError
          │
          ▼
 Global Error Middleware
          │
          ▼
      error.ejs
```

This keeps route handlers clean while providing consistent error responses throughout the application.

---

## 💬 Flash Messages

The application uses `connect-flash` for temporary success and error messages.

Examples include:

```text
✓ New Listing Created!
✓ Listing Updated!
✓ Listing Deleted!
✓ Review Posted!
✓ Review Deleted!
```

These messages are displayed to the user after actions such as creating, updating, deleting listings, or posting reviews.

---

## 🔐 Authorization

Authorization is implemented at the middleware level.

### Listing Ownership

Listing edit, update, and delete operations use ownership verification:

```text
Authenticated User
        │
        ▼
     isOwner
        │
        ▼
Compare User ID
with Listing Owner ID
        │
   ┌────┴────┐
   ▼         ▼
Allowed    Denied
```

### Review Ownership

Review deletion uses an author-checking middleware to ensure that users can only delete their own reviews.

---

## 🌱 Database Seeding

Sample listing data can be inserted into MongoDB using the `init` directory.

```bash
node init/index.js
```

This provides a convenient way to populate the database with sample listings during development.

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/priyanshu-ben-projects/wanderLust.git
cd wanderLust
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file:

```env
ATLASDB_URL=your_mongodb_connection_string
SECRET=your_session_secret
```

Add any other environment variables required by your local configuration.

### 4. Start the application

```bash
node app.js
```

For development, you can also use:

```bash
nodemon app.js
```

---

## 🎓 Learning Goals

WanderLust is primarily a **learning-focused backend project**.

The project is being developed incrementally to understand how different backend concepts work together in a real application.

### Current Learning Path

```text
Express
   ↓
CRUD
   ↓
MongoDB
   ↓
Mongoose
   ↓
Database Relationships
   ↓
Validation
   ↓
Error Handling
   ↓
Express Routers
   ↓
Sessions & Cookies
   ↓
Authentication
   ↓
Authorization
   ↓
Reviews
   ↓
Search
   ↓
Redis
   ↓
Cloud Storage
   ↓
Production Deployment
```

---

## 🚀 Future Improvements

Planned improvements include:

- [ ] Redis caching
- [ ] Redis-based session storage
- [ ] Cloudinary image uploads
- [ ] Production deployment
- [ ] Advanced search and filtering
- [ ] Improved listing discovery
- [ ] Additional UI/UX improvements
- [ ] Further backend performance optimization

---

## 📌 Project Status

**WanderLust is an actively evolving learning project.**

The focus is not simply on completing features, but on understanding the **backend engineering concepts behind them** and implementing those concepts into a progressively more realistic application.

---

## 👨‍💻 Developer

**Priyanshu Ben**

Built as part of my journey toward becoming a **Full Stack Developer**, with a strong focus on backend fundamentals, real-world architecture, and hands-on project development.

---

⭐ If you find the project useful or interesting, consider giving the repository a star!

</div>
