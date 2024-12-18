
# Quiz Application Backend API

This backend API is developed to manage quizzes and user authentication. The application allows users to register, log in, and interact with quizzes. It supports CRUD operations for quizzes and includes functionality to submit answers and calculate scores. Built with Node.js, Express.js, and MongoDB, the API is secure, scalable, and follows REST API best practices.


 - Deploy on Render: https://quiz-application-9mfe.onrender.com

____________________________________________________




## Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT: Authentication.
- Bcrypt.js: Password Hashing.


## Setup

1. Clone the Repository

```bash
  https://github.com/VaghaniAxita/Quiz_Application
```

2. Navigate to the Project Directory:

```bash
  cd Quiz Application  
```

3. Run the server:
```bash
  nodemon
```




# Routes

### User Authentication Routes
  
  **Register User**

- Route: POST /api/users/register
- Description: Register a new user
- Request Body:
```bash
  {
  "name":"node",
  "email":"node@gmail.com",
  "password":"node"
}
```
- Sample Response:
  - Status: 201 Created
   - Body:
```bash
  {
  "_id": "6762d41512edf4f553fb55b3",
  "name": "node",
  "email": "node@gmail.com",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NjJkNDE1MTJlZGY0ZjU1M2ZiNTViMyIsImlhdCI6MTczNDUzMDA2OSwiZXhwIjoxNzM3MTIyMDY5fQ.vtDWHeGp1UbsgBzrFBUSorywjqKTBnF-xjz2DxdjTFM"
}
```

**User Login**

- Route: POST /api/users/login
- Description:Login an existing user
- Request Body:
```bash
 {
  "email":"node@gmail.com",
  "password":"node"
}
```
- Sample Response:
  - Status: 200 OK
   - Body:
```bash
 {
  "_id": "6762d41512edf4f553fb55b3",
  "name": "node",
  "email": "node@gmail.com",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NjJkNDE1MTJlZGY0ZjU1M2ZiNTViMyIsImlhdCI6MTczNDUzMDExOSwiZXhwIjoxNzM3MTIyMTE5fQ.GuvWtrmShK-1v7hOfBmPvL1T74g3BT2varjMnStFEeg"
}
```
**Get All Users**
- Route: GET	/api/users/users
- Description: Fetch all registered users
- Sample Response:
    - Status: 200 OK
    -  Body:
```bash
 [
  {
    "_id": "6762d34f5c1db2dc879e694f",
    "name": "abc",
    "email": "abc@gmail.com",
    "__v": 0
  },
  {
    "_id": "6762d41512edf4f553fb55b3",
    "name": "node",
    "email": "node@gmail.com",
    "__v": 0
  }
]
```

### Quiz Routes

**Create a Quiz**

- Route: POST /api/quizzes
- Description: Create a new quiz
- Request Body:
```bash
 {
  "title": "General Knowledge",
  "description": "Test your knowledge!",
  "questions": [
    {
      "questionText": "What is the capital of India?",
      "answerChoices": ["Delhi", "Mumbai", "Kolkata", "Chennai"],
      "correctAnswer": "Delhi"
    }
  ]
}
```
- Sample Response:
  - Status: 201 Created
   - Body:
```bash
  {
  "title": "General Knowledge",
  "description": "Test your knowledge!",
  "questions": [
    {
      "questionText": "What is the capital of India?",
      "answerChoices": [
        "Delhi",
        "Mumbai",
        "Kolkata",
        "Chennai"
      ],
      "correctAnswer": "Delhi",
      "_id": "6762d75812edf4f553fb55ba"
    }
  ],
  "_id": "6762d75812edf4f553fb55b9",
  "__v": 0
}
```

**Fetch All Quizzes**
- Route: GET /api/quizzes
- Description: Fetch all quizzes 
- Sample Response:
    - Status: 200 OK
    -  Body:
```bash
[
  {
    "_id": "6762d75812edf4f553fb55b9",
    "title": "General Knowledge",
    "description": "Test your knowledge!",
    "questions": [
      {
        "questionText": "What is the capital of India?",
        "answerChoices": [
          "Delhi",
          "Mumbai",
          "Kolkata",
          "Chennai"
        ],
        "correctAnswer": "Delhi",
        "_id": "6762d75812edf4f553fb55ba"
      }
    ],
    "__v": 0
  }
]
```

**Fetch a Quiz by ID**
- Route: /api/quizzes/:id
- Description: Fetches a specific quiz by ID.
- Sample Response:
  - Status: 200 OK
   - Body:
```bash
 {
  "_id": "6762d75812edf4f553fb55b9",
  "title": "General Knowledge",
  "description": "Test your knowledge!",
  "questions": [
    {
      "questionText": "What is the capital of India?",
      "answerChoices": [
        "Delhi",
        "Mumbai",
        "Kolkata",
        "Chennai"
      ],
      "correctAnswer": "Delhi",
      "_id": "6762d75812edf4f553fb55ba"
    }
  ],
  "__v": 0
}
```

**Update a Quiz (Full Update)**
- Route: PATCH /api/quizzes/:id
- Description:Updates a quiz entirely.
- Request Body:
```bash
  {
  "title": "Mathematics",
  "description": "Maths Quiz!",
  "questions": [
    {
      "questionText": "What is the square root of 4?",
      "answerChoices": ["1", "2", "3", "4"],
      "correctAnswer": "2"
    }
  ]
}
```
- Sample Response:
   - Status: 200 OK
   - Body:
```bash
 {
  "_id": "6762d75812edf4f553fb55b9",
  "title": "Mathematics",
  "description": "Maths Quiz",
  "questions": [
    {
      "questionText": "What is the square root of 4?",
      "answerChoices": ["1", "2", "3", "4"],
      "correctAnswer": "2"
      "_id": "6762d75812edf4f553fb55ba"
    }
  ],
  "__v": 0
}
```
  
  **Partially Update a Quiz**

- Route: PATCH /api/quizzes/:id
- Description: Updates specific fields of a quiz.
- Request Body:
```bash
  {
  "title": "Sum"
}

```
- Sample Response:
  - Status: 201 Created
   - Body:
```bash
  {
  "_id": "6762d75812edf4f553fb55b9",
  "title": "Sum",
  "description": "Maths Quiz",
  "questions": [
    {
      "questionText": "What is 2 + 2?",
      "answerChoices": ["3", "4", "5", "6"],
      "correctAnswer": "4"
      "_id": "6762d75812edf4f553fb55ba"
    }
  ],
  "__v": 0
}

```

**Delete a Quiz**

- Route: DELETE /api/quizzes/:id
- Description: Deletes a quiz by its ID.
  - Status: 200 OK
   - Body:
```bash
 {
  "message": "Quiz deleted successfully"
}
```

**Submit a Quiz**

- Route: POST /api/quizzes/:id/submit
- Description: Submits answers for a quiz and calculates score.
- Request Body:
```bash
  {
  "answers": {
    "0": "4"
  }
}

```
- Sample Response:
  - Status: 201 Created
   - Body:
```bash
  {
  "score": 0,
  "totalQuestions": 1
}
```
