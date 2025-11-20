export default function About (props) {
    return (
        <div id={props.id} className="bg-sky-white h-auto md:px-24 md:py-12">
          <div className="flex flex-col md:flex-row-reverse">
            <div className="mt-10 mb-5">
              {/* <img src="pfp4.JPG" className="rounded-full scale-75 md:scale-100 shadow-2xl" alt="pfp"/> */}
              {/*<img src="Luke_LinkedIn_Image.png" className="rounded-full scale-100 md:scale-150 shadow-2xl" alt="pfp"/>*/}
            </div>
            <div className="text-gray-800 text-center font-mono px-6 md:text-left">
                <h1 className="mb-5 text-4xl">
                <span className="font-bold">About The Project:</span>
                </h1> 
                <p className="my-5 text-lg lg:pr-24">Our project explores how price trends and news sentiment can be combined to predict short-term 
                  stock performance. Using machine learning and natural language processing, we built forecasting models that analyze both market behavior 
                  and economic tone from Federal Reserve statements. The goal is to help investors make more informed decisions using data-driven predictions.</p>
                {/* <h3 className="mb-2 text-l">
                <span className="font-bold">Languages</span>: Python, Java, C++, C, Swift, JavaScript (React.js, Node.js), HTML/CSS, MATLAB
                </h3>
                <h3 className="mb-2 text-l">
                <span className="font-bold">Tools</span>: Git, Linux, OpenCV, CUDA, PyTorch, TensorFlow, AWS, SQL, Qt, CMake, Gradle, Bazel, Android SDK, Ansible, Docker, Grafana
                </h3>
                <h3 className="mb-2 text-l">
                <span className="font-bold">Competencies</span>: Data Structures, Algorithms, OOP, Embedded Systems(UART, ADC, PWM, CAN), REST APIs, Multithreading, Networking (TCP/IP)
                </h3> */}
                <h3 className="mb-2 text-l">
                <div>
                <span className="font-bold">Objectives</span>:
                <ul className="list-disc list-inside mt-1">
                  <li>Build a clean dataset containing stock prices, returns, volatility, and sentiment features</li>
                  <li>Integrate sentiment extracted with FinBERT from FOMC meeting statements</li>
                  <li>Test multiple forecasting models: ARIMA, Facebook Prophet, and XGBoost</li>
                  <li>Use walk-forward validation to simulate real-world trading conditions</li>
                  <li>Evaluate whether adding sentiment improves prediction accuracy and ranking performance</li>
                </ul>
              </div>
                </h3> 
            </div>
          </div>
        </div>
    )   
}