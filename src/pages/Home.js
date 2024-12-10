const Home = () => {
    return (
      <div className="text-center mt-5">
        <h1>Welcome to My Portfolio</h1>
        <p className="lead">Showcasing my work and skills as a full-stack developer</p>
  
        {/* Embed Resume */}
        <div style={{ border: "1px solid #ccc", height: "500px", overflow: "hidden", marginTop: "2rem" }}>
          <object
            data="/CV_Official_Chewy.pdf"
            type="application/pdf"
            width="100%"
            height="100%"
            aria-label="Interactive Resume"
          >
            <p>
              Your browser does not support PDFs. Please download the resume by clicking the button below.
            </p>
          </object>
        </div>
  
        {/* Download Button */}
        <div style={{ marginTop: "1rem" }}>
          <a href="/CV_Official_Chewy.pdf" download className="btn btn-primary">
            Download My Resume
          </a>
        </div>
      </div>
    );
  };
  
  export default Home;
  