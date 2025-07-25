
import { FaHtml5, FaRobot } from "react-icons/fa6";
import { RiCustomerService2Fill } from "react-icons/ri";
import { TbDeviceMobileCode } from "react-icons/tb";

export const expertiseList = [
  {
    title: "Web Development",
    description:
      " I excel in building high-quality web applications using Next.js, React, and Redux. I am proficient in creating user-centric interfaces using custom CSS and Tailwind CSS. I have experience in developing Single Page Applications and Progressive Web Applications, ensuring optimal performance and user experience.",
    icon: <FaHtml5 size={25} className="text-red-500 dark:text-white" />,
  },
  {
    title: "Mobile Development",
    description:
      " I specialize in cross-platform mobile development using Flutter, focusing on building high-performance and visually appealing apps with a focus on user experience. I leverage the Flutter Bloc pattern for effective state management and improved maintainability.",
    icon: (
      <TbDeviceMobileCode size={25} className="text-red-500 dark:text-white" />
    ),
  },
  {
    title: "Third-party Hardware and Software Integration",
    description:
      " I have a proven track record of successfully integrating third-party hardware and software components into complex systems, ensuring optimal performance and seamless functionality.",
    icon: <FaRobot size={25} className="text-red-500 dark:text-white" />,
  },
  {
    title: "Customer Support",
    description:
      " I am proficient in providing excellent customer support, including troubleshooting issues, monitoring application performance, and ensuring smooth product operations.",
    icon: (
      <RiCustomerService2Fill
        size={25}
        className="text-red-500 dark:text-white"
      />
    ),
  },
];

export const educationList = [
  // {
  //   duration: "2025-Pesent",
  //   title: "Masters of Science in Computer Science",
  //   institution: "EPITA - School of Engineering and Computer Science",
  //   location: "Paris, France",
  //   link: "https://www.epita.fr/",
  // },
  {
    duration: "2016-2020",
    title: "Bachelor of Science in Computer Science",
    institution: "PMAS Arid Agriculture University Rawalpindi",
    location: "Rawalpindi, Pakistan",
    link: "https://www.uaar.edu.pk/",
  },
];

export const workExperienceList = [
  {
    duration: "Dec 2021- Present",
    title: "Software Developer",
    institution: "ICAD-KSA",
    location: "Abu Dhabi, UAE",
    link: "https://www.icad.com/",
  },
  {
    duration: "Jan 2020- Nov 2021",
    title: "Software Developer",
    institution: "AppInSnap",
    location: "Islamabad, Pakistan",
    link: "https://appinsnap.com/",
  },
];

export const knowledgeList = [
  "Next.js, Reactjs",
  "Redux, Redux Toolkit",
  "Tailwind CSS, CSS, PrimeUi, Bootstrap",
  "Flutter",
  "Bloc Pattern, GetX",
  "Web Rtc",
  "Xcode",
  "RabitMq, Mqtt",
  "Firebase, FCM , APN Notifications",
  "RESTful APIs",
  "Payment Gateway Integration",
  "Apple Store, Google Play Store",
  "Git",
  "CPanels, WHM, VPS",
  "Jira",
  "Confluence",
  "Postman",
  "MacOS, Windows, Linux",
];

export const skillLists = [
  {
    title: "Deadline Management",

    percent: "95%",
  },
  
  {
    title: "Customer Support",
    percent: "80%",
  },
  { title: "Time Management", percent: "97%" },
  {
    title: "Team Collaboration",
    percent: "85%",
  },

  {
    title: "Team Management",
    percent: "90%",
  },
];

export const blogsList = [
  {
    id: "1",
    image: "/images/blog.jpg",
    date: "Coming Soon",
    title: "How to deploy a Next.js app on Vercel",
    description:
      "This article will explain how to deploy a Next.js app on Vercel.",
  },
  {
    id: "2",
    image: "/images/blog.jpg",
    date: "Coming Soon",
    title: "How to deploy a Flutter app on google and apple store",
    description:
      "This article will explain how to deploy a Flutter app on google and apple store.",
  },
  {
    id: "3",
    image: "/images/blog.jpg",
    date: "Coming Soon",
    title: "How to Integrate Localization in next.js",
    description:
      "this article will explain how to integrate localization in next.js using next-intl",
  },
  {
    id: "4",
    image: "/images/blog.jpg",
    date: "Coming Soon",
    title: "How to Integrate TAP Payment in Flutter",
    description:
      "This article will explain how to integrate TAP payment in Flutter.",
  },
  {
    id: "5",
    image: "/images/blog.jpg",
    date: "Coming Soon",
    title: "How to Integrate TAP Payment in Next.js",
    description:
      "This article will explain how to integrate TAP payment in Next.js.",
  },
  {
    id: "6",
    image: "/images/blog.jpg",
    date: "Coming Soon",
    title: "How to Apply Dark&Light Mode in Nextjs",
    description:
      "This article will explain how to apply dark and light mode in Next.js.",
  },
];

export const projectsList = [
  {
    id: "1",
    image: "/images/dib.png",
    date: "",
    title: "TeleBilling DIB",
    description: "Billing application for Dubai Islamic Bank.",
    details:
      "The TeleBilling DIB project is a comprehensive billing application designed specifically for Dubai Islamic Bank, aimed at streamlining telecom billing processes. This application integrates billing from all major telecom providers, including Etisalat and Du, covering services such as fax, internet, and calling. Additionally, it manages LAN billing for ATMs and bank branches across the UAE." +
      "The project is linked with our existing product, Call Accounting, to ensure seamless data integration. Telecom companies provide network bills in a specified CSV format, which TeleBilling DIB processes to verify active connections and reconcile bills with service provider data. It also checks for any charges related to closed connections and manages all actively connected networks." +
      "TeleBilling DIB features advanced reporting capabilities, including graphical representations and a robust dashboard for comprehensive insights and analysis.",
  },
  {
    id: "2",
    image: "/images/videocalldxb.png",
    date: "",
    title: "Video callings For Dubai Immigration",
    description: "Video calling application for the Government of Dubai.",
    details:
      "The Dubai Immigration Video Calling Application is a public-use platform designed to provide users with convenient access to information about visas and other services offered by the Dubai Immigration Department. Users can initiate video calls through the GDRFA website (https://gdrfad.gov.ae/en/node/13855 ) to speak directly with immigration officials." +
      "This application is built on Avaya Spaces and features an integrated queue system to manage call flow efficiently. Additionally, it is linked with SignalR for real-time communication, ensuring seamless and instant interactions between users and immigration representatives.",
  },
  {
    id: "3",
    image: "/images/azizi.jpg",
    date: "",
    title: "Azizi LeadsManager",
    description: "Leads application for Azizi call center.",
    details:
      "The Azizi Leads Manager project is an innovative application designed to enhance customer relationship management through seamless integration with IVR software. When a call is redirected to a Customer Service Representative (CSR) screen, a form automatically appears based on the caller's phone number. If the caller is already a customer and their necessary data is available in our system, the form auto-fills with their information, ensuring that all mandatory steps are followed efficiently." +
      "This real-time communication with leads helps CSRs provide a personalized and efficient service experience, streamlining customer interactions and enhancing overall satisfaction. Additionally, all information is handled within the reporting dashboard, categorizing interactions as informational calls, complaints, or feedback to provide detailed insights and support continuous improvement.",
  },
  {
    id: "4",
    image: "/images/domios.png",
    date: "",
    title: "Domino's Sales Dashboard",
    description: "Application for Domino's for sales management.",
    details:
      "The Domino's Sales Dashboard is a robust platform designed to integrate real-time sales data and call center services for the UAE region. The system leverages SignalR for seamless real-time communication and updates every 10 minutes, ensuring that all sales data is current and accurately displayed." +
      "In addition to sales figures, the dashboard showcases information on complaints and their resolutions, providing a comprehensive overview of customer service performance. The platform is also connected with Domino's inventory management system, allowing for efficient tracking and management of stock levels." +
      "This integrated approach helps streamline operations, enhance customer satisfaction, and drive business growth.",
  },
  {
    id: "5",
    image: "/images/cave.png",
    date: "",
    title: "Cave Application",
    description: "Enterprise Application for mobile and Desktop.",
    details:
      "Cave is a powerful multi-platform application designed to cater to the needs of both individuals and businesses. Whether you're using a mobile device, desktop, or tablet, Cave offers a range of services to enhance communication and collaboration among friends and teams. With its user-friendly interface and robust set of features, Cave is the ultimate communication tool for users of all sizes and across various devices." +
      "Cave includes features such as online chat, document approval, video and audio calls, and conferences, making it a comprehensive solution for modern communication needs.",
  },
  {
    id: "6",
    image: "/images/ipark.png",
    date: "",
    title: "IPark KSA",
    description: "Mobile car parking application for Buraidah, KSA.",
    details:
      "iPark is a user-friendly mobile application available on both iOS and Android platforms, designed to simplify parking and vehicle management. Users can register and log in to access various features, including adding and managing vehicle details, paying for parking using cards, and receiving parking reminders. Additionally, users can submit support tickets and pay parking-related fines directly through the app. The app ensures a secure, convenient, and time-saving experience for all users.",
  },
  {
    id: "7",
    image: "/images/ipark.png",
    date: "",
    title: "IPark Web App KSA",
    description:
      "Web App parking application for Buraidah Parking for quick payment",
    details:
      "The Smart Parking Application provides a convenient solution for quick parking payments without the need to install a dedicated mobile application. Users can simply scan a quick payment code to pay for parking. The application is integrated with Tap Payment for seamless payment processing. Additionally, users can pay fines by scanning the ticket through the application.",
  },
  {
    id: "8",
    image: "/images/shj.png",
    date: "",
    title: "Sharjah Customer Insights",
    description:
      "Dashboards for Alarms and complaints for Sharjah Municipality customers.",
    details:
      "The Sharjah Municipality Dashboard is a comprehensive tool designed to monitor and manage alarms related to electric and water services. The dashboard triggers alarms and displays issues in real-time, allowing for prompt response to any problems in different parts of the municipality. It also handles false alarms efficiently and provides a clear view of customer tickets and their resolution status.",
  },
  {
    id: "9",
    image: "/images/ipark.png",
    date: "",
    title: "IParkAdmin",
    description:
      "Admin panel for car parking software (sales, parking, complaints, setups, Sales reporting, helpdesk).",
    details:
      "IParkAdmin is a comprehensive parking software solution designed to manage various aspects of parking operations. The software includes modules for sales reporting, a customer service portal, and mobile application setups. Key features include defining rates, VAT, and services, managing employees, facilitating fine payments, and overseeing impound management.",
  },
  {
    id: "10",
    image: "/images/cave.png",
    date: "",
    title: "FlowDoc HR",
    description:
      "HR document approval system for tenders, submissions, and cash flows.",
    details: "Details",
  },
  {
    id: "11",
    image: "/images/cave.png",
    date: "",
    title: "TimeTrack Suite",
    description:
      "Attendance system for mobile and tablets, plus hotel door management.",
    details: "Details",
  },
  {
    id: "12",
    image: "/images/smd.png",
    date: "",
    title: "ShareMyDine",
    description: "Freelance food application.",
    details:
      "Share My Dine is a unique initiative in the UK that transforms homemade meals into meaningful connections. The idea is to turn homes into small restaurants where hosts can share their culinary creations with guests. This platform allows people to experience diverse cuisines, attend cultural events, and enjoy personalized dining experiences in a home setting. It promotes gatherings centered around healthy and hygienic food, fostering a sense of community and well-being.",
  },
  {
    id: "13",
    image: "/images/sightsaves.png",
    date: "",
    title: "SightSavers",
    description:
      "Application for eye hospitals who were using laser technology.",
    details:
      "Sightsavers is a charity organization in Pakistan that provides eye treatment using laser technology. The organization manages records of all patients, ensuring they receive proper care and follow-up treatments. Their services include diagnosing and treating common eye conditions such as cataracts and glaucoma, and promoting inclusive eye care services to reach marginalized groups.",
  },
  {
    id: "14",
    image: "/images/school.png",  
    date: "",
    title: "School Management System",
    description: "Application for managing multiple schools.",
    details:
      "The School Management System is a comprehensive application designed to manage multiple schools efficiently. It supports multiple admins and students, allowing for seamless administration and student management. Key features include student enrollment, attendance tracking, grade management, and communication tools for teachers, students, and parents. The system also provides detailed reporting and analytics to help school administrators make informed decisions.",
  },
];
