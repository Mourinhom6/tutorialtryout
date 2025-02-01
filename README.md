# 🌐 Website + Admin Dashboard | React + Laravel + InertiaJS

[![Build Status](https://img.shields.io/github/actions/workflow/status/Mourinhom6/tutorialtryout/ci.yml?branch=main)](https://github.com/Mourinhom6/tutorialtryout/actions)
[![PHP Version](https://img.shields.io/badge/PHP-8.1%2B-8892BF.svg)](https://php.net/)
[![React Version](https://img.shields.io/badge/React-18%2B-61DAFB.svg)](https://reactjs.org/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Project Status](https://img.shields.io/badge/status-active%20development-orange)](https://github.com/Mourinhom6/tutorialtryout)

**A Custom-Built Full-Stack Solution** currently in active development, combining React's flexibility with Laravel's robustness through InertiaJS. Features 100% original frontend design with no template dependencies.

---

## 📚 Table of Contents
- [Introduction](#-introduction)
- [Core Features](#-core-features)
- [Planned Features](#-planned-features)
- [Technologies Used](#-technologies-used)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Project Structure](#-project-structure)
- [Running the Application](#-running-the-application)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)
- [Acknowledgments](#-acknowledgments)
- [FAQs](#-faqs)

---

## 🚀 Introduction
**Work in Progress** - This project is currently under active development with the following goals:

- **Custom-Backed CMS**: Enable dynamic content management through admin dashboard
- **Role-Based Workflows**: 
  - Employees: View assigned tasks/work schedules
  - Managers: Upload/update organizational worksheets
  - Admins: Full system control with audit capabilities
- **Data Pipeline**: Excel/CSV import-export system for operational data
- **Custom Frontend**: Original UI components with zero template dependencies

---

## 🌟 Core Features (Implemented)

### Public Website
- ✅ Custom Authentication System
- ✅ Responsive Mobile-First Design
- ✅ Contact Forms with Validation
- ✅ Dynamic Content Rendering

### Admin Dashboard (Current)
- 📊 Basic Analytics Dashboard
- 👥 User Management (CRUD)
- 📁 File Upload System
- 🛠 Activity Logs

---

## 🛣 Planned Features (Roadmap)

### Phase 1 - Q4 2024
- 🚧 Role-Based Access Control (RBAC)
- 🚧 Worksheet Import System
- 🚧 Employee Task Assignment Module
- 🚧 Real-time Notifications

### Phase 2 - Q1 2025
- ◻️ Advanced Data Visualization
- ◻️ Work Schedule Conflict Detection
- ◻️ Document Version Control
- ◻️ API Integration Layer

---

## 🔧 Technologies Used

| **Category**       | **Technologies**                                                                 |
|---------------------|---------------------------------------------------------------------------------|
| **Frontend**        | React, InertiaJS, Tailwind CSS, Axios, Material-UI Data Grid                    |
| **Backend**         | Laravel, MySQL, Eloquent ORM, Laravel Sanctum, Laravel Excel                    |
| **Data**            | Chart.js, React DatePicker, XLSX.js                                            |
| **DevOps**          | Vite, Docker, GitHub Actions                                                    |

---

## 🛠 Installation

```bash
git clone https://github.com/Mourinhom6/tutorialtryout.git
cd tutorialtryout

composer install
npm install

cp .env.example .env
php artisan key:generate

# Configure your database in .env
php artisan migrate --seed

npm run dev
php artisan serve

# Configure database in .env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=your_db_name
DB_USERNAME=your_db_user
DB_PASSWORD=your_db_password

# Run migrations and seed data
php artisan migrate --seed

# Start the development servers
npm run dev
php artisan serve

```


⚙️ Configuration
Environment Variables (.env)
ini

APP_NAME="Your App Name"
APP_ENV=local
APP_KEY=base64:...
APP_DEBUG=true

# Database
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=homestead
DB_USERNAME=homestead
DB_PASSWORD=secret

# Session
SESSION_DRIVER=database


Compiling Assets
```bash

# Dev mode (hot reload)
npm run dev

# Production build
npm run build
```
📂 Project Structure
Frontend (React)


## 📂 Project Structure

```bash


### Frontend (React)


resources/
├── css/
│ └── app.css
└── js/
├── app.jsx
├── bootstrap.js
├── constants.jsx
├── MediaQuery.jsx
├── ziggy.js
├── Components/
│ ├── ApplicationLogo.jsx
│ ├── AppTheme.jsx
│ ├── ChartUserByCountry.jsx
│ ├── Client/
│ │ ├── AppAppBar.jsx
│ │ ├── FAQ.jsx
│ │ └── Hero.jsx
│ ├── DashBoard/
│ │ ├── AppNavbar.jsx
│ │ └── Breadcums.jsx
│ └── ... (other components)
├── Layouts/
│ ├── ClientLayout.jsx
│ ├── GuestLayout.jsx
│ └── WorkSpace.jsx
├── Pages/
│ ├── Auth/
│ │ ├── LoginJSX.jsx
│ │ └── RegisterJSX.jsx
│ ├── DashBoard/
│ │ ├── Blogs/
│ │ └── Projects/
│ └── ... (other pages)
└── views/
└── app.blade.php


Backend (Laravel)

app/
├── Http/
│ └── Controllers/
│ ├── Auth/
│ │ ├── AuthenticatedSessionController.php
│ │ └── RegisteredUserController.php
│ ├── DashBoard/
│ │ ├── BlogsController.php
│ │ └── ProjectsController.php
│ └── ... (other controllers)
├── Models/
│ ├── Blog.php
│ ├── Project.php
│ └── User.php
└── Services/
└── DatabaseOperations.php

database/
├── migrations/
│ ├── 2024_02_03_102720_create_projects_table.php
│ └── 2025_01_10_082956_create_escala_table.php
└── seeders/
└── DatabaseSeeder.php

routes/
├─ api.php
├─ auth.php
├─ client.php
├─ console.php
├─ web.php

```

🖥 Running the Application
```bash

# Start Laravel backend
php artisan serve

# Start Vite frontend (hot reload)
npm run dev

# Run tests
php artisan test
npm run test

```

🚀 Deployment
Production Build:

```bash

npm run build
php artisan optimize:clear
```

Server Requirements:

PHP 8.1+, Node.js 16+, MySQL 5.7+

Configure .env for production (set APP_DEBUG=false).

Recommended Hosting:

Laravel Forge, DigitalOcean, AWS EC2.

🤝 Contributing
Fork the repository.

Create a feature branch: git checkout -b feat/amazing-feature.

Commit changes: git commit -m 'Add amazing feature'.

Push to the branch: git push origin feat/amazing-feature.

Open a Pull Request.

📜 License
MIT License. See LICENSE for details.

🙏 Acknowledgments
Special thanks to:

Laravel Community for backend inspiration

React Team for component architecture

InertiaJS Core Team for seamless integration

Tailwind CSS for utility-first freedom

❓ FAQs

<details> <summary><strong>Q: Is this production-ready?</strong></summary> A: Not yet - currently in active development. Not recommended for production use until v1.0 release. </details><details> <summary><strong>Q: How to handle data imports?</strong></summary> A: Current implementation supports Excel files. The configuratiosn are all in App/Imports </details><details> <summary><strong>Q: Where are the frontend templates?</strong></summary> A: There are none! But I used something similar to a BootStarp Library called Mui Componrnts. </details>
Happy Coding! 👨💻👩💻


MIT License. See [LICENSE](LICENSE) for details.
