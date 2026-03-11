# GoCinemas – Movie Ticket Booking Platform

GoCinemas is a **full-stack web application for browsing movies and booking cinema tickets online**.
The platform allows users to explore currently available movies, view show details, select seats, and complete ticket bookings through an interactive web interface.

This was a collaborative project, and the system is built using a **React frontend and a Node.js backend**, following a modular architecture for scalability and maintainability.

---

# Features

* Browse available movies
* View movie details and show information
* Select show timings
* Seat selection interface
* Ticket booking workflow
* Booking confirmation page
* View previously booked tickets
* Interactive UI with reusable components
* REST API based backend architecture

---

# Technology Stack

## Frontend

* React
* Vite
* JavaScript (JSX)
* CSS

## Backend

* Node.js
* Express.js
* REST APIs

## Database Layer

* MongoDB-style data models (Movies, Shows, Bookings, Users)

## Deployment / Configuration

* Vercel configuration for deployment

---

# Project Architecture

The application follows a **client–server architecture**.

```
Client (React)
        │
        │ HTTP API Requests
        ▼
Server (Node.js + Express)
        │
        ▼
Database Models
```

The **React client handles the user interface and user interaction**, while the **backend server manages API endpoints, business logic, and database communication**.

---

# Project Structure

```
GoCinemas
│
├── client
│   ├── public
│   ├── src
│   │   ├── Components
│   │   ├── Pages
│   │   ├── assets
│   │   ├── context
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── server
│   ├── configs
│   │   └── db.js
│   │
│   ├── controllers
│   │   └── bookingController.js
│   │
│   ├── models
│   │   ├── Movie.js
│   │   ├── Show.js
│   │   ├── Bookings.js
│   │   └── User.js
│   │
│   ├── routes
│   │   └── bookingRoutes.js
│   │
│   └── server.js
│
└── package.json
```

---

# Frontend Implementation (Client)

The **frontend was implemented using React with Vite** to provide a fast development environment and modular UI structure.

The client application is structured into reusable components and page-level views.

## Components

Reusable UI components such as:

* Navbar
* Movie cards
* Carousel
* Hero section
* Featured sections
* Footer
* Loading indicators
* Seat selection UI

These components allow the interface to remain modular and maintainable.

## Pages

Page-level views handle the main user flows:

* **Landing Page** – Displays featured movies and navigation elements
* **Movie Details** – Shows detailed information about a selected movie
* **Search and Filter** – Allows users to find movies quickly
* **Seat Layout** – Interactive seat selection interface
* **Payment Page** – Handles booking confirmation flow
* **Booking Confirmation** – Displays successful booking information
* **My Bookings** – Allows users to view their past bookings

State management is handled using a **context-based architecture** to share booking and user state across components.

---

# Backend Implementation (Server)

The backend server was built using **Node.js and Express**, exposing RESTful API endpoints that handle the movie booking workflow.

The backend follows a **structured MVC-style pattern**.

## Configurations

```
configs/db.js
```

Handles database configuration and connection setup.

---

## Models

The application defines data models representing the core entities:

* **Movie** – Information about available movies
* **Show** – Show timings and theatre scheduling
* **Bookings** – Records of user bookings
* **User** – User information and authentication context

---

## Controllers

Controllers implement the business logic of the application.

Example:

```
bookingController.js
```

Responsible for:

* processing booking requests
* validating seat availability
* storing booking data
* returning booking confirmation responses

---

## Routes

Routes define the API endpoints that the frontend communicates with.

Example:

```
bookingRoutes.js
```

These routes map incoming HTTP requests to controller functions.

---

# Team Contributions

## Frontend Development – Niharika

Key contributions included:

* Developing the **React-based frontend architecture**
* Building reusable UI components for the application interface
* Implementing page views including:

  * landing page
  * movie details
  * search and filtering
  * seat layout selection
  * booking confirmation
  * user bookings
* Managing UI state across components using React context
* Integrating the frontend with backend API endpoints
* Styling the interface using CSS to create a responsive user experience

---

## Backend Development – Prithika

Key contributions included:

* Designing and implementing the **Node.js + Express server**
* Creating REST API endpoints for booking operations
* Implementing the MVC-style backend structure
* Defining database models for movies, shows, bookings, and users
* Handling booking logic through controller functions
* Managing route definitions for API requests
* Configuring server deployment settings

---

# Installation

Clone the repository:

```
git clone https://github.com/prithzzz/GoCinemas.git
```

---

# Running the Frontend

Navigate to the client folder:

```
cd client
npm install
npm run dev
```

The frontend will start on:

```
http://localhost:5173
```

---

# Running the Backend

Navigate to the server folder:

```
cd server
npm install
node server.js
```

---

# Authors

**Niharika** – Frontend development

**Prithika** – Backend development
