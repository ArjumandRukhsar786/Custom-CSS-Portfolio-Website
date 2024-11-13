import "../style/contact.css";

function Contact(){
    return(
        <main className="contact-main">

            <div className="form-container">
                <h1 className="con-title">Contact us</h1>
                <form action="" className="form">
                    <input type="text" placeholder="Enter Your Name" />
                    <input type="email" placeholder="Enter Your abc@gmail.com" />
                    <input className="msg" type="message" placeholder="Enter Your Message" />     
                </form>
                <button className="btn-submit">submit</button>
            </div>
        </main>
    );
}

export default Contact;