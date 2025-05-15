API Requirements
GET /api/admin/view-bookings:

Returns a list of bookings with the following fields:
booking_user: The username of the user who made the booking.
event_name: The name of the event.
event_date: The date of the event.
booking_created: The date the booking was created.
completed: Whether the booking is completed (true or false).
amount: The amount paid for the booking.
payment_medium: The payment method (stripe, cash, etc.).
updated: The last updated date of the booking.
id: The unique ID of the booking (used for links).
GET /admin/bookings/history/:id:

Returns the history of changes for a specific booking.
GET /admin/receipts/stripe/:id:

Returns the receipt for a Stripe payment.
GET /admin/receipts/cash/:id:

Returns the receipt for a cash payment.
Features
Booking List:

Displays all bookings in a table, sorted from latest to earliest.
Links:

User: Links to the user's details page.
Event: Links to the event details page.
History: Links to the booking history page.
Payment Medium: Links to the receipt or payment status.
Formatting:

Dates are formatted using the formatDate function.
Responsive Design:

The table is styled to be clean and readable.
Next Steps
Backend Implementation:

Ensure the API endpoints (/api/admin/view-bookings, /admin/bookings/history/:id, etc.) are implemented and return the required data.
Testing:

Test the BookingManagement component with mock data to ensure it displays correctly.
Verify that all links (e.g., user details, event details, history, receipts) work as expected.
Enhancements:

Add pagination if the number of bookings grows large.
Include filters (e.g., by date, completed status) to make it easier to manage bookings.
Let me know if you need further assistance!




Implement bookings_history Table:

Create a separate route (e.g., GET /api/admin/bookings/history/:id) to fetch the history of changes for a specific booking.
Implement payments Table:

Create a route (e.g., GET /api/admin/payments/:id) to fetch payment details for a specific booking.
Integrate with Frontend:

Use the BookingManagement.svelte component to fetch and display the bookings from this API.
Pagination:

If the number of bookings grows large, consider adding pagination to the API (e.g., ?page=1&limit=10).
