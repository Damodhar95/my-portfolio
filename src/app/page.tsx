export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="p-6 bg-white shadow-md">
        <h1 className="text-3xl font-bold">Damodhar C S</h1>
        <p className="text-lg text-gray-600">
          Full Stack Developer | AI Enthusiast | Data Analyst
        </p>
      </header>

      <div className="p-6 max-w-4xl mx-auto space-y-12">
        {/* About Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">About Me</h2>
          <p className="leading-relaxed">
            I’m an ambitious developer with expertise in building scalable web
            and mobile applications. Skilled in problem-solving, modern
            frameworks, and clean UI/UX, I aim to create impactful digital
            solutions and grow as an innovative tech professional.
          </p>
        </section>

        {/* Projects Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Projects</h2>
          <p className="text-gray-600 mb-4">
            Here are some of my featured works. (🚧 You can update these later
            with real links.)
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-bold">Project 1</h3>
              <p className="text-sm text-gray-600">
                Short description about project 1.
              </p>
              <a
                href="https://github.com/yourusername/project1"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline"
              >
                View Code
              </a>
            </div>

            <div className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-bold">Project 2</h3>
              <p className="text-sm text-gray-600">
                Short description about project 2.
              </p>
              <a
                href="https://github.com/yourusername/project2"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline"
              >
                View Code
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">Contact</h2>
          <p>
            📧 Email:{" "}
            <a
              href="mailto:sdamodhar454@gmail.com"
              className="text-blue-600 hover:underline"
            >
              sdamodhar454@gmail.com
            </a>
          </p>
          <p>
            🔗 LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/damodhar-s-12bb0a2a7/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              linkedin.com/in/damodhar-s-12bb0a2a7
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
