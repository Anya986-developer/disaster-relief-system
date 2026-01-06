index.html
Landing page of the application
Provides navigation to Login and Registration pages
Entry point for users accessing the system

login.html
User authentication page
Allows registered users to log in using stored credentials
Redirects users to role-based dashboards after login

register.html
User registration page
Collects basic user details and role (Admin / Government / Victim)
Stores user data in localStorage for prototype-level authentication

admin.html
Admin dashboard
Manages system overview and high-level controls
Intended for monitoring users, funds, and platform activity

government.html
Government authority dashboard
Responsible for verifying disaster events and approving fund release
Acts as a trusted authority in the relief workflow

victim.html
Victim dashboard
Allows beneficiaries to view received aid
Simulates spending or usage of funds via UI interactions

auth.js
Handles authentication logic
Validates login credentials against stored user data
Manages session state and logout functionality

wallet.js
Handles wallet connection logic
Connects to MetaMask (or simulates wallet interaction)
Displays connected wallet address to the user

contract.js
Placeholder for blockchain smart contract integration
Contains fields for contract address and ABI
Intended to interact with deployed smart contracts for fund transfers

style.css
Centralized styling file
Defines layout, colors, buttons, and responsiveness
Ensures consistent UI across all pages
