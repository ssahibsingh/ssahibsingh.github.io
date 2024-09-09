import { Icons } from "@/components/icons";
import {
  BriefcaseBusiness,
  CodeIcon,
  GraduationCap,
  HomeIcon,
  NotebookIcon,
  PencilLine,
} from "lucide-react";

export const DATA = {
  name: "Sahib Singh",
  initials: "SS",
  url: "https://sahibsingh.dev",
  location: "Punjab, India",
  locationLink: "https://www.google.com/maps/place/punjab",
  description:
    "Software Developer, specializing in Web and DevOps. Passionate about building impactful solutions. Always exploring new technologies.",
  summary:
    "I'm a Software Developer passionate about creating user-centric solutions. With a background in [Information Technology from NIT Jalandhar](/#education), I've honed my skills through [internships and open-source contributions](/#experience), earning recognition for my work on [GitHub](https://github.com/ssahibsingh). Outside of coding, I enjoy helping others in the tech community, sharing knowledge, and collaborating on projects.",
  avatarUrl: "/logo-face.png",
  skills: [
    "Javascript",
    "Typescript",
    "Python",
    "C/C++",
    "Java",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "Flask",
    "React Native",
    "Elasticsearch",
    "MongoDB",
    "GraphQL",
    "Docker",
    "NGINX",
    "Github Actions",
    "Azure",
    "Digital Ocean",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "#projects", icon: CodeIcon, label: "Projects" },
    { href: "#experience", icon: BriefcaseBusiness, label: "Experience" },
    { href: "#education", icon: GraduationCap, label: "Education" },
    {
      href: "https://sahibsingh.hashnode.dev",
      icon: NotebookIcon,
      label: "Blog",
    },
  ],
  contact: {
    email: "sahibsingh.work@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ssahibsingh",
        icon: Icons.github,
        contact: true,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ssahibsingh",
        icon: Icons.linkedin,
        contact: true,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/ssahibsingh_",
        icon: Icons.x,
        contact: true,
        navbar: false,
      },
      Hashnode: {
        name: "Hashnode",
        url: "https://sahibsingh.hashnode.dev/",
        icon: Icons.hashnode,
        contact: false,
        navbar: false,
      },
      Telegram: {
        name: "Telegram",
        url: "https://t.me/cexnone",
        icon: Icons.telegram,
        contact: true,
        navbar: false,
      },
      Email: {
        name: "Send Email",
        url: "mailto:sahibsingh.work@gmail.com",
        icon: Icons.email,
        contact: true,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Aeiota Solutions",
      href: "",
      badges: ["Noida", "India"],
      location: "Noida",
      title: "Software Developer",
      icon: false,
      logoUrl: "/experience/aeiota.png",
      start: "Aug 2024",
      end: "Present",
      description:
        " ",
    },
    {
      company: "Medlr",
      href: "",
      badges: ["Remote", "India"],
      location: "Remote",
      title: "Full Stack Developer Intern",
      icon: false,
      logoUrl: "/experience/medlr.png",
      start: "Feb 2023",
      end: "Jan 2024",
      description:
        "Implemented Elasticsearch to enhance search capabilities. Developed and integrated custom and OAuth authentication flows, enhancing security and user access control. Strengthened data protection and reduced vulnerabilities by 20% through advanced security measures. Optimized deployment pipeline with NGINX, Docker, and GitHub Actions, resulting in a 25% faster deployment process and efficient management across multiple environments.",
    },
    {
      company: "ATC Couriers",
      href: "",
      badges: ["Remote", "Australia"],
      location: "Remote",
      title: "Software Developer Intern",
      icon: false,
      logoUrl: "/experience/atc.png",
      start: "May 2023",
      end: "July 2023",
      description:
        "Developed backend logic and APIs to streamline booking and data management. Converted Figma designs into interactive interfaces, improving user experience. Implemented dynamic features and auto-completion, ensuring robust data handling.",
    },
    {
      company: "Code8 & ACC",
      href: "",
      badges: ["Remote", "India"],
      location: "Remote",
      title: "Backend Developer Intern",
      icon: false,
      logoUrl: "/experience/codeate.png",
      start: "May 2022",
      end: "Nov 2022",
      description:
        "Built backend for a quiz app using OpenTDB REST API, facilitating seamless data integration with the frontend. Optimized data formatting and fetching processes, and Scaled system capacity by 2.5x of existing capacity, surpassing project requirements and ensuring future scalability.",
    },
  ],
  education: [
    {
      school: "NIT Jalandhar",
      href: "https://nitj.ac.in",
      degree: "B.Tech in Information Technology",
      icon: true,
      logoUrl: "/graduation-cap.svg",
      start: "2020",
      end: "2024",
    },
    {
      school: "Modern Secular Public School, Dhuri",
      href: "https://www.mspsdhuri.com/",
      degree: "Senior Secondary Education",
      icon: true,
      logoUrl: "/graduation-cap.svg",
      start: "2018",
      end: "2020",
    },
  ],
  projects: [
    {
      title: "Proofit",
      href: "https://proofit.vercel.app",
      dates: "",
      active: true,
      description:
        "A platform that streamlines certificate issuance and verification, enhancing credibility and trust for organizations. Initially inspired by a college society's need, it now serves companies and educational institutions.",
      technologies: [
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "TailwindCSS",
        "Shadcn UI",
        "Razorpay",
      ],
      links: [
        {
          type: "Website",
          href: "https://proofit.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/proofit.png",
      video: "",
    },
    {
      title: "Site Auth",
      href: "https://site-auth.sahibsingh.dev",
      dates: "",
      active: true,
      description:
        "A secure authentication service that ensures only authorized users can access your website. It provides secure, selective user access with seamless integration across frameworks.",
      technologies: [
        "Next.js",
        "Typescript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://site-auth.sahibsingh.dev",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/site-auth.png",
      video: "",
    },
    {
      title: "Intercept AI",
      href: "https://github.com/ssahibsingh/intercept-ai-hackmol",
      dates: "",
      active: true,
      description:
        "Combats harmful social media content using Deep Learning and NLP. It detects and restricts hate speech and obscenity, ensuring a safer online environment through automatic content removal and warnings for users.",
      technologies: [
        "Next.js",
        "Bootstrap",
        "Flask",
        "MongoDB",
        "NLP",
        "BERT",
        "Image Classification",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/ssahibsingh/intercept-ai-hackmol",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/interceptai.png",
      video: "",
    },
    {
      title: "Stay@NITJ",
      href: "https://stay-at-nitj.vercel.app",
      dates: "",
      active: true,
      description:
        "An online portal for managing guest house bookings at NIT Jalandhar. It offers real-time availability, an admin dashboard, automated notifications, and secure authentication, streamlining the booking process and ensuring efficient management.",
      technologies: [
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "TailwindCSS",
        "Shadcn UI",
        "Stripe",
      ],
      links: [
        {
          type: "Website",
          href: "https://stay-at-nitj.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/stay-at-nitj.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
