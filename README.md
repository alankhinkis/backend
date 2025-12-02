# Mini Portfolio API

This is a backend API built with Node.js and Express for a personal portfolio. It serves data about my profile, projects, and hobbies.

## Setup & Installation

1.  **Install Dependencies**
    Open your terminal in the project folder and run:
    ```bash
    npm install
    ```
    *(This downloads Express and CORS)*

2.  **Start the Server**
    Run the following command:
    ```bash
    node index.js
    ```
    You should see: `Server is running on http://localhost:3000`

---

## API Endpoints

### 1. Get About Info
Returns basic information about the developer.
* **Method:** `GET`
* **URL:** `http://localhost:3000/api/about`
* **Response Example:**
    ```json
    {
      "name": "John Doe",
      "major": "Computer Science",
      "year": "2028",
      "hometown": "Ithaca, NY"
    }
    ```

### 2. Get All Projects
Returns a list of current projects.
* **Method:** `GET`
* **URL:** `http://localhost:3000/api/projects`

### 3. Add a New Project
Adds a project to the list (stored in memory).
* **Method:** `POST`
* **URL:** `http://localhost:3000/api/projects`
* **Headers:** `Content-Type: application/json`
* **Body Example:**
    ```json
    {
      "title": "New App",
      "description": "A cool new app",
      "tech": ["Node", "Express"]
    }
    ```

### 4. Get Hobbies (Creative Endpoint)
Returns a list of personal interests.
* **Method:** `GET`
* **URL:** `http://localhost:3000/api/hobbies`

