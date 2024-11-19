# Server

## Installation

`pip install -r requirements.txt`

## Running the server

`fastapi dev main.py`

Default will LISTEN on port localhost:8000

## Documentation:

### ReDoc

http://127.0.0.1:8000/redoc

### Swagger

http://127.0.0.1:8000/docs

### Example usage:

http://127.0.0.1:8000/

http://127.0.0.1:8000/contributions

http://127.0.0.1:8000/contributions/?skip=5&limit=5

http://127.0.0.1:8000/contributions?order_by=title

http://127.0.0.1:8000/contributions?owner=LiveMusic&title=jazz&match=all

http://127.0.0.1:8000/contributions?owner=LiveMusic&title=jazz&match=any

Requirements.txt provided. If additional libraries are required, please ensure this is updated.
pip freeze > requirements.txt

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