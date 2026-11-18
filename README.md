# Student CRM — HW38 + HW41

A simple React application for displaying and managing students, developed as part of a Fullstack Developer course.

## Features

- Display student cards with name, age, group, and enrollment status.
- Add students using a form with controlled inputs.
- Validate required fields and student age.
- Submit the form using the button or Enter.
- Generate unique student IDs using `crypto.randomUUID()`.
- Delete students by ID.
- Automatically update the total student count.
- Display a message when the student list is empty.
- Highlight students under 18.
- Switch between Student CRM and Course Catalog.
- Responsive student creation form.

## React Concepts

The project demonstrates:

- Functional components and JSX.
- Passing data and callbacks through props.
- Managing arrays and form inputs with `useState`.
- Handling events with `onChange`, `onSubmit`, and `onClick`.
- Updating state immutably using the spread operator and `filter()`.
- Rendering lists using `map()` and unique keys.
- Conditional rendering.
- Reusing UI components.

## Component Structure

| Component | Responsibility |
|---|---|
| App | Main application layout and section switcher |
| Header | Application header |
| StudentList | Student state, adding and deleting students |
| StudentForm | Form state, validation and submission |
| StudentCard | Displays student information and delete button |
| StatusBadge | Displays enrollment status |
| Card | Reusable card container |
| CourseList | Displays the course catalog |
| Footer | Application footer |

## State Management

The initial student data is imported from `src/data/students.js`.

`StudentList` maintains the students array using React `useState`.

`StudentForm` manages its own form fields and passes a newly created student to `StudentList` through an `onAdd` callback.

Students are added by creating a new array with the spread operator and removed using `filter()`.

All changes are stored in React state only. They are not persisted and will be reset when the page is reloaded.

## Technologies

- React
- JavaScript
- JSX
- HTML
- CSS
- Vite

## Running Locally

```bash
npm install
npm run dev
```

Open the local URL displayed by Vite.

## Build

```bash
npm run build
```

## Project Scope

This is an educational frontend project. It does not include a backend, database, authentication, or persistent storage.