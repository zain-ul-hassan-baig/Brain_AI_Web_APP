module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Include all source files
    "./public/index.html", // Include the main HTML file
  ],
  theme: {
    extend: {
      // Define custom classes or extend existing ones
      colors: {
        "n-8": "#1a202c", // Replace with your desired color
        "n-1": "#ffffff", // Replace with your desired color
      },
    },
  },
  plugins: [],
};
