<script setup lang="ts">

import { ref } from "vue";
import { skillsLanguages, skillsBackend, skillsFrontend, skillsDevOps, skillsOthers } from "../common/SkillsItems";


const formatSkills = (skills: string[], key: number) => {

    return skills.map((skill, i) => {
        return {
            key: key + "_" + i,
            label: skill,
        }
    })
}

const skills = ref([
    {
        key: '0',
        label: 'Programming Languages',
        items: formatSkills(skillsLanguages, 0),
    },
    {
        key: '1',
        label: 'Backend',
        items: formatSkills(skillsBackend, 1),
    },
    {
        key: '2',
        label: 'Frontend',
        items: formatSkills(skillsFrontend, 2),
    },
    {
        key: '3',
        label: 'DevOps',
        items: formatSkills(skillsDevOps, 3),
    },
    {
        key: '4',
        label: 'Design/Others',
        items: formatSkills(skillsOthers, 4),
    },
]);

</script>

<template>
    <main class="main-container">
    
        <div class="flex-right">
            <div class="col-2">

                <!-- <img src="../assets/images/profile.png" style="width: 50vw"/> -->
                <h1 class="section-title neon-text-primary">About Me.</h1>
                <Accordion :activeIndex="0">


                    <AccordionTab header="Background">

                        <div class="tab-content">   
                            <p>
                                I'm Jia Jun, JJ, a final year undergrad at SUTD, pursuing a Bachelor's in Computer Science and Design. 
                                I'm interested in fullstack software dev roles. 
                                I'm also looking to explore interactive applications, XR/VR/AR, and 3D libraries, such as three.js used to make this site!
                                I dabble in different forms of artistic hobbies in my free time, including digital art, music, and dance.
                            </p>                 
                        </div>
                    </AccordionTab>

                    <AccordionTab header="Education">
                        <div class="tab-content">
                            <div class="tab-title">Undergraduate, Computer Science & Design</div>   
                            <div>Singapore University of Techology and Design</div>
                            <div>Grade: 4.9/5.0</div> 
                            <div class="tab-date">Sep 2020 - May 2024</div> 
                            <div>
                                <strong>Achievements:</strong> 
                                <ul>
                                    <li>Honour's List (AY20/21, AY21/22)</li>
                                    <li>SUTD Global Merit Scholarship</li>
                                    <li>President, Modern Visual Media Circle, AY 21/22</li>
                                    <li>Secretary, FUNKtion Dance Club, AY 21/22</li>
                                </ul>
                            </div>
                        </div>
                    </AccordionTab>

                    <AccordionTab header="Skills">
                        <div class="tab-content">
                            <PanelMenu :model="skills" />                    
                        </div>
                    </AccordionTab>


                    <AccordionTab header="Experience">
                        <div class="tab-content">
                            <div class="tab-title">SHINE Software Development Intern</div>   
                            <div>Singtel, 5G Platform & Product Dept.</div>
                            <div class="tab-date">June 2021 - Aug 2021</div> 
                            <div>
                                <strong>Tools:</strong>
                                <ul>
                                    <li><strong>Backend:</strong> Spring Boot, Keycloak</li>
                                    <li><strong>Frontend:</strong> Vue.js</li>
                                    <li><strong>DB:</strong> MongoDB </li>
                                    <li><strong>DevOps:</strong> Docker, Kubernetes, Jenkins, Ansible</li>
                                </ul>
                            </div>
                            <br>
                            <p>
                                Resumed the development of an internal Credential Management tool.
                                Managed to successfully debug, deploy and develop new features.
                                Development work primarily focused on backend programming, but also involved frontend work for integration.
                            </p>                        
                        </div>
                        <div class="tab-content">
                            <div class="tab-title">Research Project Backend Lead</div>
                            <div>Singapore University of Technology and Design</div>  
                            <div class="tab-date">June 2021 - Aug 2021</div>
                            <div>
                                <strong>Tools:</strong> 
                                <ul>
                                    <li><strong>Backend:</strong> Node.js, Express.js</li>
                                    <li><strong>DB:</strong> MongoDB Atlas</li>
                                </ul>  
                            </div>  
                            <br>
                            <p>
                                Worked in a small team to build a Web platform for enterprise evaluation and training of employee EQ.
                                Developed the backend server, including RESTful API and user authentication system.
                                Presented the working prototype to the stakeholder and project supervisor.
                            </p>           
                        </div>
                    </AccordionTab>


                    <AccordionTab header="Testimonials">
                        <div class="tab-content">
                            <p class="quote-text">
                                
                                I had the pleasure to supervise JJ during his internship at SingTel 5G Enterprise Product Architecture team. 
                                JJ was one of hardest software developed that I have worked with. 
                                His professionalism, motivation, can do attitude and aptitude to pick up complex technologies are off the charts. 
                                During his internship, he managed to successfully delivery a complex system based on kubernetes, Jenkins, ansible, Java spring, vueJS and MongoDB successfully. 
                                The system was merged to our internal code base and now used by multiple stakeholders. 
                            
                            </p>
                            <div class="quote-author" >
                                <div class="quote-author-name">Sonny Pyie Sone</div>
                                <div>Software Engineer, Direct Supervisor</div>
                                <div>Singtel</div>
                            </div>                            
                        </div>
                        
                    </AccordionTab>
                </Accordion>
            

            </div>
        </div>
    </main>
</template>

<style scoped>

@import "../assets/base.css";

.main-container {
    height: 100%;

}

p {
    font-size: 15px;
    font-style: italic;
}

strong {
    font-weight: bolder;
}

.flex-align-center {
    height: 100%;
    align-items: center;
}


.tab-content {
    margin-bottom: 1rem;
    padding-bottom: 2rem;
    position: relative;
    border-bottom: 1px var(--color-dark) solid;
}

.quote-author-name {
    font-weight: bolder;

}

/* flex box */
.quote-author {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    text-align: right;
}

.tab-title {
    font-family: 'Beon', monospace;
    font-weight: bolder;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
}

.tab-date {
    font-size: 0.9rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
    color: var(--color-text-dark);

}



</style>