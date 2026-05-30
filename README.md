# Frontend Logging System

A complete React frontend application with an integrated logging system that sends logs to the evaluation service API.

--------------------------------------------------

## Project Structure

```plaintext
src/
├── api/              # API calls with logging
├── auth/             # Authentication utilities
├── components/       # React components with logging
├── config/           # Configuration files
├── hooks/            # Custom React hooks
├── middleware/       # Logger middleware
├── pages/            # Page components
├── state/            # State management
├── styles/           # CSS styles
├── utils/            # Utility functions
├── App.jsx           # Main App component
└── main.jsx          # Entry point
```

--------------------------------------------------

## Logging Function

The reusable `Log()` function is located in:

```plaintext
src/middleware/logger.js
```

Function Syntax:

```javascript
Log(stack, level, packageName, message)
```

### Parameters

#### stack
Must be:

```plaintext
frontend
```

#### level

Allowed values:

```plaintext
debug
info
warn
error
fatal
```

#### packageName

Allowed values:

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

#### message

```plaintext
Any log message string
```

--------------------------------------------------

## Logging API Configuration

### URL

```plaintext
http://4.224.186.213/evaluation-service/logs
```

### Method

```plaintext
POST
```

### Headers

```plaintext
Content-Type: application/json
```

--------------------------------------------------

## Installation

```bash
npm install
```

--------------------------------------------------

## Run Development Server

```bash
npm run dev
```

Application runs on:

```plaintext
http://localhost:3000
```

--------------------------------------------------

## Build Project

```bash
npm run build
```

--------------------------------------------------

## Logging Examples

### Component Logging

```javascript
import { Log } from "../middleware/logger";

const handleClick = async () => {
  await Log(
    "frontend",
    "info",
    "component",
    "Button clicked"
  );
};
```

--------------------------------------------------

### API Logging

```javascript
import { Log } from "../middleware/logger";

export const getUsers = async () => {
  try {

    await Log(
      "frontend",
      "info",
      "api",
      "Fetching users"
    );

    const response = await fetch("/api/users");

    const data = await response.json();

    return data;

  } catch (error) {

    await Log(
      "frontend",
      "error",
      "api",
      error.message
    );

    throw error;
  }
};
```

--------------------------------------------------

### Page Logging

```javascript
import { useEffect } from "react";
import { Log } from "../middleware/logger";

export default function Home() {

  useEffect(() => {

    Log(
      "frontend",
      "info",
      "page",
      "Home page loaded"
    );

  }, []);

  return <h1>Welcome Home</h1>;
}
```

--------------------------------------------------

## Features Included

```plaintext
Reusable logging function
Component logging
API integration logging
Page loading logs
Error handling
Clean folder structure
CSS styling
Async logging support
Proper lowercase validation
```

--------------------------------------------------

## Important Notes

```plaintext
All parameter values must be lowercase
Use only exact allowed values
Logger handles network failures gracefully
Logs are sent asynchronously
Logging does not block UI rendering
```

--------------------------------------------------

## Project Status

```plaintext
Stage 1 Completed
Stage 2 Completed
GitHub Push Completed
Ready for Evaluation
```

--------------------------------------------------

## GitHub Repository

```plaintext
https://github.com/Revanth-sai-2006/LoggingMiddleware.git
```
