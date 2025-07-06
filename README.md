# 🍽️ SwiftDine - React Food Delivery Web App

**SwiftDine** is a responsive, dynamic food delivery web application built using **React.js** and bundled with **Parcel**. It offers users a seamless experience to browse restaurants, explore categorized menus, add items to cart, and interact with features like dark mode, sticky headers, and fallback components.

---

## 🚀 Features

- 🏬 Restaurant listings with rating badges
- 📋 Menu with category grouping (e.g., Veg, Starters)
- ➕ "Add +" buttons to simulate cart functionality
- 🌙 Dark mode toggle
- 📌 Sticky restaurant headers
- 💫 Shimmer loading UI
- ⚠️ Offline fallback screen
- 🎮 Built-in Noodle Snake game
- 👨‍💻 Class vs Functional component (User & UserClass demo)
- 📱 Fully responsive layout

---

## 🛠️ Tech Stack

- **Frontend:** React.js
- **Bundler:** Parcel
- **CSS:** Custom CSS, CSS Modules
- **Routing:** React Router DOM
- **Hooks:** useState, useEffect, Custom Hooks
- **Utilities:** `constants.js`, `useOnlineStatus.js`

---

## 📁 Folder Structure

```bash
SwiftDine/
├── .parcel-cache/               # Parcel build cache
├── dist/                        # Parcel output files (generated)
├── node_modules/                # Node.js packages
├── src/                         # Source code
│   ├── assets/                  # Static files (images, logos)
│   ├── components/              # Main UI components
│   │   ├── About.js
│   │   ├── Body.js
│   │   ├── Contact.js
│   │   ├── Error.js
│   │   ├── Header.js
│   │   ├── NoodleSnake.css
│   │   ├── NoodleSnake.js
│   │   ├── OfflineFallback.js
│   │   ├── RestaurantCard.js
│   │   ├── RestaurantMenu.js
│   │   ├── Shimmer.js
│   │   ├── User.js
│   │   └── UserClass.js
│   ├── utils/                   # Utility functions and custom hooks
│   │   ├── App.js
│   │   ├── constants.js
│   │   └── useOnlineStatus.js
├── .gitignore
├── index.css                    # Global styles
├── index.html                   # HTML entry point for Parcel
├── package.json
├── package-lock.json
└── README.md
