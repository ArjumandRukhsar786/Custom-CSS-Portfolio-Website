'use client'
import "../style/hero.css";
import Image from "next/image";
import Typewriter from 'typewriter-effect';

function Hero(){
    return(
        <div className="header-container">
            <div className="header-boxes-con">
                {/* left */}
                <div>
                <Image src={"/images/muskan.png"} 
                  width={200}
                  height={200}
                  className="header-image"
                  alt="profile" />
                </div>
                {/* right */}
                <div className="hero-right-div">
                    <h1 className="title-hero"> 👋 Hi, I am Arjumand Rukhsar </h1>
                     <h1 className="effect">
                    {/* typewriter effect */}
                    <Typewriter
                       options={{
                       strings: ['I am Frontend Web Developer', 'UI/UX Designer'],
                       autoStart: true,
                       loop: true,
                        }}
                      />
                      </h1>
                    <p className="des-hero"> Welcome to my Portfolio I am a frontend web developer with 
                      a passionfor creating interactive and responsive web applications. I have experience
                      working with JavaScript, React, Next.js, Node.js, Bootstrap, Tailwind CSS,
                      TypeScript, HTML, CSS, and Git. I am a quick learner and I am always
                      looking to expand my knowledge and skill set. I am a team player and
                      I am excited to work with others to create amazing applications.</p>
                    <button className="hero-btn">Hire Me</button>
                </div>
              
            </div>
        </div>
    );
}

export default Hero;