# AI Super App

## Overview
A full-stack web application that combines AI-powered text summarization and image generation capabilities. This project emerged from my exploration of Postman and grew into a comprehensive application that integrates various technologies and concepts from my Bachelor's studies in Modern Computer Science at OPIT, along with my AWS certifications journey.

## Academic Context
- **Institution**: Bachelor of Modern Computer Science at OPIT
- **Related Courses**: 
  - Introduction to Software Engineering (Professor Fatma Meawad)
  - Cloud Computing (Professor Lokesh Vij)
  - Cloud Development (Professor Lokesh Vij)
- **Certifications**:
  - AWS Certified Cloud Practitioner
  - Postman Student Expert ([Verification](http://verify.skilljar.com/c/syu6bxk7ajh3))
- **In Progress**: AWS Solutions Architect Associate certification

## Learning Process
This project represents the convergence of multiple learning paths:
- Started as a Postman exploration project to understand API testing and documentation
- Expanded scope to apply software engineering principles from Prof. Meawad's course
- Implemented cloud deployment strategies learned in Prof. Vij's cloud computing course
- Applied AWS knowledge from Cloud Practitioner certification
- Used as a practical exercise for Solutions Architect Associate preparation
- Integrated AI capabilities to explore modern development trends

## Project Structure
```plaintext
AI-Super-App/
├── public/              # Frontend assets
│   ├── images/
│   ├── index.html
│   ├── script.js
│   └── stylesheet.css
├── .ebextensions/       # AWS configuration
│   └── 01_custom.config
├── index.js            # Main server file
├── generateImage.js    # Image generation logic
├── summarize.js       # Text summarization logic
├── package.json       # Dependencies
└── README.md
```

## Core Concepts
- **Software Engineering Principles**: Applied concepts from Prof. Meawad's course including:
  - Code organization and modularity
  - Error handling and user experience
  - API integration patterns
- **Cloud Computing Concepts**: Implemented learning from Prof. Vij's courses:
  - Cloud deployment strategies
  - Environment configuration
  - Service integration
- **AWS Best Practices**: Utilized knowledge from AWS certifications:
  - Elastic Beanstalk deployment
  - Security group configuration
  - Environment variable management

## Features
- Text Summarization using BART model
- Image Generation using Stable Diffusion
- Responsive web interface
- Character length validation for text input
- Loading state management
- Error handling for API responses

## Technologies Used
### Frontend
- HTML5 for structure
- CSS3 for styling and responsive design
- JavaScript (ES6+) for client-side functionality
- Fetch API for API calls

### Backend
- Node.js runtime environment
- Express.js web framework
- Axios for HTTP requests
- dotenv for environment variable management

### AI Services
- Hugging Face's BART model for text summarization
- Hugging Face's Stable Diffusion for image generation
- RESTful API integration

### Cloud & DevOps
- AWS Elastic Beanstalk for application deployment
- AWS EC2 (t3.micro) for hosting
- AWS IAM for security and access management
- AWS Security Groups for network security
- AWS Launch Templates for instance configuration

### Development Tools
- Visual Studio Code as IDE
- Postman for API testing and documentation
- Git for version control
- GitHub for repository management
- npm for package management

## How to Run
1. Clone the repository
2. Install dependencies: `npm install`
3. Create `.env` file and add your Hugging Face API token: `ACCESS_TOKEN=your_token`
4. Run locally: `node index.js`
5. Access the application at `http://localhost:3000`

## Learning Outcomes
- Deep understanding of API testing and documentation through Postman
- Practical application of software engineering principles from OPIT coursework
- Real-world implementation of cloud computing concepts
- Hands-on experience with AWS services
- Integration of multiple technologies into a cohesive application
- Enhanced understanding of AI service integration

## Academic Integration
This project demonstrates the practical application of concepts from multiple courses:
- **Introduction to Software Engineering**: Code organization, testing, and documentation
- **Cloud Computing & Cloud Development**: Deployment strategies and service integration
- **AWS Certification Journey**: Applied knowledge from Cloud Practitioner and preparation for Solutions Architect Associate

## Credits
- **OPIT Professors**:
  - Prof. Fatma Meawad (Introduction Software Engineering)
  - Prof. Lokesh Vij (Cloud Computing & Cloud Development)
- **Technologies**:
  - [Postman Student Expert Program](https://www.postman.com/student-program/student-expert/)
  - [Hugging Face](https://huggingface.co/)
  - [AWS Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk/)

This project represents my journey in combining academic learning with practical implementation, demonstrating how different courses and certifications can come together in a real-world application.