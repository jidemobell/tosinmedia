Database Design
Here’s a suggested database schema:

Tables
users

id (Primary Key)
username (Unique)
email
password (Hashed)
created_at
profile_status (e.g., active, closed)
appointments

id (Primary Key)
user_id (Foreign Key to users.id)
event_name
created_date
first_call_date
closed_date
status (e.g., pending, completed, paid)
payments

id (Primary Key)
appointment_id (Foreign Key to appointments.id)
amount
payment_method (e.g., stripe, verbal)
status (e.g., paid, unpaid)
testimonials

id (Primary Key)
user_id (Foreign Key to users.id)
event_name
message
image (Optional)
created_at
admin

id (Primary Key)
username
password (Hashed)

