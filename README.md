# 🚀 Ledgerly

> Ledgerly simplifies personal finance management by providing a secure platform to track income and expenses, monitor spending habits, and maintain an organized transaction history.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18-blue)
![Node.js](https://img.shields.io/badge/Node.js-20-green)
![Express](https://img.shields.io/badge/Express.js-Backend-black)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-brightgreen)

---

## 📖 Overview

**Ledgerly** is a full-stack personal expense tracking application built with the **MERN stack** to help users manage their finances efficiently through a clean, intuitive, and responsive interface. The platform enables users to securely record, organize, and monitor their income and expenses, providing a centralized solution for day-to-day financial management.

The application features secure user authentication, ensuring that every user's financial data remains private and accessible only to them. Users can add, edit, and delete transactions, categorize expenses, track income, and maintain a detailed transaction history. An interactive dashboard provides a clear overview of financial activity, helping users understand their spending habits and make informed financial decisions.

Built on a scalable client-server architecture, Ledgerly leverages RESTful APIs and MongoDB for efficient data management while delivering a fast and seamless user experience. The project demonstrates key full-stack development concepts, including authentication, CRUD operations, state management, API integration, protected routes, and responsive UI design.

### Key Features

* Secure user authentication with JWT
* Add, edit, and delete income & expense transactions
* Categorize transactions for better organization
* Personal dashboard with financial overview
* Real-time balance, income, and expense tracking
* Complete transaction history
* Search, filter, and sort transactions
* Responsive and mobile-friendly interface
* RESTful API architecture
* MongoDB database integration
* Protected routes for authenticated users
* Form validation and error handling
* Modular and scalable MERN stack architecture
* Environment-based configuration for secure credentials


---

## 📸 Screenshots

### Home Page

<p align = "center">
  <img width="1274" height="566" alt="ledger-home" src="https://github.com/user-attachments/assets/ec0e68a6-90e8-430f-96c1-8cf0a0a27c9a" />
</p>

### Dashboard

<p align = "center">
  <img width="1242" height="531" alt="ledger-dashboard" src="https://github.com/user-attachments/assets/013011fb-3fbb-42e7-82a1-ad21d4a1dcd3" />

</p>


---

## 🛠 Tech Stack

### Frontend

* React.js
* JavaScript (ES6+)
* HTML5
* CSS3
* Tailwind CSS
* React Router
* Axios
* Framer Motion

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcrypt
* dotenv

### Deployment

* Vercel
* Render
* MongoDB Atlas

### Development Tools

* VS Code
* Git
* GitHub
* Postman
* Figma

---

## 🏗 Project Structure

```
project-name/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── server.js
│   └── package.json
│
├── .gitignore
├── README.md
```

---

## ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/Nishant7749/portfolio-FullStack.git
```

Move into the project

```bash
cd portfolio-FullStack
```

Install frontend dependencies

```bash
cd client
npm install
```

Install backend dependencies

```bash
cd ../server
npm install
```

---

## ▶ Running the Project

Backend

```bash
cd server
npm run dev
```

Frontend

```bash
cd client
npm run dev
```

---

## 🌐 API Endpoints

| Method | Endpoint       | Description       |
| ------ | -------------- | ----------------- |
| GET    | /api/expenses     | Fetch all items   |
| GET    | /api/expenses/:id | Fetch single item |
| POST   | /api/expenses     | Create item       |
| PUT    | /api/expenses/:id | Update item       |
| DELETE | /api/expenses/:id | Delete item       |

---

## 🗄 Database Schema

Example

```
User
│
├── email
├── password
└── createdAt

Project
│
├── title
├── budget
├── amount
├── category
└── createdAt
```

---

## 🔄 Application Workflow

```text
                   ┌────────────────────┐
                   │       User         │
                   └─────────┬──────────┘
                             │
                             ▼
                    Register / Login
                             │
                             ▼
                  JWT Authentication
                             │
                             ▼
                      Dashboard
                             │
          ┌──────────────────┼──────────────────┐
          │                  │                  │
          ▼                  ▼                  ▼
    Add Transaction     View History      Filter/Search
          │                  │                  │
          ▼                  ▼                  ▼
 Edit / Delete        Income & Expense    Category-wise View
  Transaction             Records
          │                  │                  │
          └──────────────────┼──────────────────┘
                             ▼
                  Balance Updated Instantly
                             │
                             ▼
              Financial Summary & Insights
```

---

## 🧪 Future Improvements

* OAuth Login
* Admin Panel
* Notifications
* Multi-language Support
* AI Features
* PWA Support
* Docker Deployment
* Unit & Integration Tests

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Nishant Chaudhary**


