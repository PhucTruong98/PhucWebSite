import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {
        "main": {
          "name": "Phuc Truong",
          "occupation": "Computer Science Student",
          "description": "My hobbies include making travel video, building interactive web applications with React framework and venturing on outdoor excursions",
          "image": "profilepic.jpg",
          "bio": "Growing up, I have always been fascinated with brain-teasing puzzles and tricky riddles, the gratification of finding the correct solution after many attempts was absolutely delightful and that enthusiasm with logical problem solving carried over to a deep appreciation for Computer Science. My areas of expertise consist of Mobile and Web Application Design using React framework and Flutter, building Machine Learning Models with Tensorflow, and Data Structures and Algorithms design. I'm also familiar with some backend technologies such as Postman, Spring Boot, SQL, etc.",
          "contactmessage": "Here is where you should write your message to readers to have them get in contact with you.",
          "email": "phucthanhtruong0405@gmail.com",
          "phone": "(707)-391-3992",
          "address": {
            "street": "none",
            "city": "Sacramento",
            "state": "CA",
            "zip": "95826"
          },
          "website": "",
          "resumedownload": "https://drive.google.com/uc?export=download&id=1oDNSittr5BuGawmF9OAyA3ug7jR6Kf5-",
          "social": [
            
            {
              "name": "linkedin",
              "url": "https://www.linkedin.com/in/phuc-truong-942080191/",
              "className": "fa fa-linkedin"
            },
            
            {
              "name": "github",
              "url": "https://github.com/PhucTruong98?tab=repositories",
              "className": "fa fa-github"
            }
          ]
        },
      
        "resume": {
          "skillmessage": "Skills list",
          "education": [
            {
              "school": "California State University Sacramento",
              "degree": "Bachelor of Science in Computer Science",
              "graduated": "Expected December 2022",
              "description": ""
            },
            {
              "school": "Mendocino College",
              "degree": "Associate Degree in Computer Science",
              "graduated": "December 2019",
              "description": ""
            }
          ],
          "work": [
            {
              "company": "LACO Associates",
              "title": "Intern",
              "years": "September 2018 - May 2019",
              "description": "Wrote a Python program to perform web-scraping function and collect forecast weather data to assist with storm water inspection. This program reduced the time needed to perform weather data collecting task from 30 minutes to 5 minutes daily. Assisted civil engineers with storm water assessment and various on-site inspections"
            },
            
            {
              "company": "Self Hobby",
              "title": "App Developer",
              "years": "August 2019 - Current",
              "description": "Build mobile application using Flutter framework and other third party APIs. Created applications that incorporate Google Map API and live location tracking to calculate time dilation constants"
      
            },
            {
              "company": "Mendocino College",
              "title": "STEM Tutor",
              "years": "September 2018 - December 2019",
              "description": "Tutored roughly 20 students in Calculus and Calculus-based Physics. Provided supplemental instructions in Calculus, Differential Equations, Linear Algebra, Thermal Dynamic, Special Relativity, Electrical Engineering, etc"
      
            }
            
          ],
          "skills": [
            {
              "name": "Machine Learning With ScikitLearn, Tensor Flow, Keras",
              "level": "60%"
            },
            {
              "name": "RESTful Web Services with Spring Boots",
              "level": "60%"
            },
            {
              "name": "ReactJS",
              "level": "80%"
            },
            {
              "name": "React Native",
              "level": "80%"
            },
            {
              "name": "Flutter/FireBase",
              "level": "50%"
            },
            {
              "name": "HTML/CSS",
              "level": "50%"
            },
            {
              "name": "Python/Java",
              "level": "80%"
            },
            {
              "name": "AGILE/Jira",
              "level": "70%"
            },
            {
              "name": "Data Structures and Algorithms",
              "level": "80%"
            }
            ,
            {
              "name": "SQL",
              "level": "80%"
            
            },
            {
              "name": "Postman",
              "level": "70%"
            }
          ]
        },
        "portfolio": {
          "projects": [
            {
              "title": "[VIDEO DEMO] Brain Breeze Cross Platform Learning App",
              "category": "This is my senior project at CSU Sacramento, we built a learning platform that enables users to create courses filled with video material and quizzes and enrolled in courses made by other people.",
              "image": "BrainBreeze.png",
              "url": "https://www.youtube.com/watch?v=OR98go59_L4"
            },
            {
              "title": "[VIDEO DEMO] Time Dilation Tracker Flutter Mobile App",
              "category": "My cross platform mobile app used for calculating time dilation constants using GPS and Google Map API",
              "image": "Project3.jpg",
              "url": "https://www.youtube.com/watch?v=yDM8uhSV1nY"
            },
            {
              "title": "[LIVE DEMO] Tetris Game With Boss Fights and Bigger Blocks!",
              "category": "Classic tetris gameplay... with a dark twist. Can you defeat the final skull boss and his minions. Made with ReactJS using Redux and State Reducer",
              "image": "Project5.jpg",
              "url": "https://phuctruong98.github.io/TetrisBossRush/"
            },
            {
              "title": "[LIVE DEMO] Sudoku Solver Visualizer",
              "category": "Another ReactJS app for visualizing backtracking algorithm used for solving Sudoku grid. Support upto 25x25 Sudoku board",
              "image": "Project2.jpg",
              "url": "https://phuctruong98.github.io/SudokuSolverPhucTruong/"
            },
            {
              "title": "[VIDEO DEMO] Forecast Data Web Scraping Application ",
              "category": "This web-scraping application utilizes selenium, requests, tkinter to create an interactive program that allow users to collect precipitation data from various locations at once. Data are collected using Python web scraping libraries",
              "image": "Project4.jpg",
              "url": "https://www.youtube.com/watch?v=KQjXdQZ2hEo&t=2s"
            }
          ]
        },
        "testimonials": {
          "testimonials": [
            {
              "text": "''What's true on the basketball court is true in business and in life. You want to succeed? Okay, then succeed. Deserve it. How? Outwork everybody insight. Sweat the small stuff. Sweat the big stuff. Go the extra mile. But whatever it takes, put your heart and soul into everything you do. Leave it all out on the court''",
              "user": "Rick Pitino"
            },
            {
              "text": "''The only impossible journey is the one you never begin.''",
              "user": "Tony Robins"
            }
          ]
        }

      }
    };

    //ReactGA.initialize('UA-110570651-1');
    //ReactGA.pageview(window.location.pathname);

  }

  getResumeData(){
    $.ajax({
      url:'/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    //this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Resume data={this.state.resumeData.resume}/>
        <Portfolio data={this.state.resumeData.portfolio}/>
        <Footer data={this.state.resumeData.main}/>
      </div>
    );
  }
}

export default App;
