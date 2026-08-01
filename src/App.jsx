import {
  Mail,
  ExternalLink,
  Code2,
  GraduationCap,
  FolderGit2,
} from "lucide-react";
import resume from "./assets/AviralResumeAIML.pdf";
import profile from "./assets/Avirals.jpeg";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function App() {
  const projects = [
  {
    title: "OfferPrep AI",
    desc: "AI-powered placement preparation platform that analyzes resumes, predicts placement readiness, identifies skill gaps, and provides personalized interview preparation. Built with secure JWT authentication and scalable backend architecture.",
    tech: [
      "React",
      "FastAPI",
      "PostgreSQL",
      "Tailwind CSS",
      "JWT",
      "Machine Learning",
    ],
    github: "https://github.com/AviralMishra1310/OfferPrep",
    live: null,
  },
  {
    title: "Quick AI",
    desc: "Modern AI SaaS platform offering AI-powered content generation with secure authentication, responsive UI, and seamless cloud deployment.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "OpenAI API",
      "Tailwind CSS",
    ],
    github: "https://github.com/AviralMishra1310/QuickAI",
    live: "https://quick-ai-delta-three.vercel.app/",
  },
  {
    title: "Prescripto",
    desc: "Full-stack doctor appointment booking platform featuring authentication, appointment scheduling, admin dashboard, and patient management.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Cloudinary",
    ],
    github: "https://github.com/AviralMishra1310/Prescripto",
    live: "https://prescripto-frontend-flame.vercel.app/",
  },
];

  const skills = [
  {
    title: "Languages",
    icon: "💻",
    items: ["Java", "Python", "JavaScript", "C++", "SQL"],
  },
  {
    title: "Frontend",
    icon: "🎨",
    items: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    items: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "REST APIs",
      "JWT",
    ],
  },
  {
    title: "Database",
    icon: "🗄️",
    items: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
    ],
  },
  {
    title: "AI / ML",
    icon: "🤖",
    items: [
      "Machine Learning",
      "Scikit-learn",
      "Pandas",
      "NumPy",
    ],
  },
  {
    title: "Tools",
    icon: "🚀",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "AWS",
      "Postman",
      "Vercel",
    ],
  },
];

  return (
    <div className="min-h-screen bg-zinc-950 text-white">

      {/* HERO */}

      {/* HERO */}

<section className="relative overflow-hidden">

  {/* Background Blur */}

  <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-violet-500/20 blur-[120px]" />

  <div className="absolute top-20 right-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />

  <div className="max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-16 items-center">

    {/* LEFT */}

    <div>

      <span className="px-4 py-2 rounded-full bg-violet-500/10 border border-violet-400/30 text-violet-400 text-sm font-semibold">

        🚀 Open to Internship and Placement Opportunities

      </span>

      <h1 className="mt-8 text-6xl lg:text-7xl font-black leading-tight">

        Hi, I'm{" "}

        <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">

          Aviral Misra

        </span>

      </h1>

      <p className="mt-8 text-2xl text-gray-300">

        Full Stack Developer • AI Engineer • Problem Solver

      </p>

      <p className="mt-6 text-gray-400 text-lg leading-8 max-w-2xl">

        Passionate about building scalable web applications, AI-powered
        products, and solving complex engineering problems. Currently pursuing
        B.Tech in Computer Science (AI & ML) while sharpening my skills in
        Full Stack Development, Machine Learning, and Data Structures &
        Algorithms.

      </p>

      {/* Buttons */}

      <div className="flex flex-wrap gap-5 mt-10">

        <a
          href="https://github.com/AviralMishra1310"
          target="_blank"
          className="px-8 py-4 rounded-xl bg-violet-500 hover:bg-cyan-600 transition font-semibold text-black"
        >

          View Projects

        </a>

        <a
          href={resume}
          target="_blank"
          className="px-8 py-4 rounded-xl border border-cyan-500 hover:bg-violet-500/10 transition font-semibold"
        >

          Download Resume

        </a>

      </div>

      {/* Social */}

      <div className="flex gap-7 mt-10 text-3xl">

        <a
          href="https://github.com/AviralMishra1310"
          target="_blank"
          className="hover:text-violet-400 hover:scale-125 transition"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/aviral-mishra-7b6073346/"
          target="_blank"
          className="hover:text-violet-400 hover:scale-125 transition"
        >
          <FaLinkedin />
        </a>

        <a
          href="mailto:aviralmishra1310@gmail.com"
          className="hover:text-violet-400 hover:scale-125 transition"
        >
          <FaEnvelope />
        </a>

      </div>

    </div>

    {/* RIGHT */}

    <div className="flex justify-center">

      <div className="relative">

        <div className="absolute inset-0 rounded-full bg-violet-500 blur-3xl opacity-30" />

        <img
          src={profile}
          alt="Aviral Misra"
          className="relative w-80 h-80 rounded-full object-cover border-4 border-violet-400 shadow-2xl"
        />

      </div>

    </div>

  </div>

  {/* Stats */}

  {/* HIGHLIGHTS */}

<section className="max-w-7xl mx-auto px-6 py-16">

  <div className="grid lg:grid-cols-3 gap-6">

    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 hover:border-violet-400 transition-all duration-300">

      <p className="text-violet-400 font-semibold text-sm tracking-wider uppercase">
        Problem Solving
      </p>

      <h3 className="mt-3 text-4xl font-bold">
        500+
      </h3>

      <p className="mt-4 text-gray-400 leading-7">
        Solved 500+ Data Structures & Algorithms problems across LeetCode,
        CodeChef and other coding platforms.
      </p>

    </div>

    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 hover:border-violet-400 transition-all duration-300">

      <p className="text-violet-400 font-semibold text-sm tracking-wider uppercase">
        Development
      </p>

      <h3 className="mt-3 text-4xl font-bold">
        Full Stack
      </h3>

      <p className="mt-4 text-gray-400 leading-7">
        Built production-ready AI and Full Stack applications using React,
        FastAPI, Node.js, PostgreSQL and modern cloud technologies.
      </p>

    </div>

    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 hover:border-violet-400 transition-all duration-300">

      <p className="text-violet-400 font-semibold text-sm tracking-wider uppercase">
        Current Focus
      </p>

      <h3 className="mt-3 text-4xl font-bold">
        AIML + Backend
      </h3>

      <p className="mt-4 text-gray-400 leading-7">
        Exploring Machine Learning, scalable backend systems, system design,
        and preparing for Software Development Engineer roles.
      </p>

    </div>

  </div>

</section>

</section>

      {/* SKILLS */}

<section className="max-w-7xl mx-auto px-6 py-24">

  <div className="text-center">

    <p className="text-violet-400 uppercase tracking-[6px] font-semibold">
      Technical Expertise
    </p>

    <h2 className="text-5xl font-black mt-4">
      Skills & Technologies
    </h2>

    <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg leading-8">
      I enjoy building scalable web applications, solving algorithmic
      challenges and exploring Artificial Intelligence with modern
      technologies.
    </p>

  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

    {skills.map((skill) => (

      <div
        key={skill.title}
        className="group relative overflow-hidden rounded-3xl
        bg-gradient-to-br
        from-slate-900
        to-slate-950
        border border-zinc-800
        hover:border-violet-400
        transition-all
        duration-500
        p-8
        hover:-translate-y-3
        hover:shadow-[0_0_40px_rgba(34,211,238,0.18)]"
      >

        <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-violet-500/10 blur-3xl group-hover:bg-violet-500/20 transition"/>

        <div className="text-5xl">
          {skill.icon}
        </div>

        <h3 className="mt-5 text-2xl font-bold">
          {skill.title}
        </h3>

        <div className="flex flex-wrap gap-3 mt-8">

          {skill.items.map((item) => (

            <span
              key={item}
              className="
              px-4
              py-2
              rounded-full
              bg-slate-800
              text-sm
              border
              border-slate-700
              hover:border-violet-400
              hover:text-cyan-300
              transition"
            >
              {item}
            </span>

          ))}

        </div>

      </div>

    ))}

  </div>

</section>

      {/* PROJECTS */}

<section className="max-w-7xl mx-auto px-6 py-20">

  <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
    <FolderGit2 className="text-violet-400" />
    Featured Projects
  </h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

    {projects.map((project) => (

      <div
        key={project.title}
        className="bg-zinc-900/70 backdrop-blur-lg border border-zinc-800 rounded-3xl p-7 hover:border-violet-400 hover:-translate-y-3 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300"
      >

        <h3 className="text-2xl font-bold">
          {project.title}
        </h3>

        <p className="mt-5 text-gray-400 leading-7">
          {project.desc}
        </p>

        <div className="flex flex-wrap gap-2 mt-6">

          {project.tech.map((tech) => (

            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-violet-500/10 border border-violet-400/30 text-cyan-300 text-sm"
            >
              {tech}
            </span>

          ))}

        </div>

        <div className="flex gap-4 mt-8">

  <a
    href={project.github}
    target="_blank"
    rel="noreferrer"
    className="flex-1 text-center py-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition font-semibold"
  >
    GitHub
  </a>

  {project.live ? (
    <a
      href={project.live}
      target="_blank"
      rel="noreferrer"
      className="flex-1 text-center py-3 rounded-xl bg-violet-500 hover:bg-cyan-600 transition font-semibold text-black"
    >
      Live Demo
    </a>
  ) : (
    <div className="flex-1 text-center py-3 rounded-xl bg-slate-700 text-gray-400 cursor-not-allowed font-semibold">
      Coming Soon
    </div>
  )}

</div>

      </div>

    ))}

  </div>

</section>

            {/* EDUCATION */}

<section className="max-w-7xl mx-auto px-6 py-24">

  <div className="text-center">

    <p className="uppercase tracking-[6px] text-violet-400 font-semibold">
      Academic Journey
    </p>

    <h2 className="text-5xl font-black mt-4">
      Education
    </h2>

    <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
      My academic foundation in Computer Science has equipped me with
      problem-solving skills, software engineering principles, and a strong
      interest in Artificial Intelligence.
    </p>

  </div>

  <div className="mt-20 flex justify-center">

    <div
      className="
      relative
      w-full
      max-w-4xl
      rounded-3xl
      border
      border-zinc-800
      bg-gradient-to-br
      from-slate-900
      via-slate-900
      to-slate-950
      p-10
      overflow-hidden
      hover:border-violet-400
      transition-all
      duration-500
      hover:shadow-[0_0_50px_rgba(34,211,238,0.18)]
      "
    >

      {/* Background Glow */}

      <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="flex flex-col lg:flex-row justify-between gap-8 relative z-10">

        {/* Left */}

        <div>

          <div className="flex items-center gap-4">

            <div className="h-16 w-16 rounded-2xl bg-violet-500/10 border border-violet-400 flex items-center justify-center text-3xl">

              🎓

            </div>

            <div>

              <h3 className="text-3xl font-bold">

                B.Tech

              </h3>

              <p className="text-violet-400">

                Computer Science Engineering (AI & ML)

              </p>

            </div>

          </div>

          <h4 className="mt-8 text-2xl font-semibold">

            GL Bajaj Institute of Technology and Management

          </h4>

          <p className="text-gray-400 mt-2">

            Greater Noida, Uttar Pradesh

          </p>

          <p className="mt-6 text-gray-400 leading-8">

            Focused on Full Stack Development, Data Structures & Algorithms,
            Machine Learning, Database Management Systems and Software
            Engineering while building real-world projects.

          </p>

        </div>

        {/* Right */}

        <div className="flex flex-col justify-between">

          <div className="rounded-2xl bg-violet-500/10 border border-violet-400 px-8 py-5">

            <p className="text-gray-400 text-sm">

              Duration

            </p>

            <h3 className="text-3xl font-bold mt-2">

              2023 — 2027

            </h3>

          </div>

          <div className="mt-6 rounded-2xl bg-slate-800 p-6">

            <p className="text-gray-400">

              Current Status

            </p>

            <h3 className="text-violet-400 text-xl font-semibold mt-2">

              Final Year Undergraduate

            </h3>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

      {/* CONTACT */}

{/* CONTACT */}

<section className="relative max-w-7xl mx-auto px-6 py-28">

  {/* Background Glow */}

  <div className="absolute top-0 left-1/2 -translate-x-1/2 h-96 w-96 bg-violet-500/10 blur-[140px] rounded-full"></div>

  <div className="relative z-10">

    <div className="text-center">

      <span className="px-5 py-2 rounded-full border border-cyan-500/30 bg-violet-500/10 text-violet-400 text-sm font-semibold tracking-widest uppercase">
        Contact
      </span>

      <h2 className="mt-8 text-6xl font-black leading-tight">

        Let's Create Something

        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">

          Extraordinary.

        </span>

      </h2>

      <p className="mt-8 text-lg text-gray-400 max-w-3xl mx-auto leading-8">

        I'm always open to discussing internship opportunities,
        software engineering roles, innovative ideas, or collaborating
        on impactful projects.

      </p>

    </div>

    <div className="grid lg:grid-cols-2 gap-10 mt-20">

      {/* LEFT */}

      <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-xl p-10">

        <h3 className="text-3xl font-bold">

          Contact Details

        </h3>

        <p className="text-gray-400 mt-4">

          Reach out through your preferred platform.

        </p>

        <div className="space-y-5 mt-10">

          <a
            href="mailto:aviralmishra131005@gmail.com"
            className="group flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-950 p-6 hover:border-violet-400 transition"
          >

            <div className="flex items-center gap-5">

              <div className="h-14 w-14 rounded-xl bg-violet-500/10 flex items-center justify-center">

                <FaEnvelope className="text-violet-400 text-2xl"/>

              </div>

              <div>

                <p className="text-sm text-gray-500">

                  Email

                </p>

                <h4 className="font-semibold">

                  aviralmishra131005@gmail.com

                </h4>

              </div>

            </div>

            <span className="text-violet-400 group-hover:translate-x-2 transition">

              →

            </span>

          </a>

          <a
            href="https://github.com/AviralMishra1310"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-950 p-6 hover:border-violet-400 transition"
          >

            <div className="flex items-center gap-5">

              <div className="h-14 w-14 rounded-xl bg-violet-500/10 flex items-center justify-center">

                <FaGithub className="text-violet-400 text-2xl"/>

              </div>

              <div>

                <p className="text-sm text-gray-500">

                  GitHub

                </p>

                <h4 className="font-semibold">

                  github.com/AviralMishra1310

                </h4>

              </div>

            </div>

            <span className="text-violet-400 group-hover:translate-x-2 transition">

              →

            </span>

          </a>

          <a
            href="https://www.linkedin.com/in/aviral-mishra-7b6073346/"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-950 p-6 hover:border-violet-400 transition"
          >

            <div className="flex items-center gap-5">

              <div className="h-14 w-14 rounded-xl bg-violet-500/10 flex items-center justify-center">

                <FaLinkedin className="text-violet-400 text-2xl"/>

              </div>

              <div>

                <p className="text-sm text-gray-500">

                  LinkedIn

                </p>

                <h4 className="font-semibold">

                  Connect with me

                </h4>

              </div>

            </div>

            <span className="text-violet-400 group-hover:translate-x-2 transition">

              →

            </span>

          </a>

        </div>

      </div>

      {/* RIGHT */}

      <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-slate-900 to-slate-950 p-10">

        <h3 className="text-3xl font-bold">

          Interested in Working Together?

        </h3>

        <p className="mt-5 text-gray-400 leading-8">

          Whether you're hiring for an internship, looking for a Full Stack
          Developer, or have an exciting AI project, I'd be happy to connect.

        </p>

        <div className="mt-10 flex flex-col gap-5">

          <a
            href="mailto:aviralmishra131005@gmail.com?subject=Opportunity"
            className="rounded-xl bg-violet-500 hover:bg-violet-400 transition py-4 text-center font-bold text-black"
          >

            📩 Email Me

          </a>

          <a
            href={resume}
            target="_blank"
            className="rounded-xl border border-slate-700 hover:border-violet-400 transition py-4 text-center font-semibold"
          >

            📄 Download Resume

          </a>

        </div>

        <div className="mt-12 border-t border-zinc-800 pt-8">

          <p className="text-gray-500">

            Typically replies within

          </p>

          <h2 className="text-5xl font-black text-violet-400 mt-3">

            24 Hours

          </h2>

        </div>

      </div>

    </div>

  </div>

</section>

{/* FOOTER */}

<footer className="border-t border-zinc-800">

  <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col lg:flex-row justify-between items-center">

    <div>

      <h3 className="text-2xl font-bold">

        Aviral Mishra

      </h3>

      <p className="text-gray-500 mt-2">

        Full Stack Developer • AI Enthusiast • Software Engineer

      </p>

    </div>

    <div className="flex gap-8 text-2xl mt-8 lg:mt-0">

      <a
        href="https://github.com/AviralMishra1310"
        target="_blank"
        className="hover:text-violet-400 transition hover:-translate-y-1"
      >
        <FaGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/aviral-mishra-7b6073346/"
        target="_blank"
        className="hover:text-violet-400 transition hover:-translate-y-1"
      >
        <FaLinkedin />
      </a>

      <a
        href="mailto:aviralmishra131005@gmail.com"
        className="hover:text-violet-400 transition hover:-translate-y-1"
      >
        <FaEnvelope />
      </a>

    </div>

  </div>

  <div className="border-t border-zinc-800 text-center py-6 text-gray-500">

    © {new Date().getFullYear()} Aviral Mishra. Designed & Developed with React + Tailwind CSS.

  </div>

</footer>
</div>
);
}