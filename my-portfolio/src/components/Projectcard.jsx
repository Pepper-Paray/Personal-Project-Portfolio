export default function ProjectCard() {
  return (
    <div className="project-card">
      <img
        src="https://via.placeholder.com/300"
        alt="Lost On You"
        className="project-image"
      />

      <h3 className="project-title">Lost On You</h3>

      <p className="project-description">
        A project from my GitHub that I built and uploaded.
      </p>

      <a
        href="https://github.com/Pepper-Paray/Lost-On-You-"
        target="_blank"
        rel="noopener noreferrer"
        className="project-button"
      >
        View Project
      </a>
    </div>
  );
}


