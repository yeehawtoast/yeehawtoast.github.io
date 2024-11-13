
function Home(){
  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center max-w-4xl mx-auto px-4">
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-2 tracking-tighter leading-none text-shadow-glow-subtle">
            <span className="font-serif italic font-normal">Christopher</span> Smith
          </h1>
          <p className="text-x1 md:text-2xl font-semibold mb-8">
            <span className="text-[#C9C9C9]">Software Developer & </span>
            <span className="bg-gradient-to-r from-[#9C83FF] to-[#FF9051] text-transparent bg-clip-text">Educator</span>
          </p>
          <div className="flex justify-center space-x-4 mb-12">
            <a href="https://github.com/yeehawtoast">
              <button className="bg-amber-500 px-3 py-1 rounded text-black text-xl items-center space-x-2">Github
              </button>
            </a>
            <a href="mailto:cpsmith96@gmail.com">
              <button className="bg-blue-500 px-3 py-1 rounded text-black text-xl items-center space-x-2">Contact Me
              </button>
            </a>
          </div>
        </div>
      </div>

    </>
  );
}

export default Home;