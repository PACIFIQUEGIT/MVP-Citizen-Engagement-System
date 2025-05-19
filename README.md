# MVP-Citizen-Engagement-System

🏛️ MVP Citizen Engagement System
A lightweight backend-driven system to help citizens submit complaints and feedback related to public services. The platform categorizes issues into Education, Health, and Sport, and routes them to the appropriate agency for timely action.


📌 Problem Statement
Complaints are often handled via fragmented or manual channels, leading to delays, unresolved issues, and poor citizen satisfaction.


✅ Project Goal
Build a Minimum Viable Product (MVP) of a Citizen Engagement System that:
Accepts complaints/feedback from citizens,
Categorizes and routes them (e.g., to Education, Health, Sport departments),
Allows tracking of complaint status,
Supports basic admin responses to submissions.


🔧 Key Features

👥 Citizens
Submit complaints via a web form,
Choose a category (Education, Health, Sport),
Track status (Pending, In Progress, Resolved).

🛠 Admin
View and manage categorized complaints,
Respond to each complaint,
Update ticket status.

🛠 Tech Stack
Tech	Use
Node.js	Server environment
Express.js	Backend routing & API
MongoDB	Database
HTML/CSS/JS	Frontend interface (basic)
JWT	Authentication for admin
dotenv	Environment configuration

📁 Folder Structure
mvp_citizen_engagement_system/
├── models/
│   ├── Complaint.js
│   └── Admin.js
├── routes/
│   ├── auth.js
│   └── complaints.js
├── index.html             
├── admin.html             
├── admin-signup.html             
├── tracking.html             
├── server.js
├── db.js
├── .env
├── package.json├── package-lock.json
└── README.md

⚙️ Setup Instructions
Clone the repo

git clone https://github.com/yourusername/MVP-Citizen-Engagement-System.git
cd MVP_Citizen_Engagement_System

Install dependencies:
npm install,

Set up environment variables:

Create a .env file in the root:

MONGO_URI=your-mongodb-uri
JWT_SECRET=your-secret-key
PORT=3000

Start the application:

npm start

🧠 Potential Extensions
Admin dashboard with charts and filtering,
Email notifications to citizens,
Audit log of complaint updates,
Mobile responsiveness or mobile app frontend.

📎 Submission Link
GitHub Repo: MVP-Citizen-Engagement-System

