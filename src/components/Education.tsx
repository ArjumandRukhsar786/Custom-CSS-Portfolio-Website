import "../style/education.css";

function Education(){
    return(
       <main className="edu-main">
        <div className="edu-text">
        <h1>Education</h1>
        <p>Trusted by Professionals for Exceptional Quality and Service Our clients from various
            industries trust us to deliver top-notch quality and result. Here&apos;s what they have to say
            about our work...
        </p>
        </div>
        {/* box- 1 */}
        <div className="box-con-edu">
            <div>
                <h1 className="uni-name">University of Karachi</h1>
                <span>KU Circular Road, Karachi.</span>
                <button className="btn-edu">2013-2015</button>
            </div>
            <div className="commerce">
                <h1>Bachelor in Commerce</h1>
               <p>
               I have completed my B.Com, where I gained a strong foundation in business, finance, and accounting. This has equipped me with essential analytical and problem-solving skills that I plan to apply in my future career.</p>

            </div>
        </div>
        {/* box- 2 */}
        <div className="box-con-edu">
            <div>
                <h1 className="uni-name">Intermediate</h1>
                <span>Women College Shahrah-e-Faisal, Karachi</span>
                <button className="btn-edu">2010 - 2012</button>

            </div>
            <div className="commerce">
                <h1>Pre-Medical (Science)</h1>
                <p>I am, a premedical student with a strong passion for science and healthcare. I am dedicated to working hard and gaining the knowledge and skills needed to pursue a career in medicine.</p>
        


            </div>
        </div>
        {/* box- 3 */}
        <div className="box-con-edu">
            <div>
                <h1 className="uni-name">GIAIC</h1>
                <span>Governor House</span>
                <button className="btn-edu">2024 - 2025</button>

            </div>
            <div className="commerce">
                <h1>Cloud Applied Generative AI Engineering</h1>
                <p>I am currently pursuing a course in Cloud Applied Generative AI Engineering, where I am exploring the intersection of cloud technologies and AI to create innovative solutions. This program is helping me develop advanced skills in generative AI, cloud infrastructure, and their real-world applications.</p>

            </div>
        </div>

       </main>
    );
}

export default Education;
