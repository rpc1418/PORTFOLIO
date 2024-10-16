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
  username: "rpc1418",
  title: "Hi all, I'm Rudraksh Chourey",
  subTitle: emoji(
    "I am an aspiring Electronics and Computer Engineer currently in my third year of undergraduate studies. With a relentless passion for technology, I've honed my programming skills over the past few years, becoming proficient in languages like Verilog, C, C++, Java, and Python. I've put these skills into action through various projects that span a spectrum of programming languages, including Python, Java, SQL, Verilog, and have delved into the intricacies of EDA tools such as Cadence, Model-sim, XILINX VIVADO and VITIS. My journey is a testament to my commitment to innovation and the ever-evolving world of technology."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1zi70n1L5jMnte5xeWsISXPYuvCdxi_7F/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/rpc1418",
  linkedin: "https://linkedin.com/in/rudraksh-chourey-114484232/",
  gmail: "rudrakshchourey@outlook.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  kaggle: "https://www.kaggle.com/rudrakshchourey",
  instagram: "https://www.instagram.com/__rpc__/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Devlopment with a focus on AI, ML, and embedded systems.",
  skills: [
    emoji(
      "💻 Proficient in programming and scripting languages including C, C++, Python, Java, and Dart, with strong full-stack development experience"
    ),
    emoji("🤖 Skilled in machine learning and deep learning using frameworks like TensorFlow, PyTorch, and Keras for data analytics and AI solutions."),
    emoji(
      "🔧 Experienced in hardware programming and development tools such as Xilinx VIVADO, ZYNQ FPGA, and STM32, with solid project management skills using Git, JIRA, and Confluence."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
     
      
          skillName: "C",
          fontAwesomeClassname: "fas fa-code"
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "fas fa-laptop-code"
        },
        {
          skillName: "dart",
          fontAwesomeClassname: "fab fa-apple"
        },
        {
          skillName: "python",
          fontAwesomeClassname: "fab fa-python"
        },
        {
          skillName: "pandas",
          fontAwesomeClassname: "fas fa-database"
        },
        {
          skillName: "numpy",
          fontAwesomeClassname: "fas fa-cubes"
        },
        {
          skillName: "opencv",
          fontAwesomeClassname: "fas fa-eye"
        },
        {
          skillName: "pytorch",
          fontAwesomeClassname: "fas fa-brain"
        },
        {
          skillName: "pyspark",
          fontAwesomeClassname: "fas fa-cloud"
        },
        {
          skillName: "scikit-learn",
          fontAwesomeClassname: "fas fa-graduation-cap"
        },
        {
          skillName: "tensorflow",
          fontAwesomeClassname: "fas fa-network-wired"
        },
        {
          skillName: "keras",
          fontAwesomeClassname: "fas fa-brain"
        },
        {
          skillName: "R",
          fontAwesomeClassname: "fab fa-r-project"
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "fas fa-database"
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "fab fa-java"
        },
        {
          skillName: "verilog",
          fontAwesomeClassname: "fas fa-microchip"
        },
        {
          skillName: "shell",
          fontAwesomeClassname: "fas fa-terminal"
        },
        {
          skillName: "embedded-c",
          fontAwesomeClassname: "fas fa-microchip"
        },
        {
          skillName: "git",
          fontAwesomeClassname: "fab fa-git"
        },
        {
          skillName: "vs-code",
          fontAwesomeClassname: "fas fa-code"
        },
        {
          skillName: "pycharm",
          fontAwesomeClassname: "fas fa-code"
        },
        {
          skillName: "jira",
          fontAwesomeClassname: "fab fa-jira"
        },
        {
          skillName: "confluence",
          fontAwesomeClassname: "fab fa-confluence"
        },
        {
          skillName: "notebooks",
          fontAwesomeClassname: "fas fa-book"
        },
        {
          skillName: "ZYNQ FPGA",
          fontAwesomeClassname: "fas fa-microchip"
        },
        {
          skillName: "STM32",
          fontAwesomeClassname: "fas fa-microchip"
        },
        {
          skillName: "vivado",
          fontAwesomeClassname: "fas fa-microchip"
        },
        {
          skillName: "vitis",
          fontAwesomeClassname: "fas fa-microchip"
        },
        {
          skillName: "linux",
          fontAwesomeClassname: "fab fa-linux"
        },
        {
          skillName: "windows",
          fontAwesomeClassname: "fab fa-windows"
        },
        {
          skillName: "macos",
          fontAwesomeClassname: "fab fa-apple"
        },
        {
          skillName: "jtag",
          fontAwesomeClassname: "fas fa-plug"
        },
        {
          skillName: "uart",
          fontAwesomeClassname: "fas fa-microchip"
        },
        {
          skillName: "spi",
          fontAwesomeClassname: "fas fa-signal"
        },
        {
          skillName: "i2c",
          fontAwesomeClassname: "fas fa-link"
        },
        {
          skillName: "vga",
          fontAwesomeClassname: "fas fa-tv"
        }
      ],
      
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Vellore Institute of Technology, Chennai",
      logo: require("./assets/images/vit.png"),
      subHeader: "Bacehlors in Electronics and Computer Engineering",
      duration: "September 2021 - Jully 2025",
      desc: "CGPA:8.85"
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "La Sagesse Academy, Indore",
      logo: require("./assets/images/lsa.png"),
      subHeader: "10th and 12th",
      duration: "2018 - 2021",
      desc: "Completed 10th Standard with 89% and 12th in Physics Chemistry Maths IP with 93.4%."
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Development", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Embeded/RTL Coding",
      progressPercentage: "80%"
    },
    {
      Stack: "AI/ML",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "NLP Project Intern",
      company: "Samsung",
      companylogo: require("./assets/images/Samsung.png"),
      date: "October 2024 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Development and ML Intern",
      company: "IIT, Roorkee",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "May 2024 – June 2024",
      desc: "Developed a Windows app using Flutter for trajectory extraction with YOLO and conflict analysis, inferring to models like LSTM, Transformer, GNN, etc., for classification. Additionally, Created a Linux app for real-time pothole detection on a Jetson board."
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      role: "Research Intern and Trainee",
      company: "CSIR-CSIO, Chanidarh",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Created a project that utilizes the Bresenham line generating algorithm to produce multiple lines within a frame using ZYNQ Z7020 FPGA, with the goal of future integration into a heads-up display (HUD).Engaged in R&D activities focused on developing, testing and optimizing FPGA-based deployable Strategy "
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
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Microsoft Certified Azure- Data Fundamentals",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.png"),
      imageAlt: "AZURE",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1zprwH2vpjkewIoZA4CMyuKubXW2nFHan/view?usp=sharing"
        }
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
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

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
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
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9826133859",
  email_address: "rudrakshchourey@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
