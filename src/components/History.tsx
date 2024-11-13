import "../style/education.css";

function History(){
    return(
       <main className="edu-main">
        <div className="edu-text">
        <h1>Work History</h1>
        <p>Trusted by Professionals for Exceptional Quality and Service Our clients from various
            industries trust us to deliver top-notch quality and result. Here's what they have to say
            about our work...
        </p>
        </div>
        {/* box- 1 */}
        <div className="box-con-edu">
            <div>
                <h1 className="uni-name"> UBL (United Bank Limited)</h1>
                <span>Marketing Intern</span>
                <button className="btn-edu">January 2018 – June 2019 </button>

            </div>
            <div className="commerce">
                <h1>Marketing team in executing campaigns</h1>
                <p>Conducted market research and data analysis to improve customer engagement.</p>
            </div>
        </div>
        {/* box- 2 */}
        <div className="box-con-edu">
            <div>
                <h1 className="uni-name">Bay View Academy</h1>
                <span>Administrative Assistant</span>
                <button className="btn-edu">March 2021 – December 2021</button>

            </div>
            <div className="commerce">
                <h1>Assisted with event planning and organization </h1>
                <p>Supported administrative tasks, including managing student records and coordinating meetings.</p>
            </div>
        </div>
        {/* box- 3 */}
        <div className="box-con-edu">
            <div>
                <h1 className="uni-name"> Freelance Web Developer</h1>
                <span>Student</span>
                <button className="btn-edu">January 2024 – Present</button>

            </div>
            <div className="commerce">
                <h1>Frontend Web Developer</h1>
               <p>Designed and developed responsive websites using HTML, CSS, Tailwind CSS, and JavaScript to create modern, user-friendly interfaces.</p>
            </div>
        </div>
       </main>
    );
}

export default History;