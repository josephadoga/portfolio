
function Landing() {
  return (
    <section>
      <div className="container center">
        <div className="land-content center fade-in">
          <h3>Hi there! I'm</h3>
          <h1 className="bounce">Joseph Adoga</h1>
            <p>
              A Full-stack Developer based in Winnipeg, Manitoba, Canada.
            </p>
        </div>
        <div className="button flex land-button gap-10">
            <a href="#about" className="primary-icon-btn">Know More</a>
            <a href="#projects" className="secondary-icon-btn">View Projects</a>
        </div>
      </div>
    </section>
  );
}

export default Landing;