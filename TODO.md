# TODO: Make Disaster Relief System Deployable

- [x] Update register.html: Add form submission handler to store user data in localStorage
- [x] Update login.html: Add form submission and validation against localStorage
- [x] Update victim.html: Add onclick handlers for spend buttons to simulate transactions
- [x] Update contract.js: Add instructions for filling contract address and ABI placeholders
- [x] Update auth.js: Enhance with validation logic
- [x] Add logout functionality to dashboard pages
- [x] Test pages locally (server running on http://localhost:8000)
- [x] Provide deployment instructions

## Deployment Instructions

### Static Hosting Options:
1. **GitHub Pages**: Push to GitHub repo, enable Pages in settings
2. **Netlify**: Drag & drop files or connect GitHub repo
3. **Vercel**: Connect GitHub repo or upload files
4. **Firebase Hosting**: Use Firebase CLI to deploy
5. **Surge**: Use `surge` command to deploy

### Blockchain Integration:
- Deploy smart contract to Ethereum testnet/mainnet
- Update contract.js with deployed address and ABI
- Users need MetaMask for wallet connection

### Testing:
- Local server running at http://localhost:8000
- Test registration, login, and dashboard functionality
- Verify wallet connection and spend simulations

The system is now fully deployable as a static website!
