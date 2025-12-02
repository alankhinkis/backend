const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Data

const aboutMe = {
    name: "Alan Khinkis",
    major: "Applied Economics & Management",
    year: "2029",
    hometown: "Buffalo, NY"
};

let projects = [
    {
        title: "Personal Website",
        description: "A portfolio website built with HTML and CSS.",
        tech: ["HTML", "CSS", "JavaScript"]
    },
    {
        title: "Nasdaq Futures — Intraday Trading Strategy Backtester",
        description: "Python-based backtesting system for intraday futures strategies.",
        tech: ["Python", "pandas", "matplotlib"]
    }
];

const hobbies = [
    "Skiing",
    "Hiking",
    "Playing Poker",
    "Coding"
];

// Endpoints

// 1. GET /api/about
app.get('/api/about', (req, res) => {
    res.json(aboutMe);
});

// 2. GET /api/projects
app.get('/api/projects', (req, res) => {
    res.json(projects);
});

// 3. POST /api/projects
app.post('/api/projects', (req, res) => {
    const newProject = req.body;

    if (!newProject.title || !newProject.description) {
        return res.status(400).json({ error: "Title and description are required" });
    }

    projects.push(newProject);
    res.status(201).json({ message: "Project added successfully", project: newProject });
});

// 4. CREATIVE ENDPOINT: GET /api/hobbies
app.get('/api/hobbies', (req, res) => {
    res.json({
        category: "My Interests",
        items: hobbies
    });
});

// Root route
app.get('/', (req, res) => {
    res.send('Mini Portfolio API is running! Try /api/about');
});

// Server start
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});