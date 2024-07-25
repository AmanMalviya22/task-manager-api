# Task Management API

## Overview

This project is a task management API built using the MERN tech stack (MongoDB, Express.js, React, Node.js). It allows users to manage tasks and subtasks efficiently.

## Features

- **User Management:** Create and manage users.
- **Task Management:** Add, update, and delete tasks.
- **Subtask Management:** Add, update, and delete subtasks for each task.

## Tech Stack

- **MongoDB:** NoSQL database for storing user and task data.
- **Express.js:** Web framework for Node.js, used for building the API.
- **React:** Frontend library for building user interfaces (if included).
- **Node.js:** JavaScript runtime for building the server-side application.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- MongoDB (local installation or a cloud service like MongoDB Atlas)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/task-management-api.git
    cd task-management-api
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Configure environment variables:**

    Create a `.env` file in the root directory and add the following variables:

    ```env
    MONGO_URI=your-mongodb-connection-string
    PORT=your-desired-port
    ```

4. **Run the application:**

    ```bash
    npm start
    ```

### API Endpoints

#### Users

- **POST /api/users**: Create a new user
- **GET /api/users**: Get all users
- **GET /api/users/:id**: Get a user by ID
- **PUT /api/users/:id**: Update a user by ID
- **DELETE /api/users/:id**: Delete a user by ID

#### Tasks

- **POST /api/tasks**: Create a new task
- **GET /api/tasks**: Get all tasks
- **GET /api/tasks/:id**: Get a task by ID
- **PUT /api/tasks/:id**: Update a task by ID
- **DELETE /api/tasks/:id**: Delete a task by ID

#### Subtasks

- **POST /api/tasks/:taskId/subtasks**: Add a new subtask to a task
- **GET /api/tasks/:taskId/subtasks**: Get all subtasks for a task
- **PUT /api/subtasks/:id**: Update a subtask by ID
- **DELETE /api/subtasks/:id**: Delete a subtask by ID

## Contributing

1. **Fork the repository**
2. **Create a new branch:**

    ```bash
    git checkout -b feature/your-feature
    ```

3. **Make your changes**
4. **Commit your changes:**

    ```bash
    git commit -am 'Add new feature'
    ```

5. **Push to the branch:**

    ```bash
    git push origin feature/your-feature
    ```

6. **Create a new Pull Request**

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **MERN stack**: For providing a robust technology stack for building modern web applications.

---

Feel free to adjust this template to fit your specific project needs!
