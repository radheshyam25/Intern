# Backend Intern Assignment - Bingbag

## Setup Instructions

Follow these steps to set up and run the application:

### 1. Fork the Repository
First, fork this repository to your GitHub account and clone it to your local machine using:
```sh
git clone https://github.com/your-username/Intern.git
cd Intern
```

### 2. Install Dependencies
Ensure you have Node.js installed, then install the required dependencies using:
```sh
npm install
```
This will install all the packages listed in `package.json`.

### 3. Configure the Environment Variables
Create a `.env` file in the root directory and add the following environment variables:

#### **MongoDB Connection String**
Obtain your MongoDB connection URL and set it as:
```sh
DATABASE_URL=your_mongodb_connection_string
```

#### **Generate a Secret Token**
Run the following command to generate a secure token:
```sh
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```
Copy the generated token and store it in the `.env` file as:
```sh
ACCESS_TOKEN_URL=your_generated_secret_token
REFRESH_TOKEN_URL=your_generated_secret_token
```

### 4. Start the Application
Once everything is set up, start the application using:
```sh
npm run start
```
This will launch the backend server.

### 5. Verify the Setup
Check the terminal for any errors. If everything runs successfully, your backend server should be up and running.

---

For any issues, feel free to reach out. Happy coding! 🚀

