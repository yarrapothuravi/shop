# Ravi Scrap Buyers - Full Stack Website

Complete business website for **Ravi Scrap Buyers** - A scrap buying business in Sarojinidevi, Hyderabad.

## 🏢 Business Information

**Shop Name:** Ravi Scrap Buyers  
**Tagline:** "We Buy All Types of Scrap at Market Best Price"  
**Location:** Sarojinidevi, Hyderabad & Nearby Areas  
**Full Address:** Ravi Scrap Buyers, Sarojinidevi, Hyderabad  
**Phone:** +91XXXXXXXXXX

---

## 📋 Tech Stack

### Frontend
- **React 18** - UI Library
- **Vite** - Build Tool
- **Axios** - HTTP Client
- **React Router** - Routing (if needed)
- **CSS3** - Styling

### Backend
- **Python Flask** - Web Framework
- **Flask-SQLAlchemy** - ORM
- **Flask-CORS** - Cross-Origin Resource Sharing
- **MySQL** - Database
- **PyMySQL** - MySQL Driver

---

## 📁 Project Structure

```
shop/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── WhyChooseUs.jsx
│   │   │   ├── PickupForm.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── FloatingWhatsApp.jsx
│   │   │   └── [CSS files for each component]
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
└── backend/
    ├── app.py
    ├── config.py
    ├── models.py
    ├── routes.py
    ├── requirements.txt
    └── .env.example
```

---

## 🚀 Setup Instructions

### Prerequisites

1. **Node.js** (v16 or higher)
2. **Python** (v3.8 or higher)
3. **MySQL Server** (v5.7 or higher)
4. **Git** (optional)

---

## 🔧 Backend Setup

### Step 1: Install MySQL

1. Download and install MySQL Server from [mysql.com](https://dev.mysql.com/downloads/)
2. During installation, set a root password
3. Start MySQL service

### Step 2: Create Database

Open MySQL command line or MySQL Workbench:

```sql
CREATE DATABASE scrap_business;
```

### Step 3: Install Python Dependencies

```bash
cd backend
pip install -r requirements.txt
```

### Step 4: Configure Environment Variables

Create a `.env` file in the `backend` folder:

```bash
cp .env.example .env
```

Edit `.env` file with your MySQL credentials:

```
MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PASSWORD=your_mysql_password
MYSQL_DB=scrap_business
SECRET_KEY=your-secret-key-here
```

### Step 5: Run Backend Server

```bash
python app.py
```

The backend will run on **http://localhost:5000**

The database tables will be created automatically on first run.

---

## 🎨 Frontend Setup

### Step 1: Install Node Dependencies

```bash
cd frontend
npm install
```

### Step 2: Update Configuration

**IMPORTANT:** Before running, update the following in the source files:

1. **Phone Number & WhatsApp:**
   - Open `src/components/Hero.jsx`
   - Replace `+91XXXXXXXXXX` with actual phone number
   - Replace `91XXXXXXXXXX` with WhatsApp number (without +)

2. **Google Maps Link:**
   - Open `src/components/Hero.jsx`
   - Replace the `googleMapsLink` URL with your actual Google Maps share link
   - Also update in `src/components/Contact.jsx`
   - Also update in `src/components/Footer.jsx`

3. **Update Embedded Map:**
   - Open `src/components/Contact.jsx`
   - Replace the iframe `src` with your Google Maps embed link

### Step 3: Run Development Server

```bash
npm run dev
```

The frontend will run on **http://localhost:3000**

---

## 🌐 How to Get Google Maps Link

1. Go to [Google Maps](https://maps.google.com)
2. Search for your business address: "Sarojinidevi, Hyderabad"
3. Click **Share** button
4. Copy the share link
5. Use this link in the code

For embedded map:
1. Click **Embed a map** tab in share dialog
2. Copy the iframe code
3. Extract the `src` URL
4. Replace in Contact.jsx

---

## 📊 Database Schema

### Table: `pickup_requests`

| Column       | Type         | Description                    |
|--------------|--------------|--------------------------------|
| id           | INTEGER      | Primary Key, Auto Increment    |
| name         | VARCHAR(100) | Customer name                  |
| phone        | VARCHAR(15)  | Customer phone number          |
| address      | TEXT         | Pickup address                 |
| scrap_type   | VARCHAR(100) | Type of scrap                  |
| quantity     | VARCHAR(50)  | Approximate quantity           |
| created_at   | DATETIME     | Timestamp (auto-generated)     |

---

## 🔌 API Endpoints

### Base URL: `http://localhost:5000/api`

#### 1. Create Pickup Request
```
POST /api/pickup
```

**Request Body:**
```json
{
  "name": "John Doe",
  "phone": "9876543210",
  "address": "123 Main Street, Hyderabad",
  "scrap_type": "Iron Scrap",
  "quantity": "50 kg"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Pickup request submitted successfully! We will contact you soon.",
  "data": {
    "id": 1,
    "name": "John Doe",
    "phone": "9876543210",
    "address": "123 Main Street, Hyderabad",
    "scrap_type": "Iron Scrap",
    "quantity": "50 kg",
    "created_at": "2026-03-02 10:30:45"
  }
}
```

#### 2. Get All Pickup Requests (Admin)
```
GET /api/pickups
```

**Response:**
```json
{
  "success": true,
  "count": 5,
  "data": [...]
}
```

#### 3. Health Check
```
GET /api/health
```

**Response:**
```json
{
  "success": true,
  "message": "API is running",
  "timestamp": "2026-03-02 10:30:45"
}
```

---

## 🎯 Features

### ✅ Implemented Features

1. **Navbar**
   - Responsive navigation
   - Smooth scrolling to sections
   - Mobile hamburger menu

2. **Hero Section**
   - Eye-catching design
   - Clickable location (opens Google Maps)
   - Call and WhatsApp buttons

3. **About Section**
   - Digital weighing
   - Instant UPI payment
   - Free doorstep pickup
   - Trusted business

4. **Services Section**
   - 8 service cards (NO PRICES)
   - Note about market-based pricing

5. **Why Choose Us**
   - 4 key benefits

6. **Pickup Request Form**
   - Complete form with validation
   - Connects to backend API
   - Success/error messages
   - Auto-clears on success

7. **Contact Section**
   - Full address
   - Phone number
   - Working hours
   - "Get Directions" button
   - Embedded Google Maps (responsive)

8. **Footer**
   - Business info
   - Clickable location
   - Quick links

9. **Floating WhatsApp Button**
   - Appears on scroll
   - Direct WhatsApp chat

### 🎨 Design Features

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Green + Dark Grey color theme
- ✅ Card layout with shadows
- ✅ Smooth scrolling
- ✅ Hover effects
- ✅ Professional animations
- ✅ All map links open in new tab

---

## 🚀 Production Deployment

### Frontend (Vercel/Netlify)

1. **Build the project:**
```bash
cd frontend
npm run build
```

2. **Deploy** the `dist` folder to Vercel or Netlify

3. **Update API URL:**
   - In `src/services/api.js`
   - Change `http://localhost:5000/api` to your production API URL

### Backend (Any Python Hosting)

1. **Set environment variables** on your hosting platform
2. **Install dependencies:**
```bash
pip install -r requirements.txt
```

3. **Run the app:**
```bash
python app.py
```

**Recommended Hosting:**
- Backend: PythonAnywhere, Heroku, AWS, DigitalOcean
- Database: MySQL on same server or managed MySQL (AWS RDS, DigitalOcean)
- Frontend: Vercel, Netlify, GitHub Pages

---

## 🧪 Testing

### Test Backend API

```bash
# Health check
curl http://localhost:5000/api/health

# Create pickup request
curl -X POST http://localhost:5000/api/pickup \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "phone": "9876543210",
    "address": "Test Address",
    "scrap_type": "Iron Scrap",
    "quantity": "50 kg"
  }'

# Get all requests
curl http://localhost:5000/api/pickups
```

---

## 📱 Important Customization

**BEFORE GOING LIVE, UPDATE:**

1. ✅ Phone number in Hero.jsx
2. ✅ WhatsApp number in Hero.jsx
3. ✅ WhatsApp number in FloatingWhatsApp.jsx
4. ✅ Google Maps links in Hero.jsx, Contact.jsx, Footer.jsx
5. ✅ Embedded map iframe in Contact.jsx
6. ✅ MySQL password in .env
7. ✅ API URL in api.js (for production)

---

## 🐛 Troubleshooting

### Backend Issues

**Database connection error:**
- Check MySQL is running
- Verify credentials in `.env`
- Ensure database `scrap_business` exists

**CORS error:**
- Flask-CORS is already enabled
- Check if frontend URL is correct

### Frontend Issues

**API not connecting:**
- Ensure backend is running on port 5000
- Check `src/services/api.js` for correct base URL

**Form not submitting:**
- Open browser console for errors
- Verify backend API is accessible

---

## 📧 Support

For any issues or customization needs, please refer to the code comments or create an issue.

---

## 📄 License

This project is created for **Ravi Scrap Buyers**. All rights reserved.

---

## 🎉 Credits

Built with ❤️ using React, Vite, Flask, and MySQL

---

**Made for:** Ravi Scrap Buyers, Sarojinidevi, Hyderabad  
**Version:** 1.0.0  
**Last Updated:** March 2, 2026
