export interface card {
    title: string, 
    date: Date,
    desc: string,
    imgs: img[],
    tags: string[]
    link: string,
}

export interface img {
    i: string,
    alt: string,
}
  

import img_feeling_funky_back from  "/images/portfolio/design/feeling_funky_back.png"
import img_feeling_funky_front from  "/images/portfolio/design/feeling_funky_front.png"
import img_feeling_funky_draft from  "/images/portfolio/design/feeling_funky_draft.png"
import img_feeling_funky_final from  "/images/portfolio/design/feeling_funky_final.png"
import img_feeling_funky_front_draft from  "/images/portfolio/design/feeling_funky_front_draft.png"

const card_feeling_funky = {
    title: "FUNKtion Club Shirt Design", 
    date: new Date(2023, 1), 
    desc: `Shirt design for my University funkstyle dance club.
            Used Illustrator for vector design, and Procreate for drafting. 
            Design was an iterative process with input from the club members, including colour scheme and text elements.`,
    imgs: [
        {
            i: img_feeling_funky_final,
            alt: "Back shirt design: an anthropomorphic dancing disco ball",
        },
        {
            i: img_feeling_funky_back,
            alt: "Design on a physical shirt",
        },
        {
            i: img_feeling_funky_front,
            alt: "Front shirt design, with the FUNKtion logo and japanese characters",
        },
        {
            i: img_feeling_funky_draft,
            alt: "Draft of the shirt design, sketched out in Procreate",
        },
        {
            i: img_feeling_funky_front_draft,
            alt: "Initial design of shirt front",
        },
    ],
    tags: [
        "Illustrator",
        "Design",
        "Procreate",
        "Graphic",
        "Vector"
    ],
    link: "",
};


import img_manners from  "/images/portfolio/design/manners.png"

const card_manners = {
    title: "MAN-Ners Band Logo", 
    date: new Date(2022, 11), 
    desc: `Logo design for my University band.
            Inspired by the Kingsman franchise, parodied the Johnny Walker logo to achieve a "gentleman-ly" design. 
            All rights of the original Johnny Walker logo to JOHN WALKER & SONS.`,
    imgs: [
        {
            i: img_manners,
            alt: "Man singing into a mic with a top hat, parodying the Johnny Walker logo",
        },
    ],
    tags: [
        "Illustrator",
        "Design",
        "Graphic",
        "Vector"
    ],
    link: "",
};


import img_help_logo from "/images/portfolio/design/help_logo.png"
import img_help_feed from "/images/portfolio/design/help_feed.png"
import img_help_sys_arch from "/images/portfolio/design/help_sys_arch.png"

const card_help_gebirah = {
    title: "Gebirah HELP", 
    date: new Date(2022, 6), 
    desc: `A humanitarian web app that supports users in crisis regions by providing a platform for them to seek help from nearby volunteers.
            This app is a collaboration between SUTD and Gebirah, a humanitarian non-profit organisation, with support from Google, and it allows users to offer help, or request for help, supported via Google Maps API and Google Cloud for deployment.
            I was in charge of backend development of the main feed server using Ruby on Rails, as well as unit and system testing with RSpec, Capybara, and Cucumber.`,
    imgs: [
        {
            i: img_help_logo,
            alt: "Logo of the HELP app",
        },
        {
            i: img_help_feed,
            alt: "Screenshot of the main feed of the app",
        },
        {
            i: img_help_sys_arch,
            alt: "Microservice system architecture of the app",
        },
    ],
    tags: [
        "Ruby on Rails",
        "SQLite",
        "Ruby",
        "Cucumber",
        "React",
        "Javascript",
        "Google Maps",
        "Google Cloud",
        "Software",
        "Programming"
    ],
    link: "https://sites.google.com/mymail.sutd.edu.sg/pelican/home",
};


import img_ctd_closeup from "/images/portfolio/design/ctd_closeup.png"
import img_ctd_cross from "/images/portfolio/design/ctd_cross.png"
import img_ctd_inside from "/images/portfolio/design/ctd_inside.png"
import img_ctd_star from "/images/portfolio/design/ctd_star.png"

const card_ctd = {
    title: "Cradle To Dust", 
    date: new Date(2023, 4), 
    desc: `A generative design project, viewable at the link above.
            The design comprises of towers of wireframe circles rotating around the center, where this simple rotation results in various interesting patterns at various rotation "phases".
            The design eventually rotates back to its original position, depicting a sense of inevitability and circularity.
            Originally done in Sep 2020 with Rhino3D, Grasshopper and Python3, and ported to Three.js in May 2023.`,
    imgs: [
        {
            i: img_ctd_star,
            alt: "Star pattern",
        },
        {
            i: img_ctd_cross,
            alt: "Cross pattern",
        },
        {
            i: img_ctd_closeup,
            alt: "A closeup of the design",
        },
        {
            i: img_ctd_inside,
            alt: "Internal view",
        },
    ],
    tags: [
        "Javascript",
        "Three.js",
        "Rhino3D",
        "Design",
        "Programming"
    ],
    link: "/ctd",
};


import img_rainyday_logo from "/images/portfolio/design/rainyday_logo.png"
import img_rainyday_child from "/images/portfolio/design/rainyday_child.png"
import img_rainyday_parent from "/images/portfolio/design/rainyday_parent.png"
import img_rainyday_uml from "/images/portfolio/design/rainyday_uml.png"
import img_rainyday_userflow from "/images/portfolio/design/rainyday_userflow.png"

const card_rainyday = {
    title: "Rainy Day", 
    date: new Date(2022, 4), 
    desc: `An Android Application that helps kids understand the value of money and encourages them to save up for a "Rainy Day".
            It helps the child to track their expenses, set a savings goal, and tracks their progress towards it. 
            It also helps parents log and track their children's expenditures to facilitate accountability.
            I was in charge of the Android application backend, including integration with Frontend, and Firebase for storage and authentication.`,
    imgs: [
        {
            i: img_rainyday_logo,
            alt: "Logo of the Rainy Day app",
        },
        {
            i: img_rainyday_parent,
            alt: "Parent Dashboard",
        },
        {
            i: img_rainyday_child,
            alt: "Child Dashboard",
        },
        {
            i: img_rainyday_uml,
            alt: "(Partial) UML diagram of the app",
        },
        {
            i: img_rainyday_userflow,
            alt: "Userflow daigram of the app (red boxed: unimplemented)",
        },
    ],
    tags: [
        "Java",
        "Android Studio",
        "Firebase",
        "Programming"
    ],
    link: "https://istd.sutd.edu.sg/term4-design-exhibition/50001/rainy-day",
};


import img_urop from "/images/portfolio/design/UROP.png"
import img_urop_logo from "/images/portfolio/design/UROP_logo.png"

const card_urop = {
    title: "EQ App Research Project", 
    date: new Date(2021, 5), 
    desc: `Worked in a small team to build a Web platform for enterprise evaluation and training of employee EQ, as part of a University Research Project.
            Developed a simple backend server, including RESTful API and authentication, and integrated with the frontend.
            Presented the working prototype to the stakeholder and project supervisor.
            (Image shown is a prototype. I am unable to share the actual project.)`,
    imgs: [
        {
            i: img_urop_logo,
            alt: "Main logo of the app prototype",
        },
        {
            i: img_urop,
            alt: "Prototype of the EQ Training app",
        },
    ],
    tags: [
        "Javascript",
        "Express.js",
        "HTML",
        "CSS",
        "Programming",
        "MongoDB"
    ],
    link: "",
};


import img_sutdopoly_logo from "/images/portfolio/design/sutdopoly_logo.png"
import img_sutdopoly_board from "/images/portfolio/design/sutdopoly_board.png"
import img_sutdopoly_go from "/images/portfolio/design/sutdopoly_go.png"

const card_sutdopoly = {
    title: "SUTDopoly", 
    date: new Date(2020, 10), 
    desc: `SUTDopoly is a text-based boardgame that is run straight from the command line. 
            A variation of Monopoly, SUTDopoly is structured around the setting of SUTD whereby the properties names are the names of Fifth Rows and the Chance and Chest cards are relatable to SUTD students. 
            This version of SUTDopoly plays wholely on the CLI, and supports various features such as animated board movement, offline play with multiple users on a single computer, or online play across CLIs and computers!`,
    imgs: [
        {
            i: img_sutdopoly_logo,
            alt: "SUTDopoly logo at startup screen",
        },
        {
            i: img_sutdopoly_board,
            alt: "SUTDopoly animated board",
        },
        {
            i: img_sutdopoly_go,
            alt: "Passing GO!",
        },
    ],
    tags: [
        "Python",
        "Firebase",
        "Programming",
    ],
    link: "https://github.com/keee99/SUTDopoly",
};
    
export const cards: card[] = [
    card_feeling_funky,
    card_manners,
    card_help_gebirah,
    card_ctd,
    card_rainyday,
    card_urop,
    card_sutdopoly,
]

export default cards;

