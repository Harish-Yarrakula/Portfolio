import React from 'react'
import s1 from '../assets/s1.png'
import s2 from '../assets/s2.jpg'
import s3 from '../assets/s3.jpg'
import s4 from '../assets/s4.jpg'
import useScrollAnimation from '../hooks/useScrollAnimation';

const About = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A website to showcase my projects and skills as a developer.",
      tech: ["Reactjs","Tailwind CSS","Netlify"],
      link: "https://my3dportfoli0.netlify.app",
      img: s1
    },
    {
      title: "Agrikart",
      description: "An Ecommerce marketplace for farmers to buy essential fertilizers etc at very low prices",
      tech: ["Nextjs","Tailwind CSS","Nodejs","MongoDB"],
      link: "https://eagrikart.vercel.app/",
      img: s3
    },
    {
      title: "Audio to Image Converter",
      description: "A web application that converts audio files to images using machine learning.",
      tech: ["Python","Gradio","Machine Learning"],
      link: "https://github.com/Harish-Yarrakula/AIML-BOTS/",
      img: s2
    },
    {
      title: "Smart Water Level Controller",
      description: "A microcontroller-based system to monitor and control water levels in tanks.",
      tech: ["React", "Node.js", "IoT"],
      link: "https://github.com/Harish-Yarrakula/Smart-Water-Level-Controller", 
      img: s4
    }
  ];
  
  const [currentProject, setCurrentProject] = React.useState(0);
  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };
  React.useEffect(() => {
    const interval = setInterval(nextProject, 5000);
    return () => clearInterval(interval);
  }, []);
  
  const aboutData = {
    name: "KusumaHarish Yarrakula",
    role: "Full Stack Developer",
    bio: "I specialize in creating responsive and user-friendly applications. My passion lies in solving complex problems through clean and efficient code.",
  };

  const journeyRef = useScrollAnimation();
  const projectsRef = useScrollAnimation();
  const availabilityRef = useScrollAnimation();

  return (
    <div className="min-h-100 about">
      <div id="about" className="w-100 py-5 text-white">
        <div className="container px-4 py-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div className= 'items-center inter'>
              <div ref={journeyRef} className='w-100 text-center card glass-card-hover1 m-6 animate-on-load'>
                <h3 className="text-3xl font-bold mb-1">About me</h3>
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                  <div className="space-y-4">
                    <p className="text-lg text-gray-300">{aboutData.name}</p>
                    <p className="text-lg text-gray-300">{aboutData.role}</p>
                    <p className="text-gray-300">{aboutData.bio}</p>
                    <p className="text-gray-300">{aboutData.experience}</p>
                    <p className="text-lg text-gray-300">For Resume: </p>
                    <a href="/path/to/resume.pdf" className="text-white bg-primary p-2 px-3 rounded-pill hover:bg-secondary icon-link icon-link-hover">Click here <svg xmlns="http://www.w3.org/2000/svg" class="bi" viewBox="0 0 16 16" aria-hidden="true">
    <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
  </svg></a>
                  </div>
                </div>  
              </div>
              <div ref={availabilityRef} className='w-100 text-center card glass-card-hover1 m-3 animate-on-load'>
                <h3>Skills</h3>
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                  <p className="text-lg text-gray-300">JavaScript, React, Node.js, Express, MongoDB, Tailwind CSS</p>
                  <p className="text-lg text-gray-300">HTML, CSS, Git, REST APIs</p>
                  <p className="text-lg text-gray-300">Agile Methodologies, Team Collaboration</p>
                  <p className="text-lg text-gray-300">Problem Solving, Communication</p>
                  <p className="text-lg text-gray-300">Responsive Design, UI/UX Principles</p>
                  <p className="text-lg text-gray-300">Testing and Debugging</p>
                </div>
              </div>
            </div>
            <div ref={projectsRef} className='card glass-card-hover1 m-3 animate-on-load animation-delay-200 w-full md:w-auto'>
              <h3 className="text-3xl font-bold mb-6 text-center">Projects</h3>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <p className="text-gray-300 mb-4 text-center">Project {currentProject + 1} of {projects.length}</p>
                <div className="space-y-4">
                  <div className="prj">
                    <div>
                      <h4 className="text-2xl font-semibold">{projects[currentProject].title}</h4>
                      <p className="text-gray-300">{projects[currentProject].description}</p>
                      <div className="flex flex-nowrap gap-2">
                        {projects[currentProject].tech.map((tech, i) => (
                          <span key={i} className="text-xs bg-white/10 text-white/90 px-3 py-1 rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className='p-4'>
                        <a href={projects[currentProject].link} className="text-white bg-primary p-2 px-3 rounded-pill hover:bg-secondary icon-link icon-link-hover">View Project<svg xmlns="http://www.w3.org/2000/svg" class="bi" viewBox="0 0 16 16" aria-hidden="true">
    <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
  </svg></a>
                      </div>
                    </div>
                      <img src={projects[currentProject].img} alt="project" className="w-50 h-25 object-cover rounded-lg prjimg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
