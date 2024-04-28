export default function Timeline() {
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical py-6">
      <li>
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-start md:text-end mb-10">
          <time className="font-mono italic">Jul 2010 - Jul 2014</time>
          <div className="text-lg font-black">United States Marine Corps</div>
          Enlisted in the United States Marine Corps. Led, trained, and mentored
          marines across various teams. Primary role, Aviation Supply
          Specialist. Secondary role, Combat Marksmanship Coach.
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-end mb-10">
          <time className="font-mono italic">Dec 2015 - Aug 2017</time>
          <div className="text-lg font-black">Professional Tutor</div>
          Tutored math, physics, and chemistry subjects up to the undergraduate
          level. Volunteered personal tutoring services to the One Million
          Degrees program, a program dedicated to providing underprivileged
          students a better chance for educational success.
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-start md:text-end mb-10">
          <time className="font-mono italic">May 2018 - Aug 2019</time>
          <div className="text-lg font-black">
            Northrop Grumman Firmware Engineer, Intern
          </div>
          Completed two summer internship rotations as a Firmware and Embedded
          Engineer. Had a great opportunity to work on cutting edge technologies
          that I can&apos;t talk about too much. Focuses were on FPGA
          programming and testing using C/C++ and Verilog.{" "}
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-end mb-10">
          <time className="font-mono italic"> Jan 2020 - Dec 2021</time>
          <div className="text-lg font-black">
            P&G Software Engineer, IT Manager
          </div>
          Built big data pipelines for processing consumer and product information using Apache
          Airflow hosted on GCP&apos;s Cloud Composer. Then moved onto leading
          the backend engineering team building REST APIs using Flask and
          FastAPI hosted on Google Kubernetes Engine. This is where I got my
          first taste of DevOps and CI/CD. Had to migrate our CI/CD pipelines
          from Jenkins to GitHub Actions.{" "}
        </div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="timeline-start md:text-end mb-10">
          <time className="font-mono italic"> Jan 2022 - Present</time>
          <div className="text-lg font-black">
            P&G Software Engineer, Sr. IT Manager
          </div>
          Led and advised multiple engineering teams. Standardized DevOps and
          API development practices through an internally published handbook.
          Right now, I focus the majority of my time building a DevOps team to
          scale out CI/CD support.{" "}
        </div>
      </li>
    </ul>
  );
}
