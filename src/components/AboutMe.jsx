
function AboutMe() {
  return (
    <>
      <div className="pb-20 mb-20">
        <div className="mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center font-serif">About me</h2>
          <div className="flex flex-col md:flex-row items-center md:items-start justify-center space-y-8 md:space-y-0 md:space-x-12">
            <div className="">
              <img className="w-[250px] h-[250px] rounded-full object-cover" src="../../public/me.jpg" alt="Christopher Smith" />
            </div>
            <div className="max-w-2xl text-center md:text-left">

              <p>Hi there! 👋 I am a software Engineer and system developer with 3+ years of experience in teaching,
                designing, building, and maintaining systems at scale for internal business partners, and for clients abroad.</p>
              <br/>
              <p>I am also passionate about education: I was a distinguished educator, a computer science academic team
              coach, and a league of legends esports coach.</p>
              <br/>
              <p>When I am not working in C# or Go, I am probably supporting business actions in SAP ABAP, or building
                client services on the frontend with Javascript.</p>
              <br/>
              <p>In a previous life, I studied communications and communications theory, employment law, and intersections on comms theory and liberation theology. From this, I have published several papers and occasionally publish a blog related to these ideas</p>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
export default AboutMe;