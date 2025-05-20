// POST /api/user/login
// GET /api/user/profile
// POST /api/user/make-payment
// POST /api/user/submit-testimonial
// PUT /api/user/close-profile

// {
//   "users": {
//     "userId1": {
//       "username": "janedoe",
//       "name": "Jane Doe",
//       "role": "user",
//       "password": "hashedpassword",
//       "createdAt": 1234567890
//     }
//   }
// }

// Adjust the import path as needed

import bcrypt from "bcryptjs"; // Use bcryptjs for hashing
import { initializeApp, getApps } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

import {
  isValidAdminToken,
  getUserIdFromToken,
  generateToken,
} from "../utils/auth.js"; // Adjust the import path as needed

const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "x-admin-token, Content-Type",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS"
  };

// Firebase config (reuse your shared config if possible)
const firebaseConfig = {
  apiKey: "AIzaSyAV9cbQPddGS927a-XJkgkMdiwwZNUbV9I",
  authDomain: "petermark-9ba50.firebaseapp.com",
  databaseURL: "https://petermark-9ba50-default-rtdb.firebaseio.com",
  projectId: "petermark-9ba50",
  storageBucket: "petermark-9ba50.firebasestorage.app",
  messagingSenderId: "892056005886",
  appId: "1:892056005886:web:f9d7858357d71cf9ea89af",
};

// Prevent re-initialization
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
const database = getDatabase(app);

// Handler for /api/user
async function handleUser(request) {
  const url = new URL(request.url);

  // Route: POST /api/user/login
  // Route: POST /api/user/login
  if (url.pathname === "/api/user/login" && request.method === "POST") {
    const body = await request.json();
    const { username, password } = body;

    // Fetch all users from Firebase
    const usersSnap = await fetch(
      "https://petermark-9ba50-default-rtdb.firebaseio.com/users.json"
    );
    const users = await usersSnap.json();

    // Find user by username
    const userEntry = Object.entries(users || {}).find(
      ([id, user]) => user.username === username
    );

    if (!userEntry) {
      return new Response(JSON.stringify({ error: "Invalid credentials" }), {
        status: 401,
        headers: corsHeaders
      });
    }

    const [userId, user] = userEntry;

    // Compare password using bcrypt
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return new Response(JSON.stringify({ error: "Invalid credentials" }), {
        status: 401, headers: corsHeaders
      });
    }

    // Generate JWT token with userId and role
    const token = generateToken({
      userId,
      username: user.username,
      role: user.role,
    });

    // Return user info (never return password) and token
    return new Response(
      JSON.stringify({
        message: "Login successful",
        user: {
          id: userId,
          username: user.username,
          name: user.name,
          role: user.role,
        },
        token,
      }),
      {
        status: 200,
        headers: corsHeaders,
      }
    );
  }

  // Route: GET /api/user/profile
  if (url.pathname === "/api/user/profile" && request.method === "GET") {
    const userToken = request.headers.get("x-user-token");
    const userId = getUserIdFromToken(userToken);

    if (!userId) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401, headers: corsHeaders
      });
    }

    // Fetch user from Firebase
    const userSnap = await fetch(
      `https://petermark-9ba50-default-rtdb.firebaseio.com/users/${userId}.json`
    );
    const user = await userSnap.json();

    if (!user) {
      return new Response(JSON.stringify({ error: "User not found" }), {
        status: 404, headers: corsHeaders
      });
    }

    // Optionally, fetch bookings and testimonials for this user here

    return new Response(
      JSON.stringify({
        profile: {
          id: userId,
          username: user.username,
          name: user.name,
          role: user.role,
          // ...other fields
        },
        // bookings,
        // testimonials,
      }),
      {
        status: 200,
        headers: corsHeaders
      }
    );
  }

  // Route: POST /api/user/submit-testimonial
  if (
    url.pathname === "/api/user/submit-testimonial" &&
    request.method === "POST"
  ) {
    const userToken = request.headers.get("x-user-token");
    const userId = getUserIdFromToken(userToken);

    if (!userId) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401, headers: corsHeaders
      });
    }

    const body = await request.json();
    const { event, message } = body;

    // Save the testimonial (add userId if needed)
    // Example: await push(ref(database, 'testimonials'), { userId, event, message, createdAt: Date.now() });

    return new Response(
      JSON.stringify({ message: "Testimonial submitted successfully", event }),
      {
        status: 201,
        headers: corsHeaders
      }
    );
  }

  // Route: POST /api/user/create
  // Route: POST /api/user/create
  // if (url.pathname === "/api/user/create" && request.method === "POST") {
  //   // 1. Authenticate admin (example: check admin token or session)
  //   const adminToken = request.headers.get("x-admin-token");
  //   if (!adminToken || !isValidAdminToken(adminToken)) {
  //     return new Response(JSON.stringify({ error: "Unauthorized" }), {
  //       status: 401,
  //     });
  //   }

  //   try {
  //     const body = await request.json();
  //     const { name, username, password } = body;

  //     if (!name || !username || !password) {
  //       return new Response(
  //         JSON.stringify({ error: "Missing required fields" }),
  //         {
  //           status: 400,
  //           headers: {
  //             "Content-Type": "application/json",
  //             "Access-Control-Allow-Origin": "*",
  //           },
  //         }
  //       );
  //     }

  //     // Hash the password
  //     const hashedPassword = await bcrypt.hash(password, 10);
  //     const userId = crypto.randomUUID();

  //     // Always assign role "user"
  //     await set(ref(database, "users/" + userId), {
  //       name,
  //       username,
  //       password: hashedPassword,
  //       role: "user",
  //       createdAt: Date.now(),
  //     });

  //     return new Response(
  //       JSON.stringify({ message: "User created successfully", userId }),
  //       {
  //         status: 201,
  //         headers: {
  //           "Content-Type": "application/json",
  //           "Access-Control-Allow-Origin": "*",
  //         },
  //       }
  //     );
  //   } catch (error) {
  //     return new Response(
  //       JSON.stringify({
  //         error: "Failed to create user",
  //         details: error.message,
  //       }),
  //       {
  //         status: 500,
  //         headers: {
  //           "Content-Type": "application/json",
  //           "Access-Control-Allow-Origin": "*",
  //         },
  //       }
  //     );
  //   }
  // }

  // Route: POST /api/user/change-password
  if (
    url.pathname === "/api/user/change-password" &&
    request.method === "POST"
  ) {
    // 1. Authenticate user (e.g., via session/JWT)
    const userToken = request.headers.get("x-user-token");
    const userId = getUserIdFromToken(userToken); // implement this

    if (!userId) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401, headers: corsHeaders
      });
    }

    const body = await request.json();
    const { oldPassword, newPassword } = body;

    // Fetch user from Firebase
    const userSnap = await fetch(
      `https://petermark-9ba50-default-rtdb.firebaseio.com/users/${userId}.json`
    );
    const user = await userSnap.json();

    // Verify old password
    const valid = await bcrypt.compare(oldPassword, user.password);
    if (!valid) {
      return new Response(
        JSON.stringify({ error: "Invalid current password" }),
        { status: 401, headers: corsHeaders }
      );
    }

    // Hash and update new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await set(ref(database, "users/" + userId + "/password"), hashedPassword);

    return new Response(
      JSON.stringify({ message: "Password changed successfully" }),
      { status: 200, headers: corsHeaders }
    );
  }

  // Handle unsupported methods
  return new Response(JSON.stringify({ error: "Method not allowed" }), {
    status: 405,
    headers: corsHeaders
  });
}

export { handleUser };
