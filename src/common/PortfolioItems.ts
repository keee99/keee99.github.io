
import img_feeling_funky_back from  "../assets/images/portfolio/design/feeling_funky_back.png"
import img_feeling_funky_front from  "../assets/images/portfolio/design/feeling_funky_front.png"
import img_feeling_funky_back_tbn from  "../assets/images/portfolio/design/feeling_funky_back_tbn.png"
import img_feeling_funky_front_tbn from  "../assets/images/portfolio/design/feeling_funky_front_tbn.png"

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
        title: "Feeling FUNKY!", 
        subtitle: "Shirt design for dance club",
        desc: "Illustrator for vector design, and Procreate for drafting. Design was an iterative process with input from the club.",
        imgs: [
            {
                i: img_feeling_funky_back,
                alt: "Back shirt design, showing a anthropomorphic dancing disco ball with the words 'Feeling FUNKY!'.",
                thumbnail: img_feeling_funky_back_tbn
            },
            {
                i: img_feeling_funky_front,
                alt: "Front shirt design, with the FUNKtion logo and some japanese characters saying 'ready, get set, go!'.",
                thumbnail: img_feeling_funky_front_tbn
            },

            
        ]
    },
]


export default designCards;

