## <a name="core">IntelliSlide-AI</a>

IntelliSlide-AI is an AI-powered application that generates professional PowerPoint presentations based on user-provided topics. It leverages OpenAI's GPT model and python-pptx to create structured, visually appealing slides with diverse layouts, image placeholders, and professional themes.

## <a name="tech-stack">⚙️ Tech Stack</a>

🔋 Frontend
- React.js - Javascript Library for building User Interfaces.
- Next.js - React framework for server-side rendering, static site generation, and routing.
- TypeScript - A superset of JavaScript that adds static typing.
- Tailwind CSS - Utility-first CSS framework for rapidly building custom designs.
- Axios for API calls
- React Toastify for notifications

⚙ Backend
- FastAPI (Python)
- python-pptx for PowerPoint generation
- Gemini API for content generation
- CORS Middleware for frontend-backend communication

## <a name="features">🔋 Features</a>

- AI-Generated Slide Content: Titles, bullet points, and placeholders for images.
- Diverse Slide Layouts: Supports varied, text-heavy, and image-focused layouts.
- Professional PowerPoint Themes: Uses themes like Ion Boardroom for a polished look.
- Dynamic Image Placeholders: Indicates where images should be inserted.
- Downloadable PPTX Files: Users can generate and download presentations seamlessly.
- AI-Generated Content – Automatically generate well-structured slides with relevant information.
- Customizable Slide Count – Specify the number of slides needed for a presentation.
- Multilingual Support – Generate slides in different languages.
- Downloadable PowerPoint Files – Export AI-generated slides as editable .pptx files.
- Modern UI – Clean and intuitive user interface built with React & Next.js.

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)


  
**Cloning the Repository**

```bash
git clone https://github.com/engraya/intelliSlide-ai
cd intellislide-ai
```

**Project Structure**


**Backend Setup**

1. Navigate to the backend folder:
```bash
cd backend
```
2. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```
3. Install dependencies:
```bash
pip install -r requirements.txt
```
4. Set up environment variables:
```bash
cp .env.example .env  # Then update .env with your Gemini API key
```
5. Run the backend server:
```bash
uvicorn main:app --reload
```

**Frontend Setup**
1.Navigate to the frontend folder:
```bash
cd ../frontend
```
2.Install dependencies:
```bash
npm install
```
3. Start the development server:
```bash
npm run dev
```
4. Open your browser and go to:
```bash
http://localhost:3000
```

**Installation**

Install the project dependencies using npm:

```bash
# Clone the repository
git clone https://github.com/engraya/intelliSlide-ai

# Navigate into the project
dc IntelliSlide-AI

# Install dependencies
npm install   # or yarn install
```

📡 API Endpoints

1. Generate PowerPoint Presentation

Endpoint: POST /generate_ppt
Description: Generates a PowerPoint file based on the given topic.

Request Body:

```bash
{
  "topic": "Future of AI in Education",
  "num_slides": 5,
  "layout_preference": "Varied"
}
```
Response:
```bash
{
  "message": "Presentation is being generated.",
  "filename": "Future_of_AI_in_Education.pptx"
}
```

2. Download PowerPoint File

Endpoint: GET /download_ppt/{filename}
Description: Retrieves the generated PowerPoint file.

Example Request:
```bash
 GET /download_ppt/Future_of_AI_in_Education.pptx
```
Response: Downloads the .pptx file.


## <a name="usage">🎨 How it Works</a>

1.The user enters a topic and selects the number of slides.
2. GeminiAI's API generates slide titles and bullet points.
3. python-pptx formats the slides using a professional PowerPoint theme.
4. The system creates varied layouts including image placeholders.
5. The user can download the .pptx file from the frontend.


## <a name="usage">🔥 Future Enhancements</a>

- Automatic Image Insertion using AI-generated visuals.
- User Authentication for personalized presentation storage.
- Editable Slides UI before downloading.
- Multi-language Support for diverse users.

  

## <a name="usage">🤝 Contributing</a>

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch: git checkout -b feature-branch
3. Commit changes: git commit -m "Added new feature"
4. Push to GitHub: git push origin feature-branch
5. Open a Pull Request.


## <a name="usage">🙌 Acknowledgments</a>

Special thanks to:
- GeminiAI for the AI content generation.
- python-pptx for PowerPoint automation.
- The React & FastAPI communities for their amazing tools!


## <a name="usage">🌐 Deployment</a>
You can deploy IntelliSlide-AI on platforms like Vercel, Render, AWS Lambda, Firebase Functions, or Heroku.

Vercel Deployment
- Push the project to a GitHub repository.
- Connect your GitHub repo to Vercel.
- Set up the environment variables in Vercel's dashboard for production.
- Deploy the app to Vercel.
- Vercel will automatically build and deploy the app whenever changes are pushed to your main branch.


## <a name="usage">📬 Contact</a>

- 👨‍💻 Author: Ahmad Yakubu Ahmad (@engraya)
- 📧 Email: engrahmadaya@gmail.com
- 🌐 Portfolio: https://engrahmadaya.vercel.app


