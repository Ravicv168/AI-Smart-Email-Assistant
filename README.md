# 🤖 Smart Email Assistant

An AI-powered Smart Email Assistant that automatically generates contextual email replies inside Gmail using the Google Gemini API, with a Spring Boot backend and a Chrome Extension that seamlessly integrates into the Gmail interface.

## Features
- Generates professional and personalized email replies automatically.
- Uses Google Gemini API for natural language generation.
- Smart Chrome Extension that adds an AI-powered reply button inside Gmail.
- REST API built with Spring Boot to handle prompt processing and Gemini interaction.

## 🛠️ Technologies Used
- Backend (Java, SpringBoot)
- AI Engine (Google Gemini API)
- Frontend JavaScript (Chrome Extension)
- Build Tool (Maven)

## 💾 Installation
### Clone the repository
    git clone https://github.com/Ravicv168/AI-Smart-Email-Assistant.git

### ⚙️ Configure Google Gemini API Key
    Edit application.properties
    gemini.api.key=YOUR_GEMINI_API_KEY
  
### Build the project using Maven
    cd SmartEmailAssistant
    mvn clean install

### Run the application use:
    mvn spring-boot:run

## 🌐 API Endpoints
- To execute your code - POST /api/email/generate

# 🧩 Chrome Extension Setup
- Go to extension/ folder
- Open Chrome and navigate to chrome://extensions
- Enable Developer Mode.
- Click Load unpacked and select the extension folder
- Now open Gmail and click on any Reply button. You will see an "AI Reply" button. Click on it to generate an automatic reply using Google Gemini.
