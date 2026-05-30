# Frontend Logging Middleware - Implementation Stages

--------------------------------------------------

# Stage 1: Basic Logging Setup

Objective:
Create a functional logging system with the core Log() function and basic integration examples.

--------------------------------------------------

## What's Included

- Reusable Log() middleware function in src/middleware/logger.js
- Proper API integration with:
  http://4.224.186.213/evaluation-service/logs
- Example component with logging (LoginButton)
- Example API integration (userApi.js)
- Example page with logging (Home.jsx)
- Proper folder structure
- Build configuration using Vite
- CSS styling and basic UI

--------------------------------------------------

## Key Features

- Log function:
  
```javascript
Log(stack, level, packageName, message)
```

- All values are lowercase
- Async logging support
- Non-blocking UI
- Error handling
- Console logging for debugging

--------------------------------------------------

## Deliverables

```plaintext
Stage 1 Implementation includes:

├── src/middleware/logger.js
├── src/components/LoginButton.jsx
├── src/api/userApi.js
├── src/pages/Home.jsx
├── src/App.jsx
├── src/main.jsx
├── src/styles/
├── package.json
├── vite.config.js
└── README.md
```

--------------------------------------------------

## Testing Stage 1

```bash
npm run dev
```

Open:
```plaintext
http://localhost:3000
```

Testing Steps:
- Click Login button
- Check console logs
- Verify POST requests to logging API

--------------------------------------------------

# Stage 2: Enhanced Logging Features

Objective:
Expand logging coverage with advanced hooks, utilities, and state management.

--------------------------------------------------

## What's Added

### Custom Hooks
- useForm
- useFetch

### Utility Functions
- storage.js for localStorage logging

### Authentication Utilities
- auth/authUtils.js

### Configuration
- config/config.js

### Advanced Logging Levels
- debug
- info
- warn
- error
- fatal

### Improvements
- Better error handling
- Detailed logging
- State management logging

--------------------------------------------------

## New Files

```plaintext
Stage 2 additions:

├── src/hooks/useForm.js
├── src/hooks/useFetch.js
├── src/utils/storage.js
├── src/auth/authUtils.js
├── src/config/config.js
└── STAGES.md
```

--------------------------------------------------

## Features

- Multiple logging levels
- Hooks with built-in logging
- Authentication flow logging
- State management logging
- Configuration logging

--------------------------------------------------

## Usage Examples

### Forms

```javascript
const {
  values,
  handleChange,
  handleSubmit
} = useForm(
  { email: "", password: "" },
  async (values) => await loginUser(values)
);
```

--------------------------------------------------

### Data Fetching

```javascript
const {
  data,
  loading,
  error
} = useFetch(
  "https://api.example.com/data"
);
```

--------------------------------------------------

### Storage

```javascript
setStorageItem("token", authToken);

const token = getStorageItem("token");
```

--------------------------------------------------

### Authentication

```javascript
await login(
  "user@example.com",
  "password"
);

await logout();
```

--------------------------------------------------

# Stage 3: Future Enhancements

Planned Features:
- Local storage log persistence
- Log analytics
- Log filtering
- Advanced state management
- Error boundary logging
- Performance monitoring
- Session tracking
- Network request interceptors

--------------------------------------------------

# How Logging Works

All logs follow this format:

```javascript
Log(
  "frontend",
  "level",
  "package",
  "message"
)
```

--------------------------------------------------

## Valid Values

### Stack

```plaintext
frontend
```

--------------------------------------------------

### Levels

```plaintext
debug
info
warn
error
fatal
```

--------------------------------------------------

### Packages

```plaintext
api
component
hook
page
state
style
auth
config
middleware
utils
```

--------------------------------------------------

# Logging API

URL:
```plaintext
http://4.224.186.213/evaluation-service/logs
```

Method:
```plaintext
POST
```

Request Body:
```json
{
  "stack": "frontend",
  "level": "info",
  "package": "component",
  "message": "Button clicked"
}
```

--------------------------------------------------

# Running the Project

## Install Dependencies

```bash
npm install
```

--------------------------------------------------

## Start Development Server

```bash
npm run dev
```

--------------------------------------------------

## Build Project

```bash
npm run build
```

--------------------------------------------------

## Preview Production Build

```bash
npm run preview
```

--------------------------------------------------

# Project Structure

```plaintext
src/
├── api/
├── auth/
├── components/
├── config/
├── hooks/
├── middleware/
├── pages/
├── state/
├── styles/
├── utils/
├── App.jsx
└── main.jsx
```

--------------------------------------------------

# Evaluation Criteria

- Reusable Logger Function
- Proper API Integration
- Meaningful Logs
- Correct Package Names
- Frontend Integration
- Clean Project Structure
- Error Handling
- Async Operations

--------------------------------------------------

# Final Status

Stage 1 Completed
Stage 2 Completed
Ready for Evaluation
