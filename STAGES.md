# Frontend Logging Middleware - Implementation Stages

## Stage 1: Basic Logging Setup ✅

**Objective**: Create a functional logging system with the core `Log()` function and basic integration examples.

**What's Included:**
- ✅ Reusable `Log()` middleware function in `src/middleware/logger.js`
- ✅ Proper API integration with `http://4.224.186.213/evaluation-service/logs`
- ✅ Example component with logging (LoginButton)
- ✅ Example API integration (userApi.js)
- ✅ Example page with logging (Home.jsx)
- ✅ Project structure with proper folders
- ✅ Build configuration (Vite, package.json)
- ✅ CSS styling and basic UI

**Key Features:**
- Log function with parameters: `Log(stack, level, packageName, message)`
- All values are lowercase and follow exact specification
- Async logging that doesn't block UI
- Error handling and graceful failure
- Console logging for debugging

**Deliverables:**
```
Stage 1 Implementation includes:
├── src/middleware/logger.js           (Core logging function)
├── src/components/LoginButton.jsx     (Component with logging)
├── src/api/userApi.js                 (API calls with logging)
├── src/pages/Home.jsx                 (Page loading with logging)
├── src/App.jsx                        (Main app component)
├── src/main.jsx                       (React entry point)
├── src/styles/                        (CSS files)
├── package.json                       (Dependencies)
├── vite.config.js                     (Build config)
└── README.md                          (Documentation)
```

**Testing Stage 1:**
1. Start dev server: `npm run dev`
2. Open http://localhost:3000/
3. Click "Login" button - should log to console
4. Logs should POST to the evaluation API

---

## Stage 2: Enhanced Logging Features 🚀

**Objective**: Expand logging coverage with advanced hooks, utilities, and better state management.

**What's Added:**
- ✅ Custom hooks with logging:
  - `useForm` - Form state management with logging
  - `useFetch` - Data fetching with logging
- ✅ Utility functions with logging:
  - `storage.js` - localStorage operations with logging
- ✅ Authentication utilities:
  - `auth/authUtils.js` - Login/logout/token verification with logging
- ✅ Configuration management:
  - `config/config.js` - App configuration with logging
- ✅ More detailed logging across different levels:
  - Debug logs for development
  - Info logs for important events
  - Warning logs for potential issues
  - Error logs for failures
- ✅ Improved error handling and logging

**New Files:**
```
Stage 2 additions:
├── src/hooks/useForm.js               (Form hook with logging)
├── src/hooks/useFetch.js              (Fetch hook with logging)
├── src/utils/storage.js               (Storage utilities with logging)
├── src/auth/authUtils.js              (Auth functions with logging)
├── src/config/config.js               (Configuration with logging)
└── STAGES.md                          (This file - stage documentation)
```

**Features:**
- Multiple log levels for different scenarios
- Hooks for common patterns with built-in logging
- Authentication flow logging
- State management logging
- Configuration logging

**Usage Examples:**

### Forms
```javascript
const { values, handleChange, handleSubmit } = useForm(
  { email: "", password: "" },
  async (values) => await loginUser(values)
);
```

### Data Fetching
```javascript
const { data, loading, error } = useFetch("https://api.example.com/data");
```

### Storage
```javascript
setStorageItem("token", authToken);
const token = getStorageItem("token");
```

### Authentication
```javascript
await login("user@example.com", "password");
await logout();
```

---

## Stage 3 (Future): Advanced Features

**Planned enhancements:**
- Local storage integration for logs
- Log analytics and filtering
- Advanced state management (Context/Redux)
- Error boundary with logging
- Performance monitoring
- Session tracking
- Network request interceptors

---

## How Logging Works

All logs follow this pattern:

```javascript
Log("frontend", "level", "package", "message")
```

**Valid Values:**
- **Stack**: `"frontend"` (always lowercase)
- **Levels**: `"debug"`, `"info"`, `"warn"`, `"error"`, `"fatal"` (lowercase)
- **Packages**: `"api"`, `"component"`, `"hook"`, `"page"`, `"state"`, `"style"`, `"auth"`, `"config"`, `"middleware"`, `"utils"` (lowercase)

**API Endpoint:**
- URL: `http://4.224.186.213/evaluation-service/logs`
- Method: POST
- Body: `{ stack, level, package: packageName, message }`

---

## Running the Project

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Project Structure

```
src/
├── api/              # API calls with logging
├── auth/             # Authentication with logging
├── components/       # React components with logging
├── config/           # Configuration
├── hooks/            # Custom React hooks with logging
├── middleware/       # Logger middleware
├── pages/            # Page components with logging
├── state/            # State management
├── styles/           # CSS styles
├── utils/            # Utility functions with logging
├── App.jsx           # Main App component
└── main.jsx          # React entry point
```

---

## Evaluation Criteria

✅ **Reusable Logger Function** - Check `src/middleware/logger.js`
✅ **Proper API Integration** - Posts to correct endpoint
✅ **Meaningful Logs** - Clear messages describing events
✅ **Correct Package Names** - All lowercase, exact values
✅ **Frontend Integration** - Logs across multiple files
✅ **Clean Project Structure** - Organized folders
✅ **Error Handling** - Try-catch blocks with error logs
✅ **Async Operations** - Non-blocking log calls

