# 🚀 QUICK START GUIDE

## ⚡ Fast Setup (5 Minutes)

### 1️⃣ Setup Backend (2 minutes)

```bash
# Navigate to backend folder
cd backend

# Install Python packages
pip install -r requirements.txt

# Create database in MySQL
mysql -u root -p
CREATE DATABASE scrap_business;
exit;

# Create .env file
copy .env.example .env

# Edit .env with your MySQL password
# Update MYSQL_PASSWORD=your_password

# Run server
python app.py
```

✅ Backend runs on: **http://localhost:5000**

---

### 2️⃣ Setup Frontend (3 minutes)

```bash
# Navigate to frontend folder
cd frontend

# Install packages
npm install

# Run development server
npm run dev
```

✅ Frontend runs on: **http://localhost:3000**

---

### 3️⃣ Update Your Details

**📞 Phone & WhatsApp:**
- Open: `frontend/src/components/Hero.jsx`
- Replace: `+91XXXXXXXXXX` with your number
- Replace: `91XXXXXXXXXX` with WhatsApp (without +)

**📍 Google Maps:**
1. Go to Google Maps
2. Search: "Sarojinidevi, Hyderabad" (or your exact address)
3. Click Share → Copy link
4. Update in:
   - `frontend/src/components/Hero.jsx`
   - `frontend/src/components/Contact.jsx`
   - `frontend/src/components/Footer.jsx`

**🗺️ Embedded Map:**
- In Google Maps Share dialog, click "Embed a map"
- Copy iframe code
- Update in: `frontend/src/components/Contact.jsx`

---

## 🧪 Test It

1. Open browser: **http://localhost:3000**
2. Fill the "Book Pickup" form
3. Submit and check success message
4. Check database:
```sql
USE scrap_business;
SELECT * FROM pickup_requests;
```

---

## ✅ Checklist Before Going Live

- [ ] Updated phone number
- [ ] Updated WhatsApp number
- [ ] Updated Google Maps links
- [ ] Updated embedded map
- [ ] Tested form submission
- [ ] MySQL password set in .env
- [ ] All sections displaying correctly

---

## 🎯 What You Get

✨ **8 Complete Sections:**
1. Navbar with smooth scrolling
2. Hero with Call/WhatsApp buttons
3. About Us with features
4. Services (NO prices shown)
5. Why Choose Us
6. Pickup Request Form (connects to backend)
7. Contact with Google Maps
8. Footer with business info

🎨 **Design:**
- Fully responsive (mobile, tablet, desktop)
- Green + Dark grey theme
- Professional animations
- Floating WhatsApp button

🔧 **Backend:**
- Flask REST API
- MySQL database
- CORS enabled
- Input validation

---

## 📱 View Pickup Requests

Access admin endpoint to see all requests:

**http://localhost:5000/api/pickups**

---

## 🆘 Quick Troubleshooting

**Backend won't start:**
```bash
# Check MySQL is running
# Verify .env file exists
# Ensure database 'scrap_business' exists
```

**Frontend won't start:**
```bash
# Delete node_modules and reinstall
rm -rf node_modules
npm install
```

**Form not working:**
- Check backend is running on port 5000
- Check browser console for errors
- Verify API URL in `src/services/api.js`

---

**Need help? Check the full README.md for detailed documentation!**

🎉 **Happy Coding!**
