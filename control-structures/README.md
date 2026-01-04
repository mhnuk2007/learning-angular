# Angular Control Structures

This project demonstrates the new built-in control flow structures in Angular, with examples for `@if`, `@for`, and `@switch`. It also includes examples of global and component-level styling.

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.0.4.

## Features

This project provides examples of the following Angular features:

-   **Control Structures**:
    -   `@if`, `@else`, `@else if` for conditional rendering.
    -   `@for` for list rendering, including `track` and contextual variables (`$index`, `$count`, `$first`, `$last`, `$even`).
    -   `@switch` for conditional rendering based on a set of values.
-   **Styling**:
    -   **Global Styles**: Located in `src/styles.css`, providing a consistent look and feel across the application.
    -   **Component Styles**: Scoped to individual components to avoid style conflicts and promote modularity.
-   **Signals**: Demonstrating state management using Angular Signals in the `User` component.

---

### `@if` / `@else` / `@else if`

The main application component (`app.component`) demonstrates conditional rendering.

**Example:**

```html
<!-- Simple @if/@else -->
@if (isLogin()) {
  <span>Welcome, User!</span>
  <button (click)="handleLogin(false)">Logout</button>
} @else {
  <span>Please login!!!</span>
  <button (click)="handleLogin(true)">Login</button>
}

<!-- @if/@else if -->
@if(status()=="notStarted"){
  <span>No status</span>
} @else if (status()=="progress") {
  <span style="color: orange;">In Progress</span>
} @else if (status()=="success") {
  <span style="color: green;">Success</span>
} @else if (status()=="error") {
  <span style="color: red;">Error</span>
}
```

### `@for`

The `for-loop.component` demonstrates list rendering with the `@for` block. It also shows how to use contextual variables.

**Example:**

```html
<ul>
  @for(user of userDetails(); track user.id){
    <li [style.backgroundColor]="$even?'#ccc':'#ddd'">
      <span>{{$index+1}}. {{user.name}}</span>
      @if($first){<span style="color: red;">Admin</span>}
      @if($last){<span style="color: orange;">Guest</span>}
    </li>
  }
</ul>
```

### `@switch`

The `switch-case.component` demonstrates the `@switch` statement.

**Example:**

```html
@switch (status()) {
  @case ('notStarted') {
    <span class="status-badge status-not-started">Not Started</span>
  }
  @case ('loading') {
    <span class="status-badge status-loading">Loading...</span>
  }
  @case ('success') {
    <span class="status-badge status-success">Success</span>
  }
  @default {
    <span class="status-badge status-error">Error</span>
  }
}
```

---

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
