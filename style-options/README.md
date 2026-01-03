# StyleOptions

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.0.4.
It demonstrates different styling approaches in Angular with clear examples and best practices.

## 🚀 Development server

To start a local development server, run:
```bash
ng serve
```
Once the server is running, open your browser and navigate to `http://localhost:4200/`.
The application will automatically reload whenever you modify any source files.

## 🧱 Code scaffolding

Angular CLI includes powerful code scaffolding tools.
```bash
ng generate component component-name
```
To see all available schematics:
```bash
ng generate --help
```

## 🏗️ Building

To build the project:
```bash
ng build
```
The build artifacts will be stored in the `dist/` directory.

## 🧪 Running unit tests
```bash
ng test
```
Uses the [Vitest](https://vitest.dev/) test runner.

## 🔍 Running end-to-end tests
```bash
ng e2e
```
Angular CLI does not include an e2e framework by default.

## 🎨 Style Options and Rules (Core Topic)

This project focuses on Angular styling techniques:

*   Component Style
*   Global Style
*   Why Component Style is important
*   Make New file for global Style
*   Internal style and Inline Style
*   Style in Component.ts file
*   Load multiple css files in component
*   Interview Questions

### 1️⃣ Component Style

CSS scoped to a single component.

*   Uses Angular View Encapsulation
*   Prevents style conflicts

```typescript
@Component({
  styleUrl: './app.component.css'
})
```

### 2️⃣ Global Style

Applied to the entire application.

*   Defined in `src/styles.css`
*   Used for themes, layout, resets

### 3️⃣ Why Component Style Is Important

*   Avoids CSS leakage
*   Improves maintainability
*   Encourages modular design
*   Ideal for large applications

### 4️⃣ Make New File for Global Style

You can create custom global styles: `src/theme.css`

Register it in `angular.json`:
```json
"styles": [
  "src/styles.css",
  "src/theme.css"
]
```

### 5️⃣ Internal Style and Inline Style

*   Internal Style: `<style>` inside template
*   Inline Style: `style=""` on HTML elements
*   ⚠️ Not recommended for production
*   ✔ Only useful for quick demos

### 6️⃣ Style in Component.ts File

```typescript
@Component({
  styles: [`
    h2 { color: purple; }
  `]
})
```

Useful for:
*   Small components
*   Demo projects
*   Dynamic templates

### 7️⃣ Load Multiple CSS Files in Component

```typescript
@Component({
  styleUrls: [
    './card.component.css',
    './card.theme.css'
  ]
})
```

Benefits:
*   Better organization
*   Separation of layout and theme
*   Cleaner code

### 🎯 Interview Questions (Important)

*   Difference between component styles and global styles?
*   What is View Encapsulation?
*   Why are inline styles discouraged?
*   How do you load multiple CSS files in a component?
*   Where should application-wide styles go?
*   Style priority order in Angular?
*   Can styles be defined inside Component.ts?

## 🚀 Live Examples in This Project

This project now contains live examples of the different styling methods. You can see them on the main application page, where the `AdminDataComponent` and `UserDataComponent` have been added.

*   **Global Styles (`src/styles.css`):**
    *   The `.heading` class is defined globally. You can see it applied to the main title ("Honey Chauhan") and also to the titles within the "User Data" and "Admin Data" components. This demonstrates how a single global style can affect multiple components.

*   **Component Styles (Scoped):**
    *   Currently, the component-specific style files (`app.css`, `user-data.css`, `admin-data.css`) are empty. If you were to add a style for `.heading` in `user-data.css`, it would *only* affect the "User Data" title, demonstrating style encapsulation.

*   **Inline & Internal Styles (`admin-data.html`):**
    *   The `AdminDataComponent` provides a perfect example of styles that are generally discouraged but useful for demos.
    *   **Inline Style:** The `<h2>` element has its background and text color set directly in the HTML `style` attribute.
    *   **Internal Style:** The `<h3>` element is styled using a `<style>` tag directly within the HTML template file.

## 📚 Additional Resources

*   [Angular CLI Overview](https://angular.dev/tools/cli)
