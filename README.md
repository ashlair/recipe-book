# RecipeBook

RecipeBook is a web application that allows users to manage their favorite recipes and ingredients. Users can sign in to view, add, edit, and delete recipes. The app also includes a shopping list feature where users can manage ingredients from their saved recipes. All data is stored in Firebase, and user authentication is handled through Firebase as well.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.6.

## Features

- **User Authentication**: Sign up and log in using Firebase authentication.
- **Recipe Management**:
  - View saved recipes.
  - Add new recipes.
  - Edit or delete existing recipes.
  - Save changes back to the Firebase database.
- **Ingredient Management**:
  - Add ingredients from recipes to the shopping list.
  - Manage the shopping list by adding, editing, and deleting items.
- **Data Storage**: All recipes and shopping lists are stored in Firebase.

## Setup Instructions

### Firebase Setup

To use Firebase with this application, you need to set up a Firebase project and configure it with your application.

1. Go to the Firebase Console.
2. Create a new project.
3. Enable Authentication (with Email/Password sign-in method).
4. Enable Firestore (or Realtime Database) to store recipes and shopping lists.
5. Enable Storage if needed for recipe images.
6. Get your Firebase configuration and update the `environment.ts` file with your Firebase credentials.

Example environment.ts:

```typescript
export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
  },
};
```

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Application Flow

1. **Sign In/Sign Up**: Users must log in to access their saved recipes and shopping list.
2. **Recipe Management**: After signing in, users can view their recipes, add new ones, edit or delete existing ones.
3. **Shopping List**: Users can add ingredients from recipes to their shopping list and manage the list by adding/editing/deleting items.
4. **Save Data**: All changes are saved back to the Firebase database.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
