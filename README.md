# Running the the Backend and Front End Application with Docker

## Prerequisites
- Docker Desktop installed - https://www.docker.com/products/docker-desktop/
- Docker Desktop running (check whale icon in menu bar)

## Steps to Run

1. Start Docker Desktop
```bash
open -a Docker
```

2. Wait for Docker Desktop to fully start (whale icon stops animating)

3. Build and start the application
```bash
docker compose up --build
```

4. Access the application:
- Frontend: http://localhost:3000
- Backend API: http://localhost:8000

5. To stop the application:
```bash
# Press Ctrl+C if running in foreground
# OR run:
docker compose down
```

## Useful Commands
```bash
# Run in background
docker compose up -d

# View logs
docker compose logs

# Restart both services
docker compose restart
```

## See the ReadMes in the server/ directory and the ui/ directory for more information on both the front end and the backend of the repository and how to run them individually.