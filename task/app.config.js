// Load environment variables
const getEnvVars = () => {
  // This is a simple way to load environment variables in Expo
  // For production, you might want to use a more robust solution
  try {
    // Try to load from .env file
    const fs = require('fs');
    const path = require('path');
    const envPath = path.resolve(__dirname, '.env');
    const envContent = fs.readFileSync(envPath, 'utf8');
    
    // Parse .env file content
    const envVars = {};
    envContent.split('\n').forEach(line => {
      const [key, value] = line.split('=');
      if (key && value) {
        envVars[key.trim()] = value.trim();
      }
    });
    
    return envVars;
  } catch (error) {
    console.log('Error loading .env file:', error);
    // Return default values if .env file can't be loaded
    return {
      API_URL: 'http://192.168.1.7:5000/api'
    };
  }
};

const envVars = getEnvVars();

export default {
  expo: {
    name: "task",
    slug: "task",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash-icon.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    ios: {
      supportsTablet: true
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff"
      }
    },
    web: {
      favicon: "./assets/favicon.png"
    },
    extra: {
      API_URL: envVars.API_URL
    }
  }
}; 