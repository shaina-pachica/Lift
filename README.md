# ❚█══█❚

# Lift Gym Management System (Open-Source)

**Lift** is a modern, open-source gym management platform built for independent fitness centers and startups. Designed with scalability and simplicity in mind, it streamlines everyday operations—from membership tracking to payment management—through an intuitive admin interface.

> **Vision:** Build an accessible, open-source foundation for gym digitalization that can scale into a fully managed SaaS platform.

---

## 🚀 Overview

**Lift** helps gyms transition from manual tracking to smart, data-driven management.  
The system currently focuses on the **Admin Operations**, empowering gym owners to:

- Manage member profiles and records
- Monitor check-ins and attendance
- Track payments and renewals
- Create and manage promos or membership packages
- Configure business settings with flexibility

> Built for modern gyms that want to grow fast and operate efficiently.

---

## 🧩 Features

| MODULE        | DESC                                                     |
| ------------- | -------------------------------------------------------- |
| **Dashboard** | View summaries of members, revenue, and active check-ins |
| **Members**   | Add, edit, and track gym-goer profiles                   |
| **Check-In**  | Record attendance and manage live gym entries            |
| **Payments**  | Track payments, renewals, and outstanding balances       |
| **Promo**     | Create and manage active promotions                      |
| **Settings**  | Configure environment, access, and preferences           |

---

## 🏗️ Tech Stack

| Layer             | Technologies                                     |
| ----------------- | ------------------------------------------------ |
| **Frontend**      | React, TypeScript, Vite, Tailwind CSS, ShadCN UI |
| **Backend**       | Node.js, Express.js                              |
| **Database**      | PostgreSQL (via Prisma ORM)                      |
| **Deployment**    | Docker\*                                         |
| **Design System** | ShadCN / TweakCN with OKLCH color palette        |

---

## 📦 Installation

```bash
# 1️⃣ Clone the repository
git clone https://github.com/yourusername/lift.git

# Navigate into the project
cd lift

# Install dependencies
npm install

# Start the development server
npm run dev

# 2️⃣Install Dependencies

# Client
cd client
npm install
npm run dev

# Server
cd ../server
npm install
npm run dev
```

## 🧱 Project Structure

```pgsql
lift/
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── layouts/
│   │   ├── pages/
│   │   └── lib/
│   ├── public/
│   └── index.css
│
├── server/
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── prisma/
│   │   └── utils/
│   ├── package.json
│   └── .env
```

## 🎨 Brand Identity

Lift’s design system is powered by **ShadCN / TweakCN**, customized with an **OKLCH-based** palette for balanced contrast and accessibility.

```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.445 0.0898 146.8);
  --primary: oklch(0.445 0.0898 146.8);
  --primary-foreground: oklch(0.97 0 0);
}
```

> The UI is designed for clarity, simplicity, and scalability — mirroring the vision of lifting gym operations to the digital era.

---

## 🤝 Open Source & Collaboration

Lift is open source and welcomes community contributions.
We encourage developers, gym owners, and contributors to share ideas, report issues, or participate in active development.

---

## ⚖️ License

This project is distributed under the MIT License.
See the LICENSE
file for more information.
