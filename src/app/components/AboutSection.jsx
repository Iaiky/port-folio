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
                <li>HTML/CSS</li>
                <li>PHP</li>
                <li>JAVASCRIPT</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>PHPMyAdmin</li>
                <li>MySQL</li>
                <li>Vue.js</li>
                <li>Quasar.js</li>
                <li>React</li>
                <li>Git</li>
            </ul>
        )
    },
    {
        title: "Educations",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>Licence en Informatique, Institut Supérieur Polytechnique de Madagascar (ISPM)</li>
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
                    &nbsp;&nbsp;&nbsp;&nbsp;I am a full-stack web developer with a proficiency in JavaScript and moderate expertise in frameworks such as Vue.js and Quasar.js. 
                    My skill set extends to the backend with Node.js, and I am well-versed in utilizing GitHub for version control. 
                    Additionally, I have experience with PHP and MySQL, showcasing my versatility in both front-end and back-end technologies.
                </p>
                <p className='text-base lg:text-lg'>
                    &nbsp;&nbsp;&nbsp;&nbsp;Beyond my technical prowess, my interests extend to geek Nippon pop culture and gaming, demonstrating a multifaceted passion. 
                    My appreciation for Japanese geek culture, encompassing anime, manga, and gaming, adds a unique and personal dimension to my profile. 
                    With a solid foundation in web development and a keen interest in diverse aspects of technology and entertainment, 
                    I bring a well-rounded perspective to my work and hobbies.
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
                </div>
                <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection