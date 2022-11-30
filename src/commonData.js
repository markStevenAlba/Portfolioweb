import Work1 from "./assets/work1.jpg";
import Work2 from "./assets/work2.jpg";
import Work3 from "./assets/work3.jpg";
import Work4 from "./assets/work4.jpg";
import Work5 from "./assets/work5.jpg";
import Doovote from "./assets/doovote.png";
import Netflix from "./assets/netflix.png";


import CV from "./assets/john-geli-CV.pdf";


export const API_URL = "https://docampaign.online/v1";


export const PROJECTS = [
    {
      id: 1,
      image: Work1,
      title: "POS",
      category: "Web",
      link: "/pos"
    },
    {
      id: 2,
      image: Work2,
      title: "Meet",
      category: "App",
      link: "/meet"
    },
    {
        id: 3,
        image: Doovote,
        title: "Doovote",
        category: "App",
        link: "https://doovote.com"
      },
      {
        id: 4,
        image: Netflix,
        title: "NorthFlix",
        category: "App",
        link: "/netflix"
      }
    // {
    //   id: 3,
    //   image: Work3,
    //   title: "Brand Design",
    //   category: "Design",
    //   link: "/netflix"
    // },
    // {
    //   id: 4,
    //   image: Work4,
    //   title: "App Movies",
    //   category: "App",
    //   link: "/blog"
    // },
    // {
    //   id: 5,
    //   image: Work5,
    //   title: "Web Design",
    //   category: "Web",
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
            }
        ]
    },
        {
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
                      link: "https://github.com/leikezej",
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
                          link: "https://www.facebook.com/thebullier/",
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
                      subtitle: "jezedevkiel21@gmail.com",
                      description: "",
                      link: "mailto:jezedevkiel21@gmail.com",
                      icon: "bx bx-mail-send",
                    },
                    {
                        title: "Whatsapp",
                        subtitle: "+639774461641",
                        description: "",
                        link: "https://www.linkedin.com/in/jezekiel-isip-1ab872215/",
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
                          subtitle: "jezekielisip",
                          description: "",
                          link: "https://www.facebook.com/thebullier/",
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
            }
        ]
    }
]


