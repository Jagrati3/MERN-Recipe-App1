## **Recipe Sharing Platform**  
A full-stack web application for users to **create, share, and manage recipes** in real-time, built using **MERN Stack** (MongoDB, Express.js, React.js, Node.js).

---

## **Table of Contents**  
- [Introduction](#introduction)  
- [Features](#features)  
- [Technology Stack](#technology-stack)  
- [Project Setup](#project-setup)  
- [Frontend Setup](#frontend-setup)  
- [Backend Setup](#backend-setup)  
- [Database Setup](#database-setup)  
- [Deployment on Render](#deployment-on-render)  
- [Environment Variables](#environment-variables)  
- [API Endpoints](#api-endpoints)  
- [Future Improvements](#future-improvements)  
- [Contributors](#contributors)  

---

## **Introduction**  
The **Recipe Sharing Platform** is designed for food lovers to **create, share, and explore new recipes**. Users can **sign up, log in, add recipes, upload images, comment, like, and edit their posts**. The app provides **real-time updates** and a **modern UI** for a seamless experience.

---

## **Features**  
✅ User authentication with JWT (Login/Signup)  
✅ Create, edit, and delete recipes  
✅ Upload images using **Cloudinary**  
✅ Like, comment, and interact with other users' recipes  
✅ Search and filter recipes by category  
✅ Real-time updates with **React State Management**  
✅ Secure backend with **ExpressJS and MongoDB**  

---

## **Technology Stack**  

### **Frontend:**  
- **React.js** – UI development  
- **React Router** – Navigation  
- **Axios** – API calls  
- **Tailwind CSS** – Styling  
- **Cloudinary API** – Image uploads  

### **Backend:**  
- **Node.js** – Server-side processing  
- **Express.js** – Backend framework  
- **MongoDB & Mongoose** – Database  
- **JWT Authentication** – User authentication  
- **bcrypt.js** – Password hashing  
- **Multer** – File uploads  
- **Cors & dotenv** – Security and environment variables  

### **Deployment:**  
- **Render** – Deployment for frontend and backend  
- **MongoDB Atlas** – Cloud database  

---

## **Project Setup**  

### **1️⃣ Clone the Repository**  
```sh
git clone https://github.com/yourusername/recipe-sharing-app.git
cd recipe-sharing-app
```

---

## **Frontend Setup**  

### **2️⃣ Install Frontend Dependencies**  
```sh
cd frontend
npm install
```

### **3️⃣ Start the React App**  
```sh
npm start
```

🔹 **Frontend runs on** `http://localhost:3000/`

---

## **Backend Setup**  

### **4️⃣ Install Backend Dependencies**  
```sh
cd backend
npm install
```

### **5️⃣ Run the Backend Server**  
```sh
npm start
```

🔹 **Backend runs on** `http://localhost:5000/`

---

## **Database Setup (MongoDB Atlas)**  

### **6️⃣ Create a MongoDB Atlas Cluster**  
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas/database) and create an account.  
2. Create a new cluster and database.  
3. Get your **MongoDB connection string**.  

Example `.env` file in **backend**:  
```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/recipes
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

## **Deployment on Render**  

### **7️⃣ Deploy Backend on Render**  
1. Go to [Render](https://render.com/) and create an account.  
2. Click **New Web Service** → Select **backend repo** from GitHub.  
3. Set **Environment Variables** (same as `.env`).  
4. Choose **Node.js** as runtime, and set the start command:  
   ```sh
   npm start
   ```
5. Click **Deploy** and wait for deployment completion.  

✅ **Get the backend URL from Render**, e.g., `https://recipe-backend.onrender.com/`

---

### **8️⃣ Deploy Frontend on Render**  
1. Create a new **Render Web Service**.  
2. Select **frontend repo** and choose **React** as the framework.  
3. Set environment variable for backend API in **frontend** `.env` file:  
   ```env
   REACT_APP_API_URL=https://recipe-backend.onrender.com/
   ```
4. Click **Deploy**.  

✅ **Get the frontend URL from Render**, e.g., `https://recipe-frontend.onrender.com/`

---

## **Environment Variables**  
Set the following `.env` variables in Render:  

#### **Backend (.env)**  
```env
PORT=5000
MONGO_URI=your_mongo_atlas_url
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

#### **Frontend (.env)**  
```env
REACT_APP_API_URL=https://recipe-backend.onrender.com/
```

---

## **API Endpoints**  

### **Authentication**  
| Method | Endpoint         | Description         |
|--------|----------------|---------------------|
| POST   | `/api/auth/register` | User Signup |
| POST   | `/api/auth/login` | User Login |

### **Recipes**  
| Method | Endpoint         | Description         |
|--------|----------------|---------------------|
| GET    | `/api/recipes` | Get all recipes |
| POST   | `/api/recipes` | Create a new recipe |
| PUT    | `/api/recipes/:id` | Update a recipe |
| DELETE | `/api/recipes/:id` | Delete a recipe |

### **User Interaction**  
| Method | Endpoint         | Description         |
|--------|----------------|---------------------|
| POST   | `/api/recipes/:id/like` | Like a recipe |
| POST   | `/api/recipes/:id/comment` | Comment on a recipe |

---

## **Future Improvements**  
🔹 Add **recipe ratings & reviews**  
🔹 Implement **recipe video uploads**  
🔹 Add **email verification & password reset**  
🔹 Enable **recipe sharing on social media**  

---

## **Contributors**  
👤 **Jagrati**  
💻 GitHub: https://github.com/dashboard 

---
