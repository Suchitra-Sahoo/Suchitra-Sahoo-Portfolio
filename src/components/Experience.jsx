import React from 'react'
import { Icons } from './Icons'
import FadeInFromRight from './FadeInFromRight'
import computerimage from '../assets/developercomputer.png'

const Experience = () => {
  return (
    <div className='experience font-mono md:mb-[70px] px-4 pb-10 '>
      <div className="heading text-center mb-10">
        <p className='text-gray-400'>My</p>
        <p className='text-4xl text-cyan-500'>Experience</p>
      </div>

      <FadeInFromRight>
        <div className="firstcontainer flex flex-col md:flex-row justify-center items-center gap-8 text-gray-400 mb-12 ml-32">
          {/* Left Box */}
          <div className="first text-center md:w-[250px] p-3">
            <div className="year text-2xl text-cyan-500 p-2">
              <p>Since 2023</p>
            </div>

            <div className="count flex justify-center items-center md:p-2">
              <div className="years-into-dev p-2">
                <p className='text-cyan-500 text-6xl font-mono'>3</p>
                <p>Years</p>
              </div>
              <div className="hyphen p-2 pt-6 font-bold">
                <p>-</p>
              </div>
              <div className="website-number p-2">
                <p className='text-cyan-500 text-6xl'>5+</p>
                <p>WEBSITES</p>
              </div>
            </div>

            <div className="des mt-2">
              <p>With 3 years of experience building dynamic and user-friendly web applications.</p>
            </div>
          </div>

          {/* Middle Image */}
          <div className="second">
            <img
              src={computerimage}
              alt="computer image"
              className='w-full max-w-[350px] h-auto mx-auto'
            />
          </div>

          {/* Right Box */}
          <div className="third md:w-[300px] text-center border border-cyan-500 rounded-2xl p-5">
            <p>
              I specialize in <span className="font-bold text-gray-300">React</span> and <span className="font-bold text-gray-300">Modern Javascript</span>, leveraging best practices to create scalable and maintainable solutions.
              My experience spans working on diverse projects, from small business websites to <span className="font-bold text-gray-300">Complex front-end systems</span>, always aiming for clean code and exceptional user experiences.
            </p>
          </div>
        </div>

        {/* Second Container */}
        <div className="secondcontainer flex flex-col md:flex-row justify-center items-stretch gap-5 text-gray-400 mb-10 ml-32">
         {/* First Box */}
<div className="first m-2 p-4 border border-gray-700 rounded w-full max-w-[300px] flex flex-col items-center">
  {/* Curious Business Logo */}
  <img 
    src="https://media.licdn.com/dms/image/sync/v2/D5627AQFDTTiQfAOwQw/articleshare-shrink_800/articleshare-shrink_800/0/1730605397038?e=2147483647&v=beta&t=JKxwxSQy5f8mHCkYz6siMTbzut2dbhyXC8p9WZ_al1c" 
    alt="Curious Business Logo" 
    className="w-20 h-20 object-contain mb-4 rounded-full"
  />

  <div className="title flex-grow w-full">
    <div className="p-4 rounded-lg shadow-md h-full flex flex-col justify-between text-center">
      <h3 className="text-lg font-bold text-white mb-2">Full Stack Developer Intern</h3>
      <p className="text-sm text-stone-300 mb-2">Curious Business Solution Pvt. Ltd. | Jul 2024 – Present | Remote</p>
      <p className="mt-2 text-stone-200 text-sm">
        Contributed to the development of three major web platforms: a mentor-mentee connection app, a developer discussion forum, and a hackathon hosting website. Worked closely with various teams to enhance features, fix bugs, and continuously improve the projects.
      </p>
    </div>
  </div>
</div>
         {/* Second Box */}
<div className="second m-2 p-4 border border-gray-700 rounded w-full max-w-[300px] flex flex-col items-center">
  {/* Logo on top */}
  <img 
    src="https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Indian_Institute_of_Technology_Delhi_Logo.svg/1200px-Indian_Institute_of_Technology_Delhi_Logo.svg.png" 
    alt="IIT Delhi Logo" 
    className="w-20 h-20 object-contain mb-4"
  />
  
  <div className="title flex-grow w-full">
    <div className="p-4 rounded-lg shadow-md h-full flex flex-col justify-between text-center">
      <h3 className="text-lg font-bold text-white mb-2">Developer Intern</h3>
      <p className="text-sm text-stone-300 mb-2">Indian Institute of Technology (IIT Delhi) | Oct 2024 – Jan 2025 | New Delhi, India</p>
      <p className="mt-2 text-stone-200 text-sm">
        Built the main candidate hiring website, integrating psychological tests to assess traits like aptitude and emotional intelligence. Improved the data architecture to manage user profiles and results efficiently, boosting system reliability and performance.
      </p>
    </div>
  </div>
</div>


          {/* Third Box */}
<div className="third m-2 p-4 border border-gray-700 rounded w-full max-w-[300px] flex flex-col items-center">
  {/* Microsoft Learn Student Ambassador Logo */}
  <img 
    src="https://media.licdn.com/dms/image/v2/C4E0BAQHn10ja2QyoTw/company-logo_200_200/company-logo_200_200/0/1630649583584/microsoft_learn_student_ambassadors_logo?e=2147483647&v=beta&t=UAQ2xo64vR_BJDQHUF9hn5GHKH56STtCdKD7rd1sGs0" 
    alt="Microsoft Learn Student Ambassador Logo" 
    className="w-20 h-20 object-contain mb-4 rounded-full"
  />

  <div className="title flex-grow w-full">
    <div className="ambassador-experience text-gray-300 p-4 rounded-lg shadow-md h-full flex flex-col justify-between text-center">
      <h3 className="text-white text-lg font-semibold mb-2">
        Beta Microsoft Learn Student Ambassador
      </h3>
      <p className="mb-2 text-sm text-stone-300">Oct 2023 - Jan 2025 | New Delhi, India</p>
      <p  className="mt-2 text-stone-200 text-sm">
      Organized over 10 virtual tech events and contributed to 5+ global cohort projects by collaborating with ambassadors worldwide.  
Led community outreach initiatives to inspire aspiring developers and promote inclusive learning environments.

      </p>
    </div>
  </div>
</div>

        </div>

        {/* Third Container - Duplicate 3 Boxes */}
        <div className="secondcontainer flex flex-col md:flex-row justify-center text-center items-stretch gap-5 text-gray-400 ml-32">
         {/* GirlScript Summer of Code Box */}
<div className="third m-2 p-4 border border-gray-700 rounded w-full max-w-[300px] flex flex-col">
  <img
    src="https://repository-images.githubusercontent.com/331823142/9764a900-5c8e-11eb-9f94-da2a01385e83"
    alt="GirlScript Summer of Code Logo"
    className="w-18 h-18 object-contain mb-4 mx-auto rounded-full"
  />
  <div className="title flex-grow">
    <div className="ambassador-experience text-gray-300 p-4 max-w-md mx-auto h-full flex flex-col text-center">
      <h3 className="text-white text-lg font-semibold mb-2">
        Mentor & Project Admin
      </h3>
      <p className="mb-2 text-sm text-stone-300">Girl Script Summer of Code | May 2024 - Aug 2024 | Remote</p>
      <p className="mt-2 text-stone-200 text-sm ">
        Mentored contributors and managed open-source projects by reviewing pull requests, resolving issues, and ensuring timely delivery. Facilitated collaboration among contributors to maintain high-quality code and project progress.
      </p>
    </div>
  </div>
</div>


       {/* AWS AI/ML Scholar Box */}
<div className="m-2 p-4 border border-gray-700 rounded w-full max-w-[300px] flex flex-col items-center">
  {/* AWS Logo */}
  <img 
    src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" 
    alt="AWS Logo" 
    className="w-20 h-20 object-contain mb-4"
  />

  <div className="title flex-grow w-full">
    <div className="p-4 rounded-lg shadow-md h-full flex flex-col justify-between text-center text-gray-300">
      <h3 className="text-white text-lg font-semibold mb-2">
        AWS AI/ML Scholar
      </h3>
      <p className="text-sm text-stone-300 mb-2">Selected through Udacity Challenge | 2024</p>
      <p className="text-sm text-stone-200 mt-2">
        Earned this prestigious scholarship by excelling in the Udacity AI/ML challenge, gaining hands-on experience and advanced knowledge in artificial intelligence and machine learning on AWS.
      </p>
    </div>
  </div>
</div>


         {/* React Developer Box */}
<div className="third m-2 p-4 border border-gray-700 rounded w-full max-w-[300px] flex flex-col">
  <div className="icon flex justify-center items-center mb-4">
    <img
      src="https://media.glassdoor.com/sqll/3650380/the-entrepreneurship-network-squarelogo-1634308249031.png"
      alt="The Entrepreneurship Network Logo"
      className="w-20 h-20 object-contain rounded-full  p-2"
    />
  </div>
  <div className="title flex-grow">
    <div className="ambassador-experience text-gray-300 p-4 max-w-md mx-auto h-full flex flex-col justify-between">
      <h3 className="text-white text-lg font-semibold mb-2">
        React Developer
      </h3>
      <p className="mb-2 text-sm text-stone-300">The Entrepreneurship Network | Jul 2024 - Oct 2024 | New Delhi, India</p>
      <p className="mb-2 text-sm text-stone-300">
        Developed and maintained responsive web applications using React.js, collaborating with cross-functional teams to deliver efficient and scalable frontend solutions.
      </p>
    </div>
  </div>
</div>

        </div>
      </FadeInFromRight>
    </div>
  )
}

export default Experience
