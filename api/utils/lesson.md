How Session Tokens Work
1. API Side (Server)
The API generates the token (e.g., JWT) after a successful login.
The API verifies the token on every protected request (e.g., change password, view profile).
2. Client Side
The client (browser/app) stores the token after login (usually in localStorage, sessionStorage, or a secure cookie).
The client sends the token with every API request that needs authentication, usually in an HTTP header (e.g., Authorization: Bearer <token> or a custom header like x-user-token).


Typical Flow
Login:

Client sends username/password to /api/user/login.
API verifies credentials, generates a token, and returns it to the client.
Store Token:

Client saves the token (e.g., in localStorage).
Authenticated Requests:

Client includes the token in the header for protected API calls:



Security Tips
Never store tokens in plain cookies (unless using HttpOnly and Secure flags).
Never expose your secret keys on the client.
Always verify tokens on the API side before allowing access to protected routes.
Summary Table
Step	Client Side	API Side
Login	Receives & stores token	Generates & returns token
Authenticated call	Sends token in header	Verifies token
Sensitive action	Sends token in header	Verifies token, checks user
In short:

The token is stored and sent by the client.
The token is verified by the API on every protected request.
