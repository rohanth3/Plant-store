# Plant Store(Terra & Twine) - A React E-Commerce App

This is a front-end web application for an online plant store. Users can browse products, learn about plant care, manage a shopping cart, and handle their user profiles. The project is built with React, Vite, and styled with Tailwind CSS.

## Features

* **Input validation**: All the input given by the user is validated.
* **Product Catalog**: A "Shop" page to display all available plants and products.
* **Shopping Cart**: Users can add/remove items from their cart and also reflected in shop page change can be made in ethier shop or cart.
* **Client-Side Routing**: Seamless navigation between pages without full reloads, handled by `react-router-dom`.
* **Global State Management**: `AuthContext` and `CartContext` manage application-wide state for authentication and the shopping cart.
* **Informational Pages**: Includes sections for FAQs and Gardening Tips.
* **Responsive Design**: Styled with Tailwind CSS for a mobile-first experience.

---

## Technologies Used

* **Framework**: [React](https://reactjs.org/)
* **Build Tool**: [Vite](https://vitejs.dev/)
* **Routing**: [React Router DOM](https://reactrouter.com/)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/)
* **State Management**: React Context API

---

## Project Structure

/src
|-- /components       # Reusable components (Navbar)
|-- /context          # Global state management (AuthContext, CartContext)
|-- /pages            # Page-level components (Home, Shop, Cart, etc.)
|-- App.jsx           # Main component with routing setup
