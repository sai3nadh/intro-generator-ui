# **YouTube Intro Generator - Frontend (Angular)**

This is the frontend application for the **YouTube Intro Generator**, a tool powered by AI to create catchy YouTube intros from user-provided video scripts. The application allows users to paste their video script into a text box and generate an engaging intro for their YouTube videos using an AI model.

## **Features**
- Paste a YouTube script into the input box.
- Generate a catchy YouTube intro from the script.
- Simple and easy-to-use UI for generating intros.
  
## **Tech Stack**
- **Frontend Framework**: Angular
- **Styling**: Tailwind CSS (or Bootstrap, depending on your preference)
- **API**: Connects to a Spring Boot REST API to generate YouTube intros via AI.

---

## **Installation Instructions**

### **Prerequisites**
Make sure you have the following installed on your machine:

- **Node.js** (v14 or higher): [Download Node.js](https://nodejs.org/)
- **npm** (Node Package Manager) is included with Node.js. 

### **Setup**
1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/your-username/youtube-intro-frontend.git
   ```

2. Navigate to the project directory:
   ```bash
   cd youtube-intro-frontend
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

---

## **How to Run the Application**

1. After the installation is complete, you can run the Angular application with:
   ```bash
   ng serve
   ```

   This will start the development server and by default, it will be available at:
   ```
   http://localhost:4200
   ```

2. You should now be able to open the app in your browser. The app will be able to interact with the backend API (Spring Boot) running on `http://localhost:8080`.

---

## **Connecting with the Backend API**

The Angular frontend is set up to communicate with the Spring Boot REST API at the following endpoint:
```
POST http://localhost:8080/api/generate-intro
```
Make sure your **Spring Boot backend** is running locally or on a server for the app to work correctly. If your backend is running on a different URL, you may need to update the **API URL** in the frontend service files (`src/app/services/introduction.service.ts`).

---

## **How to Build for Production**

If you're ready to build the application for production, run the following command:

```bash
ng build --prod
```

This will create a `dist/` folder with the optimized production build, which you can then deploy to your web server.

---

## **Troubleshooting**

- **Backend not responding?** Ensure the Spring Boot API is running on `http://localhost:8080` or the configured endpoint.
- **CORS Issues?** Make sure your backend has CORS configured properly to allow requests from `http://localhost:4200`.

---

## **Contributing**

Feel free to fork the repo and submit pull requests. Contributions are welcome!

---

### **Enjoy using the YouTube Intro Generator! 