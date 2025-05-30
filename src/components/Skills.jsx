import React from 'react'
import OrbitingItems from './testOrbitingItems'
import { Icons } from "./Icons";
import FadeInFromLeft from './FadeInFromLeft';
import FadeInFromRight from './FadeInFromRight';
import FadeInFromUp from './FadeInFromUp';
import FadeInWithScale from './FdeWithInScale';
const Skills = () => {
  return (
    <>
    <div id='skills' className="skills md:h-[700px]">
        <div className="heading text-center  text-cyan-500 text-4xl m-auto justify-center items-center">
            <p>Skills</p>
        </div>
         <p className='text-gray-400 text-lg m-auto justify-center items-center text-center'>I've experienced with</p>




         
          
        <div className="skillcontainer md:px-3 md:py-3 flex m-auto items-center justify-center">
            <FadeInFromLeft>
            <div className="set1 text-gray-400 m-auto justify-center items-center text-center p-4">
                <div className="flex m-2">
                <div className="html m-3 md:m-5 px-3 py-2 w-[60px] h-[60px] md:w-[100px] md:h-[100px] border  justify-center items-center  border-gray-600 rounded hover:scale-110 transition-transform duration-200 ease-in-out">
                    <Icons.react className=' text-cyan-500 m-auto justify-center items-center w-12 h-12'/>
                    <p className='py-2'>React</p>
                </div>
                <div className="html  m-3 md:m-5  px-3 py-2 w-[60px] h-[60px] md:w-[110px] md:h-[100px] border  justify-center items-center  border-gray-600 rounded hover:scale-110 transition-transform duration-200 ease-in-out">
                    <Icons.tailwind className=' text-cyan-500 m-auto justify-center items-center w-12 h-12'/>
                    <p className='py-2'>TailwindCss</p>
                </div>
                
                </div>
                <div className="flex m-2">
                <div className="html  m-3 md:m-5  px-3 py-2 w-[60px] h-[60px] md:w-[100px] md:h-[100px] border  justify-center items-center  border-gray-600 rounded hover:scale-110 transition-transform duration-200 ease-in-out">
                    <Icons.NodeJs className=' text-cyan-500 m-auto justify-center items-center w-12 h-12'/>
                    <p className='py-2'>NodeJs</p>
                </div>
                <div className="html  m-3 md:m-5  px-3 py-2 w-[60px] h-[60px] md:w-[110px] md:h-[100px] border  justify-center items-center  border-gray-600 rounded hover:scale-110 transition-transform duration-200 ease-in-out">
                    <Icons.Bootstrap className=' text-cyan-500 m-auto justify-center items-center w-12 h-12'/>
                    <p className='py-2'>Bootstrap</p>
                </div>
                
                </div>
                 <div className="flex m-2">
                 <div className="html  m-3 md:m-5  px-3 py-2 w-[60px] h-[60px] md:w-[110px] md:h-[100px] border  justify-center items-center  border-gray-600 rounded hover:scale-110 transition-transform duration-200 ease-in-out">
                    <Icons.oracle className=' text-cyan-500 m-auto justify-center items-center w-12 h-12'/>
                    <p className='py-2'>OracleDB</p>
                </div>
                 <div className="html  m-3 md:m-5  px-3 py-2 w-[60px] h-[60px] md:w-[110px] md:h-[100px] border  justify-center items-center  border-gray-600 rounded hover:scale-110 transition-transform duration-200 ease-in-out">
                    <Icons.gitHub className=' text-cyan-500 m-auto justify-center items-center w-12 h-12'/>
                    <p className='py-2'>Github</p>
                </div>
                </div>
                
            </div>
            </FadeInFromLeft>
            <FadeInFromUp>
    <div className="orbitcontainer text-cyan-500 m-auto w-[300px] justify-center">
      
      <OrbitingItems
        items={[
         <Icons.gitHub key="github" className="h-6 w-6" />,
  <Icons.twitter key="twitter" className="h-6 w-6" />,
  <Icons.react key="react" className="h-6 w-6" />,
  <Icons.tailwind key="tailwind" className="h-6 w-6" />,
  <Icons.framerMotion key="framer" className="h-6 w-6" />,
  <Icons.Html key="html" className="h-6 w-6" />,
  <Icons.css key="css" className="h-6 w-6" />,
  <Icons.Bootstrap key="Bootstrap" className="h-6 w-6" />,
  <Icons.NodeJs key="nodejs" className="h-6 w-6" />,
   <Icons.javascipt key="tailwind" className="h-6 w-6" />,
   <Icons.figma key="figma" className="h-6 w-6" />
        ]}
        radius={50}
      />
      </div>
      </FadeInFromUp>

<FadeInFromRight>
<div className="set2 text-gray-400 m-auto justify-center items-center text-center p-4">
                <div className="flex m-2">
                <div className="html m-3 md:m-5 px-3 py-2 w-[60px] h-[60px] md:w-[100px] md:h-[100px] border  justify-center items-center  border-gray-600 rounded hover:scale-110 transition-transform duration-200 ease-in-out">
                    <Icons.java className=' text-cyan-500 m-auto justify-center items-center w-12 h-12'/>
                    <p className='py-2'>Java</p>
                </div>
                <div className="html  m-3 md:m-5  px-3 py-2 w-[60px] h-[60px] md:w-[110px] md:h-[100px] border  justify-center items-center  border-gray-600 rounded hover:scale-110 transition-transform duration-200 ease-in-out">
                    <Icons.python className=' text-cyan-500 m-auto justify-center items-center w-12 h-12'/>
                    <p className='py-2'>Python</p>
                </div>
                
                </div>
                <div className="flex m-2">
                <div className="html  m-3 md:m-5  px-3 py-2 w-[60px] h-[60px] md:w-[100px] md:h-[100px] border  justify-center items-center  border-gray-600 rounded hover:scale-110 transition-transform duration-200 ease-in-out">
                    <Icons.Html className=' text-cyan-500 m-auto justify-center items-center w-12 h-12'/>
                    <p className='py-2'>HTML</p>
                </div>
                <div className="html  m-3 md:m-5  px-3 py-2 w-[60px] h-[60px] md:w-[110px] md:h-[100px] border  justify-center items-center  border-gray-600 rounded hover:scale-110 transition-transform duration-200 ease-in-out">
                    <Icons.javascipt className=' text-cyan-500 m-auto justify-center items-center w-12 h-12'/>
                    <p className='py-2'>JavaScript</p>
                </div>
                
                </div>
                 <div className="flex m-2">
                 <div className="html  m-3 md:m-5  px-3 py-2 w-[60px] h-[60px] md:w-[110px] md:h-[100px] border  justify-center items-center  border-gray-600 rounded hover:scale-110 transition-transform duration-200 ease-in-out">
                    <Icons.typescipt className=' text-cyan-500 m-auto justify-center items-center w-12 h-12'/>
                    <p className='py-2'>TypeScript</p>
                </div>
                 <div className="html  m-3 md:m-5  px-3 py-2 w-[60px] h-[60px] md:w-[110px] md:h-[100px] border  justify-center items-center  border-gray-600 rounded hover:scale-110 transition-transform duration-200 ease-in-out">
                    <Icons.figma className=' text-cyan-500 m-auto justify-center items-center w-12 h-12'/>
                    <p className='py-2'>Figma</p>
                </div>
                </div>
                
            </div>
            </FadeInFromRight>


    </div>
    </div>





{/* its for skills currently learning*/}
<FadeInWithScale>
    <div className="skiils2">
        <div className="heading text-center  text-cyan-500 text-2xl m-auto justify-center items-center">
            <p>Skills</p>
        </div>
         <p className='text-gray-400 text-lg m-auto justify-center items-center text-center'>I'm currently learning</p>

   <div className="skillcontainer md:px-3 md:py-3 flex m-auto items-center justify-center">

            <div className="set1 text-gray-400 m-auto justify-center items-center text-center p-4">
     <div className="flex  m-2">
                 <div className="html  m-3 md:m-5  px-3 py-2 w-[60px] h-[60px] md:w-[110px] md:h-[100px] border  justify-center items-center  border-gray-600 rounded hover:scale-110 transition-transform duration-200 ease-in-out">
                    <Icons.nextjs className=' text-cyan-500 m-auto justify-center items-center w-12 h-12'/>
                    <p className='py-2'>NextJS</p>
                </div>
                 <div className="html  m-3 md:m-5  px-3 py-2 w-[60px] h-[60px] md:w-[110px] md:h-[100px] border  justify-center items-center  border-gray-600 rounded hover:scale-110 transition-transform duration-200 ease-in-out">
                    <Icons.springboot className=' text-cyan-500 m-auto justify-center items-center w-12 h-12'/>
                    <p className='py-2'>SpringBoot</p>
                </div>
                  <div className="html  m-3 md:m-5  px-3 py-2 w-[60px] h-[60px] md:w-[110px] md:h-[100px] border  justify-center items-center  border-gray-600 rounded hover:scale-110 transition-transform duration-200 ease-in-out ">
                    <Icons.postgreSQL className=' text-cyan-500 m-auto justify-center items-center w-12 h-12'/>
                    <p className='py-2'>PostgreSQL</p>
                </div>
                </div>
              </div>
              
              </div>
              
              </div>
              </FadeInWithScale>
</>
    
  );
};

export default Skills;
