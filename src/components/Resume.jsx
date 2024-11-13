
function Resume() {
  return (
    <>
      <div className="mb-8">

        <h1 className="text-3xl font-bold mb-2 text-center">Experience</h1>
        <a>
          <button className="bg-blue-500 px-3 py-1 rounded text-black items-center space-x-2">Full Resume</button>
        </a>
      </div>
      <div><h2 className="text-2xl font-bold mb-8 text-center">Computer Science/Software Engineering Experience</h2>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div>
          <img src="imgs/resume/pantex.jpg" alt="pantex" className="w-full h-[250px] rounded-2xl object-fill"/>
          <h2 className="text-xl font-bold  mb-2">Pantex Plant/Department of Energy</h2>
          <div className="flex flex-col text-left">
            <span className="pl-4 font-bold">Software Engineer </span>
            <span className="pl-4">Amarillo, Texas</span>
            <span className="pl-4">Aug 2023 - Present</span>
          </div>
        </div>

        <div>
          <img src="imgs/resume/pisd.jpg" alt="pantex" className="w-full h-[250px] rounded-2xl object-fill" />
          <h2 className="text-xl font-bold  mb-2">Pampa Independent School District </h2>
          <div className="flex flex-col text-left">
            <span className="pl-4 font-bold">Computer Science Educator </span>
            <span className="pl-4">Pampa, TX</span>
            <span className="pl-4">Oct 2021 – July 2023</span>
          </div>
        </div>

        <div>
          <img src="imgs/resume/provo.png" alt="pantex" className="w-full h-[250px] rounded-2xl object-fill"/>
          <h2 className="text-xl font-bold  mb-2">Provo Recreation Center </h2>
          <div className="flex flex-col text-left">
            <span className="pl-4 font-bold">Social Media Analyst Intern</span>
            <span className="pl-4">Provo, Utah</span>
            <span className="pl-4">Jan 2021 - May 2021</span>
          </div>
        </div>
      </div>

      {/*<div className="mb-10">*/}
      {/*  <h1 className="text-2xl font-bold mb-2 mt-10 text-center">Other Work Experience</h1>*/}
      {/*  <div className="grid grid-cols-2">*/}
      {/*    <div>*/}
      {/*      <h2>Brigham Young University </h2>*/}
      {/*      <h3>Provo, Utah</h3>*/}
      {/*      <h3>Publicity Writer/Website coordinator</h3>*/}
      {/*    </div>*/}
      {/*    <div>*/}
      {/*      <h2>St. Matthew&apos;s Episcopal Church </h2>*/}
      {/*      <h3>Pampa, Texas</h3>*/}
      {/*      <h3>Jr. Vestry Member Jan 2024 - July 2024</h3>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}

      {/*<div className="mb-10">*/}
      {/*  <h1 className="text-2xl font-bold mb-8 text-center">Service, Volunteer, and Other Experience</h1>*/}
      {/*  <h2>Pampa Independent School District </h2>*/}
      {/*  <h3>Pampa, Texas</h3>*/}
      {/*  <h3>UIL Computer Science Coach Oct 2021 - May 2023</h3>*/}
      {/*  <h2>St. Matthew&apos;s Episcopal Church </h2>*/}
      {/*  <h3>Pampa, Texas</h3>*/}
      {/*  <h3>Jr. Vestry Member Jan 2024 - July 2024</h3>*/}
      {/*</div>*/}

      {/*<div>*/}
      {/*  <h1 className="text-2xl font-bold mb-8 text-center">Other Skills</h1>*/}
      {/*</div>*/}

    </>
  )
}

export default Resume