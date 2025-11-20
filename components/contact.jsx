export default function Contact (props) {
    return (
        <div id={props.id}>
          <div className="p-10 footer font-mono bg-gray-800 text-neutral-content">
            <div>
            </div>
            <h1 className="mb-5 text-4xl font-light justify-center">
              Project <span className="font-medium">Report</span>
            </h1> 
            <div>
              <span className="footer-title">Download Here</span> 
              <a href="MIS5460_Final_Project_Report.pdf" target="_blank" rel="noopener noreferrer" className="link link-hover">MIS5460_Final_Project_Report.pdf</a> 
              {/* <a href="https://github.com/Nick-Hageman" target="_blank" rel="noopener noreferrer" className="link link-hover">GitHub</a> */}
            </div> 
           {/* <div>
            <span className="footer-title">Email</span> 
            <a href="mailto:lukeauderer@gmail.com"className="link link-hover">lukeauderer@gmail.com</a>
          </div>
          <div>
            <span className="footer-title">Download Here</span> 
            <a href="MIS5460_Final_Project_Report.pdf" target="_blank" rel="noopener noreferrer" className="link link-hover">View Resume</a> 
          </div> */}
      </div>
      </div>    
    )
}