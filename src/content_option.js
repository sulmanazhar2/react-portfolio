import InfaqueImage from "./assets/images/infaque.png";
import EgilityImage from "./assets/images/egility.png";
import RiskwellImage from "./assets/images/zenpliance.png";
import SMCImage from "./assets/images/swm.png";
import FinancialAccumentImage from "./assets/images/financial-accumen.png";

const logotext = "Sulman";
const meta = {
  title: "Sulman Azhar",
  description:
    "Experienced Full Stack Developer with a strong expertise in JavaScript development, delivering high-quality web solutions, collaborating closely with clients, and driving innovation through a comprehensive skill set.",
};

const introdata = {
  title: "Sulman Azhar",
  animated: {
    first: "JavaScript Expert",
    second: "Leader in Web Development",
    third: "Client-Focused Problem Solver",
  },
  description:
    "Experienced Full Stack Developer with a strong expertise in JavaScript development, delivering high-quality web solutions, collaborating closely with clients, and driving innovation through a comprehensive skill set",
  your_img_url: "https://i.imgur.com/eEBg6A5.jpg",
};

const dataabout = {
  title: "About Myself",
  aboutme: `Welcome to my portfolio website! I'm Sulman, a passionate full stack developer with a strong background in technology and a drive to create innovative solutions. From a young age, I found myself captivated by the world of technology, tinkering with computers and diving into the intricacies of mobile phone repair. This early passion laid the foundation for my journey into the ever-evolving realm of software development.\n\nI pursued my enthusiasm for technology by obtaining a diploma in Associate Engineering in Electronics, where I gained valuable insights into semiconductor operations and their physical applications. Eager to expand my expertise, I went on to earn a bachelor's degree in Software Engineering from the University of Lahore, Pakistan.\n\nDuring my academic years, I embraced web development and honed my skills in HTML, CSS, JavaScript, and Bootstrap. This allowed me to embark on creating full-stack applications, leveraging my understanding of databases and web fundamentals. It was during this time that I developed my first full-stack application—a student management system website—where I delved into designing robust architectures and seamless user experiences.\n\nDriven by a thirst for knowledge and an eagerness to explore diverse opportunities, I ventured into freelance work, tackling Android applications, databases, and web solutions. This allowed me to expand my skill set and showcase my versatility as a quick learner. Additionally, my active involvement in online communities, particularly Reddit, enabled me to connect with like-minded individuals and stay up-to-date with the latest industry trends.\n\nMy career took an exciting turn when I joined Infaque, a startup on the cusp of growth and innovation. As a key member of the team, I embraced the challenge of becoming a lead developer and spearheaded the creation of groundbreaking solutions. From developing Small World Connect, a transformative application benefiting a Toronto-based charity, to revolutionizing accounting practices for Canadian charities through Financial Accumen, I have consistently delivered high-quality software and pushed the boundaries of what is possible.\n\nInfaque has experienced exponential growth, with over 15 talented individuals now driving our success. As a lead developer and team manager, I take immense pride in the impact I have had on the company's journey. My ability to architect scalable solutions and my passion for embracing emerging technologies have been instrumental in our achievements.\n\nAs you explore my portfolio website, you'll find a showcase of my projects, highlighting my skills in ReactJS, Redux, Firebase, and other cutting-edge technologies. I thrive in fast-paced environments, bringing a blend of technical expertise, problem-solving prowess, and leadership acumen to every project I undertake.\n\nI am constantly seeking opportunities to contribute to the development of large-scale applications, applying my skills and innovation to make a meaningful impact. Whether it's collaborating with a talented team or taking the lead on challenging projects, I am ready to embrace new adventures and drive change in the tech industry.\n\nThank you for visiting my portfolio website. Let's connect and explore how we can embark on an exciting journey together.`,
};

const worktimeline = [
  {
    jobtitle: "Senior Developer",
    where: "GotPhoto.com | fotograf.de",
    date: "September 2023 - Present",
    link: "https://www.fotograf.de/",
  },
  {
    jobtitle: "Lead Developer",
    where: "Infaque",
    date: "August 2020 - September 2023",
    link: "https://infaque.com/",
  },
  {
    jobtitle: "Full Stack Developer",
    where: "Infaque",
    date: "Octuber 2020 - August 2021",
    link: "https://infaque.com/",
  },
  {
    jobtitle: "Full Stack Developer",
    where: "Freelance",
    date: "December 2019 - Octuber 2020",
  },
  {
    jobtitle: "Web Developer",
    where: "AlthinkDev Internship",
    date: "September 2017 - Octuber 2017",
  },
];

const skills = [
  {
    name: "HTML & CSS",
    value: 95,
  },
  {
    name: "JavaScript",
    value: 85,
  },
  {
    name: "ReactJS",
    value: 80,
  },
  {
    name: "Stripe",
    value: 80,
  },
  {
    name: "Firebase",
    value: 80,
  },
  {
    name: "Node.js",
    value: 75,
  },
  {
    name: "NoSQL",
    value: 75,
  },
  {
    name: "Redux",
    value: 75,
  },
  {
    name: "Styled Components",
    value: 75,
  },
  {
    name: "Google PubSubs",
    value: 75,
  },
  {
    name: "Google Cloud Platform (GCP) basics",
    value: 75,
  },
  {
    name: "Amazon Web Services (AWS) basics",
    value: 75,
  },
  {
    name: "MySQL & PHP",
    value: 60,
  },
  {
    name: "Laravel",
    value: 40,
  },
  {
    name: "QuickBooks API",
    value: 30,
  },
];

const courses = [
  {
    title: "HTML, CSS & Javascript",
    link: "https://coursera.org/verify/BUXPWJUY5NUE",
    description: "Coursera (Nov 2018)",
  },
  {
    title: "Front-End Web UI Frameworks and Tools",
    link: "https://coursera.org/verify/8A9TJFP4DPF3",
    description: "Coursera (Nov 2018)",
  },
  {
    title: "Front-End JavaScript Frameworks: AngularJS",
    link: "https://coursera.org/verify/S9TVBBTN3WTB",
    description: "Coursera (Nov 2018)",
  },
  {
    title: "Multiplatform Mobile App Development with Web Technologies",
    link: "https://coursera.org/verify/XD4YJU6MWF8Z",
    description: "Coursera (Nov 2018)",
  },
];

const dataportfolio = [
  {
    img: <InfaqueImage />,
    description:
      "Infaque's flagship product. A SaaS solution for charities, enabling them to collect funds and disburse to different campaigns under different causes a seemless experience.",
    link: "https://infaque.com",
  },
  {
    img: <EgilityImage />,
    description:
      "This is a recruiting tool for a company in Canada. This tool is using Humantic and Receptiviti to assess their candidates.",
    link: "https://egilityintelligence.app/",
  },
  {
    img: <FinancialAccumentImage />,
    description:
      "A SaaS solution for comapnies in Canada. A simplified tool for different companies to check their Quickbooks records in an easy way.",
  },
  {
    img: <SMCImage />,
    description:
      "Small World Connect is a project for a non-profit in Canada called Small World Music.",
  },
  {
    img: <RiskwellImage />,
    description:
      "Riskwell is a LMS for a brokers. This project is for a well known company in Canada called Zensurance. It's under development",
  },
];

const contactConfig = {
  YOUR_EMAIL: "sulmanazhar10@gmail.com",
  description:
    "Experienced Full Stack Developer with a strong expertise in JavaScript development, delivering high-quality web solutions, collaborating closely with clients, and driving innovation through a comprehensive skill set",
  YOUR_SERVICE_ID: "service_5dun9wg",
  YOUR_TEMPLATE_ID: "template_bigg05m",
  YOUR_USER_ID: "J4M6gSgloEKj3UI_5",
};

const socialprofils = {
  github: "https://github.com/sulmanazhar2",
  stackoverflow: "https://stackoverflow.com/users/13556091/sulman-azhar",
  linkedin: "https://www.linkedin.com/in/sulman-azhar-qureshi-96ab51118",
  twitter: "https://twitter.com/sulman_azhar2",
};
export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  courses,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
