Invoice Reminder System

This project is a web application built using React for the frontend and Node.js for the backend. It allows users to log in using Google OAuth, view details of their due invoices, and potentially automate reminders and follow-up sequences for past-due invoices using Zapier or similar integration platforms.


Features

Google OAuth Integration: Users can log in securely using their Google accounts.
Invoice Management: View details of due invoices including amount, due date, and recipient information.
Automation (Zapier Integration):Automate reminders and follow-up sequences for past-due invoices using Zapier.
Responsive UI: Designed using React to provide a seamless user experience across devices.

Backend Setup

- The backend is built using Node.js and provides API endpoints for user authentication via Google OAuth and invoice management.

- Ensure to set up environment variables (e.g., Google OAuth client ID, database connection strings) in the `.env` file in the `saas-invoice-backend` directory.

Frontend Setup

- The frontend is developed with React and includes components for Google OAuth login, invoice details display, and integration with Zapier for automation.

- Environment-specific variables can be set in `.env.development` and `.env.production` files in the `saas-invoice-frontend` directory.

Integration with Zapier

- For automation such as sending past-due invoice reminders, integrate with Zapier using webhook triggers or direct API calls from the backend.

- Configure Zapier workflows to react to events from your application and trigger actions like sending emails or notifications.
