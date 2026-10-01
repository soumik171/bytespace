# ByteSpace

Frontend for the ByteSpace learning and creator platform, built from the Figma assessment design.

## Overview

This repository contains the landing page and both authentication pages (login and register) built with React and Tailwind CSS. The layout is responsive across desktop, laptop (tested on 14" to 16" displays), tablet, and mobile screens.

## Pages and routes

- `/`: Landing page with navbar, hero search, course catalog with category filters, categories grid, feature blocks, community testimonials, and footer.
- `/login`: Sign-in page with email/password inputs, social login options, and background card layout.
- `/signup` (or `/register`): Account registration page with full name, email, and password fields.

## Tech stack

- JavaScript (ES6+)
- React 19
- Vite
- Tailwind CSS v4
- React Router DOM
- Lucide React (icons)
- Typography: Poppins (headings), Satoshi (body and UI)

## Getting started

### Prerequisites

- Node.js 18 or higher
- npm

### Local setup

1. Clone the repository:

   ```bash
   git clone <repo-url>
   cd ByteSpace
   ```
2. Go to the frontend directory:

   ```bash
   cd frontend
   ```
3. Install dependencies:

   ```bash
   npm install
   ```
4. Start the dev server:

   ```bash
   npm run dev
   ```
5. Open `http://localhost:5173` in your browser.

## Project structure

```text
ByteSpace/
├── frontend/
│   ├── public/assets/       # Exported images, icons, and logos
│   ├── src/
│   │   ├── components/
│   │   │   ├── cards/       # CourseCard, CategoryCard
│   │   │   ├── common/      # ByteSpaceLogo
│   │   │   ├── home/        # Hero, Partner, Catalog, Growth, CTA, Testimonials
│   │   │   └── layout/      # Navbar, Footer, AuthLayout
│   │   ├── pages/           # HomePage, LoginPage, SignupPage
│   │   ├── App.jsx          # Route definitions
│   │   ├── index.css        # Tailwind setup and font definitions
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## Author

Soumik Sarker
