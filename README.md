# Mongoose Transaction Example
This repository provides an example of how to manage database transactions using MongoDB with Mongoose in an Express application.

#### Requirements
To run this application, ensure you have the following installed:

- Node.js
- npm
- Docker and Docker Compose

#### Setup
Follow these steps to set up and run the application:

1. Clone the Repository
```
git clone https://github.com/senthur-kumaran/mongoose-transaction.git
cd mongoose-transaction
```

2. Install Dependencies
```
npm install
```

3. Set Up MongoDB
You can run MongoDB locally or use Docker to set it up. The repository includes a docker-compose.yml file to help with the Docker setup.

_Run MongoDB using Docker Compose_
```
docker-compose up -d
```

This command will start a MongoDB instance in a Docker container. The service will be available at mongodb://localhost:27017.

4. Configure Environment Variables
Create a .env file in the project root and add the following configuration:

```
PORT=8000
MONGODB_URI=mongodb://localhost:27017/transaction-db
```
You can adjust the PORT and MONGODB_URI as needed.

5. Run the Application
```
npm start
```

The application will start on http://localhost:8000.