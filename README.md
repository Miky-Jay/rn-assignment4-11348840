# rn-assignment4-11348840

# React Native Job Application

This is a React Native application built with Expo, implementing a login screen that passes the user's name and email to the home screen. The home screen displays the user's name and email, and features job cards for popular and featured jobs.

## Installation

1. **Clone the repository:**
    ```sh
    git clone <repository-url>
    cd rn-assignment4-11348840
    ```

2. **Install dependencies:**
    ```sh
    npm install
    npm install @react-navigation/native @react-navigation/stack --legacy-peer-deps
    expo install react-native-screens react-native-safe-area-context
    ```

3. **Start the development server:**
    ```sh
    npx expo start
    ```

## Project Structure

```plaintext
rn-assignment4-11348840/
├── assets/
├── components/
│   ├── Login.js
│   ├── Home.js
│   └── JobCard.js
├── App.js
└── package.json
```

## Components

### Login.js
A screen with inputs for name and email. Upon login, navigates to the home screen with the entered details.

### Home.js
Displays the user's name and email. Shows a list of job cards using the `JobCard` component.

### JobCard.js
A reusable component to display job details. Accepts props like title, company, location, and type.

## Navigation

The application uses React Navigation to switch between the login and home screens.

## Styling

Styled to closely match the provided UI design from the Figma mockup.
