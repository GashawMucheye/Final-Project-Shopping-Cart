# MERN SHOPPING CART

# Lessons

1. Introduction
2. Install Tools
3. Create React App by using vite

```js
npm create vite@latest
```

4. Create Git Repository

5. Add Routing

- inatall react-router-dom

```js
 npm react-
 router-dom
```

6. creat routers

- create route for home screen
- create router for product Screen.

7. Create Node.js Server
   run npm init in root folder

```js
npm init -y
```

- Update package.json set type: module
- Add .js to imports
- npm inatall express
- create server.js
- add start command as node backend/server.js
- require express
- create route for / return backend is ready
- move products.js from frontend to backend
- create route for /api/products
- return products
- run npm run start

8. Fetch Products From Backend

- set proxy in vite.config.js
- npm install axios
- use state hook
- use effect hook
- use reducer hook

9. Manage State By Reducer Hook

- define reducer
- update fetch data
- get state from useReducer

10. Add bootstrap UI Framework

- install react-bootstrap

```js
npm install react-bootstrap bootstrap
```

- update App.js

11. Create Product and Rating Component

- create rating component
- create product component
- use Rating Component in Product component

12. Create Product Details Screen

- fetch product from backend
- create 3 columns for image,info and action

13. Create Loading and Message Component

- create loading component
- use spinner component
- create message component
- create utils.js to define getError function

14. Implement add to cart

- create React Context
- define reducer
- create store provider
- implement add to cart button click handler

15. complete Add To Cart

- check exist item in the cart
- check count in stock in backend

16. Create Cart Screen

- create 2 columns
- display items list
- create action column

17. Complete Cart Screen

- click handler for inc/dec item
- click handler for remove item
- click handler for checkout

18. Create Signin Screen

- create sign in form
- add email and password
- add signin button

19. Connect To MongooDB Database

- create atlas mongoodb database
- install local mongodb database
- npm install mongoose

```js
npm install mongoose
```

- connect to mongodb database

20. Seed Sample Data

- create product model
- create User Model
- create seed route
- use route in server.js
- seed sample product

21. Seed Sample Users

- create user model
- seed sample users
- create user routes

22. Create Signin Backend Api

- create signin api
- npm install jsonwebtoken
- define generateToken

23. Complete Signin Screen

- handle submit action
- save token in store and local storage
- show user name in header
