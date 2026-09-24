<div align="center">
  
# 🌍 WanderLust

**A full-stack listing platform built to learn and practice production-ready backend development.**

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge&logo=ejs&logoColor=black)
![Joi](https://img.shields.io/badge/Joi-0080FF?style=for-the-badge)

</div>

---

## 📖 About The Project

**WanderLust** is a travel-stay listing app (inspired by Airbnb) where users can browse, search, create, edit, and delete property listings, and leave ratings and reviews on them.

The main purpose of this project is **learning backend engineering**. Every feature was built to practise a real-world concept: request validation, database relationships, sessions and cookies, flash messages, centralized error handling, and reusable middleware. Authentication, authorization, and Redis are the next milestones (see the [Roadmap](#-roadmap)).

---

## ✨ Features

### ✅ Implemented
- 🏡 **Listings CRUD**: create, view, update, and delete listings
- 🔎 **Search**: case-insensitive search on listing titles
- ⭐ **Reviews**: add and delete reviews (1-5 star rating) on any listing
- 🔗 **Database relationships**: one-to-many `Listing → Reviews` using Mongoose references and `populate()`
- ✅ **Server-side validation**: Joi schemas validate listings and reviews before they reach the database
- 🍪 **Sessions & cookies**: `express-session` with `httpOnly` cookies (7-day expiry) plus `cookie-parser`
- 💬 **Flash messages**: one-time success/error notifications via `connect-flash`
- 🚨 **Centralized error handling**: custom `ExpressError` class, `wrapAsync` helper, and a global error handler that renders an error page
- 🧩 **Reusable views**: `ejs-mate` layouts and partials (navbar, footer, flash)
- 🌱 **Database seeding**: sample data loaded through the `init` script

### 🚧 In Progress
- 🔐 Authentication (signup / login / logout)
- 🛡️ Authorization (owner-only edit/delete)
- ⚡ Redis for caching / session storage

---

## 🎯 Backend Concepts Covered

| Concept | Where it's applied |
|---|---|
| **Production-ready structure** | Modular folders: `models/`, `routes/`, `views/`, `utils/`, `init/` |
| **Database relationships** | `Listing` ↔ `Review` (one-to-many) with `populate("reviews")` |
| **Middlewares** | `validateListing`, `validateReview`, body parsing, method-override, session, flash, and `res.locals` middleware |
| **Validation** | Joi schemas in `schema.js` |
| **Cookies & sessions** | `express-session`, `cookie-parser`, `httpOnly` cookie with `maxAge` |
| **Flash messages** | `req.flash()` exposed to every view through `res.locals` |
| **Error handling** | `ExpressError` + `wrapAsync` + global error-handling middleware |
| **Authentication / Authorization** | 🚧 Coming soon |
| **Redis** | 🚧 Coming soon |

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Runtime | Node.js |
| Framework | Express.js |
| Database | MongoDB with Mongoose |
| Templating | EJS + ejs-mate |
| Validation | Joi |
| Sessions | express-session, cookie-parser, connect-flash |
| Other | method-override (PUT / DELETE from HTML forms) |

---

## 📂 Project Structure

```bash
WanderLust/
│
├── init/                  # Database seeding
│   ├── data.js            # Sample listings
│   └── index.js           # Seed script
│
├── models/                # Mongoose schemas
│   ├── listing.js
│   └── review.js
│
├── routes/                # Express routers
│   ├── listing.js
│   └── review.js
│
├── utils/
│   ├── ExpressError.js    # Custom error class
│   └── wrapAsync.js       # Async error wrapper
│
├── views/
│   ├── layout/
│   │   └── boilerplate.ejs
│   ├── listings/          # index, show, create, edit
│   ├── partials/          # nav, footer, flash
│   └── error.ejs
│
├── public/                # Static assets (CSS, JS, images)
├── app.js                 # Application entry point
├── schema.js              # Joi validation schemas
├── .env                   # Environment variables (not committed)
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [MongoDB](https://www.mongodb.com/try/download/community) running locally on the default port

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

3. **Start MongoDB**, then (optionally) seed the database
   ```bash
   node init/index.js
   ```

4. **Run the app**
   ```bash
   node app.js
   # or with auto-reload
   npx nodemon app.js
   ```

5. Open **http://localhost:3000** 🎉

> By default the app connects to `mongodb://127.0.0.1:27017/major` and listens on port `3000`. You can override the port with `PORT` in your environment.

---

## 🔗 Routes

### Listings

| Method | Route | Description |
|---|---|---|
| GET | `/` | Redirects to `/listings` |
| GET | `/listings` | View all listings |
| GET | `/listings/search?q=keyword` | Search listings by title |
| GET | `/listings/create` | Render the create form |
| POST | `/listings/create` | Create a listing (validated) |
| GET | `/listings/:id` | Show a listing with its reviews |
| GET | `/listings/:id/edit` | Render the edit form |
| PUT | `/listings/:id` | Update a listing (validated) |
| DELETE | `/listings/:id` | Delete a listing |

### Reviews

| Method | Route | Description |
|---|---|---|
| POST | `/listings/:id/reviews` | Add a review (validated) |
| DELETE | `/listings/:id/reviews/:reviewId` | Delete a review |

---

## 🧠 Key Learnings

- Splitting an Express app into **modular routers** with `mergeParams` for nested routes
- Modelling **parent-child relationships** in MongoDB and reading them back with `populate()`
- Writing **reusable validation middleware** with Joi and turning validation failures into clean `400` errors
- Avoiding unhandled promise rejections with a **`wrapAsync` wrapper** and one **global error handler**
- Using **sessions, cookies, and flash messages** for feedback across redirects

---

## 🗺️ Roadmap

- [x] Listings CRUD
- [x] Search by title
- [x] Reviews with database relationships
- [x] Joi validation (server-side)
- [x] Sessions, cookies, and flash messages
- [x] Custom error handling
- [ ] Authentication (Passport.js)
- [ ] Authorization (listing owner / review author)
- [ ] Redis caching
- [ ] Cascade delete: remove reviews when a listing is deleted
- [ ] Move secrets and DB URL to environment variables
- [ ] Image upload (Cloudinary)
- [ ] Deployment

---

## 👤 Author

**Priyanshu Ben**

- GitHub: https://github.com/priyanshu-ben-projects
- LinkedIn: https://github.com/priyanshu-ben-projects

---

<div align="center">

⭐ If you found this project helpful, consider giving it a star!

</div>
