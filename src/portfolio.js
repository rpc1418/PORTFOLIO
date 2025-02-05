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
    "An Electronics and Computer Engineering student at VIT Chennai, with a passion for data science, machine learning, and software development. I specialize in FPGA programming, embedded systems, and developing AI-driven applications that solve real-world problems. With hands-on experience in working with FPGA, STM32, and Jetson boards, I focus on creating, testing, and optimizing embedded applications. My work spans across security analysis, deep learning models, and traffic analytics, where I integrate both hardware and software to deliver innovative solutions. I thrive on pushing the boundaries of technology, whether it's in AI model integration or business intelligence, and I am committed to developing impactful, cutting-edge solutions that drive progress in industries like road safety monitoring and business analytics."
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
      desc: "CGPA:8.89"
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
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "NLP Project Concultancy",
      company: "Samsung",
      companylogo: require("./assets/images/Samsung.png"),
      date: "October 2024 – Present",
      desc: "Developing a lightweight solution to classify chat communications into family and non-family classes, creating a labeled dataset from real-life conversations, while focusing on demographic factors and model efficiency for on-device deployment."
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
      role: "HCL Project Consultancy ",
      company: "HCL-Tech",
      companylogo: require("./assets/images/hcltech_logo.png"),
      date: "Jul 2023 – Jun 2024",
      desc: "Developed a Python-based tool that processes digital systems described in Verilog, extracts the Finite State Machine (FSM) from the design, and generates detailed information about the FSM, such as states, transitions, and output behavior. The tool automates the analysis and documentation of digital circuits, facilitating easier verification and debugging of complex designs. "
    },
    {
      role: "Research Intern and Trainee",
      company: "CSIR-CSIO, Chandigarh",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Aug 2023 – Oct 2023",
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
  subtitle: "Few of the Major Projects i worked into...",
  projects: [
    {
      image: require("./assets/images/facebookLogo.png"),
      projectName: "ivats",
      projectDesc: "IVATS is a Flutter-based app using YOLO V8 for object detection, tracking, trajectory extraction, conflict analysis, real-world coordinate conversion, and data visualization, aimed at improving traffic management and safety. Soon open-sourced.",
      footerLink: [
        {
          name: "Soon to be open Sourced",
          // url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/facebookLogo.png"),
      projectName: "IRAMA",
      projectDesc: "Created a Linux application that disables the desktop at boot anddetects potholes through live camera feed using an ML model.The application logs data and uploads it to a Cloud server, running on a high performance Jetson board",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://irama.ai/"
        }
      ]
    },
    {
      image: require("./assets/images/airbnbLogo.png"),
      projectName: "VGA Interfacing RTL",
      projectDesc: "Designed RTLs for optimized real-time graphics generation, leverage on-board memory for frame buffers, and delve into FPGA parallelism, using VIVADO andVITIS for programming on Zynq FPGA 7020.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://drive.google.com/file/d/1wAtby3cmc8ycc3TW6RZfx7S1ee7UXcro/view"
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
    {
      title: "Microsoft Certified Azure- Data Fundamentals",
      subtitle:
        "Foundational knowledge of core data concepts and their implementation using Microsoft Azure data services",
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
      title: "Embedded Systems and C ",
      subtitle:
        "Proficiency in live coding and understanding of key concepts like call stacks and resource coordination",
      image: require("./assets/images/stanfordLogo.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.testdome.com/certificates/1f5a60c692604772adabf2966bc1c7f4?trk=public_profile_see-credential"
        }
      ]
    },

    {
      title: "CSIR-CSIO Certificate of Training ",
      subtitle: "Hands-on experience in advanced technologies and methodologies in research and development",
      image: require("./assets/images/airbnbLogo.png"),
      imageAlt: "PWA Logo",
      footerLink: [
   
        {
          name: "Training Certificate",
          url: "https://drive.google.com/file/d/10XDETo1I0QIRdtnVM-YSHnsSRuQv7WLH/view?trk=public_profile_see-credential"
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
