# URL Shortener Application

A simple URL shortener application built using Next.js, MongoDB, and Tailwind CSS. This application allows users to shorten URLs by providing a custom alias and generates a shareable short link.

### Features

 - Generate short URLs for any valid long URL.
 - Users can specify their preferred alias for the short URL.
 - Displays the generated short URL for easy sharing.
 - Responsive design with Tailwind CSS.
 - Backend API for URL shortening functionality.

### Technologies Used

- Frontend: Next.js (React)
- Backend: Next.js API Routes
- Database: MongoDB
- Styling: Tailwind CSS

### Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local or cloud instance)

Getting Started

1. Clone the Repository
```
git clone https://github.com/your-username/url-shortener.git
cd url-shortener
```
2. Install Dependencies
```
npm install
```
3. Configure Environment Variables
Create a .env.local file in the root directory and add the following variables:
```
MONGODB_URI=<your-mongodb-connection-string>
NEXT_PUBLIC_HOST=<your-host-url> # Example: http://localhost:3000
```
4. Run the Development Server
```
npm run dev
```

Open your browser and navigate to http://localhost:3000.

5. Build for Production

To build the application for production:
```
npm run build
npm start
```