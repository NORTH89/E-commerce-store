# E-Commerce Store & Admin Dashboard

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Security](#security)
- [Caching](#caching)
- [Payment Processing](#payment-processing)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

This project is a full-stack e-commerce platform, featuring a user-friendly storefront and an advanced admin dashboard for product management, sales tracking, and more. The platform integrates a secure authentication system, Stripe for payment processing, and Redis for caching to optimize performance.

The project is designed to provide a smooth shopping experience for users while offering extensive control and insights for administrators.

## Features

### E-Commerce Store

- **User Authentication**: Sign up, login, and JWT-based session management (Access/Refresh tokens).
- **Product Browsing**: View products, categories, and product details.
- **Shopping Cart**: Add, remove, and update items in the cart.
- **Checkout**: Stripe integration for secure payment processing.
- **Coupon System**: Apply discounts via coupon codes during checkout.

### Admin Dashboard

- **Product & Category Management**: Add, edit, and delete products and categories.
- **Sales Analytics**: Track sales and revenue trends with visual reports.
- **Order Management**: View customer orders and order statuses.

### Other Key Features

- **Responsive Design**: Built using Tailwind CSS for mobile and desktop usability.
- **Data Caching**: Redis caching for faster product browsing and optimized performance.
- **Security**: Protection against common web vulnerabilities such as XSS, SQL Injection, and CSRF.
- **Sales Tracking**: Real-time analytics to monitor revenue and product popularity.

## Tech Stack

### Frontend

- **React.js**: Dynamic and responsive user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for responsive design.

### Backend

- **Node.js (Express)**: REST API for handling business logic.
- **MongoDB**: NoSQL database for managing users, products, orders, and categories.
- **Redis**: In-memory data structure store for caching.

### Payment Integration

- **Stripe**: Payment processing for checkout.

### Security & Authentication

- **JWT**: Secure user authentication using JSON Web Tokens (Access & Refresh Tokens).
- **bcrypt.js**: Password hashing for user security.

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/NORTH89/E-commerce-store.git
   cd E-commerce-store
   ```

2. **Install Dependencies**

   For both frontend and backend:

   ```bash
   # Backend (Node.js)
   cd backend
   npm run build

   # Frontend (React.js)
   cd frontend
   npm run build
   ```

3. **Set Up MongoDB and Redis**

   - Install and run MongoDB locally or use a cloud-based service like MongoDB Atlas.
   - Install and run Redis.

4. **Set Up Stripe**
   - Create a Stripe account and get your API keys from the Stripe Dashboard.
   - Add the keys to your environment configuration.

## Configuration

### Backend (.env)

Create a `.env` file with the following variables:

```env
PORT=5000
MONGO_URI=your-mongo-db-uri
REDIS_URL=your-redis-url
JWT_SECRET=your-secret-key
JWT_REFRESH_SECRET=your-refresh-secret-key
STRIPE_SECRET_KEY=your-stripe-secret-key
STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key
REACT_APP_STRIPE_PUBLIC_KEY=your-stripe-publishable-key
REACT_APP_API_URL=your-backend-api-url
```

## Usage

### Running the Backend

```bash
cd backend
npm run dev
```

The backend will run on [http://localhost:5000](http://localhost:5000).

### Running the Frontend

```bash
cd frontend
npm start
```

The frontend will run on [http://localhost:3000](http://localhost:3000).

### Admin Login

The admin dashboard can be accessed at [http://localhost:3000/admin](http://localhost:3000/admin). You can configure admin credentials in the database directly.

### Authentication

- `POST /api/auth/signup`: User sign-up.
- `POST /api/auth/login`: User login.
- `POST /api/auth/refresh-token`: Refresh JWT tokens.

### Product Management

- `GET /api/products`: Get all products.
- `GET /api/products/:id`: Get a single product by ID.
- `POST /api/products`: Create a new product (Admin only).
- `PUT /api/products/:id`: Update a product (Admin only).
- `DELETE /api/products/:id`: Delete a product (Admin only).

### Order Management

- `POST /api/orders`: Create a new order (for checkout).
- `GET /api/orders/:id`: Get order details by order ID.

Full API documentation can be accessed through `/api-docs` if Swagger or similar is implemented.

## Security

- JWT for authentication with Access and Refresh tokens.
- Role-Based Access Control (RBAC) to secure admin routes.
- bcrypt password hashing to protect user credentials.
- Input validation and sanitization to protect against XSS and SQL Injection.

## Caching

- Redis is used to cache product listings and frequently accessed data, improving overall application performance.
- Cached data is invalidated whenever updates are made to the product catalog.

## Payment Processing

- Stripe is integrated for secure payments.
- Users can checkout using credit/debit cards, with real-time payment updates using Stripe’s API and webhooks.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
