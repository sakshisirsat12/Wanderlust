
# 🏕️ Wanderlust  

A full-stack travel experience platform built with the **MERN** (MongoDB, Express.js, React.js, Node.js) stack using the **MVC**(Model, View, Controller) architecture. This application allows users to explore, add,edit and delete listing, post and delete reviews and plan their trips seamlessl.  

## 📸 Screenshots  
 https://github.com/sakshisirsat12/Wanderlust/blob/8af338495cda8ff4f9de30e00090be530ba41c95/Screenshot%20(89).png

## ✨ Features  
✅ **User authentication** (Register/Login)  
✅ **Add & manage travel destinations** 🏝️  
✅ **Upload images for locations** 📷  
✅ **Write and view reviews** ✍️  
✅ **Interactive map integration** 🗺️  
✅ **Filter and search destinations** 🔍  
✅ **Responsive design for all devices** 📱  

## 🛠️ Prerequisites  
Before running this application, make sure you have the following installed:  
- **Node.js** (v14.0.0 or later)  
- **MongoDB**  
- **npm** or **yarn** package manager  

## 🚀 Installation  

### 1️⃣ Clone the repository  
```bash
git clone https://github.com/yourusername/wanderlust.git
cd wanderlust
```
  
### 2️⃣ Install dependencies  

#### Backend  
```bash
cd backend
npm install
```

#### Frontend  
```bash
cd ../frontend
npm install
```

### 3️⃣ Set up environment variables  
Create a `.env` file in the **backend** directory and add the following variables:  
```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

## 🎯 Running the Application

### Start the frontend development server  
bash
cd frontend
nodemon app.js

The application will be available at **[http://localhost:8080/listings]**.  

## 📂 Project Structure  
Wanderlust/
├── controllers/
├── init/
├── MODELS/
├── node_modules/
├── public/
├── routes/
├── utils/
├── views/
├── .env
├── .gitignore
├── app.js
├── cloudConfig.js
├── middleware.js
├── package.json
├── package-lock.json
├── README.md
├── schema.js

## 📡 API Endpoints  

### 🔐 Authentication  
- `POST /api/auth/register` - Register a new user  
- `POST /api/auth/login` - Login user  

### 🌍 Destinations  
- `GET /api/destinations` - Get all destinations  
- `POST /api/destinations` - Add a new destination  
- `GET /api/destinations/:id` - Get a specific destination  
- `PUT /api/destinations/:id` - Update a destination  
- `DELETE /api/destinations/:id` - Delete a destination  

### 📝 Reviews  
- `POST /api/reviews/:destinationId` - Add a review  
- `GET /api/reviews/:destinationId` - Get all reviews for a destination  
- `DELETE /api/reviews/:id` - Delete a review  

## 🛠️ Technologies Used  

### **Backend**  
- **Node.js**  
- **Express.js**  
- **MongoDB + Mongoose**  
- **JWT Authentication**  
- **Cloudinary (for image uploads)**  
- **dotenv**  

### **Frontend**   
- **React Router**  
- **Context API**  
- **Axios**  
- **BootstrapCSS** 

## 🤝 Contributing  

1. **Fork** the repository  
2. **Create a branch** (`git checkout -b feature/AmazingFeature`)  
3. **Commit your changes** (`git commit -m 'Add some AmazingFeature'`)  
4. **Push to the branch** (`git push origin feature/AmazingFeature`)  
5. **Open a Pull Request**  

## 📜 License  
This project is licensed under the **MIT License** - see the `LICENSE` file for details.  

## 🙌 Acknowledgments  
- MongoDB Documentation  
- Express.js Documentation  
- Bootstrap Documentation  
- Node.js Documentation  

## 📞 Support  
For support, open an **issue** in this repository.  



