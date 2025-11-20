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
      title: "Data Sources",
      //icon: <img src="spacex.svg" className="w-24 h-22 mr-0" />,
      description: [
        "Stock Price Data",
        "- Daily trading data for the 100 stocks in the NASDAQ-100 index",
        "- Includes prices, volumes, dates",
        "FOMC Sentiment Data",
        "- All FOMC post-meeting statements from 2010–2020",
        "- Each sentence labeled with topic, polarity probabilities, and sentiment score",
        "- Aggregated into meeting-level sentiment signals and merged with daily market data",
        "Additional Dataset",
        "- Preliminary models tested on a smaller Dow Jones dataset from Kaggle",
      ],
      mediaItems: [
        { type: 'image', src: 'nasdaq.png' },
        { type: 'image', src: 'FOMC.png' }
      ],
      //articleLink: "https://engineering.uiowa.edu/news-all/2024/11/iowa-engineers-win-39500-iowa-innovation-challenge",
      //sourceLink: "https://github.com/Nick-Hageman/SmartDart",
      badges: [
        // { text: "Python", accent: false },
        // { text: "C++", accent: false },
        // { text: "Linux", accent: false },
        // { text: "AWS", accent: false },
        // { text: "Bazel", accent: false },
        // { text: "Docker", accent: false },
        // { text: "Ansible", accent: false },
        // { text: "Grafana", accent: false },
        // { text: "Networking (TCP/IP)", accent: false },
      ]
    },
    {
      title: "Data Preparation",
      //icon: <img src="SlopeStats/slopeStatsAppIcon.png" alt="SlopeStats icon" className="w-6 h-6 mr-0" />,
      description: [
        "Cleaned and chronologically sorted all stock price series",
        "Forward-filled FOMC sentiment values between meeting dates",
        "Engineered features such as:",
        "- Momentum (1-, 3-, 6-, 12-month returns)",
        "- Volume anomalies",
        "- Moving averages",
        "- Market-relative performance",
      ],
      mediaItems: [
        { type: 'image', src: 'momentum.png' },
      ],
      //sourceLink: "https://www.youtube.com/watch?v=bEbjcqIuvi0",
      badges: [
        // { text: "Python" },
        // { text: "PyTorch" },
        // { text: "C++" },
        // { text: "CUDA" },
        // { text: "OpenCV" },
        // { text: "Linux" },
        // { text: "CMake" },
        // { text: "Docker" },
        // { text: "Jenkins" }
      ]
    },
    {
      title: "Sentiment Analysis",
      //icon: <img src="SlopeStats/slopeStatsAppIcon.png" alt="SlopeStats icon" className="w-6 h-6 mr-0" />,
      description: [
        "We used FinBERT, a financial-domain NLP model, to score the tone of FOMC statements",
        "What We Extracted:",
        "- Probability of positive, neutral, and negative sentiment",
        "- Continuous sentiment score: score = P(pos) - P(neg)",
        "- Topic labels using BERTopic (policy, employment, securities, inflation expectations, etc.)",
        "Key Insight: FOMC sentiment followed major economic events:",
        "- 2010–2014: Strongly negative (post-financial crisis, heavy quantitative easing)",
        "- 2017–2019: Positive (tightening policy, strong economic conditions)",
        "- 2020: Mixed due to COVID-19 volatility",
      ],
      mediaItems: [
        { type: 'image', src: 'sentiment.jpg' },
        { type: 'image', src: 'finbert.jpg' },
        { type: 'image', src: 'labels.png' },
      ],
      //sourceLink: "https://www.youtube.com/watch?v=bEbjcqIuvi0",
      badges: [
        // { text: "Python" },
        // { text: "PyTorch" },
        // { text: "C++" },
        // { text: "CUDA" },
        // { text: "OpenCV" },
        // { text: "Linux" },
        // { text: "CMake" },
        // { text: "Docker" },
        // { text: "Jenkins" }
      ]
    },
    {
      title: "ARIMA Model",
      //icon: <img src="SlopeStats/slopeStatsAppIcon.png" alt="SlopeStats icon" className="w-6 h-6 mr-0" />,
      description: [
        "Used to model price-only time series",
        "Works well for stationary trends but struggles with rapid changes",
        "Not suitable for including sentiment features",
        "Produces a very good, albiet somewhat misleading graph when using look ahead predictions",
      ],
      mediaItems: [
        { type: 'image', src: 'arima1.png' },
        { type: 'image', src: 'arima2.png' },
      ],
      //sourceLink: "https://www.youtube.com/watch?v=bEbjcqIuvi0",
      badges: [
        // { text: "C" },
        // { text: "C++" },
        // { text: "MATLAB" },
        // { text: "Qt" },
        // { text: "CMake" },
        // { text: "Embedded Systems" },
        // { text: "CAN" }
      ]
    },
    {
      title: "Facebook Prophet Model",
      //icon: <img src="SlopeStats/slopeStatsAppIcon.png" alt="SlopeStats icon" className="w-6 h-6 mr-0" />,
      description: [
        "Designed for time-series with trend + seasonality",
        "Allowed us to add daily sentiment as an external regressor",
        "Provided interpretable components: long-term trend, seasonality, sentiment impact",
        "Overall great results, most of the actual data falls within the 80% confidence interval",
        "A disadvantage is that each stock must be modeled independently, preventing the model from learning shared patterns across assets",
        "Another disadvantage is that running 100 separate models (one per stock) significantly increases compute time",
      ],
      mediaItems: [
        { type: 'image', src: 'prophet1.png' },
        { type: 'image', src: 'prophet2.png' },
        { type: 'image', src: 'prophet3.png' },
      ],
      //sourceLink: "https://www.youtube.com/watch?v=bEbjcqIuvi0",
      badges: [
        // { text: "C++" },
        // { text: "OpenCV" },
        // { text: "CMake" },
        // { text: "Onshape" },
        // { text: "3D Printing" },
        // { text: "ESP32" },
      ]
    },
    {
      title: "XGBoost Model",
      //icon: <img src="SlopeStats/slopeStatsAppIcon.png" alt="SlopeStats icon" className="w-6 h-6 mr-0" />,
      description: [
        "Handles nonlinear relationships and engineered features very well",
        "Trained using walk-forward validation:",
        "- Model retrains every month on the previous 5 years",
        "- Predicts the next month’s returns",
        "Generates thousands of monthly predictions across the entire stock universe",
        "Trained on pooled data across all 100 stocks (Nasdaq 100), allowing the model to learn generalizable market patterns and cross-asset relationships",
        "Training one unified model is far more efficient than fitting 100 separate univariate models",
        "Ran the model with and without sentiment and saw improvement with sentiment"
      ],
      mediaItems: [
        { type: 'image', src: 'boost1.png' },
        { type: 'image', src: 'boost2.png' },
        { type: 'image', src: 'boost3.png' },
        { type: 'image', src: 'boost4.png' },
      ],
      //sourceLink: "https://team4646.org/",
      badges: [
        // { text: "C++" },
        // { text: "Java" },
        // { text: "OpenCV" },
        // { text: "Creo" },
        // { text: "Onshape" },
        // { text: "3D Printing" },
        // { text: "ESP32" },
      ]
    },
    {
      title: "Conclusion",
      //icon: <img src="SlopeStats/slopeStatsAppIcon.png" alt="SlopeStats icon" className="w-6 h-6 mr-0" />,
      description: [
        "Combining price trends with news sentiment significantly enhances the ability to forecast short-term stock performance. While ARIMA and Prophet provide useful baselines, XGBoost proved most capable of capturing complex relationships across features. Our results show that sentiment (especially from influential sources like the Federal Reserve) adds valuable predictive power. This integrated approach can support better portfolio ranking, risk assessment, and investment decision-making",
      ],
      mediaItems: [
        { type: 'image', src: 'thanks.png' },
      ],
      //sourceLink: "https://www.youtube.com/watch?v=bEbjcqIuvi0",
      badges: [
        // { text: "VHDL" },
        // { text: "Assembly" },
        // { text: "ModelSim-Intel FPGA Software Suite" },
        // { text: "Python" },
        // { text: "Linux" },
      ]
    },
  ];

  // Split projects into rows of 4
  const projectRows = [];

  return (
    <div id="projects" className="bg-hue-gray text-sky-white font-mono h-auto md:px-24 md:py-12 mb-20">
      <div className="flex flex-col items-center justify-center">
        <h1 data-aos="zoom-out" className="mt-10 mb-8 text-4xl font-medium">
          Project Details
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