import "../style/services.css";

import { AiOutlineGlobal } from "react-icons/ai";
import { GiSoundOn } from "react-icons/gi";
import { FaWrench } from "react-icons/fa6";
import { IoLogoSlack } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { FaPalette } from "react-icons/fa";

function Services(){
    return(
        <main className="main">
            <div className="ser-container">
                {/* top div */}
                <div className="top-div-ser">
                    <h2 className="title-ser">My Services</h2>
                    <p className="des-ser">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur temporibus hic illo dicta commodi at! Dolore voluptatum harum ducimus reprehenderit.</p>
                </div>
                {/* bottom div */}
                <div className="boxes-con">
                    {/* div-1 */}
                    <div className="box">
                    <AiOutlineGlobal className="ser-icon"  />
                    <h3>Web Development</h3>
                    <span >Blog, E-commerce</span>
                    </div>
                  {/* div-2 */}
                  <div className="box">
                    <GiSoundOn className="ser-icon" />
                    <h3 >Sound Design</h3>
                    <span >Voice Over, Best Making</span>
                    </div>
                    {/* div-3 */}
                    <div className="box">
                    <FaWrench className="ser-icon" />
                    <h3>Maintenance & Support</h3>
                    <span>Website Maintenance</span>
                    </div>
                    {/* div-4 */}
                    <div className="box">
                    <IoLogoSlack className="ser-icon" />
                    <h3>Logo Design</h3>
                    <span>Blog, E-commerce</span>
                    </div>
                    {/* div-5 */}
                    <div className="box">
                    <FaSearch  className="ser-icon" />
                    <h3>SEO Optimization</h3>
                    <span>Web and Mobile-friendly Design</span>
                    </div>
                    {/* div-6 */}
                    <div className="box">
                    <FaPalette className="ser-icon" />
                    <h3>UI/UX Design</h3>
                    <span>I design beautiful Interfaces</span>
                    </div>

                </div>

            </div>
        </main>
    );
}

export default Services;