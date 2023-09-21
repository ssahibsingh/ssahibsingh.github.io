const project = [
    // {
    //     key: 1,
    //     img: require('../public/images/projects/soorme-logo.webp'),
    //     // img: "https://github.com/ssahibsingh/personalWebsite/blob/main/src/assets/projects/soorme-logo.png?raw=true",
    //     name: "Soorme.com",
    //     description: "Soorme.com is an Online T-Shirt Store. T-Shirt Designs are based on Culture, History and Demography of Panjab.",
    //     techStack: ['Next.js', 'Express.js', 'React.js', 'MongoDB', 'Sanity.io', 'Vercel'],
    //     complete: true,
    //     liveDeploy: "https://beta.soorme.com/",
    // },
    {
        key: 2,
        img: require('../public/images/projects/proofit.webp'),
        // img: "https://github.com/ssahibsingh/personalWebsite/blob/main/src/assets/projects/portfolio.png?raw=true",
        name: "ProofIt.biz",
        description: "ProofIt is a platform for organizations to create, send and verify documents, which the recipient or any intending third party can verify on the platform itself, that too in just a few clicks.",
        techStack: ['Next.js', 'Nodejs', 'Express.js', 'MongoDB', 'Vercel'],
        complete: true,
        liveDeploy: "https://proofit.biz/",
    },
    {
        key: 8,
        img: require('../public/images/projects/wasteai.webp'),
        // img: "https://github.com/ssahibsingh/personalWebsite/blob/main/src/assets/projects/google-forms.png?raw=true",
        name: "Waste AI",
        description: "A project on Waste Segregation with deep learning capable of segregating waste into 6 categories. It uses TrashNet dataset for training and testing the model.",
        techStack: ['Next.js', 'MongoDB', 'Flask', 'DigitalOcean', 'Deep Learning'],
        complete: true,
        sourceCodeName: "Frontend",
        sourceCode: "https://github.com/ssahibsingh/wasteai-frontend",
        sourceCodeName2: "Backend",
        sourceCode2: "https://github.com/ssahibsingh/wasteai-backend",
    },
    {
        key: 3,
        img: require('../public/images/projects/react-ecommerce.webp'),
        // img: "https://github.com/ssahibsingh/personalWebsite/blob/main/src/assets/projects/google-forms.png?raw=true",
        name: "Ecommerce Website",
        description: "Developed and deployed an e-commerce app with a focus on performance and user experience, utilizing the latest technology stack like React, FakeStoreAPI and Vercel.",
        techStack: ['React.js', 'FakeStoreAPI', 'Redux', 'Bootstrap', 'Vercel'],
        complete: true,
        liveDeploy: "https://reactjs-ecommerce-app.vercel.app/",
        sourceCode: "https://github.com/ssahibsingh/React_E-Commerce",
        sourceCodeName: "Source Code"
    },
    // {
    //     key: 4,
    //     img: require('../public/images/projects/youtube.webp'),
    //     // img: "https://github.com/ssahibsingh/personalWebsite/blob/main/src/assets/projects/youtube.png?raw=true",
    //     name: "YouTube Playlist Length",
    //     description: "YouTube Playlist Length Calculator calculates the length of any YouTube playlist. It is capable of calculating length over a custom range as well. We just need to give the playlist link and custom range (optional) and we will get the playlist length.",
    //     techStack: ['Node.js', 'Express.js', 'EJS', 'YouTube Data API', 'Heroku'],
    //     complete: true,
    //     liveDeploy: "https://ytplaylist-len.up.railway.app/",
    //     sourceCode: "https://github.com/ssahibsingh/yt-playlist-length"
    // },
    // {
    //     key: 5,
    //     img: require('../public/images/projects/url-shortner.webp'),
    //     // img: "https://github.com/ssahibsingh/personalWebsite/blob/main/src/assets/projects/url-shortner.png?raw=true",
    //     name: "URL Shortener",
    //     description: "A URL shortener capable of shortening every valid URL. URL validation is done with the help of 'Valid-URL' (NPM package) and URL alias string is generated with help of 'NanoId' (NPM Package). It can also generate URLs with custom aliases.",
    //     techStack: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'EJS', 'Heroku'],
    //     complete: true,
    //     liveDeploy: "https://urlshortner-5ape.onrender.com/",
    //     sourceCode: "https://github.com/ssahibsingh/url-shortener"
    // },
    // {
    //     key: 6,
    //     img: require('../public/images/projects/social-media.webp'),
    //     // img: "https://github.com/ssahibsingh/personalWebsite/blob/main/src/assets/projects/social-media.png?raw=true",
    //     name: "Social Media DBMS",
    //     description: "A Social Media Database Management system flexible for any Frontend Interface Integration. This involves managing the data of multiple users, their followers, interests and public activity on the Social Media.",
    //     techStack: ['MySQL'],
    //     components: ['Schema', 'Database', 'ER Diagram', 'Sample Queries'],
    //     complete: true,
    //     sourceCode: "https://github.com/ssahibsingh/Social-Media-Database-Project"
    // },
    // {
    //     key: 7,
    //     img: require('../public/images/projects/quizbox.webp'),
    //     // img: "https://github.com/ssahibsingh/personalWebsite/blob/main/src/assets/projects/google-forms.png?raw=true",
    //     name: "Quizbox",
    //     description: "A Full Stack Quiz Web App made with MERN Stack. From Interactive Results to Dashboard, it has all the features and it is integrated with OpenTDB API.",
    //     techStack: ['React.js', 'Next.js', 'MongoDB', 'Node.js', 'Express.js', 'OpenTDB API', 'Vercel', 'Railways/Cyclic'],
    //     complete: false,
    //     sourceCode: "https://github.com/ssahibsingh/GoogleFormsAutomation"
    // },
    // {
    //     key: 4,
    //     img: require('../public/images/projects/google-forms.webp'),
    //     // img: "https://github.com/ssahibsingh/personalWebsite/blob/main/src/assets/projects/google-forms.png?raw=true",
    //     name: "Google Form Automation",
    //     description: "A Google Form Automation script capable of automating any Google Form having Short Answer Type, Long Answer Type, Multiple Choice and Checkbox Questions.",
    //     techStack: ['Python', 'Selenium', 'Chrome Web Driver'],
    //     complete: true,
    //     sourceCode: "https://github.com/ssahibsingh/GoogleFormsAutomation"
    // },
    // {
    //     key: 6,
    //     img: require('../public/images/projects/portfolio.webp'),
    //     // img: "https://github.com/ssahibsingh/personalWebsite/blob/main/src/assets/projects/portfolio.png?raw=true",
    //     name: "Portfolio Generator",
    //     description: "It Generates Portfolio Website, for which user have to enter their details and they will get their Portfolio Website. User have choice to choose a portfolio website from the sample websites listed",
    //     techStack: ['Node.js', 'Express.js', 'React.js', 'MongoDB', 'Vercel', 'Heroku'],
    //     complete: false,
    // }
]

const otherProjects = [
    {
        key: 20,
        link: "https://github.com/ggeeks/ggeeks.github.io",
        img: "https://github-readme-stats-ssahibsingh.vercel.app/api/pin/?username=ggeeks&repo=ggeeks.github.io&show_owner=true&border_color=fafafa&bg_color=fafafa&border_radius=10"
    },
    {
        key: 21,
        link: "https://github.com/ssahibsingh/github-user-insights",
        img: "https://github-readme-stats-ssahibsingh.vercel.app/api/pin/?username=ssahibsingh&repo=github-user-insights&border_color=fafafa&bg_color=fafafa&border_radius=10"
    },
    {
        key: 22,
        link: "https://github.com/ssahibsingh/links",
        img: "https://github-readme-stats-ssahibsingh.vercel.app/api/pin/?username=ssahibsingh&repo=links&border_color=fafafa&bg_color=fafafa&border_radius=10"
    },
    {
        key: 23,
        link: "https://github.com/ssahibsingh/intercept-ai-hackmol",
        img: "https://github-readme-stats-ssahibsingh.vercel.app/api/pin/?username=ssahibsingh&repo=intercept-ai-hackmol&border_color=fafafa&bg_color=fafafa&border_radius=10"
    },
    {
        key: 24,
        link: "https://github.com/ssahibsingh/Social-Media-Database-Project",
        img: "https://github-readme-stats-ssahibsingh.vercel.app/api/pin/?username=ssahibsingh&repo=Social-Media-Database-Project&border_color=fafafa&bg_color=fafafa&border_radius=10"
    },
    {
        key: 25,
        link: "https://github.com/ssahibsingh/yt-playlist-length",
        img: "https://github-readme-stats-ssahibsingh.vercel.app/api/pin/?username=ssahibsingh&repo=yt-playlist-length&border_color=fafafa&bg_color=fafafa&border_radius=10"
    },
    {
        key: 26,
        link: "https://github.com/ssahibsingh/url-shortener",
        img: "https://github-readme-stats-ssahibsingh.vercel.app/api/pin/?username=ssahibsingh&repo=url-shortener&border_color=fafafa&bg_color=fafafa&border_radius=10"
    },
    {
        key: 8,
        link: "https://github.com/ssahibsingh/blog-website",
        img: "https://github-readme-stats-ssahibsingh.vercel.app/api/pin/?username=ssahibsingh&repo=blog-website&bg_color=fafafa&border_color=fafafa&border_radius=10"
    },
    {
        key: 9,
        link: "https://github.com/ssahibsingh/qrcode-generator",
        img: "https://github-readme-stats-ssahibsingh.vercel.app/api/pin/?username=ssahibsingh&repo=qrcode-generator&bg_color=fafafa&border_color=fafafa&border_radius=10"
    },
    {
        key: 10,
        link: "https://github.com/ggeeks/event-ggeeks",
        img: "https://github-readme-stats-ssahibsingh.vercel.app/api/pin/?username=ggeeks&repo=event-ggeeks&show_owner=true&border_color=fafafa&bg_color=fafafa&border_radius=10"
    },
    {
        key: 11,
        link: "https://github.com/ssahibsingh/Project-GamingGeeks",
        img: "https://github-readme-stats-ssahibsingh.vercel.app/api/pin/?username=ssahibsingh&repo=Project-GamingGeeks&bg_color=fafafa&border_color=fafafa&border_radius=10"
    },
    {
        key: 12,
        link: "https://github.com/ssahibsingh/Project-TiwanaPowerSol",
        img: "https://github-readme-stats-ssahibsingh.vercel.app/api/pin/?username=ssahibsingh&repo=Project-TiwanaPowerSol&bg_color=fafafa&border_color=fafafa&border_radius=10"
    },
    {
        key: 13,
        link: "https://github.com/ssahibsingh/todolist-pub",
        img: "https://github-readme-stats-ssahibsingh.vercel.app/api/pin/?username=ssahibsingh&repo=todolist-pub&bg_color=fafafa&border_color=fafafa&border_radius=10"
    },
    {
        key: 14,
        link: "https://github.com/ssahibsingh/newsletter-signup-pub",
        img: "https://github-readme-stats-ssahibsingh.vercel.app/api/pin/?username=ssahibsingh&repo=newsletter-signup-pub&bg_color=fafafa&border_color=fafafa&border_radius=10"
    },
    {
        key: 15,
        link: "https://github.com/ssahibsingh/TossTheDice",
        img: "https://github-readme-stats-ssahibsingh.vercel.app/api/pin/?username=ssahibsingh&repo=TossTheDice&bg_color=fafafa&border_color=fafafa&border_radius=10"
    },
    {
        key: 16,
        link: "https://github.com/ssahibsingh/simongame",
        img: "https://github-readme-stats-ssahibsingh.vercel.app/api/pin/?username=ssahibsingh&repo=simongame&bg_color=fafafa&border_color=fafafa&border_radius=10"
    },
    {
        key: 17,
        link: "https://github.com/ssahibsingh/drumkit",
        img: "https://github-readme-stats-ssahibsingh.vercel.app/api/pin/?username=ssahibsingh&repo=drumkit&bg_color=fafafa&border_color=fafafa&border_radius=10"
    },
    {
        key: 18,
        link: "https://github.com/ssahibsingh/flipkartclone",
        img: "https://github-readme-stats-ssahibsingh.vercel.app/api/pin/?username=ssahibsingh&repo=flipkartclone&bg_color=fafafa&border_color=fafafa&border_radius=10"
    },
    {
        key: 19,
        link: "https://github.com/ssahibsingh/chaining-the-EVMs",
        img: "https://github-readme-stats-ssahibsingh.vercel.app/api/pin/?username=ssahibsingh&repo=chaining-the-EVMs&bg_color=fafafa&border_color=fafafa&border_radius=10"
    },
]

const data = { project, otherProjects }
export default data;
