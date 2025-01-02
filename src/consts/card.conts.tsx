import { link } from "fs";
import { title } from "process";
import { FaHtml5, FaMobile, FaRobot } from "react-icons/fa6";
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
  {
    duration: "2025-Pesent",
    title: "Masters of Science in Computer Science",
    institution: "EPITA - School of Engineering and Computer Science",
    location: "Paris, France",
    link: "https://www.epita.fr/",
  },
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
  "Firebase, FCM , APN Notifications",
  "RESTful APIs",
  "Payment Gateway Integration",
  "Apple Store, Google Play Store",
  "Git",
  "CPanels, WHM",
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
  { title: "Time Management", percent: "97%" },
  {
    title: "Customer Support",
    percent: "80%",
  },
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
    date: "27 April",
    title: "How to deploy a Next.js app on Vercel",
    description:
      "This article will explain how to deploy a Next.js app on Vercel.",
  },
  {
    id: "2",
    image: "/images/blog.jpg",
    date: "27 April",
    title: "How to deploy a Flutter app on google and apple store",
    description:
      "This article will explain how to deploy a Flutter app on google and apple store.",
  },
  {
    id: "3",
    image: "/images/blog.jpg",
    date: "21 April",
    title: "How to Integrate Localization in next.js",
    description:
      "this article will explain how to integrate localization in next.js using next-intl",
  },
  {
    id: "4",
    image: "/images/blog.jpg",
    date: "27 April",
    title: "How to Integrate TAP Payment in Flutter",
    description:
      "This article will explain how to integrate TAP payment in Flutter.",
  },
  {
    id: "5",
    image: "/images/blog.jpg",
    date: "21 April",
    title: "How to Integrate TAP Payment in Next.js",
    description:
      "This article will explain how to integrate TAP payment in Next.js.",
  },
  {
    id: "6",
    image: "/images/blog.jpg",
    date: "27 April",
    title: "How to Apply Dark&Light Mode in Nextjs",
    description:
      "This article will explain how to apply dark and light mode in Next.js.",
  },
];
