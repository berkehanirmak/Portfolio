import React, { useEffect } from 'react'
import './rightSide.scss'
import { MdNotes } from "react-icons/md";
import { IoSchoolSharp } from "react-icons/io5";
import { MdAssuredWorkload } from "react-icons/md";
import { BiCoinStack } from "react-icons/bi";
import { FaPalette } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { BsBack } from "react-icons/bs";

const RightSideBar = () => {
  useEffect(() => {
    const projects = document.querySelectorAll(".project");
    
    projects.forEach(project => {
      project.addEventListener("mouseenter", function() {
        projects.forEach(p => p.classList.add("inactive"));
        project.classList.remove("inactive");
        project.classList.add("active");
      });
  
      project.addEventListener("mouseleave", function() {
        projects.forEach(p => p.classList.remove("inactive"));
        projects.forEach(p => p.classList.remove("active"));
      });
    });
  
   
     }, []);

    return (
        <div className="right-side-content">
          <section id="home"> <img src="https://media.licdn.com/dms/image/D4D03AQGF6G9gTcwFoQ/profile-displayphoto-shrink_800_800/0/1699685684682?e=2147483647&v=beta&t=GY6dbdFiqu1rW6iQTxb_dDXyEDPE_vtpYCXg5CMlhXc" alt="" />
            <h2>Hello my name is Berkehan Irmak</h2>
            <p>I have so curious, and researcher personality, so I am learning anything fast. I enjoy teaching it others. For this reason, I am sure, if we work together, I will add value your company and your employee. I will learn new information while you add experience to me. Therefore, we will grow up together..</p>
           
          </section>
          <section  id="about">
            <h2>About Me</h2>
            <MdNotes />
            <p>I am Berkehan Irmak, a senior student in software engineering, and I have been actively developing myself in this field by pursuing my passion. During my internships, I gained real-world experience and had the opportunity to learn and apply the best practices in the industry. I maintain strict discipline in software development processes and place great importance on my work ethics.
            I am eager to keep up with the rapidly changing trends in the software world and adapt to new technologies. My openness to continuous learning and self-improvement is a crucial attribute that I believe contributes to becoming a successful software engineer.
            By working with your esteemed team, I aim to continue developing both personally and professionally. Embracing the best practices in the industry and being open to new ideas, I aspire to contribute to the success of your organization.
            </p>
            
            <nav className='right-side-content__menu'>
            <ul className='right-side-content__menu__list'>
             <li className='right-side-content__menu__list__item'>
               Birthday:<p>14 May 2001</p>
            </li>
             
             <li  className='right-side-content__menu__list__item'>
                 Department: <p>Software Engineering</p>
            </li>
            
            <li  className='right-side-content__menu__list__item'>
                E-mail:<p>berkehanirmak@hotmail.com</p>
             </li>
             <li  className='right-side-content__menu__list__item'>
                City:<p>İstanbul</p>
             </li>
             <li  className='right-side-content__menu__list__item'>
               University:<p>Doğuş University</p>
             </li>
             <li  className='right-side-content__menu__list__item'>
               Phone:<p>+90 532 3801407</p>
             </li>
             <li  className='right-side-content__menu__list__item'>
               Freelance / Remote:<p>Avaible</p>
             </li>
            </ul>
          
        </nav>
        <div className='box-content'>
           <div className="education-box">
           <h3><IoSchoolSharp /> Education </h3>
           <div className="education-info">
           <div className="education-item">
           <h2>Bachelor's Degree in Software Engineering</h2>
           <p><BiCoinStack /> 2020-2024</p>
           <h4>Department of Software Engineering, Doğuş University</h4>
           <p>I have been learning web development (Front-End / Back-End) for 4 years. I constantly develop software related to web, embedded systems, and electronics.</p>
        </div>
         <div className="education-item">
          <p><BiCoinStack /> 2017-2019 </p>
          <h4>Gürlek Nakipoğlu Anatolian High School </h4>
          <p>The knowledge and experiences I gained throughout my high school education provide a solid foundation for success as a software engineer in the future. By building more on these foundations in my university education and career, I aim to produce effective and innovative solutions in the world of technology..</p>
        </div>
        <div className="education-item">
         <p><BiCoinStack /> 2015-2017 </p>
         <h4>Bakırköy Anatolian High School </h4>
         <p>When I was a freshman in high school, my interest in the web started with the widespread use of the internet and computers. When I learned how to create a website for the first time, my interest in this field grew even more. </p>
       </div>
     </div>
</div>
  

  <div className="experience-box">
  <h3><MdAssuredWorkload /> Experience </h3>
  <div className="experience-info">
    <div className="experience-item">
    <h2>Bachelor's Degree in Computer Science</h2>
      <p><BiCoinStack /> 2022-2023</p>
      <h4>CodingTech informatics and consultancy </h4>
      <p>I have been self-learning web development (Front-End / Back-End) for 7 months. I constantly develop software related to web, embedded systems, and electronics.</p>
    </div>
    <div className="experience-item">
      <p><BiCoinStack />  2021-2022 </p>
      <h4>Interlink Group Of Companies </h4>
      <p>I have been self-learning web development (Front-End / Back-End) for 7 months. I constantly develop software related to web, embedded systems, and electronics.</p>
    </div>
    <div className="experience-item">
      <p> 2020-2024</p>
      <h2>Bachelor's Degree in Computer Science</h2>
      <h4>Department of Computer Science, Selçuk University</h4>
      <p>I have been self-learning web development (Front-End / Back-End) for 7 months. I constantly develop software related to web, embedded systems, and electronics.</p>
    </div>
  </div>
  </div>
  </div>
          </section>


          <section id="service">
           <div className='service-header'>
            
           <h2> Services</h2>
           </div>
            <div className='services-alt'>
              <div className='services1'>
              <i><FaPalette/></i>
                <h2>Web Design</h2>
                <p>Figma , always searching designer profile, website models, UI-UX standardization</p>
              </div>
              <div className='services1'>
                <i><FaCode /></i>
                <h2>Front-End</h2>
                <p>I am coding your UI desing use Html, Css, Boostrap, JavaScript, Jquery, React.js</p>
                </div>
              <div className='services1'>
                <i><BsBack /></i>
                <h2>Back-End</h2>
                <p>Create server and database with Node.js and MongoDb.</p>
                </div>
            </div>
          </section>


          <section id="portfolio">
       <h2>Portfolio</h2>
      <div class="photo-wrap">
      <div class="project" id="photo1">
      <div class="project-name">Auto Repair  Project</div>
      </div>
       <div class="project" id="photo2">
        <div class="project-name">Book Shop Project</div>
      </div>
       <div class="project" id="photo3">
        <div class="project-name">Weather Project</div>
      </div>
      <div class="project" id="photo4">
        <div class="project-name">Film Project</div>
       </div>
       <div class="project" id="photo5">
       <div class="project-name">e-school System Project</div>
       </div>
       <div class="project" id="photo6">
       <div class="project-name">Web Project</div>
       </div>
       <div class="project" id="photo7">
       <div class="project-name">Api Project</div>
       </div>
       <div class="project" id="photo8">
       <div class="project-name">Currency Project</div>
       </div>
       <div class="project" id="photo9">
       <div class="project-name">Cafe Project</div>
       </div>
       <div class="project" id="photo10">
        <div class="project-name">Cafe (2) Project</div>
       </div>
  </div>
</section>
          
    
         
        </div>
      );
}

export default RightSideBar
