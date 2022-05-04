import project1Image from "../../src/images/P9.PNG"
import project2Image from "../../src/images/P1.png"
import project3Image from "../../src/images/P7.png"
import project4Image from "../../src/images/P5.PNG"

export const skills = ['Angular', 'React', 'JavaScript', 'TypeScript', 'HTML', 'CSS']

export const projects = [
    {
      title: "Geek Flix Movie App",
      subtitle: "Angular",
      description:
        "An application which fetches movies from TMDB API, and renders them paginated. Users can sort movies by emotion, or delete.",
      image: project1Image,
      link: "https://github.com/georgee99/Angular-Movie-App",
    },
    {
      title: "My PhoneBook",
      subtitle: "React",
      description:
        "This application fetches users from the JSONPlaceHolders API, and renders them. The user can view items including name, phone number, and email.",
      image: project2Image,
      link: "https://github.com/georgee99/RWP-Contacts-Application",
    },
    {
      title: "Meme Generator",
      subtitle: "React",
      description:
        "This is a simple project built using React. Uses an API to generate a random meme image, and allows the user to add their own text.",
      image: project3Image,
      link: "https://jsbootcamp.com",
    },
    {
      title: "King Shark Chrome Extension",
      subtitle: "JavaScript",
      description:
        "This is a simple Chrome Extension which changes all images on a webpage to images of the DC Character 'King Shark'.",
      image: project4Image,
      link: "https://github.com/georgee99/king-shark-chrome-extension",
    },
  ];