# Contributions App

A Next.js FRONT END application that displays and manages media contributions with search and pagination functionality.

## Features

- Display contributions in a responsive grid (3 columns desktop, 2 tablet, 1 mobile)
- Search functionality for titles and owners
- Pagination with 14 items per page
- Real-time status indicators (Scheduled/Active/Complete)
- Loading states and error handling

## Tech Stack

- Next.js 13+ (App Router)
- TypeScript
- Tailwind CSS
- FastAPI Backend
- Jest & React Testing Library
- ShadCN

- [Next.js](https://nextjs.org/docs) - React framework (v14)
- [TypeScript](https://www.typescriptlang.org/docs/) - Static typing (v5)
- [Tailwind CSS](https://tailwindcss.com/docs) - Styling (v3)
- [Lucide React](https://lucide.dev/docs/lucide-react) - Icons
- [date-fns](https://date-fns.org/docs/) - Date formatting

## Setup & Installation

1. Install dependencies:
```bash
npm install
```
2. Start the development server:
```bash
npm run dev
```

3. Start the FastAPI backend:
```bash
cd server
pip install -r requirements.txt
python -m uvicorn main:app --reload
```

## Testing

Run the test suite:
```bash
npm run test
```

## Component Architecture

- **ContributionsContainer**: Main container handling data fetching and state
- **useContributions**: Custom hook for contribution data management
- **SearchBar**: Handles search functionality
- **ContributionGrid**: Responsive grid layout
- **ContributionCard**: Individual contribution display
- **PaginationControls**: Page navigation

## API Integration

The app integrates with a FastAPI backend supporting:
- Pagination (skip/limit)
- Search by title and owner

## Features & Implementation Details

### Search
- Debounced search input
- Combined title and owner search
- Automatic result updates

### Pagination
- 14 items per page
- Automatic page reset on search
- Total pages calculation

### Status Handling
- Real-time status calculation
- Color-coded status badges
- Timezone-aware date handling

### Responsive Design
- Mobile-first approach
- Grid layout adjustments
- Flexible card components

## Testing Strategy

- Unit tests for components
- Custom hook testing
- Integration tests for container
- Mock API responses
- Test coverage for user interactions

Tech Stacl for testing
- [Jest](https://jestjs.io/docs/getting-started) - Testing framework
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - React testing utilities
- [@testing-library/jest-dom](https://github.com/testing-library/jest-dom#custom-matchers) - Custom Jest matchers


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