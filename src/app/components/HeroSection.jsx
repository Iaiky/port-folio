"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation'


const HeroSectioin = () => {
    const handleDownload = () => {
        // Logique pour télécharger le fichier
        const downloadUrl = '/CV-Iaiky .png';
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.setAttribute('download', 'CV-Iaiky .png');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

      const router = useRouter()

  return (
    <section className='lg:py-4'>
        <div className='grid grid-cols-1 sm:grid-cols-12 gap-y-5'>
            <motion.div 
                initial= {{ opacity: 0, scale: 0.5 }}
                animate= {{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className='col-span-8 place-self-center text-center sm:text-left justify-self-start'
            >
                <h1 className='mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to bg-secondary-600'>Hello, I am {""}</span> 
                    <br/>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Iaikitiana Jean',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Web developer',
                            1000,
                            'UI/UX Designer',
                            1000,
                            'Backend developer',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>
                <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
                I am a full-stack web developer with a proficiency in JavaScript and moderate expertise in frameworks such as Vue.js and Quasar.js. 
                My skill set extends to the backend with Node.js, and I am well-versed in utilizing GitHub for version control.
                </p>
                <div>
                    <button 
                        onClick={() => router.push('#contact')}
                        className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-400 to bg-secondary-600 hover:bg-slate-200 text-white'
                    >
                        Hire me
                    </button>
                    <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-400 to bg-secondary-600 hover:bg-slate-800 text-white mt-3'>
                        <span 
                            onClick={handleDownload}
                            className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'
                        >
                            Download CV
                        </span>
                    </button>
                </div>
            </motion.div>    
            <motion.div 
                initial= {{ opacity: 0, scale: 0.5 }}
                animate= {{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className='col-span-4 place-self-center mt-4 lg:mt-0'
            >
                <div className='rounded-lg w-[150px] h-[150px] lg:w-[400px] lg:h-[400px] sm:w-[200px] sm:h-[200px]  relative '>
                    <Image 
                    src='/images/naej.jpg'
                    alt='hero image'
                    className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-lg border-double border-4 border-white-500'
                    width={300}
                    height={300}
                />
                </div>
                
            </motion.div>      
        </div>        
    </section>
  )
}

export default HeroSectioin