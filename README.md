# 🌱 Growie — Micro-Investment Web Application

[![Repository](https://img.shields.io/badge/GitHub-Growie-10b981?style=for-the-badge&logo=github)](https://github.com/Jayasri-k-01/Growie.git)
[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.2.0-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.3-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)

> **A micro-investment web app that rounds up daily transactions and automatically invests spare change into customizable portfolios.**

---

## 📌 Project Overview

**Growie** makes wealth accumulation effortless and accessible to everyone. By integrating micro-investing principles into everyday spending habits, Growie automatically rounds up transactions from daily purchases (like coffee, groceries, or rides) to the nearest whole currency value and channels the spare change into diversified, tailored investment assets.

Whether you're new to investing or looking for a passive saving vehicle, Growie turns small, unnoticeable sums into substantial long-term financial growth.

- 🔗 **GitHub Repository:** [https://github.com/Jayasri-k-01/Growie.git](https://github.com/Jayasri-k-01/Growie.git)

---

## ✨ Key Features

### 🪙 Automated Transaction Round-Ups
- Seamlessly calculates spare change from daily transactions (e.g., spending ₹187 rounds up by ₹13 to ₹200).
- Customizable round-up multipliers (1x, 2x, 3x) to accelerate your savings pace.
- Transaction-level controls and automatic filtering for bills and recurring expenses.

### 💼 Customizable Investment Portfolios
- Multi-asset portfolio allocation across **Stocks**, **Cryptocurrencies**, **Mutual Funds**, and **Cash Reserves**.
- Asset performance monitoring with real-time profit/loss metrics, allocation percentages, and top-performer badges.
- Breakdown visualization with interactive charts.

### 📊 Rich Financial Analytics & Dashboards
- Interactive visual analytics powered by **Recharts**:
  - Savings vs. Spending comparative bar charts.
  - Category-based expense distribution pie charts.
  - Return on Investment (ROI) and portfolio growth trajectory curves.
- Timeframe filtering (Weekly, Monthly, Yearly).

### 🎯 Savings Goals Tracker
- Set custom financial targets (e.g., Emergency Fund, Dream Vacation, Tech Upgrades).
- Visual progress bars with automated round-up allocations directly towards active goals.

### 💳 Digital Wallet & Bank Linkage
- Real-time balance and round-up accumulator tracking.
- Safe bank account linkage interface.
- Quick deposit, withdrawal, and round-up toggles.

### 💡 Smart Financial Insights
- Automated suggestions based on spending patterns (e.g., high weekend spending alerts, recurring subscription notifications).
- AI-inspired personalized financial advice to optimize spare cash utilization.

### 🔐 Secure Authentication & Route Protection
- Full JWT (JSON Web Tokens) token-based authentication flow.
- Password hashing with **Bcrypt.js**.
- Client-side route protection with React Router navigation guards.

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** [React 18](https://react.dev/) (Hooks, Context, Functional Components)
- **Build Tool:** [Vite 5](https://vitejs.dev/) (Ultra-fast HMR and bundling)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) & Custom CSS Design System
- **Routing:** [React Router DOM v6](https://reactrouter.com/)
- **Charts & Data Viz:** [Recharts](https://recharts.org/)
- **Icons:** [Lucide React](https://lucide.dev/) & Feather Icons

### Backend
- **Runtime:** [Node.js](https://nodejs.org/)
- **Framework:** [Express.js](https://expressjs.com/)
- **Database:** [MongoDB](https://www.mongodb.com/) via [Mongoose ODM](https://mongoosejs.com/)
- **Security & Auth:** [JSON Web Token (JWT)](https://jwt.io/) & [Bcrypt.js](https://github.com/dcodeIO/bcrypt.js)
- **Environment Management:** [dotenv](https://github.com/motdotla/dotenv)
- **CORS:** Cross-Origin Resource Sharing enabled for seamless API communication

---

## 📁 Project Structure

```text
Growie/
├── backend/                    # Express.js REST API & Database Models
│   ├── models/                 # Mongoose schemas (User, etc.)
│   │   └── User.js
│   ├── routes/                 # Express API route handlers
│   │   └── auth.js             # Authentication endpoints (signup, login)
│   ├── .env                    # Backend environment config (Private)
│   ├── .env.example            # Sample environment variables template
│   ├── package.json            # Backend dependencies & scripts
│   └── server.js               # Backend entry point and DB connection
├── src/                        # React Frontend Application
│   ├── components/             # Reusable UI components
│   │   └── dashboard/          # Dashboard specific sub-components
│   │       ├── AnalyticsCharts.jsx
│   │       ├── InvestmentBreakdown.jsx
│   │       ├── OverviewCards.jsx
│   │       ├── SavingsGoals.jsx
│   │       ├── Sidebar.jsx
│   │       ├── SmartInsights.jsx
│   │       ├── TopNavbar.jsx
│   │       ├── TransactionsList.jsx
│   │       └── WalletSection.jsx
│   ├── pages/                  # Top-level view pages & routed views
│   │   ├── AnalyticsPage.jsx   # Dedicated deep analytics
│   │   ├── Dashboard.jsx       # Main user dashboard overview
│   │   ├── LandingPage.jsx     # Marketing landing page
│   │   ├── Login.jsx           # User authentication login
│   │   ├── Register.jsx        # User account registration
│   │   ├── TransactionsPage.jsx# Transaction records & round-ups
│   │   └── WalletPage.jsx      # Wallet and bank integration
│   ├── styles/                 # Custom CSS & landing styles
│   ├── App.jsx                 # App routing & authentication state
│   ├── index.css               # Tailwind directives and global CSS
│   └── main.jsx                # React root render
├── index.html                  # HTML template
├── package.json                # Frontend dependencies & scripts
├── postcss.config.js           # PostCSS configuration
├── tailwind.config.js          # Tailwind styling configuration
├── vite.config.js              # Vite server & build configuration
└── README.md                   # Project documentation
```

---

## 🚀 Getting Started & How to Run

Follow these step-by-step instructions to get the application running locally on your machine.

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (version 18.x or later recommended)
- [npm](https://www.npmjs.com/) (bundled with Node.js)
- [MongoDB](https://www.mongodb.com/) (a local instance or a free [MongoDB Atlas](https://www.mongodb.com/atlas) cluster)
- [Git](https://git-scm.com/)

---

### Step 1: Clone the Repository

```bash
git clone https://github.com/Jayasri-k-01/Growie.git
cd Growie
```

---

### Step 2: Set Up & Start the Backend

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```

2. Install backend dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   - Create a `.env` file in the `backend/` directory (or copy from `.env.example`):
     ```bash
     cp .env.example .env
     ```
   - Populate the `.env` file with your settings:
     ```env
     PORT=5000
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret_key
     ```

4. Start the backend server:
   ```bash
   npm run dev
   ```
   *The server will start at `http://localhost:5000` and connect to MongoDB.*

---

### Step 3: Set Up & Start the Frontend

1. Open a new terminal tab/window and return to the root folder:
   ```bash
   cd Growie
   ```

2. Install frontend dependencies:
   ```bash
   npm install
   ```

3. Launch the Vite development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```text
   http://localhost:5173
   ```

---

## 🖥️ How to Use the App

1. **Explore the Landing Page**:
   - Visit `http://localhost:5173/` to view the modern landing page showcasing Growie's value proposition, features, and user testimonials.
2. **Create an Account or Sign In**:
   - Click **Get Started** or **Login**.
   - Register a new account or log in with test credentials (pre-filled demo credentials available).
3. **Navigate Your Dashboard**:
   - View your total balance, auto-invested amount, monthly savings, and active growth rate.
   - Inspect the interactive **Investment Breakdown** to see asset allocations in Stocks, Crypto, and Mutual Funds.
4. **Track Analytics**:
   - Switch to the **Analytics** view from the sidebar to inspect detailed spending-vs-savings patterns and ROI trajectories.
5. **Manage Transactions & Round-Ups**:
   - Go to **Transactions** to review incoming purchase records, round-up calculations, and category insights.
6. **Manage Wallet & Bank Settings**:
   - Open **Wallet** to configure your round-up multiplier (1x, 2x, 3x) and review linked bank details.

---

## 📡 API Endpoints Reference

| Method | Endpoint | Description | Access |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/auth/signup` | Register a new user (`name`, `email`, `password`) | Public |
| `POST` | `/api/auth/login` | Authenticate user & receive JWT token (`email`, `password`) | Public |

---

## 🗺️ Roadmap & Future Enhancements

- [ ] **Open Banking / UPI Integration**: Connect live bank feeds and automated UPI debit mandates.
- [ ] **Automated Portfolio Rebalancing**: AI-driven dynamic rebalancing based on risk appetite.
- [ ] **Crypto Staking & High-Yield Vaults**: Integrate automated DeFi or fixed-yield cash reserves.
- [ ] **Gamified Milestones & Badges**: Unlock savings streaks, milestones, and referral rewards.
- [ ] **Mobile App**: React Native mobile counterpart for iOS and Android.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 👤 Author & Acknowledgments

- **Repository:** [Growie on GitHub](https://github.com/Jayasri-k-01/Growie.git)
- Developed with ❤️ for smarter everyday investing.
