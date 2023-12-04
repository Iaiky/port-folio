"use client";
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag';
import { motion, useInView } from 'framer-motion';

const projectsData = [
    {
        id:1,
        title:"Libère toi",
        description:"Platform dedicated to online virtual assistant services  ",
        image:"/images/projects/libere-toi-net.png",
        tag:["All","Web"],
        gitUrl:"/",
        previewUrl:"/"
    },
    {
        id:2,
        title:"Libère toi backend server ",
        description:"Authentication and CRUD opérations with express.js & phpMyAdmin",
        image:"/images/projects/libere-toi-back.png",
        tag:["All","Backend"],
        gitUrl:"/",
        previewUrl:"/"
    },
    {
        id:3,
        title:"SHENZHEN LK LOGISTICS",
        description:"Site web where you can make command of their products",
        image:"/images/projects/SHENZHEN.png",
        tag:["All","Web"],
        gitUrl:"/",
        previewUrl:"/"
    },
    {
        id:4,
        title:"Shenzhen LK logistics backend server",
        description:"Authentication and CRUD opérations with express.js & phpMyAdmin",
        image:"/images/projects/libere-toi-back.png",
        tag:["All","Backend"],
        gitUrl:"/",
        previewUrl:"/"
    },
    {
        id:5,
        title:"E-fandray",
        description:"Messages Layout Template",
        image:"/images/projects/E-fandray.png",
        tag:["All","Web"],
        gitUrl:"/",
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