# MySQL Database Setup for Ravi Scrap Buyers

## Option 1: Using MySQL Command Line

### Step 1: Open MySQL
```bash
mysql -u root -p
```
Enter your MySQL root password.

### Step 2: Create Database
```sql
CREATE DATABASE scrap_business;
```

### Step 3: Verify Database
```sql
SHOW DATABASES;
```

### Step 4: Use Database
```sql
USE scrap_business;
```

### Step 5: Exit MySQL
```sql
exit;
```

---

## Option 2: Using MySQL Workbench

1. Open MySQL Workbench
2. Connect to your local MySQL server
3. Click on "Create a new schema" button (cylinder icon)
4. Name: `scrap_business`
5. Click "Apply"
6. Click "Apply" again to confirm
7. Click "Finish"

---

## Table Creation

**NOTE:** The tables will be created automatically when you run the Flask backend for the first time!

The Flask app will create this table:

```sql
CREATE TABLE pickup_requests (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    address TEXT NOT NULL,
    scrap_type VARCHAR(100) NOT NULL,
    quantity VARCHAR(50) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

---

## Verify Table Creation

After running the backend for the first time:

```sql
USE scrap_business;
SHOW TABLES;
DESCRIBE pickup_requests;
```

---

## View Pickup Requests

```sql
SELECT * FROM pickup_requests;
```

---

## Common MySQL Commands

### View all databases
```sql
SHOW DATABASES;
```

### Select database
```sql
USE scrap_business;
```

### View all tables
```sql
SHOW TABLES;
```

### View table structure
```sql
DESCRIBE pickup_requests;
```

### View all records
```sql
SELECT * FROM pickup_requests ORDER BY created_at DESC;
```

### Count total requests
```sql
SELECT COUNT(*) FROM pickup_requests;
```

### View recent 10 requests
```sql
SELECT * FROM pickup_requests ORDER BY created_at DESC LIMIT 10;
```

### Search by scrap type
```sql
SELECT * FROM pickup_requests WHERE scrap_type = 'Iron Scrap';
```

### Delete a specific request
```sql
DELETE FROM pickup_requests WHERE id = 1;
```

### Delete all requests (CAUTION)
```sql
TRUNCATE TABLE pickup_requests;
```

---

## Default MySQL Configuration

**Host:** localhost  
**Port:** 3306  
**User:** root  
**Password:** (set during MySQL installation)  
**Database:** scrap_business

Update these in your `backend/.env` file:

```
MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PASSWORD=your_password_here
MYSQL_DB=scrap_business
```

---

## Troubleshooting

### Can't connect to MySQL
```bash
# Windows - Start MySQL service
net start MySQL80

# Check if MySQL is running
netstat -an | findstr :3306
```

### Forgot MySQL password
- Use MySQL installer to reset root password
- Or reinstall MySQL

### Access denied error
- Check username and password in .env
- Ensure user has privileges:
```sql
GRANT ALL PRIVILEGES ON scrap_business.* TO 'root'@'localhost';
FLUSH PRIVILEGES;
```

---

## Backup Database

```bash
# Export database
mysqldump -u root -p scrap_business > backup.sql

# Import database
mysql -u root -p scrap_business < backup.sql
```

---

## Production Recommendations

For production, create a dedicated MySQL user:

```sql
CREATE USER 'scrap_user'@'localhost' IDENTIFIED BY 'strong_password';
GRANT ALL PRIVILEGES ON scrap_business.* TO 'scrap_user'@'localhost';
FLUSH PRIVILEGES;
```

Then update `.env`:
```
MYSQL_USER=scrap_user
MYSQL_PASSWORD=strong_password
```

---

**Database setup complete!** 🎉
