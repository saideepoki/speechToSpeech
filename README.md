# Project Name: NextJS Translate Chat App

## Team:
- Saideep Kilaru 
- Chekuri Varma
- Lakshmi Narayana Raavi
- Kothamasu Jayachandra

## Tech Used:
- NextJS
- Tailwind CSS
- Prisma
- PlanetScale
- MySQL
- FastAPI
- Edge TTS
- Insanely Fast Whisper
- Googletrans
- NGROK

## Idea Description:
TranslateChat is a revolutionary platform designed to transcend linguistic barriers and foster seamless communication among individuals worldwide. Users are empowered to create chat groups and invite multiple participants, each of whom can select their preferred language for both speaking and listening. This personalized approach ensures inclusivity and enhances the overall user experience. TranslateChat serves as a catalyst for breaking down language barriers and cultivating communities for the greater good. Join TranslateChat, where words unite, and communities flourish. Experience the power of language as a bridge to meaningful connections.

## How to Run the Project:
1. Clone the repository from GitHub.
2. Install dependencies using `npm install` for NextJS.
3. Start the NextJS application using `npm run dev`.
4. Access the application in your localhost at port 3000.

## How to run the Speech to Speech translation API
1. Install the dependencies using `pip install -r requirements.txt`
2. Just run the desired model in dl_models folder in the localhost.Send input to the FastAPI server through its `/docs` route.

## Explain the Core Code:
The core code of our project involves the integration of Insanely Fast Whisper for speech-to-text conversion, Googletrans for text translation, and Edge TTS for text-to-speech conversion. In the backend, FastAPI handles the communication between the NextJS frontend and the machine learning models. The frontend application sends user messages to the FastAPI server, which processes them using the speech-to-text and translation models, and then sends back the translated text to be converted into speech. Finally, the NextJS application plays the translated speech for the user.
