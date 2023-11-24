import geekFlixImage from "../../src/images/P9.PNG"
import kingSharkChromeExtensionImage from "../../src/images/P5.PNG"
import electricityForecasterImage from "../../src/images/P3.PNG"
import jumbleImage from "../../src/images/jumble-logo.jpeg";

export const skills = ['Angular', 'React', 'JavaScript', 'TypeScript', 'Next', 'AWS', 'Java', 'Spring']

export const projects = [
    {
      title: "Geek Flix Movie App",
      subtitle: "Angular",
      description:
        "An application which fetches movies from TMDB API, and renders them paginated. Users can sort movies by emotion, or remove them from the collection.",
      image: geekFlixImage,
      link: "https://github.com/georgee99/Angular-Movie-App",
    },
    {
      title: "Electricity Forecaster",
      subtitle: "Python",
      description: "This is a web application which forecasts the price and demand of electricity in Australia. It was built in Python using the Dash Framework by Plotly.",
      image: electricityForecasterImage,
      link: "https://github.com/georgee99/Dash",
    },
    {
      title: "Jumble",
      subtitle: "Javascript, Express, AWS",
      description: "Jumble is a backend application which transforms a string input according to pre-given instructions. It is a Dockerized Express app, hosted on Amazon ECS with EC2, and stores images in Amazon ECR.",
      image: jumbleImage,
      link: "https://github.com/georgee99/Jumble-App",
    },
    {
      title: "King Shark Chrome Extension",
      subtitle: "JavaScript",
      description:
        "This is a simple Chrome Extension which changes all images on a webpage to images of the DC Character 'King Shark'. It was built with only Vanilla JavaScript",
      image: kingSharkChromeExtensionImage,
      link: "https://github.com/georgee99/king-shark-chrome-extension",
    }
  ];