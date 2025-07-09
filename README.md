# ⚡ Vite Fullstack Starter

A production-grade fullstack boilerplate with the best of modern tooling:

- ⚛️ React + Vite + Tailwind + ShadCN UI
- 🔁 Redux Toolkit & Axios
- 🔐 JWT + OAuth2 + Protected Routing
- 🌍 Express / Django / Flask backend
- 💳 Payment Gateway Integration (Razorpay/Stripe)
- 🌘 Dark / Light mode toggle
- 🚀 Deployment Ready (Netlify + Render)
- 🧼 No console warnings/errors & version pinned
- 🌐 Environment variables for flexible backend config

## 🔧 Tech Stack

- Frontend:
  - React + Vite
  - Tailwind CSS + ShadCN UI
  - Axios + React Router DOM
  - Redux Toolkit + React Redux
  - Toast notifications via Sonner or React-Hot-Toast
  - Dark / Light mode toggle
  - PWA support (optional)
- Backend (choose one):
  - Express (Node.js)
  - Flask (Python)
  - Django + Django REST Framework
- Database: MongoDB / PostgreSQL / MySQL
- Auth: JWT + OAuth2 (Google/GitHub)
- Payment Gateway: Stripe / Razorpay
- Deployment: Netlify, Vercel (Frontend), Render, Railway, EC2 (Backend)

## 🗂️ Project Structure

\`\`\`
vite-fullstack-starter/
│
├── client/ # Frontend
│ ├── public/
│ ├── src/
│ │ ├── assets/
│ │ ├── components/
│ │ ├── features/ # Redux slices
│ │ ├── pages/
│ │ ├── routes/
│ │ ├── services/ # Axios base API
│ │ ├── hooks/
│ │ ├── App.jsx
│ │ └── main.jsx
│ ├── .env
│ └── vite.config.js
│
├── server/ # Backend (Express/Django/Flask)
│ ├── controllers/
│ ├── routes/
│ ├── models/
│ ├── middleware/
│ ├── config/
│ ├── .env
│ └── server.js / app.py
│
└── README.md
\`\`\`

## 🚀 Getting Started

### 📦 Clone the Repo

\`\`\`bash
git clone https://github.com/your-username/vite-fullstack-starter.git
cd vite-fullstack-starter
\`\`\`

### ⚙️ Setup Frontend

\`\`\`bash
cd client
npm install
npm run dev
\`\`\`

### 🛠️ Setup Backend (Express)

\`\`\`bash
cd server
npm install
npm run dev
\`\`\`

Or for Flask:
\`\`\`bash
cd server
pip install -r requirements.txt
python app.py
\`\`\`

## 📁 Environment Setup

### Frontend .env

\`\`\`
VITE_API_URL=http://localhost:5000/api
VITE_GOOGLE_CLIENT_ID=your-google-client-id
\`\`\`

### Backend .env (Express)

\`\`\`
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=super_secret_key
\`\`\`

## ✅ Features Checklist

- [x] React + Vite + Tailwind
- [x] ShadCN UI Components
- [x] Redux Toolkit Setup
- [x] Axios with Base API
- [x] Toast Notifications
- [x] OAuth (Google)
- [x] JWT Auth + Token Storage
- [x] Protected Routing
- [x] Payment Gateway Support
- [x] Light/Dark Theme Toggle
- [x] Working PWA (vite-plugin-pwa)
- [x] No Warnings or Errors
- [x] Backend Deployment Config

## 🔐 Protected Routes Example

\`\`\`js
const PrivateRoute = ({ children }) => {
const isLoggedIn = !!localStorage.getItem("token");
return isLoggedIn ? children : <Navigate to="/signin" />;
};
\`\`\`

## 🧾 Scripts

### Frontend

- \`npm run dev\` — Run dev server
- \`npm run build\` — Build project
- \`npm run preview\` — Preview production build

### Backend (Express)

- \`npm run dev\` — Run with nodemon

## 🧠 Tips

- Use \`redux-persist\` to save state
- Use Google button via \`@react-oauth/google\`# ⚡ Vite Fullstack Starter

A production-grade fullstack boilerplate with the best of modern tooling:

- ⚛️ React + Vite + Tailwind + ShadCN UI
- 🔁 Redux Toolkit & Axios
- 🔐 JWT + OAuth2 + Protected Routing
- 🌍 Express / Django / Flask backend
- 💳 Payment Gateway Integration (Razorpay/Stripe)
- 🌘 Dark / Light mode toggle
- 🚀 Deployment Ready (Netlify + Render)
- 🧼 No console warnings/errors & version pinned
- 🌐 Environment variables for flexible backend config

## 🔧 Tech Stack

- Frontend:
  - React + Vite
  - Tailwind CSS + ShadCN UI
  - Axios + React Router DOM
  - Redux Toolkit + React Redux
  - Toast notifications via Sonner or React-Hot-Toast
  - Dark / Light mode toggle
  - PWA support (optional)
- Backend (choose one):
  - Express (Node.js)
  - Flask (Python)
  - Django + Django REST Framework
- Database: MongoDB / PostgreSQL / MySQL
- Auth: JWT + OAuth2 (Google/GitHub)
- Payment Gateway: Stripe / Razorpay
- Deployment: Netlify, Vercel (Frontend), Render, Railway, EC2 (Backend)

## 🗂️ Project Structure

\`\`\`
vite-fullstack-starter/
│
├── client/ # Frontend
│ ├── public/
│ ├── src/
│ │ ├── assets/
│ │ ├── components/
│ │ ├── features/ # Redux slices
│ │ ├── pages/
│ │ ├── routes/
│ │ ├── services/ # Axios base API
│ │ ├── hooks/
│ │ ├── App.jsx
│ │ └── main.jsx
│ ├── .env
│ └── vite.config.js
│
├── server/ # Backend (Express/Django/Flask)
│ ├── controllers/
│ ├── routes/
│ ├── models/
│ ├── middleware/
│ ├── config/
│ ├── .env
│ └── server.js / app.py
│
└── README.md
\`\`\`

## 🚀 Getting Started

### 📦 Clone the Repo

\`\`\`bash
git clone https://github.com/your-username/vite-fullstack-starter.git
cd vite-fullstack-starter
\`\`\`

### ⚙️ Setup Frontend

\`\`\`bash
cd client
npm install
npm run dev
\`\`\`

### 🛠️ Setup Backend (Express)

\`\`\`bash
cd server
npm install
npm run dev
\`\`\`

Or for Flask:
\`\`\`bash
cd server
pip install -r requirements.txt
python app.py
\`\`\`

## 📁 Environment Setup

### Frontend .env

\`\`\`
VITE_API_URL=http://localhost:5000/api
VITE_GOOGLE_CLIENT_ID=your-google-client-id
\`\`\`

### Backend .env (Express)

\`\`\`
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=super_secret_key
\`\`\`

## ✅ Features Checklist

- [x] React + Vite + Tailwind
- [x] ShadCN UI Components
- [x] Redux Toolkit Setup
- [x] Axios with Base API
- [x] Toast Notifications
- [x] OAuth (Google)
- [x] JWT Auth + Token Storage
- [x] Protected Routing
- [x] Payment Gateway Support
- [x] Light/Dark Theme Toggle
- [x] Working PWA (vite-plugin-pwa)
- [x] No Warnings or Errors
- [x] Backend Deployment Config

## 🔐 Protected Routes Example

\`\`\`js
const PrivateRoute = ({ children }) => {
const isLoggedIn = !!localStorage.getItem("token");
return isLoggedIn ? children : <Navigate to="/signin" />;
};
\`\`\`

## 🧾 Scripts

### Frontend

- \`npm run dev\` — Run dev server
- \`npm run build\` — Build project
- \`npm run preview\` — Preview production build

### Backend (Express)

- \`npm run dev\` — Run with nodemon

## 🧠 Tips

- Use \`redux-persist\` to save state
- Use Google button via \`@react-oauth/google\`
- Ensure \`.env\` values don’t get pushed
- Format code with Prettier

## 🌐 Deployment

- Frontend: Vercel / Netlify
- Backend: Render / Railway / EC2
- Configure frontend \`.env\` to match backend URL

## 🤝 Contributing

PRs are welcome! Fork this repo and suggest features / improvements.

## 📝 License

This project is licensed under the MIT License.

- Ensure \`.env\` values don’t get pushed
- Format code with Prettier

## 🌐 Deployment

- Frontend: Vercel / Netlify
- Backend: Render / Railway / EC2
- Configure frontend \`.env\` to match backend URL

## 🤝 Contributing

PRs are welcome! Fork this repo and suggest features / improvements.

## 📝 License

This project is licensed under the MIT License.
