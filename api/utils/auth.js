// Example: Hardcoded admin token (for demo)
// const ADMIN_TOKEN = 'your-very-secret-admin-token';
// Check if token is valid AND is for an admin
import jwt from 'jsonwebtoken';
const JWT_SECRET = 'your-jwt-secret';

// Generate a JWT for a user (admin or regular)
function generateToken({ userId, username, role }) {
  return jwt.sign(
    { userId, username, role },
    JWT_SECRET,
    { expiresIn: '7d' }
  );
}
function isValidAdminToken(token) {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded.role === 'admin';
  } catch {
    return false;
  }
}

// Example: JWT-based user token
// import jwt from 'jsonwebtoken';
// const JWT_SECRET = 'your-jwt-secret';

// Get userId from any valid token
function getUserIdFromToken(token) {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded.userId;
  } catch {
    return null;
  }
}


export { generateToken, isValidAdminToken, getUserIdFromToken };