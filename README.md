# 📊 Bluestock IPO WebApp

A full-stack web application that displays IPO (Initial Public Offering) information publicly and allows the admin to upload and manage IPO data. This project is developed by a team of 5 using Angular 17+ (Frontend) and Node.js + Express + MongoDB/PostgreSQL (Backend).

 

## 🚀 Project Objective

The goal is to build a responsive, secure, and scalable web app that:

- Displays IPOs with detailed information
- Allows users to download RHP & DRHP PDFs
- Provides an Admin panel to upload IPO data securely
- Supports JWT-based authentication for admin operations

 

## 🔧 Tech Stack

### Frontend (Angular 17+ + Bootstrap 5)
- Angular CLI
- Angular Router
- Bootstrap 5
- ng-bootstrap
- SCSS

### Backend (Node.js + Express)
- Express.js
- JWT & Passport.js
- Multer (for file upload)
- PostgreSQL / MongoDB (flexible)
- Dotenv for config
 

## 📁 Folder Structure
bluestock-ipo-webapp/
│
├── backend/                     # Node.js + Express Backend
│   ├── config/                  # Configuration files
│   │   └── db.js                # Database connection
│   │   └── passport.js          # Passport JWT strategy
│   │
│   ├── controllers/            # Request handlers
│   │   └── ipoController.js     # IPO-related logic
│   │   └── authController.js    # Auth-related logic
│   │
│   ├── models/                 # Mongoose or Sequelize models
│   │   └── IPO.js               # IPO Schema
│   │   └── User.js              # Admin/User Schema
│   │
│   ├── routes/                 # API Routes
│   │   └── ipoRoutes.js         # /api/ipos
│   │   └── authRoutes.js        # /api/auth
│   │
│   ├── middleware/             # Custom middleware
│   │   └── authMiddleware.js    # JWT auth check
│   │
│   ├── uploads/                # Folder to store uploaded RHP/DRHP PDFs
│   │   └── rhp/
│   │   └── drhp/
│   │
│   ├── .env                    # Environment variables
│   ├── index.js                # Entry point
│   └── package.json
│
├── frontend/                   # Angular 17+ Frontend
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/      # UI components
│   │   │   │   ├── navbar/              → navbar.component.ts/html/css
│   │   │   │   ├── ipo-card/            → card for each IPO
│   │   │   │   ├── ipo-list/            → list of all IPOs
│   │   │   │   ├── ipo-detail/          → detailed IPO view
│   │   │   │   ├── admin-form/          → form to add/upload IPO data
│   │   │   │   ├── login/               → optional login for admin
│   │   │   │
│   │   │   ├── services/        # Angular services (API handlers)
│   │   │   │   ├── ipo.service.ts       → for IPO API calls
│   │   │   │   └── auth.service.ts      → for login/logout
│   │   │   │
│   │   │   ├── models/          # TypeScript interfaces
│   │   │   │   ├── ipo.model.ts
│   │   │   │   └── user.model.ts
│   │   │   │
│   │   │   ├── guards/          # Route guards (auth protection)
│   │   │   │   └── auth.guard.ts
│   │   │   │
│   │   │   ├── app-routing.module.ts   # App routes
│   │   │   ├── app.component.ts
│   │   │   └── app.module.ts
│   │   │
│   │   ├── assets/             # Static files (logo, images, PDFs)
│   │   ├── environments/       # environment.ts / prod.ts
│   │   ├── index.html
│   │   └── styles.scss
│   │
│   ├── angular.json
│   ├── package.json
│   └── tsconfig.json
│
├── .gitignore
├── README.md
└── LICENSE

