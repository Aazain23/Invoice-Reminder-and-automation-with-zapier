Invoice Reminder System

This project is a web application built using React for the frontend and Node.js for the backend. It allows users to log in using Google OAuth, view details of their due invoices, and potentially automate reminders and follow-up sequences for past-due invoices using Zapier or similar integration platforms.


Features

Google OAuth Integration: Users can log in securely using their Google accounts.
Invoice Management: View details of due invoices including amount, due date, and recipient information.
Automation (Zapier Integration):Automate reminders and follow-up sequences for past-due invoices using Zapier.
Responsive UI: Designed using React to provide a seamless user experience across devices.

Prerequisites

Before you begin, ensure you have the following installed on your development machine:

- Node.js (and npm or yarn)
- Git

Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repository.git
   cd your-repository
   ```

2. Install backend dependencies:

   ```bash
   cd saas-invoice-backend
   npm install
   ```

3. Install frontend dependencies:

   ```bash
   cd saas-invoice-frontend
   npm install
   ```

Usage

1. **Start the Backend Server:**

   ```bash
   cd saas-invoice-backend
   npm start
   ```

   The backend server should start on `http://localhost:5000` (or another port if configured differently).

2. Start the Frontend Development Server:

   ```bash
   cd saas-invoice-frontend
   npm start
   ```

   The frontend development server should start on `http://localhost:3000` and open automatically in your default browser.

3. Access the Application:

   Open your web browser and go to `http://localhost:3000` to access the application.


Backend Setup

- The backend is built using Node.js and provides API endpoints for user authentication via Google OAuth and invoice management.

- Ensure to set up environment variables (e.g., Google OAuth client ID, database connection strings) in the `.env` file in the `saas-invoice-backend` directory.

Frontend Setup

- The frontend is developed with React and includes components for Google OAuth login, invoice details display, and integration with Zapier for automation.

- Environment-specific variables can be set in `.env.development` and `.env.production` files in the `saas-invoice-frontend` directory.

Integration with Zapier

- For automation such as sending past-due invoice reminders, integrate with Zapier using webhook triggers or direct API calls from the backend.

- Configure Zapier workflows to react to events from your application and trigger actions like sending emails or notifications.
