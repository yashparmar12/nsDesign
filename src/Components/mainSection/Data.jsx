import React from 'react'
import "./Data.css";
import cardImage from "./cardImage.jpg"
import iconImage from "./image.png"
import companyImage from "./companyImage.jpg"
import peopleImage from "./people.jpg"
import facebook from "./facebook.png"
import twitter from "./twitter.png"
import linkedin from "./linkedin.png"
import instagram from "./instagram.png"

const Data = () => {
  return (
    <div>
        <div className='content'>
            <div className='explore'>
               <h4>Explore Your Future With</h4>
            </div>
            <div className='heading'>
               <h1>NetWorkStranger</h1>
            </div>
            <div className='paragraph'>
                <p>We believe in the power of connection and the ultimate potential they hold. As we continue to redefine</p>
                <p>the future of professional networking, we're on the lookout for talented individuals who share our passion</p>           
                <p>for innovation. Explore exciting career opportunities with us, where your skills meet cutting edge</p>
                <p>technology</p>
            </div>
        </div>
        <div className='life'>
            <div className='f'>
                <div className='life-content'>
                   <h2>How is Life at</h2>
                </div>
                <div className='life-content1'>
                    <p className='life-heading'>NetWorkStrangers</p>
                    <p>At NetWorkstarnger, we don't just build connection; we build a culture of excellence. Join a workplace where innovation meets</p>
                    <p>collaboration and every idea has a potencial to make a difference. Discover a vibrant atmoshphere that encourage growth,</p>
                    <p>values diversity, and celebrates success</p>
                    <br/>
                    <p className='life-para'>Here, work isn't just a task; its a journy of explanation, learning and accomplisment, dive into a culture that nature creativity.</p>
                    <p>footers teamwork and empowers you to reach new height. Life at NetWorkStranger is more than a job; its and adventure of endless</p>
                    <p>possibilities</p>
                </div>
            </div>
        </div>

        <div className='cards'>
            <div className='card'>
                <img  alt="card" src={cardImage}/>
            </div>
            <div className='card'>
                <img  alt="card" src={cardImage}/>
            </div>
            <div className='card'>
                <img  alt="card" src={cardImage}/>
            </div>
        </div>
        <div className='dots'>
            <img src={iconImage} alt="dots"  />
        </div>

        <div  className="job-content">
            <h2>Latest Job Openings</h2>
            <p>Start your dream career now. Join our team of professionals</p>
        </div>
  
        <div className="all-box">
            <div className="box">
                <h4>Python Consultant</h4>
                <p className="box-content">Remote (India)</p>
                <p className="box-content">Minimum 5 Years</p>
            </div>
    
            <div className="box">
                <h4>DigitalMarketing</h4>
                <h4 className="card-text">Executive</h4>
                <p className="box-content">Remote (India)</p>
                <p className="box-content">Minimum 3 Years</p>
            </div>
   
            <div className="box">
                <h4>Content Writer</h4>
                <p className="box-content">Remote (India)</p>
                <p className="box-content">Minimum 3Years</p>
            </div>
    
            <div className="box">
                <h4>BD-Lead</h4>
                <p className="box-content">Remote (India)</p>
                <p className="box-content">Minimum 4 Years</p>
            </div>
        </div>
  
        <div className="all-box2">
            <div className="box">
                <h4>UX Designer</h4>
                <p className="box-content">Remote (India)</p>
                <p className="box-content">Minimum 3 Years</p>
            </div>
    
            <div className="box">
                <h4>Sales Manager</h4>
                <p className="box-content">Remote (India)</p>
                <p className="box-content">Minimum 6 Years</p>
            </div>
        </div>

        <div className='companys'>
            <p>Trusted by individuals and terms at the world's boldest companies</p>
            <img src={companyImage} alt="company"  />
            <div className="fade_rule"></div> 
        </div>
        <div className='people'>
            <img src={peopleImage} alt='people'/>
        </div>
    
        <div className="footerAll">
            <div className="footer-content">
                <div className="company-data">
                    <h4 className='gredient-text'>NetWorkStranger</h4>
                    <ul> 
                        <li>Experience geniun connections</li> 
                        <li>tailored to your ambitions.</li>
                        <li>Engage in real, unscripted </li>
                        <li>conversations with industry peers.</li> 
                        <li>Find mentors, collbortors, and</li> 
                        <li>friends who inspire you.</li>
                    </ul>
                    <div className='social-media'>
                       <img src={facebook} alt='social'/>
                       <img src={twitter} alt='social'/>
                       <img src={linkedin} alt='social'/>
                       <img src={instagram} alt='social'/>
                    </div>
                </div>    
    
                <div className="company-data">
                    <h4 className='gredient-text'>About Us</h4>
                    <p>Company Overview</p>
                    <p>Key Feature</p>
                    <p>Our Team</p>
                    <p>Careers</p>
                    <p>Your Guide</p>
                </div>
                <div className="company-data">
                    <h4 className='gredient-text'>Resources</h4>
                    <p>Membership Plans</p>
                    <p>Blogs</p>
                    <p>Latest News</p>
                </div>
    
                <div className="company-data">
                    <h4 className='gredient-text'>Support</h4>
                    <p>FAQ's</p>
                    <p>Contact Us</p>
                </div>
            </div>
      
            <div className="fade_rule"></div>    

            <div className="copyRight">
                <p ><b className="company-name">NetWorkstranger</b>
                Copyright &copy; 2023 All Rights Reserved</p>
                <ul>
                   <li className="company-terms">User Areement</li>
                   <li className="company-terms">Term & Conditions</li>
                   <li className="company-terms">Privacy Policy</li>
                   <li className="company-terms">Community Guidlines</li>
                   <li className="company-terms">CookiePolicy</li>
                   <li className="company-terms">Copyright Policy</li>
                </ul>
            </div>
        
        </div>
    </div>
  )
}

export default Data