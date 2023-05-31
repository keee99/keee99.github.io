
import img_feeling_funky_back from  "/images/portfolio/design/feeling_funky_back.png"
import img_feeling_funky_front from  "/images/portfolio/design/feeling_funky_front.png"
import img_feeling_funky_draft from  "/images/portfolio/design/feeling_funky_draft.png"
import img_feeling_funky_final from  "/images/portfolio/design/feeling_funky_final.png"
import img_feeling_funky_front_draft from  "/images/portfolio/design/feeling_funky_front_draft.png"

import img_manners from  "/images/portfolio/design/manners.png"

import img_help_logo from "/images/portfolio/design/help_logo.png"
import img_help_feed from "/images/portfolio/design/help_feed.png"
import img_help_sys_arch from "/images/portfolio/design/help_sys_arch.png"

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
  
export const designCards: card[] = [
    {
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
    },

    {
        title: "MAN-Ners", 
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
    },
]


export const codeCards: card[] = [
    {
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
    },

]

export default designCards;

