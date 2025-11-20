export default function Portfolio (props) {
    return (
        <div id={props.id} className="bg-hue-gray text-sky-white font-mono h-auto md:px-24 md:py-12 mb-20">
            <div className="flex flex-col items-center justify-center">
                <h1 data-aos="zoom-out" className="mt-10 mb-8 text-4xl font-medium">
                    Portfolio
                </h1>

                <div className="flex flex-col xl:space-x-5 xl:flex-row">   
                <div className="card w-64 md:w-80 bg-mist-black my-3 shadow-xl">
                        <figure>
                            <video controls autoPlay muted loop>
                                <source src="/farmvisionCropped.mp4" type="video/mp4"/>
                            </video>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                🌽FarmVision
                            </h2>
                            <div className="flex flex-col md:flex-row space-x-2">
                                <a href="https://github.com/Nick-Hageman/FarmVision" target="_blank" rel="noopener noreferrer" className="badge hover:ring"><svg className="h-3 w-3 mr-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#a6adba"><path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"/></svg>Source</a>
                                <a href="https://devpost.com/software/farmvision" target="_blank" rel="noopener noreferrer" className="badge hover:ring"><svg className="h-3 w-3 mr-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#a6adba"><path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"/></svg>DEVPOST</a>
                            </div>
                            <p>Modeled agricultural field data in Virtual Reality by utilizing John Deere Precision Ag APIs. Awarded &quot;Best Data Collection Hack&quot; at HackUIowa 2023.</p>
                            <div className="card-actions justify-end">
                            <div className="badge badge-accent badge-outline">HackUIowa 2023</div>
                            <div className="badge badge-outline">Quest 2</div>
                            <div className="badge badge-outline">Unity</div>
                            <div className="badge badge-outline">C#</div>
                            <div className="badge badge-outline">Python</div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-64 md:w-80 bg-mist-black my-3 shadow-xl">
                        <figure><img src="slopeStatsBanner2.png" alt="FarmVision" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        <img src="slopeStatsAppIcon.png" alt="Farm icon" className="w-6 h-6 mr-0" />
                                        SlopeStats
                                    </h2>
                                    <div className="flex flex-col md:flex-row space-x-2">
                                        <a href="https://github.com/Nick-Hageman/SlopeStats" target="_blank" rel="noopener noreferrer" className="badge hover:ring"><svg className="h-3 w-3 mr-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#a6adba"><path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"/></svg>Source</a>
                                    </div>
                                    <p>🏂 SlopeStats is a watchOS + iOS app which has multiple modes of tracking activity for skiing & snowboarding. It offers run tracking (speed, heart rate, altitude), Speed Mode (Ghost racing), Resort & Weather Info (API)</p>
                                    <div className="card-actions justify-end">
                                    <div className="badge badge-outline">Swift</div>
                                    <div className="badge badge-outline">SwiftUI</div>
                                    <div className="badge badge-outline">Core Data</div>
                                    <div className="badge badge-outline">CoreMotion</div>
                                    <div className="badge badge-outline">HealthKit</div>
                                    </div>
                                </div>
                        </div>
                    <div className="card w-64 md:w-80 bg-mist-black my-3 shadow-xl">
                        <figure><img src="smartDartSketch.png" alt="FarmVision" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                🎯SmartDart
                            </h2>
                            <div className="flex flex-col md:flex-row space-x-2">
                                <a href="https://engineering.uiowa.edu/news-all/2024/11/iowa-engineers-win-39500-iowa-innovation-challenge" target="_blank" rel="noopener noreferrer" className="badge hover:ring"><svg className="h-3 w-3 mr-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#a6adba"><path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"/></svg>Featured Article</a>
                            </div>
                            <p>Secured $5,000 in funding for SmartDart: A computer-vision driven steel-tip dart system that combines accurate, automated scoring with dynamic solo gameplay and real-time feedback.</p>
                            <div className="card-actions justify-end">
                            <div className="badge badge-accent badge-outline">UIowa Innovation Challenge</div>
                            <div className="badge badge-outline">DeepDarts</div>
                            <div className="badge badge-outline">Transfer Learning</div>
                            <div className="badge badge-outline">Python</div>
                            <div className="badge badge-outline">OpenCV</div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-64 md:w-80 bg-mist-black my-3 shadow-xl">
                        <figure><img src="testing.png" alt="FarmVision" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                <img src="nintendo.PNG" alt="Farm icon" className="w-20 h-18 mr-0" />
                            </h2>
                            <div className="flex flex-col md:flex-row space-x-2">
                                <a href="https://github.com/Nick-Hageman/LeetGPT" target="_blank" rel="noopener noreferrer" className="badge hover:ring"><svg className="h-3 w-3 mr-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#a6adba"><path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"/></svg>Source</a>
                            </div>
                            <p>My Magnum Opus. Developed a high-performance Game Boy Advance emulator in C++, implementing core hardware components, optimizing CPU execution, and integrating SDL2 for cross-platform support.</p>
                            <div className="card-actions justify-end">
                            <div className="badge badge-outline">C++</div>
                            <div className="badge badge-outline">Hardware Emulation</div>
                            <div className="badge badge-outline">Embedded System Architecture</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col xl:space-x-5 xl:flex-row">                    
                <div className="card w-64 md:w-80 bg-mist-black my-3 shadow-xl">
                        <figure><img src="thermometer.jpeg" alt="IoT Thermometer" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                🌡️IoT Thermometer
                            </h2>
                            <div className="flex flex-col md:flex-row space-x-2">
                                <a href="/ECE4880_Thermometer.pdf" target="_blank" rel="noopener noreferrer" className="badge hover:ring"><svg className="h-3 w-3 mr-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#a6adba"><path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"/></svg>Lab Report</a>
                            </div>
                            <p>Created an IoT thermometer that communicates with a web server to provide the user with temperature values no later than 300 seconds ago. Withstanded water and drop tests. Conformed to strict design requirements.</p>
                            <div className="card-actions justify-end">
                            <div className="badge badge-accent badge-outline">ECE:4880 Senior Design</div>
                            <div className="badge badge-outline">Python</div>
                            <div className="badge badge-outline">Serial Communication</div>
                            <div className="badge badge-outline">Arduino</div>
                            <div className="badge badge-outline">JavaScript</div>
                            </div>
                        </div>
                    </div>

                    <div className="card w-64 md:w-80 bg-mist-black my-3 shadow-xl">
                        <figure>
                            <video width="750" height="500" controls autoPlay muted loop>
                                <source src="/leetGPTDemo.mp4" type="video/mp4"/>
                            </video>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                🧠LeetGPT
                            </h2>
                            <div className="flex flex-col md:flex-row space-x-2">
                                <a href="https://github.com/Nick-Hageman/LeetGPT" target="_blank" rel="noopener noreferrer" className="badge hover:ring"><svg className="h-3 w-3 mr-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#a6adba"><path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"/></svg>Source</a>
                            </div>
                            <p>Developed a Chrome extension tool that provides LeetCode users with solutions to coding problems. Leveraged OpenAI&apos;s ChatGPT Language Model API for generative solutions.</p>
                            <div className="card-actions justify-end">
                            <div className="badge badge-outline">OpenAI</div>
                            <div className="badge badge-outline">React</div>
                            <div className="badge badge-outline">Javascript</div>
                            <div className="badge badge-outline">JSX</div>
                            <div className="badge badge-outline">Chromium</div>
                            </div>
                        </div>
                    </div>

                    <div className="card w-64 md:w-80 bg-mist-black my-3 shadow-xl">
                                    <figure>
                                        <video width="750" height="500" controls autoPlay muted loop>
                                            <source src="/HHOMES_DEMO.mp4" type="video/mp4"/>
                                        </video>
                                    </figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        🏡Real Estate Business Web Application
                                    </h2>
                                    <div className="flex flex-col md:flex-row space-x-2">
                                        <a href="https://github.com/Nick-Hageman/Real-Estate-Webapp-2023" target="_blank" rel="noopener noreferrer" className="badge hover:ring"><svg className="h-3 w-3 mr-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#a6adba"><path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"/></svg>Source</a>
                                    </div>
                                    <p>Developed a web application for home builder&apos;s business. Implemented an interactive satellite map, 3D CAD Floorplans, and a Content Management Service (CMS).</p>
                                    <div className="card-actions justify-end">
                                    <div className="badge badge-outline">Node.js</div>
                                    <div className="badge badge-outline">Javascript</div>
                                    <div className="badge badge-outline">Three.js</div>
                                    <div className="badge badge-outline">Docker</div>
                                    <div className="badge badge-outline">AWS</div>
                                    </div>
                                </div>
                        </div>
                    <div className="card w-64 md:w-80 bg-mist-black my-3 shadow-xl">
                            <video width="750" height="500" controls autoPlay muted loop>
                                <source src="/holokinectDemo.mp4" type="video/mp4"/>
                            </video>
                        <div className="card-body">
                            <h2 className="card-title">
                                <img src="visionPro.png" alt="Vision Pro" className="w-7 h-7" />
                                HoloKinect
                            </h2>
                            <p>Developed a visionOS UI for a 3D telepresence application. Future work (Fall 2024) will include encoding and transmitting 3D depth & color information by leveraging 2D image compression.</p>
                            <div className="card-actions justify-end">
                            <div className="badge badge-accent badge-outline">Holo Reality Lab</div>
                            <div className="badge badge-outline">Swift</div>
                            <div className="badge badge-outline">visionOS</div>
                            <div className="badge badge-outline">Xcode</div>
                            <div className="badge badge-outline">LiveKit</div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="card w-64 md:w-80 bg-mist-black my-3 shadow-xl">
                    <figure><img src="grafanaScreenshot.png" alt="MQTT dashboard" /></figure>
                    <div className="card-body">
                            <h2 className="card-title">
                                📈MQTT time-series data dashboard
                            </h2>
                            <p>Implemented practical application of the Message Queuing Telemetry Transport (MQTT) protocol, specifically using a Raspberry Pi to collect, store, and visualize time-series data.</p>
                            <div className="card-actions justify-end">
                            <div className="badge badge-accent badge-outline">ECE:5550 IoT</div>
                            <div className="badge badge-outline">JavaScript</div>
                            <div className="badge badge-outline">Grafana</div>
                            <div className="badge badge-outline">MQTT</div>
                            <div className="badge badge-outline">InfluxDB</div>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className="flex flex-col xl:space-x-5 xl:flex-row">
                <div className="card w-64 md:w-80 bg-mist-black my-3 shadow-xl">
                        <figure><img src="slide6.PNG" alt="Neural RGB-D Encoding" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                🧠Neural RGB-D Encoding
                            </h2>
                            <div className="flex flex-col md:flex-row space-x-2">
                                <a href="https://github.com/Nick-Hageman/Neural-RGBD-Encoding" target="_blank" rel="noopener noreferrer" className="badge hover:ring"><svg className="h-3 w-3 mr-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#a6adba"><path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"/></svg>Source</a>
                                <a href="/AML_Phase1.pdf" target="_blank" rel="noopener noreferrer" className="badge hover:ring"><svg className="h-3 w-3 mr-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#a6adba"><path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"/></svg>Report</a>
                            </div>
                            <p>Transmitting 3D data can be expensive, especially on hardware limited devices. Our approach to this problem was to create an end-to-end neural network sandwiched around an image codec for our encoding scheme.</p>
                            <div className="card-actions justify-end">
                            <div className="badge badge-accent badge-outline">ECE:5995 Applied ML</div>
                            <div className="badge badge-outline">PyTorch</div>
                            <div className="badge badge-outline">Python</div>
                            <div className="badge badge-outline">Pandas</div>
                            <div className="badge badge-outline">Numpy</div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-64 md:w-80 bg-mist-black my-3 shadow-xl">
                                    <figure>
                                        <video width="750" height="500" controls autoPlay muted loop>
                                            <source src="/CageVision.mp4" type="video/mp4"/>
                                        </video>
                                    </figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        <img src="ufc.PNG" alt="clustering" className="w-10 h-4" />
                                        CageVision
                                    </h2>
                                    <div className="flex flex-col md:flex-row space-x-2">
                                        <a href="https://github.com/Nick-Hageman/CageVision" target="_blank" rel="noopener noreferrer" className="badge hover:ring"><svg className="h-3 w-3 mr-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#a6adba"><path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"/></svg>Source</a>
                                    </div>
                                    <p>Created a spatial application which utilized an MMA API to gather upcoming event information to be displayed in a visionOS window. Conceptualized viewing MMA matches in augmented reality by introducing a 3D model of an octagon placed on a flat surface.</p>
                                    <div className="card-actions justify-end">
                                    <div className="badge badge-outline">Swift</div>
                                    <div className="badge badge-outline">visionOS</div>
                                    <div className="badge badge-outline">Xcode</div>
                                    <div className="badge badge-outline">RealityKit</div>
                                    </div>
                                </div>
                        </div>
                    <div className="card w-64 md:w-80 bg-mist-black my-3 shadow-xl">
                        <figure>
                            <video width="750" height="500" controls autoPlay muted loop>
                                <source src="/pacmanClipped.mp4" type="video/mp4"/>
                            </video>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                <img src="ghosts.webp" alt="Farm icon" className="w-7 h-7" />
                                Handheld Retro Game Controller
                            </h2>
                            <div className="flex flex-col md:flex-row space-x-2">
                                <a href="https://github.com/Nick-Hageman/ECE-3360-Embedded-Systems" target="_blank" rel="noopener noreferrer" className="badge hover:ring"><svg className="h-3 w-3 mr-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#a6adba"><path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"/></svg>Source</a>
                                <a href="/embeddedTermProject.PNG" target="_blank" rel="noopener noreferrer" className="badge hover:ring"><svg className="h-3 w-3 mr-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#a6adba"><path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"/></svg>Report</a>
                            </div>
                            <p>Designed and constructed a handheld gaming device leveraging the capabilities of the ESP8266 module and a Raspberry Pi. The choice of game for our device was Pac-Man, a classic arcade game known for its straightforward yet challenging gameplay.</p>
                            <div className="card-actions justify-end">
                            <div className="badge badge-accent badge-outline">ECE:3360 Embedded Systems</div>
                            <div className="badge badge-outline">Arduino</div> 
                            <div className="badge badge-outline">C++</div>
                            <div className="badge badge-outline">websockets</div>
                            <div className="badge badge-outline">Raspberry Pi</div>
                            <div className="badge badge-outline">Javascript</div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-64 md:w-80 bg-mist-black my-3 shadow-xl">
                        <figure><img src="slide1.PNG" alt="RGB-D Unsupervised Clustering" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                🧠Unsupervised RGB-D Scene Categorization
                            </h2>
                            <div className="flex flex-col md:flex-row space-x-2">
                                <a href="https://github.com/Nick-Hageman/RGBD-Unsupervised-Clustering" target="_blank" rel="noopener noreferrer" className="badge hover:ring"><svg className="h-3 w-3 mr-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#a6adba"><path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"/></svg>Source</a>
                                <a href="/AML_Phase2.pdf" target="_blank" rel="noopener noreferrer" className="badge hover:ring"><svg className="h-3 w-3 mr-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#a6adba"><path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"/></svg>Report</a>
                            </div>
                            <p> Clustered scenes from a short film using RGB-D data. Included the depth information for clustering as we thought it may enhance the scene representation in regards to spatial relationships.</p>
                            <div className="card-actions justify-end">
                            <div className="badge badge-accent badge-outline">ECE:5995 Applied ML</div>
                            <div className="badge badge-outline">PyTorch</div>
                            <div className="badge badge-outline">Python</div> 
                            <div className="badge badge-outline">Pandas</div>
                            <div className="badge badge-outline">Numpy</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col xl:space-x-5 xl:flex-row">
                <div className="card w-64 md:w-80 bg-mist-black my-3 shadow-xl">
                        <figure>
                            <video width="750" height="500" controls autoPlay muted loop>
                                <source src="/seltClipped.mp4" type="video/mp4"/>
                            </video>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                💎Shards of the Grid
                            </h2>
                            <div className="flex flex-col md:flex-row space-x-2">
                                <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="badge hover:ring"><svg className="h-3 w-3 mr-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#a6adba"><path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"/></svg>Source</a>
                            </div>
                            <p>Our team developed a multiplayer game with Generative AI components in the form of a SaaS application. I was one of the two students that received an A+ in the class.</p>
                            <div className="card-actions justify-end">
                            <div className="badge badge-accent badge-outline">ECE:5820: SELT</div>
                            <div className="badge badge-outline">Ruby</div>
                            <div className="badge badge-outline">OpenAI API</div>
                            <div className="badge badge-outline">HTML</div>
                            <div className="badge badge-outline">CSS</div>
                            </div>
                        </div>
                    </div>

                    <div className="card w-64 md:w-80 bg-mist-black my-3 shadow-xl">
                        <figure>
                            <video width="750" height="500" controls autoPlay muted loop>
                                <source src="/drivesenseClipped.mp4" type="video/mp4"/>
                            </video>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                🚗DriveSense
                            </h2>
                            <div className="flex flex-col md:flex-row space-x-2">
                                <a href="https://github.com/Nick-Hageman/ECE-3360-Embedded-Systems" target="_blank" rel="noopener noreferrer" className="badge hover:ring"><svg className="h-3 w-3 mr-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#a6adba"><path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"/></svg>Source</a>
                            </div>
                            <p>We utilized computer vision to monitor and record driver distractedness. We used a Raspberry Pi and Teachable Machine for our machine learning model. We also constructed a React dashboard application for data visualization.</p>
                            <div className="card-actions justify-end">
                            <div className="badge badge-accent badge-outline">ECE:5550: Internet of Things</div>
                            <div className="badge badge-outline">Python</div>
                            <div className="badge badge-outline">OpenCV</div>
                            <div className="badge badge-outline">Firebase</div>
                            <div className="badge badge-outline">Javascript</div>
                            </div>
                        </div>
                    </div>

                    <div className="card w-64 md:w-80 bg-mist-black my-3 shadow-xl">
                        <figure><img src="youtube.PNG" alt="RGB-D Unsupervised Clustering" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                💬YouTube Comment sentiment analysis
                            </h2>
                            <div className="flex flex-col md:flex-row space-x-2">
                                <a href="https://github.com/Nick-Hageman/RGBD-Unsupervised-Clustering" target="_blank" rel="noopener noreferrer" className="badge hover:ring"><svg className="h-3 w-3 mr-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#a6adba"><path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"/></svg>Source</a>
                                <a href="/LLM_project1.pdf" target="_blank" rel="noopener noreferrer" className="badge hover:ring"><svg className="h-3 w-3 mr-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#a6adba"><path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"/></svg>Phase 1</a>
                            </div>
                            <p> Clustered scenes from a short film using RGB-D data. Included the depth information for clustering as we thought it may enhance the scene representation in regards to spatial relationships.</p>
                            <div className="card-actions justify-end">
                            <div className="badge badge-accent badge-outline">ECE:5995 Large Language Models</div>
                            <div className="badge badge-outline">Python</div>
                            <div className="badge badge-outline">NLP</div>
                            <div className="badge badge-outline">BERT</div>
                            <div className="badge badge-outline">LSTM</div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-64 md:w-80 bg-mist-black my-3 shadow-xl">
                        <figure>
                            <video width="750" height="500" controls autoPlay muted loop>
                                <source src="/werewolvesClipped.mp4" type="video/mp4"/>
                            </video>
                        </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            🐺Werewolves
                        </h2>
                        <div className="flex flex-col md:flex-row space-x-2">
                            <a href="https://github.com/Nick-Hageman/CageVision" target="_blank" rel="noopener noreferrer" className="badge hover:ring"><svg className="h-3 w-3 mr-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#a6adba"><path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"/></svg>Source</a>
                        </div>
                        <p>Created a multiplayer game in purely Java. Inolved multithreading, networking, and database management. Was chosen as a top team to present to the class.</p>
                        <div className="card-actions justify-end">
                        <div className="badge badge-accent badge-outline">ECE:3330: Software Design</div>
                        <div className="badge badge-outline">Java</div>
                        <div className="badge badge-outline">SQL</div>
                        </div>
                    </div>
                    </div>
                </div>

                    <div className="flex flex-col lg:space-x-5 lg:flex-row">
                    <div className="card w-64 md:w-80 bg-mist-black my-3 shadow-xl">
                        <figure>
                            <video width="750" height="500" controls autoPlay muted loop>
                                <source src="/HawkTalk.mp4" type="video/mp4"/>
                            </video>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                🐥Hawk Talk
                            </h2>
                            <div className="flex flex-col md:flex-row space-x-2">
                                <a href="https://github.com/Nick-Hageman/Desktop-Native-Chat-Application" target="_blank" rel="noopener noreferrer" className="badge hover:ring"><svg className="h-3 w-3 mr-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#a6adba"><path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"/></svg>Source</a>
                            </div>
                            <p>Created a desktop native chat application to familiarize myself with React for my incoming internship @ John Deere. Utilized websockets for bidirectional and low-latency communication.</p>
                            <div className="card-actions justify-end">
                            <div className="badge badge-outline">React</div>
                            <div className="badge badge-outline">JSX</div>
                            <div className="badge badge-outline">electron.js</div> 
                            <div className="badge badge-outline">MongoDB</div>
                            <div className="badge badge-outline">socket.io</div>
                            </div>
                        </div>
                    </div>
                    <div className="card w-64 md:w-80 bg-mist-black my-3 shadow-xl">
                                <figure>
                                    <video width="750" height="500" controls autoPlay muted loop>
                                        <source src="/VarFinalDemo.mp4" type="video/mp4"/>
                                    </video>
                                </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    <img src="meta.PNG" alt="Farm icon" className="w-5 h-4" />
                                    The Gauntlet
                                </h2>
                                <p>Created a multi-stage game comprised of various challenges for our Virtual & Augmented Reality final project. Some of the challenges explored the mechanics of zero gravity, propulsion, enemy collision detection, animations, and AI navigation.</p>
                                <div className="card-actions justify-end">
                                <div className="badge badge-accent badge-outline">ECE:5995 VAR</div>
                                <div className="badge badge-outline">Unity</div>
                                <div className="badge badge-outline">C#</div>
                                </div>
                            </div>
                    </div>
                    <div className="card w-64 md:w-80 bg-mist-black my-3 shadow-xl">
                        <figure>
                            <video width="750" height="500" controls autoPlay muted loop>
                                <source src="/Asteroids_Demo.mp4" type="video/mp4"/>
                            </video>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                👽ENGR:2730 Computers in Engineering
                            </h2>
                            <div className="flex flex-col md:flex-row space-x-2">
                                <a href="https://github.com/Nick-Hageman/ENGR-2730-Computers-in-Engineering/tree/main/Asteroids" target="_blank" rel="noopener noreferrer" className="badge hover:ring"><svg className="h-3 w-3 mr-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#a6adba"><path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"/></svg>Source</a>
                            </div>
                            <p>Added features to &quot;Asteroids&quot; using topics including: OOP, dynamic memory allocation, SFML library, composition, inheritance, and polymorphism.</p>
                            <div className="card-actions justify-end">
                            <div className="badge badge-accent badge-outline">Teaching Assistant</div>
                            <div className="badge badge-outline">C++</div> 
                            <div className="badge badge-outline">SFML</div> 
                            <div className="badge badge-outline">CMake</div> 
                            </div>
                        </div>
                    </div>
                    <div className="card w-64 md:w-80 bg-mist-black my-3 shadow-xl">
                        <figure><img src="bioneos.PNG" alt="Pynq" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                🌿Plant Hydration Monitor 
                            </h2>
                            <div className="flex flex-col md:flex-row space-x-2">
                                <a href="https://github.com/Nick-Hageman/plant-hydration-monitor" target="_blank" rel="noopener noreferrer" className="badge hover:ring"><svg className="h-3 w-3 mr-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#a6adba"><path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"/></svg>Source</a>
                            </div>
                            <p>Developed an IoT web application to monitor soil moisture levels in real time. Created RESTful APIs to receive and handle sensor data from a microcontroller.</p>
                            <div className="card-actions justify-end">
                            <div className="badge badge-accent badge-outline">Bio::Neos Internship</div>
                            <div className="badge badge-outline">Arduino</div>
                            <div className="badge badge-outline">REST API</div>
                            <div className="badge badge-outline">SQLite</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-center items-center my-8">
                {/* <p className="text-center text-xl md:text-2xl">
                    "What I cannot create, I do not understand"
                </p> */}
                </div>
            </div>
      </div>
    )
}