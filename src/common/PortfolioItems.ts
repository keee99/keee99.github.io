
import img_feeling_funky_back from  "../assets/images/portfolio/design/feeling_funky_back.png"
import img_feeling_funky_front from  "../assets/images/portfolio/design/feeling_funky_front.png"
import img_feeling_funky_back_tbn from  "../assets/images/portfolio/design/feeling_funky_back_tbn.png"
import img_feeling_funky_front_tbn from  "../assets/images/portfolio/design/feeling_funky_front_tbn.png"
import img_feeling_funky_draft from  "../assets/images/portfolio/design/feeling_funky_draft.png"
import img_feeling_funky_draft_tbn from  "../assets/images/portfolio/design/feeling_funky_draft_tbn.png"
import img_feeling_funky_final from  "../assets/images/portfolio/design/feeling_funky_final.png"
import img_feeling_funky_final_tbn from  "../assets/images/portfolio/design/feeling_funky_final_tbn.png"
import img_feeling_funky_front_draft from  "../assets/images/portfolio/design/feeling_funky_front_draft.png"
import img_feeling_funky_front_draft_tbn from  "../assets/images/portfolio/design/feeling_funky_front_draft_tbn.png"

export interface card {
    title: string, 
    subtitle: string,
    desc: string,
    imgs: img[]
}

export interface img {
    i: string,
    alt: string,
    thumbnail: string,
}
  
export const designCards: card[] = [
    {
        title: "FUNKtion Club Shirt Design", 
        subtitle: "Shirt design for dance club",
        desc: "Illustrator for vector design, and Procreate for drafting. Design was an iterative process with input from the club.",
        imgs: [
            {
                i: img_feeling_funky_final,
                alt: "Back shirt design: an anthropomorphic dancing disco ball",
                thumbnail: img_feeling_funky_final_tbn
            },
            {
                i: img_feeling_funky_back,
                alt: "Design on a physical shirt",
                thumbnail: img_feeling_funky_back_tbn
            },
            {
                i: img_feeling_funky_front,
                alt: "Front shirt design, with the FUNKtion logo and japanese characters",
                thumbnail: img_feeling_funky_front_tbn
            },
            {
                i: img_feeling_funky_draft,
                alt: "Draft of the shirt design, sketched out in Procreate",
                thumbnail: img_feeling_funky_draft_tbn
            },
            {
                i: img_feeling_funky_front_draft,
                alt: "Initial design of shirt front",
                thumbnail: img_feeling_funky_front_draft_tbn
            },
        ]
    },

    // {
    //     title: "Feeling FUNKY!", 
    //     subtitle: "Shirt design for dance club",
    //     desc: "Illustrator for vector design, and Procreate for drafting. Design was an iterative process with input from the club.",
    //     imgs: [
    //         {
    //             i: img_feeling_funky_final,
    //             alt: "Back shirt design: an anthropomorphic dancing disco ball",
    //             thumbnail: img_feeling_funky_final_tbn
    //         },
    //         {
    //             i: img_feeling_funky_back,
    //             alt: "Design on a physical shirt",
    //             thumbnail: img_feeling_funky_back_tbn
    //         },
    //         {
    //             i: img_feeling_funky_front,
    //             alt: "Front shirt design, with the FUNKtion logo and japanese characters",
    //             thumbnail: img_feeling_funky_front_tbn
    //         },
    //         {
    //             i: img_feeling_funky_draft,
    //             alt: "Draft of the shirt design, sketched out in Procreate",
    //             thumbnail: img_feeling_funky_draft_tbn
    //         },
    //         {
    //             i: img_feeling_funky_front_draft,
    //             alt: "Initial design of shirt front",
    //             thumbnail: img_feeling_funky_front_draft_tbn
    //         },
    //     ]
    // },
]


export default designCards;

