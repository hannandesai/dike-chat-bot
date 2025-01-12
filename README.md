# ChatBot for Recruitment

This project focuses on developing a **ChatBot for Recruitment**, a MEAN stack web application designed to automate the employee recruitment process. It streamlines interview-related tasks for medium to large-scale companies using AI-driven solutions.

---

## Project Overview

### Purpose
The chatbot automates initial recruitment processes, minimizing human interaction and enabling simultaneous interviews. It evaluates candidates using AI concepts like pattern recognition and keyword analysis, providing rankings to assist in decision-making.

### Scope
- **Interview Management**: Organizes and manages candidate entries.
- **Automated Interviews**: Conducts multiple interviews simultaneously.
- **Candidate Evaluation**: Judges and rates candidates for suitability.
- **Review and Verdict**: Allows admins to review interviews, accept/reject candidates, and send automated notifications.

---

## Features

1. **Dynamic Interview IDs**: Generates unique IDs for interview sessions.
2. **Randomized Question Selection**: Selects 15 questions from a pre-defined pool.
3. **AI-Based Evaluation**: Uses pattern recognition and keyword analysis for ranking.
4. **Admin Dashboard**:
   - View interview results.
   - Review candidate interviews and resumes.
   - Manage interview questions and system keywords.
5. **Candidate Verdict**: Provides options to hire, reject, or schedule further interviews.

---

## Technologies Used

- **Frontend**: AngularJS, HTML, CSS
- **Backend**: Node.js
- **Database**: MongoDB
- **Development Tools**: Visual Studio Code
- **Architecture**: MEAN Stack

---

## System Requirements

### Hardware
- Intel i5 5th Gen 2.20GHz or higher
- 8 GB RAM
- 4 Mbps or faster internet connection

### Software
- Windows 10 or Ubuntu 14.0
- Chrome/Mozilla Firefox
- Visual Studio Code

---

## How It Works

1. **Admin Workflow**:
   - Log in to the admin dashboard.
   - Add interviewees and generate unique Interview IDs.
   - Define keywords, patterns, and questions for the chatbot.
   - Review interview results and make hiring decisions.

2. **Interviewee Workflow**:
   - Enter the provided Interview ID.
   - Participate in an AI-driven interview session.
   - Await results and feedback from the admin.

---

## Limitations

1. **Initial Efficiency**: The system may not match human efficiency during early stages.
2. **Accuracy Constraints**: AI algorithms may yield less accurate results compared to experienced interviewers.
3. **Server Dependency**: Performance is influenced by server speed.
4. **Security**: Interview recordings lack robust security mechanisms.
5. **Extraordinary Scenarios**: Limited adaptability to unusual candidate interactions.

---

## Future Enhancements

1. Pre-loaded keywords and patterns for better out-of-the-box accuracy.
2. Deployment on a high-speed cloud server for improved security and scalability.
3. Integration of advanced AI algorithms for enhanced performance.
4. Expansion of Natural Language Processing (NLP) capabilities.

---

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/hannandesai/dike-chat-bot
   cd dike-chat-bot
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run start
   ```
