# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

## Neeti Akhilesh Thapliyal's Contributions

### 1. **Reusable Components**
   - Designed and developed reusable components for the application, including:
     - **Root Layout**
     - **Header**
     - **Navigation**
     - **Footer**
   - These components ensured consistency across the app and streamlined the development process for the team.

### 2. **Login Module**
   - Developed a fully functional **Login Module**.
   - Added **Unit Tests** covering:
     - Form rendering
     - Empty field validation
     - Successful login dispatch
     - Error handling for invalid credentials.

### 3. **Dashboard Page**
   - Created a **Dashboard Page** to display a summary of the user's account information in a visually appealing layout.
   - Made the page fully **responsive** and optimized for different screen sizes.

### 4. **Redux Store Integration**
   - Integrated both the **Login** and **Dashboard** pages with the **Redux Store** to efficiently manage application state.
   - Implemented Redux actions and reducers to handle authentication and account-related data.

### 5. **Firebase API Integration**
   - Integrated the **Login Module** and **Dashboard Page** with **Firebase API** for:
     - User authentication
     - Fetching and managing account data dynamically.

### 6. **Shared APIs**
   - Hosted **common APIs** for the entire team, facilitating seamless integration and simplifying development workflows.

### 7. **Version Control**
   - Checked in the project codebase into the **Git Repository**, ensuring proper version control and collaboration within the team.

### 8. **Technologies and Tools**
   - Leveraged:
     - **React Hooks** for managing component state and lifecycle.
     - **Redux** for global state management.
     - **Fetch APIs** for seamless communication with backend services.

### 9. **Password Encryption**
   - Enhanced security by using the **`btoa` JavaScript API** to base64 encode passwords in the Login Module.

---

## Key Features Delivered
- **Reusable UI components** for team-wide usage.
- **Secure Login System** integrated with Firebase.
- **Responsive Dashboard** showcasing a user-friendly design.
- **Redux State Management** for authentication and data flow.
- **Test Coverage** for the Login Module, ensuring reliability and quality.