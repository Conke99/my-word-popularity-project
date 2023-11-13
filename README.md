# My Word Popularity Project

A Node.js project that calculates the popularity of a given word by searching GitHub issues.

## Getting Started

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/my-word-popularity-project.git
   cd my-word-popularity-project
   ```

# Install Dependencies

    npm install

# Running the Project

    npm start

# API Usage

    Endpoint: https://example.com/score?term={your-word}

    Method: GET

# Response Example

    {
    "term": "{your-word}",
    "score": 3.33
    }

# Testing

    npm test

# Project Structure

    app.js: Main entry point of the application.
    routes/: Contains route definitions.
    controllers/: Handles business logic.
    services/: Integrates with external services (e.g., GitHub, Supabase).

# Dependencies

    Node.js: v14.17.0
    Express: v4.17.1
    Supabase: v1.0.0

# Contributing

    If you'd like to contribute, please fork the repository and create a pull request. Contributions are welcome!
