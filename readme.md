# AI Code Reviewer

## Overview
AI Code Reviewer is a web application that leverages Google's Generative AI to analyze and provide feedback on code snippets. It consists of a backend server built with Node.js and Express, and a frontend React application that allows users to interact with the AI-powered code review system.

---
## Project Structure
```
.gitignore
Backend/
  .env
  package.json
  server.js
  src/
    app.js
    controllers/
      ai.controller.js
    routes/
      ai.routes.js
    services/
      ai.service.js
frontend/
  .gitignore
  eslint.config.js
  index.html
  package.json
  README.md
  vite.config.js
  public/
    vite.svg
  src/
    App.css
    App.jsx
    index.css
    main.jsx
    assets/
      react.svg
```

---
## Backend
The backend is responsible for processing user requests, interfacing with Google's Generative AI, and returning meaningful feedback on code snippets.

### **Setup**
1. Navigate to the `Backend` directory:
    ```sh
    cd Backend
    ```
2. Install dependencies:
    ```sh
    npm install
    ```
3. Create a `.env` file in the `Backend` directory and add your Google Generative AI key:
    ```sh
    GOOGLE_GEMINI_KEY=your_google_gemini_key
    ```
4. Start the server:
    ```sh
    node server.js
    ```

### **API Endpoints**
- **`POST /ai/get-review`** - Accepts a code snippet and returns an AI-generated code review.

---
## Frontend
The frontend is a React-based application built with Vite. It provides an intuitive UI for users to input code, request reviews, and view AI-generated feedback.

### **Setup**
1. Navigate to the `frontend` directory:
    ```sh
    cd frontend
    ```
2. Install dependencies:
    ```sh
    npm install
    ```
3. Start the development server:
    ```sh
    npm run dev
    ```

### **Features**
- **Code Editor** with syntax highlighting.
- **AI-Powered Code Review** for quick feedback on code snippets.
- **Dark Mode & Light Mode Toggle** for better user experience.
- **Review Button** to analyze the code.
- **Copy Review Button** to easily copy and share feedback.
---
## Contributing
Contributions are welcome! Feel free to submit issues, suggest improvements, or open pull requests.

---

