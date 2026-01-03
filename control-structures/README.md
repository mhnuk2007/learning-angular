# Angular Control Structures and Styling Demo

## Description

This project is a demonstration of fundamental concepts in Angular, focusing on built-in control flow structures and a variety of styling strategies. It is intended as a learning resource for both new and experienced Angular developers.

The project structure and documentation are designed to be clear, concise, and easy to follow, drawing inspiration from professional documentation standards.

## Styling Architecture

The project employs a modern and maintainable styling architecture based on **CSS Variables (Custom Properties)**.

A global color scheme is defined in `:root` within `src/styles.css`. This allows for easy theme management and ensures a consistent look and feel across the entire application. Components then reference these variables, promoting reusability and simplifying future design updates.

### Global Theme Variables (`src/styles.css`)
```css
:root {
  --primary-color: #1a73e8;
  --background-color: #f4f4f4;
  --text-color: #333;
  /* ... and so on */
}
```

This approach combines the power of global theming with the encapsulation of component-specific styles.

## Component Reference

### `app-root`
The main component of the application.

| Property      | Description                                                                                                   |
|---------------|---------------------------------------------------------------------------------------------------------------|
| **Purpose**   | Acts as the primary container for the application and demonstrates conditional rendering.                         |
| **Features**  | - **`@if / @else`**: Toggles a login/logout state.<br>- **`@if / @else if`**: Displays a status message based on a selected value. |
| **Signals**   | - `isLogin`: A boolean signal to track authentication status.<br>- `show`: A boolean signal for toggling visibility.<br>- `status`: A string signal to hold the current status message. |

### `app-for-loop`
A component dedicated to demonstrating list rendering.

| Property      | Description                                                                                                   |
|---------------|---------------------------------------------------------------------------------------------------------------|
| **Purpose**   | To showcase how to render dynamic lists from a collection.                                                      |
| **Features**  | - **`@for`**: Iterates over collections of primitive types and objects.<br>- **`track`**: Uses a unique key for performance optimization.<br>- **Contextual Variables**: Uses `$index`, `$first`, `$last`, `$even` to apply conditional logic and styles within the loop. |
| **Signals**   | - `users`: A signal holding an array of strings.<br>- `userDetails`: A signal holding an array of user objects. |

### `app-switch-case`
A component for demonstrating multi-conditional rendering.

| Property      | Description                                                                                                   |
|---------------|---------------------------------------------------------------------------------------------------------------|
| **Purpose**   | To show how to render different UI blocks based on a single value.                                              |
| **Features**  | - **`@switch`**: Selects a template based on the `permission` signal's value.<br>- **`@case`**: Provides the template for a specific value.<br>- **`@default`**: A fallback template if no case matches. |
| **Signals**   | - `permission`: A string signal that holds the current permission level (`guest`, `user`, `moderator`, `admin`). |

## Setup and Development

1.  **Install Dependencies**:
    ```bash
    npm install
    ```
2.  **Run Development Server**:
    ```bash
    ng serve
    ```
    Navigate to `http://localhost:4200/`.

3.  **Build for Production**:
    ```bash
    ng build
    ```

4.  **Run Unit Tests**:
    ```bash
    ng test
    ```