# Learning Angular

A step-by-step learning repository for Angular 21. This repo contains many small, self-contained projects and examples to learn Angular fundamentals, new Angular 21 features (signals, @if, @for), forms, routing, component communication, and state management patterns.

## Table of contents

- [About](#about)  
- [Folder overview](#folder-overview)  
- [Key learning concepts](#key-learning-concepts)  
- [Run a project locally](#run-a-project-locally)  
- [Notes & recommendations](#notes--recommendations)  
- [Next steps / Ideas](#next-steps--ideas)  
- [Contributing](#contributing)  
- [License](#license)

## About

Each folder in this repository is a focused learning project or exercise. Projects are kept intentionally small and self-contained so you can focus on a single topic or feature. Many projects were generated with the Angular CLI and use Angular 21 patterns.

## Folder overview

| Folder | Description |
|---|---|
| angular-forms | Examples and exercises for Angular forms (template-driven & reactive). |
| angular-insane | Advanced/complex Angular experiments. |
| angular-routing | Routing, navigation, and lazy loading examples. |
| angular-tutorial | Step-by-step Angular tutorial projects. |
| control-structures | Learning template control structures (e.g., `@if`, `@for`). |
| counterapp-with-signals | Counter app demonstrating Angular 21 signals. |
| course-booking-system | Mini course booking app using components and dynamic data. |
| data-passing | Parent → Child and Child → Parent communication examples. |
| data-types | Exploring Angular data handling and basic data types. |
| dependency-injection | Services and DI examples. |
| event-binding | Event binding exercises with buttons and inputs. |
| first-app | First Angular application exercises. |
| global-state | Managing state globally using signals and services. |
| input-example | Examples of `@Input()` property binding. |
| json-server | Mock API data with JSON server integration. |
| learn-angular | Miscellaneous Angular practice projects. |
| optimizing-images | Techniques for improving image rendering and performance. |
| output-example | Examples of `@Output()` events. |
| pipes | Transforming data with built-in and custom pipes. |
| property-binding | Property binding exercises. |
| second-app | Second Angular application practice project. |
| shopping-cart | Shopping cart example for e-commerce learning. |
| signals-in-detail | Detailed exploration of Angular 21 signals. |
| store-with-signals | Store pattern with signals for state management. |
| style-options | Styling, CSS, and layout experiments. |
| third-app | Third Angular application practice project. |
| todo-list | Building a simple Todo List app using Angular. |
| two-way-data-binding | Examples of `[(ngModel)]` two-way data binding. |

(For project-specific instructions, check the README inside each folder. Many subprojects include their own CLI instructions.)

## Key learning concepts

- Component architecture: parent ↔ child communication and inputs/outputs  
- Angular 21 language features: `@for`, `@if`, and signals  
- Data binding: property, event, and two-way binding  
- Pipes: built-in (currency, date) and custom pipes  
- Forms: template-driven and reactive forms patterns  
- Routing, navigation, and lazy loading  
- Services & dependency injection  
- State management using signals and store patterns  
- Responsive UI with CSS Grid & Flexbox

## Run a project locally

1. Clone the repository (if you haven't already):
   ```bash
   git clone https://github.com/mhnuk2007/learning-angular.git
   cd learning-angular
   ```

2. Choose a project folder you want to run. Example:
   ```bash
   cd course-booking-system
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   ng serve
   ```

5. Open your browser at:
   ```
   http://localhost:4200
   ```

Notes:
- Some subprojects were generated with Angular CLI v21.x; if you run into CLI version mismatches, install a compatible Angular CLI or use `npx`:
  ```bash
  npx -p @angular/cli@21 ng serve
  ```
- If a project uses a mock API (see `json-server`), follow that subproject's README to start the mock server.

## Notes & recommendations

- Each folder is self-contained so you can explore one concept at a time.  
- Many projects are incremental—start with `first-app` or `angular-tutorial` if you're new to Angular.  
- Check subfolder READMEs for project-specific commands or testing instructions (some use Vitest for unit tests).  
- Use `ng generate` for scaffolding components, directives, and pipes when experimenting.

## Next steps / Ideas

- Connect modules using shared services and a global store pattern.  
- Replace mock data with a real REST API or GraphQL endpoint.  
- Add more examples for advanced routing, guards, and lazy loading.  
- Experiment with RxJS where appropriate and compare patterns with signals-based state.  
- Add unit and e2e tests for more projects.

## Contributing

Contributions, fixes, and improvements are welcome. Suggested workflow:
1. Fork the repository.
2. Create a feature branch per change.
3. Open a PR with a clear description of the change.

If you add a new project or exercise, include a short README in that folder describing how to run it.

## License

This repository is provided for learning and experimentation. Add a license file if you plan to reuse or share broadly (e.g., MIT).
