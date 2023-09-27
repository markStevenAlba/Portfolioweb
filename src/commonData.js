
import { MdDesignServices } from "react-icons/md";
import { FiCodesandbox } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import Work2 from "./assets/work2.jpg";
import Work3 from "./assets/work3.jpg";
import Mwell from './assets/mwell.png';
import Central from './assets/central.png';
// import Work4 from "./assets/work4.jpg";
// import Work5 from "./assets/work5.jpg";

import Doovote from "./assets/doovote.png";
import Netflix from "./assets/netflix.png";
// import Dashboard from "./assets/Dashboard.png";
import Pos from "./assets/Pos.png";
import CFC from "./assets/CFC.png";
// import Blog from "./assets/Blog.png";
// import Inventory from "./assets/Inventory.png";
// import Ecommerce from "./assets/Ecommerce.png";
// import Messaging from "./assets/Messaging.png";
// import IDPIC from './assets/one_piece_logo1.jpg';
import Image1 from "./assets/testimonial1.png";
import Image2 from "./assets/testimonial2.png";
import Image3 from "./assets/testimonial3.png";
import CV from "./assets/MARK_STEVEN_ALBA.pdf";

//Dev
export const API_URL = "https://bugtech.solutions/v1";

//Local
// export const API_URL = "http://localhost:5500/v1";


export const Testimonial = [
  {
    id: 1,
    image: Image1,
    title: "Aja Hardware",
    description: "A really good job, a aspects of the project were followed step by step and with good results."
  },
  {
    id: 2,
    image: Image2,
    title: "Harry Clinton",
    description:
      "A really good job, a aspects of the project were followed step by step and with good results.",

  },
  {
    id: 3,
    image: Image3,
    title: "Sara Cill",
    description:
      "A really good job, a aspects of the project were followed step by step and with good results.",
  }
]

export const Services = [
  {
    id: 1,
    image: Image1,
    title: "System Design and Architecture Services",
    description: "Creating high-level designs of software systems that meet the requirements of stakeholders. This includes identifying components, interactions, and dependencies, and creating detailed technical specifications.",
    icon: MdDesignServices
  },
  {
    id: 2,
    image: Image3,
    title: "Fullstack Development Services",
    description:
      "Writing code to create both the client-side and server-side components of web applications. This includes working with technologies such as React.js, Node.js, MySQL, MongoDB, or PostgreSQL to create responsive and interactive interfaces, APIs.",
    icon: FiCodesandbox
  },
  {
    id: 3,
    image: Image2,
    title: "Database Design and Management",
    description:
      "Writing code to create the server-side components of web applications. This includes working with technologies such as NodeJS, Express, Typescript to create APIs, databases, AWS, Microservices and web servers.",
    icon: CgWebsite
  },

]


export const PROJECTS = [
  {
    id: 1,
    cover: Pos,
    title: "Inventory/POS",
    description: "Web",
    link: "https://pos.bugtech.solutions"
  },
  {
    id: 2,
    cover: CFC,
    title: "CFC 2023",
    description: "App",
    link: "https://cfc.bugtech.solutions"
  },
  {
    id: 3,
    cover: Doovote,
    title: "Doovote",
    description: "App",
    link: "https://doovote.com"
  },
  {
    id: 4,
    cover: Netflix,
    title: "NorthFlix",
    description: "App",
    link: "/netflix"
  },
  {
    id: 6,
    cover: Work3,
    title: "File Manager",
    description: "Web",
    link: "https://files.bugtech.solutions"
  },
  {
    id: 7,
    cover: Central,
    title: "Central PH",
    description: "Web",
    link: "https://central.ph"
  },
  {
    id: 8,
    cover: Mwell,
    title: "Mwell - Telenconsultation",
    description: "Web",
    link: "https://www.mwell.com.ph"
  },
  // {
  //   id: 6,
  //   cover: Inventory,
  //   title: "Bubu - Lending App",
  //   description: "App",
  //   link: "https://bubu.bugtech.solutions"
  // },
  // {
  //   id: 7,
  //   cover: Inventory,
  //   title: "Deep - Multi-level Marketing",
  //   description: "App",
  //   link: "https://deep.bugtech.solutions"
  // },
  // {
  //   id: 7,
  //   cover: Blog,
  //   title: "Blog Web Site",
  //   description: "Web",
  //   link: "/blog"
  // },
  // {
  //   id: 8,
  //   cover: Ecommerce,
  //   title: "Ecommerce Web",
  //   description: "Design",
  //   link: "/ecommerce"
  // },
  // {
  //   id: 9,
  //   cover: Messaging,
  //   title: "Messaging Web App",
  //   description: "App",
  //   link: "/messaging"
  // },
];

export const SKILLS = [
  {
    id: 1,
    title: "Backend Developer",
    description: "backend",
    contents: [
      {
        title: "Node JS",
        subtitle: "Advance",
        icon: "bx bxl-nodejs"
      },
      {
        title: "MySQL",
        subtitle: "Intermediate",
        icon: "bx bxl-mysql"
      },
      {
        title: "MongoDB",
        subtitle: "Intermediate",
        icon: "bx bxl-mongodb"
      },
      {
        title: "Firebase",
        subtitle: "Intermediate",
        icon: "bx bxl-firebase"
      },
      {
        title: "Postgresql",
        subtitle: "Intermediate",
        icon: "bx bxl-postgresql"
      },
      {
        title: "AWS",
        subtitle: "Intermediate",
        icon: "bx bxl-aws"
      }
    ]
  },
  {
    id: 2,
    cover: Work2,
    title: "Frontend Developer",
    description: "frontend",
    contents: [
      {
        title: "HTML5",
        subtitle: "Basic",
        icon: "bx bxl-hmtl5"
      },
      {
        title: "CSS3",
        subtitle: "Intermediate",
        icon: "bx bxl-css3"
      },
      {
        title: "Javascript",
        subtitle: "Advance",
        icon: "bx bxl-javascript"
      },
      {
        title: "Bootstrap",
        subtitle: "Intermediate",
        icon: "bx bxl-bootstrap"
      },
      {
        title: "Git",
        subtitle: "Advance",
        icon: "bx bxl-git"
      },
      {
        title: "React",
        subtitle: "Advance",
        icon: "bx bxl-react"
      }
    ]
  }
  // {
  //   id: 3,
  //   cover: Work3,
  //   title: "Brand Design",
  //   description: "Design",
  //   link: "/netflix"
  // },
  // {
  //   id: 4,
  //   cover: Work4,
  //   title: "App Movies",
  //   description: "App",
  //   link: "/blog"
  // },
  // {
  //   id: 5,
  //   cover: Work5,
  //   title: "Web Design",
  //   description: "Web",
  //   link: "/inventory"
  // },
];

export const PROFILES = [
  {
    username: "jaybeegeli",
    email: "marksteven.alba@gmail.com",
    profile: {
      // cover: IDPIC,
      nickname: "S  teven",
      firstName: "Mark Steven",
      lastName: "Alba",
      position: [
        "Software Engineer",
        "Backend Developer",
        "Front End Developer",
        "Full Stack Developer"
      ],
      bio: "I'm a seasoned developer with 4+ years of experience in front-end and back-end development across diverse industries like Insurance and IT Services. I've led teams in creating user-friendly applications from scratch to deployment, with expertise in JavaScript, ReactJS, NodeJS, RestAPI, Microservices, Git, Aws, Azure, MongoDB, and MySQL. I excel in web design, coding, and agile project management.",
    },
    contents: [
      {
        type: "socials",
        title: "",
        subtitle: "",
        contents: [
          {
            title: "",
            subtitle: "",
            description: "",
            link: "https://github.com/bugtech-systems",
            icon: "uil uil-github-alt",
          },
          {
            title: "",
            subtitle: "",
            description: "",
            link: "https://www.linkedin.com/in/mark-steven-alba-9b55a9274/",
            icon: "uil uil-linkedin",
          }
          //   {
          //       title: "",
          //       subtitle: "",
          //       description: "",
          //       link: "https://www.facebook.com/AlbyYourCryingShoulder",
          //       icon: "uil uil-facebook",
          //     }
        ]
      },
      {
        type: "contact",
        title: "Get in touch",
        subtitle: "Contact Me",
        contents: [
          {
            title: "Email",
            subtitle: "marksteven.alba@gmail.com",
            description: "",
            link: "marksteven.alba@gmail.com",
            icon: "bx bxl-gmail",
          },
          {
            title: "Telegram",
            subtitle: "@markSteven96",
            description: "",
            link: "",
            icon: "bx bxl-telegram",
          },
          // {
          //   title: "Skype",
          //   subtitle: "Mark Steven.Alba.official20@gmail.com",
          //   description: "",
          //   link: "https://join.skype.com/invite/ywfxqv9NGiPP",
          //   icon: "bx bxl-skype",
          // },
          {
            title: "Messenger",
            subtitle: "marksteven.alba",
            description: "",
            link: "https://www.facebook.com",
            icon: "bx bxl-messenger",
          }
        ]
      },
      {
        type: "about",
        title: "About Me",
        subtitle: "My Introduction",
        description: "I'm a Full Stack Developer, I create web and mobile applications with UI / UX user interface, I have years of experience and many clients are happy with the projects carried out.",
        link: CV,
        // cover: IDPIC,
        contents: [
          {
            title: "Experience",
            subtitle: "4+ Years Working",
            description: "",
            link: "",
            icon: "bx bx-award",
          },
          {
            title: "Completed",
            subtitle: "10+ projects",
            description: "",
            link: "",
            icon: "bx bx-briefcase-alt",
          },
          {
            title: "Support",
            subtitle: "Online 24/7",
            description: "",
            link: "",
            icon: "bx bx-support",
          },
          {
            title: "Freelancing",
            subtitle: "Web Development",
            description: "Collaborations with multiple private companies",
            link: "",
            icon: "bx bx-book",
          }
        ]
      },
      {
        type: "works",
        title: "Portfolio",
        subtitle: "Most recent works",
        description: "",
        link: "",
        cover: "",
        contents: PROJECTS
      },
      {
        type: "skills",
        title: "Skills",
        subtitle: "My Technical Level",
        description: "",
        link: "",
        cover: "",
        contents: SKILLS
      }, {
        type: "services",
        title: "Services",
        subtitle: "What I Offer 🙄",
        description: "",
        link: "",
        cover: "",
        contents: Services
      }, {
        type: "qualification",
        title: "Qualification",
        subtitle: "My personal journey",
        description: "",
        link: "",
        cover: "",
        contents: [
          {
            type: "education",
            title: "ASIAN DEVELOPMENT FOUNDATION COLLEGE",
            subtitle: "BACHELOR OF SCIENCE IN BUSINESS ADMINISTRATION",
            description: "2016-2020",
            link: "",
            cover: "",
            contents: []
          },
          {
            type: "education",
            title: "Leyte National High School",
            subtitle: "Diploma - Secondary",
            description: "2010-2014",
            link: "",
            cover: "",
            contents: []
          }, {
            type: "experience",
            title: "HIGHLY SUCCEED INC",
            subtitle: "Senior Full Stack Developer",
            description: "May 2022 - April 2023",
            link: "",
            cover: "",
            contents: []
          }, {
            type: "experience",
            title: "IT MATTERS",
            subtitle: "Web Developer",
            description: "April 2018 - January 2022",
            link: "",
            cover: "",
            contents: []
          },
        ]
      }
    ]
  }
]




