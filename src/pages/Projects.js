const Projects = () => {
    const projects = [
      { name: "Project 1", description: "Description 1", link: "https://example.com" },
      { name: "Project 2", description: "Description 2", link: "https://example.com" },
    ];
  
    return (
      <div>
        <h2 className="text-center mb-4">My Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{project.name}</h5>
                  <p className="card-text">{project.description}</p>
                  <a href={project.link} className="btn btn-primary" target="_blank" rel="noreferrer">View Project</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Projects;
  