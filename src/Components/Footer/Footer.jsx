import React from 'react';
import './footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="get-in-touch">
                    <h2>GET IN TOUCH</h2>
                    <br/>
                    <p>Address:</p>
                    <p>Manjira Devi Campus</p>
                    <p>Hintanu Dhanari, Uttarkashi</p>
                    <p>Dehradun, Uttarakhand, INDIA</p>
                    <br/>
                    <p>Admissions & Outreach:</p>
                    <p>7017388084</p>
                    <p>9897883455</p>
                    <br/>
                    <p>Email:</p>
                    <p>info@manjiradevi.com</p>
                    <br/>
                    <div className="social-media-icons">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-youtube"></i></a>
                    </div>
                    <br/>
                    <div className="footer-logo">
                    <img src="manjira.png" height ={"100px"} width={"120px"}alt="Manjira Devi University" />
                    <span>Manjira Devi University</span>
                </div>
                </div>
                
                <div className="explore">
                    <h2>EXPLORE</h2>
                    <br/>
                    <a href="#">About Us</a>
                    <a href="#">Placements</a>
                    <a href="#">Alumni</a>
                    <a href="#">Research</a>
                    <a href="#">Leadership</a>
                    <a href="#">Campus Life</a>
                    <a href="#">Privacy-Policy</a>
                    <a href="#">Terms and Condition</a>
                    <a href="#">Refund and Cancellation Policy</a>
                    <a href="#">Student Code of Conduct</a>
                    <a href="#">Code of Conduct for Teachers</a>
                    <a href="#">Shodhganga</a>
                    <a href="#">Shodhgangotri</a>
                    <a href="#">e-Samdhaan</a>
                </div>
                <div className="quick-links">
                    <h2>QUICK LINKS</h2>
                    <br/>
                    <a href="#">Vision & Mission</a>
                    <a href="#">Download Brochure</a>
                    <a href="#">Annual Report</a>
                    <a href="#">Internship Registration</a>
                    <a href="#">Alumni Registration</a>
                    <a href="#">About Dehradun</a>
                    <a href="#">News & Events</a>
                    <a href="#">NDLI CLUB</a>
                    <a href="#">Career</a>
                    <a href="#">NIRF</a>
                    <a href="#">Transport</a>
                    <a href="#">Call For Paper</a>
                    <a href="#">UGC Mandatory Disclosure</a>
                </div>
                <div className="schools">
                    <h2>SCHOOLS</h2>
                    <br/>
                    <a href="#">School of Engineering and Computing</a>
                    <a href="#">School of Management & Commerce</a>
                    <a href="#">School of Pharmacy and Research</a>
                    <a href="#">School of Hotel Management & Tourism</a>
                    <a href="#">School of Journalism and Liberal Arts</a>
                    <a href="#">School of Allied Science</a>
                    <a href="#">School of Agriculture</a>
                    <a href="#">School of Architecture, Planning & Design</a>
                    <a href="#">School of Nursing</a>
                    <a href="#">Manjira Devi Medical College of Paramedical Sciences</a>
                    <a href="#">Manjira Devi Medical College of Ayurveda & Hospital</a>
                    <a href="#">Manjira Devi Institute of Polytechnic</a>
                </div>
                <div className="admissions">
                    <h2>ADMISSIONS</h2>
                    <br/>
                    <a href="#">Apply Now</a>
                    <a href="#">Scholarships</a>
                    <a href="#">E-Brochure/Prospectus</a>
                    <a href="#">Admissions Office Contacts</a>
                    <a href="#">FAQ</a>
                <br/>
                    <h2>LOGIN</h2>
                    <br/>
                    <a href="#">Student Corner</a>
                    <a href="#">Employee ERP Login</a>
                    <a href="#">Student ERP Login</a>
                    <a href="#">Faculty Exam Login</a>
                  
                </div>
            </div>
            <div className="footer-bottom">
                
                <div className="footer-copy">
                    <p>&copy; 2024 by Manjira Devi University, All Rights Reserved. </p>
                      <p>Developed by Digital Team, Manjira Devi university.</p>
                   
                </div>
                <div className="footer-admissions">
                    <a href="#">Admissions Open 2024</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
