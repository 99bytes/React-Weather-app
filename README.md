# React Weather App 🌦️

A simple weather application built with React and Material UI. Enter a city name to get the current weather, temperature, humidity, and more, powered by the OpenWeatherMap API.

## Live Demo

Check out the live app here: [Weather App](https://99bytes.github.io/React-Weather-app/)

## Features

- Search for weather by city name
- Displays temperature, humidity, min/max temperature, and weather description
- Responsive Material UI card design
- Dynamic weather images based on conditions

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/YOUR_USERNAME/mini-project-react.git
   cd mini-project-react
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

- `src/WeatherApp.jsx` - Main weather app component
- `src/SearchBox.jsx` - Search input and form
- `src/infoBox.jsx` - Weather info display card

## Customization

- The OpenWeatherMap API key is hardcoded in `src/SearchBox.jsx`. Replace it with your own API key for production use.

## Deployment

To build for production:
```sh
npm run build
```
The output will be in the `dist` folder.

---

Made with ❤️ using React and Material
