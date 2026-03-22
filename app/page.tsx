'use client';

export default function MahendravarmaaPortfolio() {
  const projects = [
    {
      title: "E-Volt Smart Energy Management System",
      period: "Sept 2022 - Dec 2024",
      description:
        "Developed an Arduino-based smart energy management system using RFID, sensors, and Bluetooth to automate appliance usage based on room occupancy.",
      impact:
        "Secured £20,000 in funding from City University and was implemented at SRM Institute of Science and Technology, saving about $500 per month per 75-capacity classroom.",
      tools: ["Arduino", "RFID", "Bluetooth", "IoT", "Sensors"],
      recruiterValue:
        "Shows hands-on IoT engineering, hardware-software integration, and measurable real-world cost savings.",
    },
    {
      title: "MaterniTrack Fetal Health Monitoring",
      period: "Jan 2025 - May 2025",
      description:
        "Contributed to a non-invasive, real-time fetal and maternal risk monitoring solution using IoT sensors and machine learning.",
      impact:
        "Supported system architecture, decision support design, and user interface development for visualization during a 24-week funded research and prototyping project.",
      tools: ["Python", "Machine Learning", "IoT", "Backend", "Visualization"],
      recruiterValue:
        "Demonstrates applied machine learning, backend integration, and work on socially meaningful healthcare technology.",
    },
    {
      title: "Occupational Visualization Project",
      period: "2026",
      description:
        "Built visual analytics exploring job families, salary trends, and career pathways using information visualization principles.",
      impact:
        "Focused on transforming complex workforce data into clear decision-support visuals for users and stakeholders.",
      tools: ["Python", "Power BI", "Tableau", "Gephi"],
      recruiterValue:
        "Highlights data storytelling, stakeholder-oriented dashboard thinking, and strong visualization skills.",
    },
    {
      title: "Movies Rating Web Application",
      period: "2026",
      description:
        "Developed a web-based application for exploring and analyzing movie ratings with an emphasis on usability and data-driven insights.",
      impact:
        "Combined analytics thinking with backend-oriented development to create an interactive project suitable for portfolio presentation.",
      tools: ["Python", "SQL", "JavaScript", "Backend Development"],
      recruiterValue:
        "Shows product thinking, application development, SQL usage, and backend-focused problem solving.",
    },
  ];

  const skills = {
    languages: ["Python", "SQL", "C", "C++"],
    environments: ["Databricks", "JupyterLab", "GitHub", "Oracle SQL", "MySQL"],
    analytics: ["Power BI", "Tableau", "Adobe Analytics", "MS Excel", "Snowflake"],
    knowledge: ["Machine Learning", "PySpark", "Spark SQL", "Apache Spark", "Data Pipelines", "ETL", "Arduino", "IoT"],
  };

  const education = [
    {
      school: "Indiana University Bloomington",
      degree: "M.S. in Data Science",
      period: "Aug 2025 - Present",
      location: "Bloomington, Indiana",
      details: "Spring 2026 Courses: Social Media Mining, Information Visualization, Usable Artificial Intelligence",
      extra: "CGPA: 3.76/4",
    },
    {
      school: "SRM Institute of Science and Technology",
      degree: "B.Tech in Computer Science and Technology with Specialization in Big Data Analytics",
      period: "2021 - 2025",
      location: "Chennai, India",
      details: "Strong foundation in computer science, analytics, and big data applications.",
      extra: "CGPA: 8.58/10",
    },
    {
      school: "City University of London",
      degree: "Semester Abroad Program in Data Science",
      period: "Oct 2024 - Dec 2024",
      location: "London, United Kingdom",
      details: "International academic exposure in data science and applied analytics.",
      extra: "",
    },
  ];

  const experience = [
    {
      org: "MIT Square, London",
      role: "Python Developer Intern",
      period: "Oct 2024 - Dec 2024",
      location: "London, United Kingdom",
      points: [
        "Designed and implemented machine learning algorithms for real-time detection of maternal and fetal health risks.",
        "Evaluated model performance using accuracy, precision, and related metrics to optimize reliability.",
        "Supported system architecture design and integrated IoT sensor data into the backend.",
        "Contributed to result visualization and decision support features.",
      ],
    },
    {
      org: "The Data Science Club, SRMIST",
      role: "Head of Content Creation",
      period: "Jan 2022 - May 2025",
      location: "Chennai, India",
      points: [
        "Directed end-to-end content creation strategy for the club across multiple platforms.",
        "Spearheaded project selection and planning aligned with learning goals.",
        "Designed event flows and workshop content outlines for smooth execution.",
        "Collaborated with faculty mentors to improve club visibility and impact.",
      ],
    },
  ];

  const certifications = [
    "Google Data Analytics - Coursera (May 2024)",
    "AWS Machine Learning Foundation (May 2023)",
    "Cisco Networking Basics (May 2023)",
  ];

  return (
    <div className="min-h-screen bg-black text-zinc-100">
      <section className="relative overflow-hidden border-b border-red-950/60">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(127,29,29,0.18),transparent_32%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
          <div className="grid items-center gap-10 lg:grid-cols-[1.35fr_0.9fr]">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1 text-sm font-medium text-red-300">
                Open to Summer 2026 Internships • Data Science • Analytics • BI
              </p>
              <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white md:text-6xl">
                Mahendravarmaa Anbarasan
              </h1>
              <p className="mt-4 text-base text-zinc-300 md:text-lg">
                Chicago, Illinois (Open for Relocation) • amahe@iu.edu • varmaa.mahi@gmail.com • +1 (331) 298-1193
              </p>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300 md:text-xl">
                MS in Data Science student with a strong foundation in advanced analytics and the data domain, with a particular focus on back-end development. I build real-time systems across machine learning, IoT, business intelligence, and information visualization.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/resume.pdf"
                  download
                  className="rounded-2xl bg-red-500 px-5 py-3 font-semibold text-black transition hover:-translate-y-0.5"
                >
                  Download Resume
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-red-900 px-5 py-3 font-semibold text-zinc-100 transition hover:border-red-700 hover:bg-red-950/30"
                >
                  View LinkedIn
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-red-900 px-5 py-3 font-semibold text-zinc-100 transition hover:border-red-700 hover:bg-red-950/30"
                >
                  View GitHub
                </a>
                <a
                  href="mailto:amahe@iu.edu"
                  className="rounded-2xl border border-red-900 px-5 py-3 font-semibold text-zinc-100 transition hover:border-red-700 hover:bg-red-950/30"
                >
                  Contact Me
                </a>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-red-950/60 bg-red-950/20 p-4">
                  <p className="text-sm text-zinc-400">Target Roles</p>
                  <p className="mt-2 font-semibold text-white">Data Scientist Intern • Business Intelligence Intern • Data Analyst Intern </p>
                </div>
                <div className="rounded-2xl border border-red-950/60 bg-red-950/20 p-4">
                  <p className="text-sm text-zinc-400">Strengths</p>
                  <p className="mt-2 font-semibold text-white">Python, SQL, ML, AI, ETL, IoT, Tableau, Power Bi, Snowflake,  Apache Spark, neo4j</p>
                </div>
                <div className="rounded-2xl border border-red-950/60 bg-red-950/20 p-4">
                  <p className="text-sm text-zinc-400">Work Style</p>
                  <p className="mt-2 font-semibold text-white">Backend-focused, analytical, impact-driven</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-red-950/60 bg-zinc-950/80 p-6 shadow-2xl shadow-red-950/30 backdrop-blur">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-red-950/20 p-5">
                  <p className="text-sm text-zinc-400">Current Program</p>
                  <p className="mt-2 text-lg font-semibold text-white">M.S. in Data Science</p>
                </div>
                <div className="rounded-2xl bg-red-950/20 p-5">
                  <p className="text-sm text-zinc-400">CGPA</p>
                  <p className="mt-2 text-lg font-semibold text-white">3.76 / 4.0</p>
                </div>
                <div className="rounded-2xl bg-red-950/20 p-5">
                  <p className="text-sm text-zinc-400">Focus Areas</p>
                  <p className="mt-2 text-lg font-semibold text-white">Analytics • ML • Backend</p>
                </div>
                <div className="rounded-2xl bg-red-950/20 p-5">
                  <p className="text-sm text-zinc-400">Tools</p>
                  <p className="mt-2 text-lg font-semibold text-white">Python • SQL • Power BI</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-red-950/60 bg-zinc-950 p-8 shadow-xl shadow-red-950/20">
            <h2 className="text-2xl font-semibold text-white">Professional Summary</h2>
            <p className="mt-5 leading-8 text-zinc-300">
              I am currently pursuing my M.S. in Data Science at Indiana University Bloomington after completing my undergraduate degree in Computer Science and Technology with a specialization in Big Data Analytics at SRM Institute of Science and Technology.
            </p>
            <p className="mt-5 leading-8 text-zinc-300">
              I specialize in analytics, machine learning, IoT-enabled systems, business intelligence, and back-end development, with a focus on building end-to-end solutions that convert complex data into actionable insights and measurable business impact.
            </p>
            <div className="mt-6 rounded-2xl border border-red-950/60 bg-red-950/20 p-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-red-300">Why recruiters should notice me</p>
              <ul className="mt-3 space-y-3 text-zinc-300">
                <li>• Graduate student in Data Science with hands-on experience across machine learning, BI, data pipelines, and visualization.</li>
                <li>• Built applied projects with measurable outcomes, including funded IoT systems and real-world monitoring solutions.</li>
                <li>• Comfortable across technical and business-facing work, from backend integration to dashboards and decision support.</li>
              </ul>
            </div>
          </div>

          <div className="rounded-3xl border border-red-950/60 bg-zinc-950 p-8 shadow-xl shadow-red-950/20">
            <h2 className="text-2xl font-semibold text-white">Education</h2>
            <div className="mt-6 space-y-6">
              {education.map((item) => (
                <div key={item.school} className="rounded-2xl bg-red-950/20 p-5">
                  <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{item.school}</h3>
                      <p className="text-zinc-300">{item.degree}</p>
                      <p className="mt-2 text-sm leading-6 text-zinc-400">{item.details}</p>
                    </div>
                    <div className="md:text-right">
                      <p className="text-sm font-medium text-red-300">{item.period}</p>
                      <p className="text-sm text-zinc-400">{item.location}</p>
                      {item.extra && <p className="mt-2 text-sm text-zinc-300">{item.extra}</p>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 md:px-10 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-red-950/60 bg-zinc-950 p-8 shadow-xl shadow-red-950/20">
            <h2 className="text-2xl font-semibold text-white">Technical Skills</h2>
            <div className="mt-6 space-y-5 text-zinc-300">
              <div>
                <p className="font-semibold text-white">Languages</p>
                <p className="mt-2 leading-7">{skills.languages.join(", ")}</p>
              </div>
              <div>
                <p className="font-semibold text-white">Environments</p>
                <p className="mt-2 leading-7">{skills.environments.join(", ")}</p>
              </div>
              <div>
                <p className="font-semibold text-white">Analysis and Visualization</p>
                <p className="mt-2 leading-7">{skills.analytics.join(", ")}</p>
              </div>
              <div>
                <p className="font-semibold text-white">Knowledge</p>
                <p className="mt-2 leading-7">{skills.knowledge.join(", ")}</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-red-950/60 bg-zinc-950 p-8 shadow-xl shadow-red-950/20">
            <h2 className="text-2xl font-semibold text-white">Certifications</h2>
            <div className="mt-6 space-y-4">
              {certifications.map((cert) => (
                <div key={cert} className="rounded-2xl bg-red-950/20 p-4 text-zinc-300">
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 md:px-10 lg:px-12">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-white">Professional Experience</h2>
        </div>
        <div className="space-y-6">
          {experience.map((item) => (
            <div key={item.org} className="rounded-3xl border border-red-950/60 bg-zinc-950 p-8 shadow-xl shadow-red-950/20">
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                  <p className="mt-1 text-zinc-300">{item.org}</p>
                </div>
                <div className="md:text-right">
                  <p className="text-sm font-medium text-red-300">{item.period}</p>
                  <p className="text-sm text-zinc-400">{item.location}</p>
                </div>
              </div>
              <ul className="mt-5 space-y-3 text-zinc-300">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3 leading-7">
                    <span className="mt-2 h-2 w-2 rounded-full bg-red-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 md:px-10 lg:px-12">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-white">Featured Projects</h2>
          <p className="mt-3 max-w-2xl text-zinc-400">
            Selected academic and applied projects that demonstrate technical depth, real-world impact, and recruiter-relevant skills across data science, analytics, backend systems, and IoT.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-3xl border border-red-950/60 bg-zinc-950 p-7 shadow-xl shadow-red-950/20 transition hover:-translate-y-1 hover:border-red-700"
            >
              <div className="mb-3 flex items-center gap-2">
                <span className="rounded-full bg-red-500/10 px-3 py-1 text-xs font-medium text-red-300">Recruiter Highlight</span>
              </div>
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <span className="rounded-full bg-red-950/20 px-3 py-1 text-xs text-red-300">{project.period}</span>
              </div>
              <p className="mt-4 leading-7 text-zinc-300">{project.description}</p>
              <p className="mt-4 leading-7 text-zinc-400">{project.impact}</p>
              <p className="mt-4 text-sm font-medium uppercase tracking-wide text-red-300">What this shows recruiters</p>
              <p className="mt-2 leading-7 text-zinc-300">{project.recruiterValue}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full bg-red-500/10 px-3 py-1 text-sm text-red-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-red-950/60 bg-zinc-950/60">
        <div className="mx-auto max-w-7xl px-6 py-14 text-center md:px-10 lg:px-12">
          <div className="mx-auto mb-8 max-w-4xl rounded-3xl border border-red-800/50 bg-red-950/20 p-6 text-left">
            <p className="text-sm font-semibold uppercase tracking-wide text-red-300">Currently seeking opportunities</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">Open to Summer 2026 internships in Data Science, Analytics, Business Intelligence, and Machine Learning</h3>
            <p className="mt-3 leading-7 text-zinc-300">
              I am looking for internship opportunities where I can contribute through Python, SQL, dashboarding, machine learning, data storytelling, and backend-oriented problem solving.
            </p>
          </div>
          <h2 className="text-3xl font-semibold text-white">Let's connect</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-8 text-zinc-300">
            I am actively seeking opportunities in data science, analytics, machine learning, and business intelligence where I can contribute through technical problem-solving and data-driven decision-making.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:amahe@iu.edu"
              className="rounded-2xl bg-red-500 px-5 py-3 font-semibold text-black transition hover:-translate-y-0.5"
            >
              Email Me
            </a>
            <a
              href="https://github.com/Mahendravarmaa24"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-red-900 px-5 py-3 font-semibold text-zinc-100 transition hover:border-red-700 hover:bg-red-950/30"
            >
              GitHub
            </a>
            <a
              href="www.linkedin.com/in/mahendravarmaa-anbarasan-53248a282"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-red-900 px-5 py-3 font-semibold text-zinc-100 transition hover:border-red-700 hover:bg-red-950/30"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
