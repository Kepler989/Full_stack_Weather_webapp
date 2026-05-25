# 🌤️ Full-Stack Node.js Weather App

A lightweight, full-stack weather application that allows users to search for live weather conditions in any city. 

The project uses a custom Node.js backend as an API Gateway to securely fetch data from OpenWeatherMap, process it, and serve it to a clean HTML/CSS frontend.

## ✨ Features
* **Live Weather Data:** Real-time temperature, "feels like" metrics, humidity, and wind speed.
* **Secure Backend:** API keys are hidden on the server using environment variables, keeping them safe from client-side exposure.
* **Clean UI:** A simple, modern card-based interface built with vanilla HTML and CSS.
* **Error Handling:** Graceful error messages if a user searches for a city that doesn't exist or forgets to type a name.

## 🛠️ Tech Stack
* **Frontend:** HTML5, CSS3, Vanilla JavaScript (`fetch` API)
* **Backend:** Node.js, Express.js
* **Dependencies:** * `axios` (for making external API calls)
  * `dotenv` (for managing secret environment variables)
  * `cors` (to allow communication between the frontend and backend)

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites
1. You must have [Node.js](https://nodejs.org/) installed on your computer.
2. You need a free API key from [OpenWeatherMap](https://openweathermap.org/).

### Installation & Setup

1. **Clone or Download the project** and open the folder in your terminal.
2. **Install the dependencies:**
   ```bash
   npm install
   ```
3. **Configure Environment Variables:**
   Create a file named `.env` in the root directory and add your port and API key:
   ```env
   PORT=3000
   OPENWEATHER_API_KEY=your_actual_api_key_here
   ```
   *(Note: Never share your `.env` file or commit it to GitHub!)*
4. **Start the Backend Server:**
   ```bash
   node server.js
   ```
5. **Launch the Frontend:**
   Since the frontend is static, simply double-click the `index.html` file in your file explorer to open it in your web browser.

## 📂 Project Structure
```text
node-weather-api/
├── .env                # Secret API keys and config (Do not commit!)
├── index.html          # Frontend user interface
├── package.json        # Project metadata and dependencies
└── server.js           # Express backend API and logic
```

## 💡 What I Learned
Building this project helped me understand:
* How to set up a Node.js/Express server from scratch.
* How to use ES Modules (`import` syntax) in Node.
* The importance of keeping API keys secure on the backend.
* How to connect a frontend webpage to a local backend using `fetch()` and CORS.
