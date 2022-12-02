import Work1 from "./assets/work1.jpg";
import Work2 from "./assets/work2.jpg";
import Work3 from "./assets/work3.jpg";
import Work4 from "./assets/work4.jpg";
import Work5 from "./assets/work5.jpg";

import Doovote from "./assets/doovote.png";
import Netflix from "./assets/netflix.png";
import Dashboard from "./assets/Dashboard.png";
import Pos from "./assets/Pos.png";
import Meet from "./assets/Meet.png";
import Blog from "./assets/Blog.png";
import Inventory from "./assets/Inventory.png";
import Ecommerce from "./assets/Ecommerce.png";
import Messaging from "./assets/Messaging.png";
import Image1 from "./assets/testimonial1.png"; 
import Image2 from "./assets/testimonial2.png";
import Image3 from "./assets/testimonial3.png";

import CV from "./assets/john-geli-CV.pdf";

//Dev
export const API_URL = "https://docampaign.online/v1";

//Local
// export const API_URL = "http://localhost:5004/v1";


export const Testimonial = [
  {
    id: 1,
    image: Image1,
    title:"Aja Hardware",
    description: "A really good job, a aspects of the project were followed step by step and with good results."
  },
  {
    id: 2,
    image: Image2,
    title:"",
    description: ""
  }

  // {
  //   id:2,
  //   image: Image2,
  //   title: "Harry Clinton",
  //   description:
  //   "A really good job, a aspects of the project were followed step by step and with good results.",

  // },
  // {
  //   id:3,
  //   image: Image3,
  //   title: "Sara Cill",
  //   description:
  //   "A really good job, a aspects of the project were followed step by step and with good results.",
  // }
]

export const PROJECTS = [
    {
      id: 1,
      cover: Pos,
      title: "POS",
      description: "Web",
      link: "/pos"
    },
    {
      id: 2,
      cover: Meet,
      title: "Meet",
      description: "App",
      link: "/meet"
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
      id: 5,
      cover: Dashboard,
      title: "Admin Panel",
      description: "Design",
      link: "/dashboard"
    },
    {
      id: 6,
      cover: Inventory,
      title: "Inventory Management",
      description: "App",
      link: "/inventory"
    },
    {
      id: 7,
      cover: Blog,
      title: "Blog Web Site",
      description: "Web",
      link: "/blog"
    },
    {
      id: 8,
      cover: Ecommerce,
      title: "Ecommerce Web",
      description: "Design",
      link: "/ecommerce"
    },
    {
      id: 9,
      cover: Messaging,
      title: "Messaging Web App",
      description: "App",
      link: "/messaging"
    },
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
        email: "jb@yahoo.com",
        profile: {
            cover: "",
            nickname: "jaybee",
            firstName: "John Benedict",
            lastName: "Geli",
            position: "Software Engineer",
            bio: "I'm creative software developer based in Tacloban City, Philippines, and I'm very passionate and dedicated to my work.",
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
                      link: "https://github.com/jGeli",
                      icon: "uil uil-github-alt",
                    },
                    {
                        title: "",
                        subtitle: "",
                        description: "",
                        link: "https://linkedin.com/in/john-benedict-geli-16941a21a",
                        icon: "uil uil-linkedin",
                      },
                      {
                          title: "",
                          subtitle: "",
                          description: "",
                          link: "https://www.facebook.com/jaybeepido/",
                          icon: "uil uil-facebook",
                        }
                ]
            },
            {
                type: "contact",
                title: "Get in touch",
                subtitle: "Contact Me",
                contents: [
                    {
                      title: "Email",
                      subtitle: "jaybee.aicpa@gmail.com",
                      description: "",
                      link: "mailto:jaybee.aicpa@gmail.com",
                      icon: "bx bx-mail-send",
                    },
                    {
                        title: "Whatsapp",
                        subtitle: "+639774461641",
                        description: "",
                        link: "www.linkedin.com/in/john-benedict-geli-16941a21a",
                        icon: "bx bxl-whatsapp",
                      },{
                        title: "Skype",
                        subtitle: "jaybee.aicpa@outlook.com",
                        description: "",
                        link: "https://join.skype.com/invite/ywfxqv9NGiPP",
                        icon: "bx bxl-skype",
                      },
                      {
                          title: "Messenger",
                          subtitle: "jaybeegeli",
                          description: "",
                          link: "https://www.facebook.com/jaybeepido/",
                          icon: "bx bxl-messenger",
                        }
                ]
            },
            {
                type: "about",
                title: "About Me",
                subtitle: "My Introduction",
                description: "Frontend developer, I create web pages with UI / UX user interface, I have years of experience and many clients are happy with the projects carried out.",
                link: CV,
                cover: "",
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
                        subtitle: "Online 20/5",
                        description: "",
                        link: "",
                        icon: "bx bx-support",
                      },
                      {
                        title: "Accounting",
                        subtitle: "Book keeper",
                        description: "",
                        link: "",
                        icon: "bx bx-book",
                      },
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
          },{
            type: "services",
            title: "Services",
            subtitle: "What I Offer 🙄",
            description: "",
            link: "",
            cover: "",
            contents: []
        },{
          type: "qualification",
          title: "Qualification",
          subtitle: "My Personal Journey",
          description: "",
          link: "",
          cover: "",
          contents: Testimonial
      },{
        type: "testimonial",
        title: "My Clients Say",
        subtitle: "Testimonial 🗯",
        description: "",
        link: "",
        cover: "",
        contents: Testimonial
    }
        ]
    },{
        username: "jezekielisip",
        email: "jezedevkiel21@gmail.com",
        profile: {
            cover: "",
            nickname: "jezekiel",
            firstName: "Jezekiel",
            lastName: "Isip",
            position: "Backend Developer",
            bio: "I'm creative developer based in Tacloban City, Philippines, and I'm very passionate and dedicated to my work.",
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
                    link: "https://github.com/jGeli",
                    icon: "uil uil-github-alt",
                  },
                  {
                      title: "",
                      subtitle: "",
                      description: "",
                      link: "https://linkedin.com/in/john-benedict-geli-16941a21a",
                      icon: "uil uil-linkedin",
                    },
                    {
                        title: "",
                        subtitle: "",
                        description: "",
                        link: "https://www.facebook.com/jaybeepido/",
                        icon: "uil uil-facebook",
                      }
              ]
          },
          {
              type: "contact",
              title: "Get in touch",
              subtitle: "Contact Me",
              contents: [
                  {
                    title: "Email",
                    subtitle: "jaybee.aicpa@gmail.com",
                    description: "",
                    link: "mailto:jaybee.aicpa@gmail.com",
                    icon: "bx bx-mail-send",
                  },
                  {
                      title: "Whatsapp",
                      subtitle: "+639774461641",
                      description: "",
                      link: "www.linkedin.com/in/john-benedict-geli-16941a21a",
                      icon: "bx bxl-whatsapp",
                    },{
                      title: "Skype",
                      subtitle: "jaybee.aicpa@outlook.com",
                      description: "",
                      link: "https://join.skype.com/invite/ywfxqv9NGiPP",
                      icon: "bx bxl-skype",
                    },
                    {
                        title: "Messenger",
                        subtitle: "jaybeegeli",
                        description: "",
                        link: "https://www.facebook.com/jaybeepido/",
                        icon: "bx bxl-messenger",
                      }
              ]
          },
          {
              type: "about",
              title: "About Me",
              subtitle: "My Introduction",
              description: "Frontend developer, I create web pages with UI / UX user interface, I have years of experience and many clients are happy with the projects carried out.",
              link: CV,
              cover: "",
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
                      subtitle: "Online 20/5",
                      description: "",
                      link: "",
                      icon: "bx bx-support",
                    },
                    {
                      title: "Accounting",
                      subtitle: "Book keeper",
                      description: "",
                      link: "",
                      icon: "bx bx-book",
                    },
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
        }
      ]
    },
    {
      username: "brixdelute",
      email: "jezedevkiel21@gmail.com",
      profile: {
          cover: "",
          nickname: "brix",
          firstName: "Brix",
          lastName: "Delute",
          position: "Full Stack Developer",
          bio: "I'm creative developer based in Tacloban City, Philippines, and I'm very passionate and dedicated to my work.",
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
                  link: "https://github.com/jGeli",
                  icon: "uil uil-github-alt",
                },
                {
                    title: "",
                    subtitle: "",
                    description: "",
                    link: "https://linkedin.com/in/john-benedict-geli-16941a21a",
                    icon: "uil uil-linkedin",
                  },
                  {
                      title: "",
                      subtitle: "",
                      description: "",
                      link: "https://www.facebook.com/jaybeepido/",
                      icon: "uil uil-facebook",
                    }
            ]
        },
        {
            type: "contact",
            title: "Get in touch",
            subtitle: "Contact Me",
            contents: [
                {
                  title: "Email",
                  subtitle: "jaybee.aicpa@gmail.com",
                  description: "",
                  link: "mailto:jaybee.aicpa@gmail.com",
                  icon: "bx bx-mail-send",
                },
                {
                    title: "Whatsapp",
                    subtitle: "+639774461641",
                    description: "",
                    link: "www.linkedin.com/in/john-benedict-geli-16941a21a",
                    icon: "bx bxl-whatsapp",
                  },{
                    title: "Skype",
                    subtitle: "jaybee.aicpa@outlook.com",
                    description: "",
                    link: "https://join.skype.com/invite/ywfxqv9NGiPP",
                    icon: "bx bxl-skype",
                  },
                  {
                      title: "Messenger",
                      subtitle: "jaybeegeli",
                      description: "",
                      link: "https://www.facebook.com/jaybeepido/",
                      icon: "bx bxl-messenger",
                    }
            ]
        },
        {
            type: "about",
            title: "About Me",
            subtitle: "My Introduction",
            description: "Frontend developer, I create web pages with UI / UX user interface, I have years of experience and many clients are happy with the projects carried out.",
            link: CV,
            cover: "",
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
                    subtitle: "Online 20/5",
                    description: "",
                    link: "",
                    icon: "bx bx-support",
                  },
                  {
                    title: "Accounting",
                    subtitle: "Book keeper",
                    description: "",
                    link: "",
                    icon: "bx bx-book",
                  },
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
      }
    ]
  }
]


