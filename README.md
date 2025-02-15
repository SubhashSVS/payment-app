
## Payment Application


This web app is a functional payments application where a user can login or create an account through the authentication page, each authenticated user has an amount in the wallet using which payments can be made to other users by search-users functionality. 

- The application provides secured authentication using JWT(Json-Web-Tokens) ensuring proper session management. 
- The frontend of the app is built using React.js, backend server using Express.js and Node.js while the database being MongoDB. 
- The application uses Zod validation which ensures valid data throughout the app.
- Hashed passwords are stored in the database using Bcrypt library for maintaining secured storage.

**1. Backend :** 

The backend server of the application takes care of processing the client side requests and provides proper responses back. 

- The HTTP server built using Express.js handles the GET, POST, PUT requests and maintains data validation through Zod.
- JWT for authentication, generating tokens and verifying them to authenticate requests from the client side through middlewares.
- MongoDB is used for database, which stores the user and the accounts information.

**Database Schema :** 

1. User Schema : 
   1. Username/email.
   1. First name.
   1. Last name.
   1. Password.
1. Account Schema :
   1. User Id
   1. Balance

**Server side logic :** 

Users : 

1. POST - [ ‘/signin’, ‘/signup’ ] : 

   - Signup and signin gets the request body with the credentials and the route  api creates/authenticates with the database and validates the user. - - Passwords are hashed and stored and a token is generated and returned in the response for session authentication.

1. GET - [ ‘/bulk’ ] : 

   - Handles the get request to return the users with the names containing the filter used in user-search feature.

Accounts : 

1. GET - [ ‘/balance’ ] :

   - Balance is fetched from the database using authenticated userId of the user through the session token.

1. POST - [ ‘/transfer’ ] : 

   - Handles transactions by validating available balances and then executes transactions by updating both accounts.

   - Transaction security is used to make sure only a complete transaction takes place.

**2. Frontend :**

The client-side frontend is built using React with multiple components used in the UI. Tailwind CSS is used for styling the application’s interface. 

The website is divided into multiple pages like Home page, Dashboard, Login page, Signup page and Transaction page.

- A user can create an account or login with their existing account using the ‘Create Account’ and ‘SignIn’ navigation on the home page.
- Once authenticated it is redirected to the dashboard where balance of the user’s account is displayed and user-search functionality to search other users for making a transaction.
- Once searched a list is displayed with the ‘Send Money’ button when clicked is redirected to the transaction page where a specific amount can be set and made transaction and then gets redirected to the dashboard.

**3. Hosting :** 


Both the backend server and frontend client are deployed on **Render** which is a hosting service that offers a free plan with limitations enough for a personal website hosting.

- The codebase is pushed to a github repository and through the render’s dashboard we could connect with the github to automatically deploy the web server and the client site.
- Environment variables are added in the configuration settings to store the secret variables and database connection URL, etc.. that are being used in the application.


-->**To run locally on your machine:** 
  1. Clone the repository using
     ```git clone https://github.com/SubhashSVS/payment-app.git```
  3. Change directory to frontend folder
     ```cd frontend```
  4. Add the backend server url to the .env file in the frontend directory
     ```VITE_SERVER_URL = https://payments-app-server.onrender.com```
  5. To run the client
     ```
     npm i
     npm run dev
     ```
  7. To run server locally, change directory to backend folder and add these to the .env file 
     ```
     MONGO_URL="your_mongo_db_url"
     JWT_SECRET=*******
     ```
  8. run this command 
     ```
     npm i
     node index.js
     ```

**Deployed links of the project :** 

- Deployed link : <https://payments-app-tpep.onrender.com/>
- Backend server : <https://payments-app-server.onrender.com>

(Render’s free version has a timeout feature after some in-activity after which it takes 30 secs - 1 min to restart the server therefore first request takes time to load and then after it is smooth)


