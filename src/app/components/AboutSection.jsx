"use client";
import React, { useState, useTransition } from 'react'
import Image from 'next/image'
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>PHPMyAdmin</li>
                <li>MySQL</li>
                <li>Vue.js</li>
                <li>Quasar.js</li>
                <li>React</li>
                <li>JAVASCRIPT</li>
                <li>Git</li>
            </ul>
        )
    },
    {
        title: "Educations",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>Institut Supérieur Polytechnique de Madagascar (ISPM)</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className='list-disc pl-2'>
                <li>Licence, Informatique</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [ isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };
  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src="/images/about-image.png" width={500} height={500} alt='Aout image' />
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4'>About me</h2>
                <p className='text-base lg:text-lg'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Laborum id dicta quos suscipit nobis, quae natus excepturi 
                    explicabo totam ipsam officiis laudantium earum pariatur quas 
                    dolor odit ratione iste culpa. Nulla cum hic aspernatur fugiat 
                    corrupti necessitatibus cumque eum in?Lorem ipsum dolor sit amet 
                    consectetur adipisicing elit. Odit ipsum illum reprehenderit quas 
                    similique laboriosam iure eaque veritatis dolor nemo.
                </p>
                <div className='flex flex-row justify-start mt-8'>
                    <TabButton 
                        selectTab={() => handleTabChange("skills")} 
                        active={tab === "skills"}
                    >
                            {" "}
                            Skills{" "}
                    </TabButton>
                    <TabButton 
                        selectTab={() => handleTabChange("education")} 
                        active={tab === "education"}
                    >
                            {" "}
                            Education{" "}
                    </TabButton>
                    <TabButton 
                        selectTab={() => handleTabChange("certifications")} 
                        active={tab === "certifications"}
                    >
                            {" "}
                            Certification{" "}
                    </TabButton>
                </div>
                <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection