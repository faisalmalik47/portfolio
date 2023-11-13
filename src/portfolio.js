/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Faisal Malik",
  title: "Hello everyone, I'm Faissbskhsknks",
  subTitle: emoji(
    "A DevOps Engineer 🚀 experienced in CI/CD, cloud services, and infrastructure automation using Docker, Kubernetes, Jenkins, and Ansible. Proficient in scripting and maintaining high-performance web and mobile applications."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1B3zfjDj9K3urt1waUyJVFUTWSeajnQlx/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/faisalmalik47",
  linkedin: "https://www.linkedin.com/in/faiisalmaliik/",
  gmail: "faiisalmaliik1996@gmail.com",
  // gitlab: "https://gitlab.com/faisal",
  // facebook: "https://www.facebook.com/faisal",
  medium: "https://medium.com/@nudelhiwala",
  instagram: "https://instagram.com/nudelhiwaala",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "DEDICATED DEVOPS ENGINEER WHO LOVES TO STREAMLINE DEVELOPMENT AND OPERATIONS",
  skills: [
    emoji("⚡ Building and maintaining CI/CD pipelines for optimized software deployment and management"),
    emoji("⚡ Orchestrating containerized applications using Docker and Kubernetes"),
    emoji("⚡ Managing cloud-based services and infrastructure with AWS, Azure, and GCP"),
    emoji("⚡ Implementing infrastructure as code (IaC) with tools like Terraform and Ansible"),
    emoji("⚡ Ensuring system security and compliance with best practices in cybersecurity"),
    emoji("⚡ Scripting and automation with languages like Python, Bash, and PowerShell")
  ],


  /* Make Sure to include correct Font Awesome Classname to view your icon
 https://techicons.dev/icons/ */

  softwareSkills: [
    {
      skillName: "AWS",
      fontAwesomeClassname: "aws"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "git"
    },
    {
      skillName: "Ansible",
      fontAwesomeClassname: "ansible"
    },
    {
      skillName: "Terraform",
      fontAwesomeClassname: "tf"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "docker"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "sass"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "jenkins"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "k8s"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "db"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "python"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "linux"
    
    },
    {
      skillName: "Shell",
      fontAwesomeClassname: "bash"
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "azure"
    },
    {
      skillName: "Jira",
      fontAwesomeClassname: "jira"
    },
    {
      skillName: "Argo CD",
      fontAwesomeClassname: "argo"
    },
    {
      skillName: "Prometheus",
      fontAwesomeClassname: "prom"
    },    
    {
      skillName: "Grafana",
      fontAwesomeClassname: "grafana"
    },
    {
      skillName: "Helm",
      fontAwesomeClassname: "helm"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Jamia Hamdard University",
      logo: require("./assets/images/jh.png"),
      subHeader: "Master of Technology in Computer Science",
      duration: "2020 - 2023",
      desc: "Engaged in advanced studies and research in Computer Science, with a focus on microservices architecture. Published multiple papers contributing to the field.",
      descBullets: [
        "Conducted thorough research on microservices, exploring their scalability and efficiency in cloud computing environments.",
        "Collaborated with peers on various hands-on projects, enhancing practical understanding of software development processes and agile methodologies."
      ]
    },
    {
      schoolName: "AKTU - Abdul Kalam Technical University",
      logo: require("./assets/images/aktu.png"), // Ensure this is the correct logo for AKTU
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked in the top 10% of the class in a rigorous program, encompassing comprehensive coursework in Software Engineering, Web Security, and Operating Systems.",
      descBullets: [
        "Engaged in extensive studies on software development lifecycles, focusing on efficient, secure, and sustainable engineering practices.",
        "Participated in multiple group projects, developing practical skills in web security protocols and operating system structures."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Keep true to show Proficiency Section
  experience: [
    {
      Stack: "Infrastructure as Code", 
      progressPercentage: "80%", // Adjust based on your proficiency
      // rating: "8/10"
    },
    {
      Stack: "CI/CD",
      progressPercentage: "85%" // Adjust based on your proficiency
    },
    {
      Stack: "Containerization & Orchestration",
      progressPercentage: "75%" // Adjust based on your proficiency
    },
    {
      Stack: "Monitoring & Logging",
      progressPercentage: "70%" // Adjust based on your proficiency
    },
    {
      Stack: "Cloud Services",
      progressPercentage: "80%" // Adjust based on your proficiency
    },
    {
      Stack: "Version Control",
      progressPercentage: "90%" // Adjust based on your proficiency
    },
    {
      Stack: "Configuration Management",
      progressPercentage: "70%" // Adjust based on your proficiency
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges, if relevant
};


// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "DevOps Engineer",
      company: "WiseX by Aurum",
      companylogo: require("./assets/images/aurum.png"),
      date: "Sep 2023 - Present",
      desc: "WiseX, operated by Aurum WiseX, is recognized as India's leading Neo-Realty investment platform. It specializes in offering curated alternative investments in the real estate sector, presenting institutional-grade investment opportunities. The platform's distinct approach involves leveraging predictive analytics to meticulously scrutinize over 150 data points using proprietary technology solutions​​. This comprehensive approach ensures a data-driven and highly selective process in asset selection, aiming to offer high-quality real estate investment opportunities to its clients.",
      // color: "#f10000",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ],
    },
    {
      role: "DevOps Enginner",
      company: "Trantor Inc",
      companylogo: require("./assets/images/trantor.png"),
      date: "Dec 2022 - Aug 2023",
      desc: "Trantor Inc., established in 2012 and based in Menlo Park, California, specializes in IT consulting and enterprise technology solutions. Their services encompass cloud computing, managed security, DevOps consultancy, and data migration. Known for integrating analytics, automation, and artificial intelligence, Trantor excels in delivering solutions that exceed client expectations, particularly in transforming the lending ecosystem."
    },
    {
      role: "DevOps / Site Reliability Engineer",
      company: "Franconnect",
      companylogo: require("./assets/images/fc.png"),
      date: "Mar 2022 - Sep 2022",
      desc: "FranConnect is a leading franchise management software that excels in enhancing franchise operations. It is used by over 1500 brands globally and is not just a CRM, but a comprehensive platform for automating sales reporting, royalty calculations, and more. The software supports the opening of new units, efficient field operations, and is operational in 18 countries, showcasing its extensive reach and effectiveness in franchise management."
      
    },
    {
      role: "Associate DevOps Enginner",
      company: "British Telecom",
      companylogo: require("./assets/images/bt.png"),
      date: "Nov 2019 - Mar 2022",
      desc: "BT Group, a British multinational telecommunications company, offers a range of services including fixed-line, broadband, mobile, subscription television, and IT services. They are committed to connecting people and businesses, focusing on cybersecurity, advancing digital skills, and aiming for net-zero carbon emissions by 2031"

      
    }

  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/kassio.png"),
      projectName: "Kassio",
      projectDesc: "Kassio is a crypto platform providing mobile payments, trading, secure wallets, and crypto loans. It focuses on security and operates internationally, offering various financial services in the crypto market.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.kassio.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/dolpo.png"),
      projectName: "Dolpo.fr",
      projectDesc: "Dolpo's e-bookstore merges commercial sales with independent literary advice, serving as a foundation for future expansion into diverse cultural and retail sectors.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://dolpo.fr/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    // {
    //   title: "Google Code-In Finalist",
    //   subtitle:
    //     "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
    //   image: require("./assets/images/codeInLogo.webp"),
    //   imageAlt: "Google Code-In Logo",
    //   footerLink: [
    //     {
    //       name: "Certification",
    //       url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
    //     },
    //     {
    //       name: "Award Letter",
    //       url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
    //     },
    //     {
    //       name: "Google Code-in Blog",
    //       url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
    //     }
    //   ]
    // },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    // {
    //   title: "PWA Web App Developer",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image: require("./assets/images/pwaLogo.webp"),
    //   imageAlt: "PWA Logo",
    //   footerLink: [
    //     {name: "Certification", url: ""},
    //     {
    //       name: "Final Project",
    //       url: "https://pakistan-olx-1.firebaseapp.com/"
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://devopscube.com",
      title: "DevOps Updates",
      description:
        "Daily dose of tech news and articles to keep you updated."
    },
    {
      url: "https://devops.com",
      title: "DevOps News?",
      description:
        "Industry best practices and much more."
    },
    {
      url: "https://draft.dev/learn/devops-blogs",
      title: "Want to learn devops?",
      description:
        "Start your devops journey today."
    }
    
  ],
  
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

// const talkSection = {
//   title: "TALKS",
//   subtitle: emoji(
//     "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
//   ),

//   talks: [
//     {
//       title: "Build Actions For Google Assistant",
//       subtitle: "Codelab at GDG DevFest Karachi 2019",
//       slides_url: "https://bit.ly/saadpasta-slides",
//       event_url: "https://www.facebook.com/events/2339906106275053/"
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Podcast Section

// const podcastSection = {
//   title: emoji("Podcast 🎙️"),
//   subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

//   // Please Provide with Your Podcast embeded Link
//   podcast: [
//     "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-8802808392",
  email_address: "faiisalmaliik1996@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "devopscube", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  // talkSection,
  // podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
