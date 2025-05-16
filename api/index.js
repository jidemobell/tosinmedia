import { handleTestimonials } from "./routes/testimonials.js";
import { handleUser } from "./routes/user.js";
import { handleEvents } from "./routes/events.js";
import { handleAdmin } from "./routes/admin.js";
import { handleBookings } from "./routes/bookings.js";
import { handleAppointments } from './routes/appointments.js';


export default {
  async fetch(request) {
    const url = new URL(request.url);

    // Handle preflight OPTIONS requests
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: {
          "Access-Control-Allow-Origin": "*", // Allow all origins (replace '*' with your frontend domain in production)
          "Access-Control-Allow-Methods": "GET, POST, PUT, OPTIONS", // Allowed methods
          "Access-Control-Allow-Headers": "Content-Type", // Allowed headers
        },
      });
    }

    // Route: /api/testimonials
    if (url.pathname.startsWith("/api/admin")) {
      return handleAdmin(request);
    }

    // Route: /api/testimonials
    if (url.pathname.startsWith("/api/testimonials")) {
      return handleTestimonials(request);
    }

    // Route: /api/user/*
    if (url.pathname.startsWith("/api/user")) {
      return handleUser(request);
    }

    // Route: /api/events/*
    if (url.pathname.startsWith("/api/events")) {
      return handleEvents(request);
    }

    // Route: /api/bookings/*
    if (url.pathname.startsWith("/api/bookings")) {
      return handleBookings(request);
    }

    // Inside handleAdmin(request):
    if (url.pathname.startsWith("/api/appointments")) {
      return handleAppointments(request);
    }

    // Default: 404 Not Found
    return new Response("Not Found", { status: 404 });
  },
};

// Handler for /api/testimonials
// async function handleTestimonials(request) {
//   const testimonials = [
//     {
//       id: 1,
//       name: 'Luise Hanerika',
//       role: 'Fashion Designer',
//       message: 'TosinPeter Photography captured my special moments beautifully!',
//       image: '/img/author-image/author-image-3.png',
//     },
//     {
//       id: 2,
//       name: 'John Doe',
//       role: 'Event Planner',
//       message: 'The professionalism and creativity were outstanding!',
//       image: null,
//     },
//   ];

//   return new Response(JSON.stringify(testimonials), {
//     status: 200,
//     headers: { 'Content-Type': 'application/json' },
//   });
// }

// // Handler for /api/user
// async function handleUser(request) {
//   const user = {
//     id: 1,
//     name: 'Jane Doe',
//     email: 'jane.doe@example.com',
//   };

//   return new Response(JSON.stringify(user), {
//     status: 200,
//     headers: { 'Content-Type': 'application/json' },
//   });
// }
