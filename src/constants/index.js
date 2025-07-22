import Hotel from '../assets/projects/HotelBS.jpeg'
import social from '../assets/projects/socialcard.jpeg'
import todo from '../assets/projects/ToDoList.png'
import student from '../assets/projects/UniversityProject.png'


export const HERO_CONTENT = "As a specialized Frontend Developer, I transform designs into interactive digital realities. I possess strong skills in HTML5, CSS3 (Tailwind CSS, Bootstrap), and JavaScript (ES6+). I build dynamic web applications with ReactJS and am proficient in AJAX for seamless data communication. My goal is to create beautiful, fast, and user-friendly websites. I collaborate effectively with design and backend teams to deliver integrated digital solutions.";

export const ABOUT_TEXT = "I'm a passionate Frontend Web Designer and Developer dedicated to crafting visually stunning and highly interactive web experiences. My expertise spans HTML, CSS (Bootstrap, Tailwind CSS), and JavaScript (ES6+), with a strong focus on building dynamic user interfaces using React. I excel at bringing designs to life, ensuring both aesthetic appeal and seamless functionality for every project.";

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Cashier ",
    company: "At Nour Market",
    description: "Handled daily transactions and provided excellent customer service. Developed strong teamwork, communication, and time management skills.",
    technologies: ["Inventory Management","POS System","Office Tools"]
  },
  {
    year: "2024 - Present",
    role: "Front-End Developer - Self Learning",
    company: "",
    description: "Designed and developed multiple responsive websites using HTML, CSS, JavaScript, and React.js. Built small web applications focusing on clean UI and UX. Strengthened programming foundations with C, C++, Java, OOP, and Data Structures. Practiced version control and teamwork using Git and GitHub. Completed practical training at the Information Technology Institute (ITI).",
    technologies: [ "HTML" , "CSS" , "TailwindCSS" , "BootStrap" , "JavaScript" , "React.js" , "Git" , "GitHub"]
  },
  {
    year: "2021 - 2022",
    role: "Programming Competitions & Achievements",
    company: "",
    description: "Ranked Top 10 Nationwide at the ICPC Egypt Collegiate Programming Contest using C++. Won local Problem Solving Competitions applying algorithms and data structures.",
    technologies: ["C++", "OOP", "Data Structures", "Problem Solving"]
  },
];
export const PROJECTS = [
  {
    title: "Hotel Room Booking",
    image: Hotel,
    description:
      "Designed and developed a hotel room booking website with a team during my ITI course. The site allows users to search, view, and book available rooms easily.",
    technologies: ["HTML", "BootStrap"],
    link:["https://abdullah24102000.github.io/HotelBootstrap/"],
  },
  {
    title: "Social Post Feed",
    image: social,
    description:
      "Built a small social media feed using React.js. Users can add posts with images, like posts, comment, delete posts, and see the total number of likes for each post.",
    technologies: ["HTML", "CSS", "ES6+(JS)","ReactJS"],
  },
  {
    title: "Studying Material Website",
    image:student ,
    description:
      "Developed a simple website that shares study materials and scientific content for students in my faculty.",
    technologies: ["HTML", "CSS", "JS"],
    link:["https://abdullah24102000.github.io/ArishUniv/"],
  },
  {
    title: "To Do List",
    image: todo,
    description:
      "Developed a simple to-do list web application using React.js. Tasks are saved with localStorage, allowing users to add, edit, and mark tasks as complete, and keep their list even after closing the browser.",
    technologies: ["HTML", "CSS", "ES6+(JS)","ReactJS"],
  },
];

export const CONTACT = {
  address: "North Sinai, Egypt",
  phoneNo: "+201029472254",
  email: "engabdullahhassan@gmail.com",
};
