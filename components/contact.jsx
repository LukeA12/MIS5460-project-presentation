export default function Contact (props) {
    return (
        <div id={props.id}>
          <div className="p-10 footer font-mono bg-gray-800 text-neutral-content">
            <div>
            </div>
            <h1 className="mb-5 text-4xl font-light justify-center">
              Contact <span className="font-medium">Me</span>
            </h1> 
            <div>
              <span className="footer-title">Socials</span> 
              <a href="https://www.linkedin.com/in/luke-auderer" target="_blank" rel="noopener noreferrer" className="link link-hover">LinkedIn</a>
              {/* <a href="https://github.com/Nick-Hageman" target="_blank" rel="noopener noreferrer" className="link link-hover">GitHub</a> */}
            </div> 
           <div>
            <span className="footer-title">Email</span> 
            <a href="mailto:lukeauderer@gmail.com"className="link link-hover">lukeauderer@gmail.com</a>
          </div>
          <div>
            <span className="footer-title">Resume</span> 
            <a href="LukeAudererResume.pdf" target="_blank" rel="noopener noreferrer" className="link link-hover">View Resume</a> 
          </div>
      </div>
      </div>    
    )
}