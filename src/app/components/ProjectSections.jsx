"use client";
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag';
import { motion, useInView } from 'framer-motion';

const projectsData = [
    {
        id:1,
        title:"Honey of Madagascar",
        description:"Site web of Honey of Madagascar (Still in progress)",
        image:"/images/projects/Honey.PNG",
        tag:["All","Web"],
        gitUrl:"https://github.com/Iaiky/",
        previewUrl:"https://ageru.mg/HoneyRemake/Accueil.html"
    },
    {
        id:2,
        title:"Iaiky Portfolio",
        description:"My portfolio ",
        image:"/images/projects/my_portfolio.png",
        tag:["All","Web"],
        gitUrl:"https://github.com/Iaiky/port-folio.git",
        previewUrl:"https://port-folio-iaiky.vercel.app"
    },
    {
        id:3,
        title:"Libère toi",
        description:"Platform dedicated to online virtual assistant services  ",
        image:"/images/projects/libere-toi-net.png",
        tag:["All","Web"],
        gitUrl:"https://github.com/Iaiky/quasar-lib-re-toi.git",
        previewUrl:"https://libere-toi.net/#/Home"
    },
    {
        id:4,
        title:"Libère toi backend server ",
        description:"Authentication and CRUD opérations with express.js & phpMyAdmin",
        image:"/images/projects/libere-toi-back.png",
        tag:["All","Backend"],
        gitUrl:"https://github.com/Iaiky/libere_toi_back.git",
        previewUrl:"/"
    },
    {
        id:5,
        title:"SHENZHEN LK LOGISTICS",
        description:"Site web where you can make command of their products",
        image:"/images/projects/SHENZHEN.png",
        tag:["All","Web"],
        gitUrl:"https://github.com/Iaiky/SHenZHEN-Front.git",
        previewUrl:"/"
    },
    {
        id:6,
        title:"Shenzhen LK logistics backend server",
        description:"Authentication and CRUD opérations with express.js & phpMyAdmin",
        image:"/images/projects/libere-toi-back.png",
        tag:["All","Backend"],
        gitUrl:"https://github.com/Iaiky/SHENZHEN-api.git",
        previewUrl:"/"
    },
    {
        id:7,
        title:"E-fandray",
        description:"Messages Layout Template",
        image:"/images/projects/E-fandray.png",
        tag:["All","Web"],
        gitUrl:"https://github.com/Iaiky/react_E-fandray.git",
        previewUrl:"/"
    }
];

const ProjectSections = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true});

    const handleTagChange = (newTag) => {
        setTag(newTag)
    };

    const filteredProjects = projectsData.filter((project) => 
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y:0, opacity: 1 }
    }

  return (
    <section id="projects"  >
    <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
        My projects
    </h2>
    <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
        <ProjectTag 
            onClick={handleTagChange} 
            name="All" 
            isSelected = {tag === "All"}
        />
        <ProjectTag 
            onClick={handleTagChange} 
            name="Web" 
            isSelected = {tag === "Web"}
        />
        <ProjectTag 
            onClick={handleTagChange} 
            name="Backend" 
            isSelected = {tag === "Backend"}
        />
    </div>
    <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12 '> 
        {filteredProjects.map((project, index) => (
            <motion.li 
                key={index}
                variants={cardVariants} 
                initial="initial"
                animate = { isInView ? "animate" : "initial" }
                transition={{ duration: 0.3, delay: index *0.4 }}
            >
                <ProjectCard 
                    key={project.id} 
                    title={project.title} 
                    description={project.description} 
                    imgUrl={project.image} 
                    tags={project}
                    gitUrl={project.gitUrl}
                    previewUrl={project.previewUrl}
                />
        </motion.li>
        ))} 
    </ul>
    </section>
    
  )
}

export default ProjectSections