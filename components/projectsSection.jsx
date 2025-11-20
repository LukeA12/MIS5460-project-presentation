import { useState, useEffect } from 'react';

const ProjectCard = ({ title, icon, description, mediaItems, sourceLink, devpostLink, articleLink, labReportLink, badges }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstItem = currentIndex === 0;
    const newIndex = isFirstItem ? mediaItems.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastItem = currentIndex === mediaItems.length - 1;
    const newIndex = isLastItem ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Auto-play videos when they become active in the carousel
  useEffect(() => {
    const currentMedia = mediaItems[currentIndex];
    if (currentMedia.type === 'video') {
      const videoElement = document.getElementById(`video-${title}-${currentIndex}`);
      if (videoElement) {
        videoElement.play().catch(error => {
          console.error('Failed to autoplay video:', error);
        });
      }
    }
  }, [currentIndex, mediaItems, title]);

  // Render the current media item (image or video)
  const renderMedia = () => {
    const currentMedia = mediaItems[currentIndex];
    
    if (currentMedia.type === 'video') {
      return (
        <video 
          key={currentMedia.src}
          id={`video-${title}-${currentIndex}`}
          controls 
          autoPlay 
          muted 
          loop
          className="w-full max-h-[60vh] md:h-[600px] object-contain mx-auto"
        >
          <source src={currentMedia.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    } else {
      return (
        <img 
          src={currentMedia.src} 
          alt={`${title} - ${currentIndex + 1}`}
          className="w-full max-h-[60vh] md:h-[600px] object-contain mx-auto" 
        />
      );
    }
  };

  return (
    <div className="card w-full md:w-[80rem] bg-mist-black my-3 shadow-xl flex flex-col min-h-[36rem] md:min-h-[38rem]">
      <figure className="relative overflow-hidden">
        {/* Only show navigation if there's more than one media item */}
        {mediaItems.length > 1 && (
          <>
            {/* Left Arrow */}
            <button 
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-r-lg z-10"
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right Arrow */}
            <button 
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-l-lg z-10"
              aria-label="Next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Media Display */}
        {renderMedia()}

        {/* Pagination Dots - only show if more than one media item */}
        {mediaItems.length > 1 && (
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
            {mediaItems.map((_, index) => (
              <button 
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-400'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </figure>

      <div className="card-body">
        <h2 className="card-title">
          {icon && typeof icon === 'string' ? (
            <span className="mr-1">{icon}</span>
          ) : icon}
          {title}
        </h2>
        
        <div className="flex flex-col md:flex-row space-x-2">
          {sourceLink && (
            <a href={sourceLink} target="_blank" rel="noopener noreferrer" className="badge hover:ring">
              <svg className="h-3 w-3 mr-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#a6adba">
                <path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"/>
              </svg>
              Source
            </a>
          )}
          
          {devpostLink && (
            <a href={devpostLink} target="_blank" rel="noopener noreferrer" className="badge hover:ring">
              <svg className="h-3 w-3 mr-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#a6adba">
                <path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"/>
              </svg>
              DEVPOST
            </a>
          )}

          {articleLink && (
            <a href={articleLink} target="_blank" rel="noopener noreferrer" className="badge hover:ring">
              <svg className="h-3 w-3 mr-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#a6adba">
                <path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"/>
              </svg>
              Featured Article
            </a>
          )}

          {labReportLink && (
            <a href={labReportLink} target="_blank" rel="noopener noreferrer" className="badge hover:ring">
              <svg className="h-3 w-3 mr-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#a6adba">
                <path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"/>
              </svg>
              Lab Report
            </a>
          )}
        </div>
        
        <div className="space-y-2">
          {description.map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </div>
        
        <div className="card-actions justify-end">
          {badges && badges.map((badge, index) => (
            <div key={index} className={`badge ${badge.accent ? 'badge-accent badge-outline' : 'badge-outline'}`}>
              {badge.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main component with projects section
const ProjectsSection = () => {
  // Define all projects data
  const projectsData = [
    {
      title: "SpaceX",
      //icon: <img src="spacex.svg" className="w-24 h-22 mr-0" />,
      description: [
        "Software Engineering Intern – Starlink Product Engineering",
        "Contributed to the core systems enabling seamless communication between Starlink’s constellation of 8,000+ low Earth orbit satellites and millions of user terminals worldwide.",
        "Designed and deployed fleet-wide telemetry to diagnose performance issues and improve network reliability at scale."
      ],
      mediaItems: [
        { type: 'image', src: 'Starlink.png' }
      ],
      //articleLink: "https://engineering.uiowa.edu/news-all/2024/11/iowa-engineers-win-39500-iowa-innovation-challenge",
      //sourceLink: "https://github.com/Nick-Hageman/SmartDart",
      badges: [
        { text: "Python", accent: false },
        { text: "C++", accent: false },
        { text: "Linux", accent: false },
        { text: "AWS", accent: false },
        { text: "Bazel", accent: false },
        { text: "Docker", accent: false },
        { text: "Ansible", accent: false },
        { text: "Grafana", accent: false },
        { text: "Networking (TCP/IP)", accent: false },
      ]
    },
    {
      title: "John Deere",
      //icon: <img src="SlopeStats/slopeStatsAppIcon.png" alt="SlopeStats icon" className="w-6 h-6 mr-0" />,
      description: [
        "Machine Learning and Robotics Engineer (full-year intern) - John Deere See and Spray",
        "Supported two machine learning and robotics projects: See and Spray and FurrowVision.",
        "See and Spray uses computer vision and machine learning to detect and selectively spray weeds in real time, reducing herbicide usage."
      ],
      mediaItems: [
        { type: 'image', src: 'JohnDeereSeeAndSpray.png' },
      ],
      sourceLink: "https://www.youtube.com/watch?v=bEbjcqIuvi0",
      badges: [
        { text: "Python" },
        { text: "PyTorch" },
        { text: "C++" },
        { text: "CUDA" },
        { text: "OpenCV" },
        { text: "Linux" },
        { text: "CMake" },
        { text: "Docker" },
        { text: "Jenkins" }
      ]
    },
    {
      title: "John Deere",
      //icon: <img src="SlopeStats/slopeStatsAppIcon.png" alt="SlopeStats icon" className="w-6 h-6 mr-0" />,
      description: [
        "Machine Learning and Robotics Engineer (full-year intern) - John Deere FurrowVision",
        "FurrowVision collects images and measures depth, optimizing seed placement to avoid obstructions."
      ],
      mediaItems: [
        { type: 'image', src: 'JohnDeereFurrowVision.png' },
      ],
      //sourceLink: "https://www.youtube.com/watch?v=bEbjcqIuvi0",
      badges: [
        { text: "Python" },
        { text: "PyTorch" },
        { text: "C++" },
        { text: "CUDA" },
        { text: "OpenCV" },
        { text: "Linux" },
        { text: "CMake" },
        { text: "Docker" },
        { text: "Jenkins" }
      ]
    },
    {
      title: "John Deere",
      //icon: <img src="SlopeStats/slopeStatsAppIcon.png" alt="SlopeStats icon" className="w-6 h-6 mr-0" />,
      description: [
        "Embedded Software Engineer (full-year intern) - John Deere Sprayers",
        "Developed embedded software for John Deere sprayers to enable real-time communication between vehicle subsystems over the CAN bus.",
        "Designed and implemented new user interface layouts in a Qt-based GUI for the in-cab display used in John Deere products.",
      ],
      mediaItems: [
        { type: 'image', src: 'JohnDeereEmbedded.png' },
      ],
      //sourceLink: "https://www.youtube.com/watch?v=bEbjcqIuvi0",
      badges: [
        { text: "C" },
        { text: "C++" },
        { text: "MATLAB" },
        { text: "Qt" },
        { text: "CMake" },
        { text: "Embedded Systems" },
        { text: "CAN" }
      ]
    },
    {
      title: "Iowa State Industrial and Systems Engineering Department",
      //icon: <img src="SlopeStats/slopeStatsAppIcon.png" alt="SlopeStats icon" className="w-6 h-6 mr-0" />,
      description: [
        "Research Assistant - Project Lead",
        "Researching under Dr. Frank Peters and leading a project to develop a low cost structured-light 3D scanner.",
        "Built a prototype scanner with a scan accuracy within 4% of high-end models costing over $20,000, using only $2,000 of components.",
      ],
      mediaItems: [
        { type: 'image', src: 'ScannerFirstIteration.png' },
        { type: 'image', src: 'ScannerSecondIteration.png' },
        { type: 'image', src: 'ScanningCapability.png' },
      ],
      //sourceLink: "https://www.youtube.com/watch?v=bEbjcqIuvi0",
      badges: [
        { text: "C++" },
        { text: "OpenCV" },
        { text: "CMake" },
        { text: "Onshape" },
        { text: "3D Printing" },
        { text: "ESP32" },
      ]
    },
    {
      title: "FIRST Robotics",
      //icon: <img src="SlopeStats/slopeStatsAppIcon.png" alt="SlopeStats icon" className="w-6 h-6 mr-0" />,
      description: [
        "Programming team, Mechanical Design team, Current Coach",
        "Built a swerve drivetrain for the team robot to improve handling, then integrated an onboard camera system for autonomous navigation.",
        "Returned to my high school team as a volunteer coach to teach engineering concepts to high school students.",
      ],
      mediaItems: [
        { type: 'image', src: 'robot3.jpg' },
        { type: 'image', src: 'robot2.jpg' },
        { type: 'image', src: 'robot1.png' },
        { type: 'image', src: 'Robotics1.png' },
        { type: 'image', src: 'Robotics2.png' },
        { type: 'image', src: 'Robotics3.png' },
      ],
      sourceLink: "https://team4646.org/",
      badges: [
        { text: "C++" },
        { text: "Java" },
        { text: "OpenCV" },
        { text: "Creo" },
        { text: "Onshape" },
        { text: "3D Printing" },
        { text: "ESP32" },
      ]
    },
    {
      title: "MIPS Processor Designs in VHDL",
      //icon: <img src="SlopeStats/slopeStatsAppIcon.png" alt="SlopeStats icon" className="w-6 h-6 mr-0" />,
      description: [
        "Designed and implemented a single-cycle processor, a software-scheduled pipelined processor, and a hardware-scheduled pipelined processor in VHDL.",
        "Tested all processors on an FPGA board, ensuring correct functionality across the full MIPS instruction set.",
        "Validated performance using custom assembly programs including bubble sort, merge sort, binary search, and a Fibonacci sequence generator."
      ],
      mediaItems: [
        { type: 'video', src: 'MIPS_Processor.mp4' },
      ],
      //sourceLink: "https://www.youtube.com/watch?v=bEbjcqIuvi0",
      badges: [
        { text: "VHDL" },
        { text: "Assembly" },
        { text: "ModelSim-Intel FPGA Software Suite" },
        { text: "Python" },
        { text: "Linux" },
      ]
    },
    {
      title: "TradeLens: Stock Investing Platform",
      description: [
        "Built a full-stack stock analytics platform using a React + TypeScript frontend, Flask API layer, and a Django/PostgreSQL backend.",
        "Integrated Alpha Vantage to pull real-time and historical stock data, storing and organizing it in a scalable relational database.",
        "Used Facebook Prophet to generate short and long term stock price forecasts, enabling users to compare predicted vs. actual returns.",
        "Added a portfolio management feature allowing users to create portfolios, track their holdings, and monitor performance over time.",
      ],
      mediaItems: [
        { type: 'video', src: 'tradelens.mp4' },
      ],
      badges: [
        { text: "React" },
        { text: "TypeScript" },
        { text: "Flask" },
        { text: "Django" },
        { text: "PostgreSQL" },
        { text: "Alpha Vantage API" },
        { text: "Facebook Prophet" },
        { text: "Machine Learning" }
      ]
    },
    {
      title: "ScholarSave: Student Financial App",
      //icon: <img src="SlopeStats/slopeStatsAppIcon.png" alt="SlopeStats icon" className="w-6 h-6 mr-0" />,
      description: [
        "Created an Android app to help students find scholarships, manage their money, and track their expenses.",
        "The app incorporates personalized behavioral nudges to encourage smarter spending and saving habits.",
        "Integrated real-time market data with user-friendly, gamified features to keep users engaged.",
        "Presented ScholarSave to multiple high school classes across the Des Moines metro area as part of their financial literacy curriculum."
      ],
      mediaItems: [
        { type: 'image', src: 'ScholarSave.png' },
        { type: 'image', src: 'ScholarSaveStocks.png' },
        { type: 'image', src: 'ScholarSaveScholarships.png' },
      ],
      //sourceLink: "https://www.youtube.com/watch?v=bEbjcqIuvi0",
      badges: [
        { text: "Android SDK" },
        { text: "Kotlin" },
        { text: "Gradle" },
        { text: "REST APIs" },
        { text: "AWS" },
        { text: "SQL" },
      ]
    }
  ];

  // Split projects into rows of 4
  const projectRows = [];

  return (
    <div id="projects" className="bg-hue-gray text-sky-white font-mono h-auto md:px-24 md:py-12 mb-20">
      <div className="flex flex-col items-center justify-center">
        <h1 data-aos="zoom-out" className="mt-10 mb-8 text-4xl font-medium">
          Work and Project Experience
        </h1>

        {projectsData.map((project, index) => (
          <div key={index} className="flex justify-center mb-8">
            <ProjectCard {...project} />
          </div>
        ))}
        {/* <p className="text-center text-xl md:text-2xl">
          "What I cannot create, I do not understand"
        </p> */}
      </div>
    </div>
  );
};

export default ProjectsSection;