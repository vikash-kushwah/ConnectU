# UniConnect(ConnectU)

UniConnect is a simple, streamlined social networking platform for college students, built using the MERN stack (MongoDB, Express.js, React.js, Node.js) with Vite.

## Features

1. **User Authentication**:
   - Sign-up, login, and logout functionality using JWT for authentication.
   - Profile creation and management with basic fields like name, bio, and profile picture.

2. **Posts and Interactions**:
   - Users can create, edit, and delete posts.
   - Liking and commenting on posts.
   - Basic content filtering to avoid spam.

3. **User Roles**:
   - General Users: Can create posts, comment, and interact with others.
   - Admins: Manage users and moderate content.

4. **Basic Moderation**:
   - A simple report feature to flag inappropriate content for admin review.

5. **Responsive Design**:
   - Use Tailwind CSS for styling to ensure mobile responsiveness and modern UI.

## Technology Stack

- **Frontend**: React.js with Vite, Tailwind CSS, Redux for state management.
- **Backend**: Node.js, Express.js.
- **Database**: MongoDB for data storage.
- **Authentication**: JWT, Passport.js.
- **File Storage**: Store images directly in MongoDB or integrate a basic cloud storage service like Cloudinary for image uploads.
- **Hosting**: Use Vercel or Netlify for the frontend and Heroku for the backend.

## Setup and Running

### Frontend

1. Navigate to the `client` directory:
   ```bash
   cd client
2. Install dependencies:
   ```bash
   npm install

3. Start the development server:
   ```bash
   npm run dev

### Backend
1. Navigate to the server directory:
   ```bash
   cd server

2. Install dependencies:
   ```bash
   npm install

3. Create a .env file and add your MongoDB URI and JWT secret:
   ```bash
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
