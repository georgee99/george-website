import geekFlixImage from "../../src/images/P9.PNG"
import kingSharkChromeExtensionImage from "../../src/images/P5.PNG"
import electricityForecasterImage from "../../src/images/P3.PNG"
import jumbleImage from "../../src/images/jumble-logo.jpeg";

export const skills = ['JavaScript', 'TypeScript', 'Angular', 'React', 'AWS', 'Java', 'Spring', 'Next']

export const projects = [
    {
      title: "Geek Flix Movie App",
      subtitle: "Angular",
      description:
        "Geek Flix is an application which fetches movies from TMDB API, and renders them paginated. Users can sort movies by emotion, or remove them from the collection.",
      image: geekFlixImage,
      link: "https://github.com/georgee99/Angular-Movie-App",
    },
    {
      title: "Electricity Forecaster",
      subtitle: "Python",
      description: "This is a web application which forecasts the price and demand of electricity in Australia using machine learning. It was built in Python using the Dash Framework by Plotly.",
      image: electricityForecasterImage,
      link: "https://github.com/georgee99/Dash",
    },
    {
      title: "Jumble",
      subtitle: "Javascript, Express, AWS",
      description: "Jumble is a backend application which transforms a string input according to pre-given instructions. It is a Dockerized Express app, hosted on Amazon ECS with EC2, storing images in Amazon ECR.",
      image: jumbleImage,
      link: "https://github.com/georgee99/Jumble-App",
    },
    {
      title: "King Shark Chrome Extension",
      subtitle: "JavaScript",
      description:
        "This is a simple Chrome Extension which changes all images on a webpage to images of the DC Character 'King Shark' on the page load. It was built using only Vanilla JavaScript.",
      image: kingSharkChromeExtensionImage,
      link: "https://github.com/georgee99/king-shark-chrome-extension",
    }
  ];

  export const experienceData = [
    {
      company: "Employsure",
      description: "Developing internal company software primarily including web applications and automated shell scripts. Leveraged AWS Cloud Services including Amazon S3, EC2, Lambda, and DynamoDB to support application development and deployment. I was responsible for creating automated unit and integration tests which help maintain these web applications.",
      dates: "August 2023 - Present",
      jobTitle: "Software Engineer"
    },
    {
      company: "Symbio",
      description: "Worked on maintenance and development of internal company software built on Java, Spring, and Hibernate. Developed automated unit and integration tests using JUnit and Mockito. I supported application development and deployment to production environments which were both on-premise and on AWS. Leveraged Elasticsearch, Logstash, and Kibana, to execute queries and implemented data changes.",
      dates: "July 2022 - August 2023",
      jobTitle: "Graduate Software Engineer"
    },
    {
      company: "SeaLadder",
      description: "Worked on the development of an online learning platform for Software Engineers. The platform was build using Angular (TypeScript), and .NET (C#). I adopted a test-driven development approach, developing unit tests with the Jasmine testing framework. I learnt how to debug using Chrome Developer tools and became proficient with version control (Git).",
      dates: "October 2021 - July 2022",
      jobTitle: "Front-End Web Developer"
    }
  ]