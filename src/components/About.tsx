import Link from "next/link";
import "../style/about.css";
import "../style/hero.css";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


function About(){
    return(
        <div className="header-container">
            <div className="header-boxes-con">
                {/* left */}
                <div>
                <Image src={"/images/about.png"} 
                  width={250}
                  height={250}
                  className="header-image"
                  alt="profile" />
                 <div className="social-icon">

                 <Link href={"https://www.linkedin.com/in/arjumand-rukhsar-0b56332b7/"}><FaLinkedin className="s-icon" /></Link>
                 <Link href={"https://github.com/ArjumandRukhsar786"}> <FaGithub className="s-icon2" /></Link>
                 <Link href={"https://www.instagram.com/"}><FaInstagram className="s-icon3" /></Link>
                 <Link href={"https://www.facebook.com"}><FaFacebook className="s-icon4" /></Link>
                 <Link href={"https://www.youtube.com/"}><FaYoutube className="s-icon5" /></Link>
                 </div>
                  
                </div>
                {/* right */}
                
                <div className="hero-right-div">
                    <h1 className="title-hero">About us  </h1>
                    <p className="des-hero">I am a frontend web developer with a passion for creating
                      interactive and responsive web applications. I have experience
                      working with JavaScript, React, Next.js, Node.js, Bootstrap, Tailwind CSS,
                      TypeScript, HTML, CSS, and Git. I am a quick learner and I am always
                      looking to expand my knowledge and skill set. I am a team player and
                      I am excited to work with others to create amazing applications.</p>
                </div>
              
            </div>
        </div>
    );
}

export default About;