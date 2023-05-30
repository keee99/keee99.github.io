<script setup lang="ts">



</script>

<template>
    <main class="main-container">
    
        <div class="flex-right">
            <div class="col-2">

                <!-- <img src="../assets/images/profile.png" style="width: 50vw"/> -->
                <h1 class="section-title neon-text-primary">About Me.</h1>
                <Accordion :activeIndex="0">


                    <AccordionTab header="Background">
                        <p>
                            I'm Jia Jun, JJ, a final year undergrad at SUTD, pursuing a Bachelor's in Computer Science and Design. 
                            I'm interested in fullstack software dev roles. 
                            I'm also looking to explore interactive applications, XR/VR/AR, and 3D libraries, such as three.js used to make this site!
                            I dabble in different forms of artistic hobbies in my free time, including digital art, music, and dance.
                        </p>
                    </AccordionTab>


                    <AccordionTab header="Education">
                        <p>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                            culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                        </p>
                    </AccordionTab>


                    <AccordionTab header="Skills">
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                            enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
                        </p>
                    </AccordionTab>


                    <AccordionTab header="Experience">
                        <div class="tab-content">
                            <div>SHINE Software Development Intern</div>   
                            <div>Singtel, 5G Platform & Product Dept.</div>
                            <div>June 2021 - Aug 2021</div> 
                            <div>
                                <strong>Tools:</strong> 
                                Spring Boot, Vue.js, Docker, Jenkins, Ansible, Kubernetes, Keycloak
                            </div>
                            <br>
                            <p>
                                Resumed and the development & deployment of an internal Credential Management tool.
                                Managed to successfully debug, deploy and develop new features.
                                Development work primarily focused on backend programming, but also involved frontend work.
                            </p>                        
                        </div>
                        <div class="tab-content">
                            <div>Backend Lead</div>
                            <div>SUTD, Web Platform Dev Research Project</div>  
                            <div>June 2021 - Aug 2021</div>
                            <div>
                                <strong>Tools:</strong> 
                                Node.js, Express.js, MongoDB Atlas  
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
    border-bottom: 1px black solid;
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



</style>