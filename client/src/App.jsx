import "./App.css";

export default function App() {
  return (
    <div className="app">
      {/* Hero */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="title">
            Hi, I'm <span className="highlight">Manish</span> 👋
          </h1>
          <p className="description">
            I build clean, fast and responsive web apps using React, Node and
            MongoDB.
          </p>
        </div>
      </section>

      {/* About */}
      {/* <section id="about" className="section">
        <h2 className="section-title">About</h2>
        <p className="section-text">
          I'm a BCA graduate (2017–2020, RKDF University) with hands-on
          experience building MERN stack apps. I love crafting smooth user
          experiences, clean components, and scalable APIs.
        </p>
        <div className="chips">
          {[
            "React / Next.js",
            "Node.js / Express",
            "MongoDB / Mongoose",
            "TypeScript",
            "Redux / RTK Query",
            "CSS3 / HTML5",
          ].map((chip) => (
            <div key={chip} className="chip">
              {chip}
            </div>
          ))}
        </div>
      </section> */}

      {/* Skills */}
      {/* <section id="skills" className="section skills">
        <h2 className="section-title">Skills</h2>
        <div className="cards">
          {[
            {
              title: "Frontend",
              items: ["React", "Redux", "Vite", "CSS", "Framer Motion"],
            },
            {
              title: "Backend",
              items: ["Node", "Express", "REST APIs", "JWT Auth"],
            },
            {
              title: "Database & Tools",
              items: ["MongoDB", "Mongoose", "Git", "Postman"],
            },
          ].map((card) => (
            <div key={card.title} className="card">
              <h3>{card.title}</h3>
              <ul>
                {card.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section> */}

      <h1>Akash Bhai</h1>

      {/* Footer */}
      {/* <footer className="footer">
        <p>© {new Date().getFullYear()} Manish. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </footer> */}
    </div>
  );
}
