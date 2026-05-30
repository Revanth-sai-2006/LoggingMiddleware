# Frontend Logging System

A complete React frontend application with integrated logging system that sends logs to the evaluation service API.

## Project Structure

```
src/
├── api/              # API calls with logging
├── components/       # React components with logging
├── hooks/            # Custom React hooks
├── middleware/       # Logger middleware
├── pages/            # Page components
├── state/            # State management
├── styles/           # CSS styles
├── utils/            # Utility functions
├── auth/             # Authentication
├── config/           # Configuration
├── App.jsx           # Main App component
└── main.jsx          # Entry point
```

## Logging Function

The reusable `Log()` function is located in `src/middleware/logger.js`:

```javascript
Log(stack, level, packageName, message)
```

### Parameters:
- **stack**: Must be `"frontend"` (lowercase)
- **level**: One of `"debug"`, `"info"`, `"warn"`, `"error"`, `"fatal"` (lowercase)
- **packageName**: One of `"api"`, `"component"`, `"hook"`, `"page"`, `"state"`, `"style"`, `"auth"`, `"config"`, `"middleware"`, `"utils"` (lowercase)
- **message**: The log message (string)

### API Endpoint:
- **URL**: `http://4.224.186.213/evaluation-service/logs`
- **Method**: POST
- **Headers**: `Content-Type: application/json`

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

This starts the development server on port 3000.

## Build

```bash
npm run build
```

## Examples

### Logging in a Component
```javascript
import { Log } from "../middleware/logger";

const handleClick = async () => {
  await Log("frontend", "info", "component", "Button clicked");
};
```

### Logging in API Calls
```javascript
import { Log } from "../middleware/logger";

export const getUsers = async () => {
  try {
    await Log("frontend", "info", "api", "Fetching users");
    const response = await fetch("/api/users");
    const data = await response.json();
    return data;
  } catch (error) {
    await Log("frontend", "error", "api", error.message);
    throw error;
  }
};
```

### Logging in Pages
```javascript
import { useEffect } from "react";
import { Log } from "../middleware/logger";

export default function Home() {
  useEffect(() => {
    Log("frontend", "info", "page", "Home page loaded");
  }, []);

  return <h1>Welcome Home</h1>;
}
```

## Important Notes

- All parameter values must be **lowercase**
- Use **exact values only** as specified
- The logger handles network errors gracefully
- Logs are sent asynchronously and don't block UI

## Features Included

✅ Reusable logging function  
✅ Component with logging (LoginButton)  
✅ API integration with logging (userApi)  
✅ Page loading logs (Home)  
✅ Error handling  
✅ Clean project structure  
✅ CSS styling  
