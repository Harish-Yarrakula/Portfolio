import React from 'react'
import s1 from '../assets/s1.png'
import s2 from '../assets/s2.jpg'
import useScrollAnimation from '../hooks/useScrollAnimation';

const About = () => {
  const projects = [
    {
      title: "Audio to Image Converter",
      description: "A web application that converts audio files to images using machine learning.",
      tech: ["Python","Gradio","Machine Learning"],
      link: "https://github.com/Harish-Yarrakula/AIML-BOTS/",
      img: s2
    },
    {
      title: "E-plant Shopping Website",
      description: "An e-commerce platform for plant enthusiasts to buy and sell plants online.",
      tech: ["React", "Redux", "Node.js"],
      link: "https://github.com/Harish-Yarrakula/e-plantShoppingwebsite", 
      img: s1
    }
  ];
  
  const [currentProject, setCurrentProject] = React.useState(0);
  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };
  
  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };
  const aboutData = {
    name: "Kusuma Harish",
    role: "Full Stack Developer",
    bio: "I specialize in creating responsive and user-friendly applications. My passion lies in solving complex problems through clean and efficient code.",
    experience: "Worked with various startups and tech companies, delivering high-quality software solutions."
  };

  const journeyRef = useScrollAnimation();
  const projectsRef = useScrollAnimation();
  const availabilityRef = useScrollAnimation();

  return (
    <div className="min-h-100 about">
      <div id="about" className="w-100 py-5 text-white">
        <div className="container px-4 py-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div className='items-center inter'>
              <div ref={journeyRef} className='w-100 text-center card glass-card-hover1 m-3 animate-on-load'>
                <h3 className="text-3xl font-bold mb-1">About me</h3>
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                  <div className="space-y-4">
                    <p className="text-lg text-gray-300">{aboutData.name}</p>
                    <p className="text-lg text-gray-300">{aboutData.role}</p>
                    <p className="text-gray-300">{aboutData.bio}</p>
                    <p className="text-gray-300">{aboutData.experience}</p>
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
                    </div>
                    <p className='prjimg'>
                      <img src={projects[currentProject].img} alt="project" className="w-25 h-25 object-cover rounded-lg " />
                    </p>
                  </div>
                  <div className="flex justify-between items-center flex-wrap">
                    <div className="flex gap-2 w-full justify-between"> 
                      <button onClick={prevProject} className="bg-gray-700 p-2 rounded-full hover:bg-gray-600">⬅️</button>  
                      <a href={projects[currentProject].link} target='_blank' className="text-blue-400 hover:underline">
                        View Project →
                      </a>
                      <button onClick={nextProject} className="bg-gray-700 p-2 rounded-full hover:bg-gray-600">➡️</button>
                    </div>
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