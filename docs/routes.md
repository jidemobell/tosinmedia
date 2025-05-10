Routes and Functionality
1. /admin (Admin Dashboard)
Features:

Create new users with a generic password.
Manage appointments (create, update, delete).
Send appointment reminders via email.
View all bookings and testimonials.
Mark bookings as paid (for verbal agreements).
View all user profiles and deactivate/close them.
Backend API Endpoints:

POST /api/admin/create-user
POST /api/admin/create-appointment
POST /api/admin/send-reminder
PUT /api/admin/mark-paid
GET /api/admin/view-bookings
GET /api/admin/view-testimonials
2. /username (User Login and Profile)
Features:

Users log in with the credentials provided by the admin.
View profile with:
Pending bookings.
Completed bookings.
Payment status.
Make payments via Stripe.
Leave testimonials or event-based comments.
Close their profile if desired.
Backend API Endpoints:

POST /api/user/login
GET /api/user/profile
POST /api/user/make-payment
POST /api/user/submit-testimonial
PUT /api/user/close-profile
3. /api (Backend API)
Admin APIs:

POST /api/admin/create-user
POST /api/admin/create-appointment
POST /api/admin/send-reminder
PUT /api/admin/mark-paid
GET /api/admin/view-bookings
GET /api/admin/view-testimonials
User APIs:

POST /api/user/login
GET /api/user/profile
POST /api/user/make-payment
POST /api/user/submit-testimonial
PUT /api/user/close-profile