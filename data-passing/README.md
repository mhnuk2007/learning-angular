# DataPassing

This project demonstrates data passing between parent and child components in Angular 21 using signals and event emitters.

The application allows you to:

- Add new users to a dynamic list
- Select a user from the list
- Delete the selected user
- Highlight the currently selected user
- Explore parent → child data binding (@Input)
- Explore child → parent event communication (@Output)

This project was generated using Angular CLI version 21.0.4.

## Features

- **Signals**: Reactive state management with Angular 21 signals.
- **Parent → Child**: Passing data using `@Input()`.
- **Child → Parent**: Event emission using `@Output()` and `EventEmitter`.
- **Dynamic Lists**: Render users dynamically using `@for` in templates.
- **UI/UX**: Selected user is visually highlighted; buttons styled for clear actions.

## Development server

Start a local development server:

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
