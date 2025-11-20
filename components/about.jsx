export default function About (props) {
    return (
        <div id={props.id} className="bg-sky-white h-auto md:px-24 md:py-12">
          <div className="flex flex-col md:flex-row-reverse">
            <div className="mt-10 mb-5">
              {/* <img src="pfp4.JPG" className="rounded-full scale-75 md:scale-100 shadow-2xl" alt="pfp"/> */}
              <img src="Luke_LinkedIn_Image.png" className="rounded-full scale-100 md:scale-150 shadow-2xl" alt="pfp"/>
            </div>
            <div className="text-gray-800 text-center font-mono px-6 md:text-left">
                <h1 className="mb-5 text-4xl">
                About <span className="font-bold">Me</span>
                </h1> 
                <p className="my-5 text-lg lg:pr-24">I&apos;m a Senior majoring in Computer Engineering at Iowa State University, 
                  and I grew up in Ankeny, Iowa. In my free time, I enjoy fishing, working out, and spending time with friends. 
                  I have interned at both John Deere (part-time during the school year and full-time during the summer) and SpaceX, 
                  gaining hands-on experience in embedded systems, software engineering, and machine learning within large-scale 
                  engineering projects. Throughout college, I’ve worked part-time as a year-round intern at John Deere, while also 
                  working as an undergraduate researcher in Iowa State’s Advanced Manufacturing Lab. There, I’m leading a project to 
                  develop a low-cost structured light 3D scanner. You can find more details about my projects and experience below.</p>
                <h3 className="mb-2 text-l">
                <span className="font-bold">Languages</span>: Python, Java, C++, C, Swift, JavaScript (React.js, Node.js), HTML/CSS, MATLAB
                </h3>
                <h3 className="mb-2 text-l">
                <span className="font-bold">Tools</span>: Git, Linux, OpenCV, CUDA, PyTorch, TensorFlow, AWS, SQL, Qt, CMake, Gradle, Bazel, Android SDK, Ansible, Docker, Grafana
                </h3>
                <h3 className="mb-2 text-l">
                <span className="font-bold">Competencies</span>: Data Structures, Algorithms, OOP, Embedded Systems(UART, ADC, PWM, CAN), REST APIs, Multithreading, Networking (TCP/IP)
                </h3>
                <h3 className="mb-2 text-l">
                <div>
                <span className="font-bold">Engineering Experience</span>:
                <ul className="list-disc list-inside mt-1">
                  <li>Software Engineering Intern @ SpaceX</li>
                  <li>Machine Learning and Robotics Engineering Intern @ John Deere</li>
                  <li>Design Engineering Intern @ John Deere</li>
                  <li>Embedded Software Engineering Intern @ John Deere</li>
                  <li>Research Assistant @ Iowa State&apos;s Advanced Manufacturing Lab</li>
                </ul>
              </div>
                </h3> 
            </div>
          </div>
        </div>
    )   
}