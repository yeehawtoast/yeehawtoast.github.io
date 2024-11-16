
function Contact() {
  return (
    <>
      <div className="py-20 my-20">
        <div className="mx-auto px-4">
          <h1 className="text-3xl font-bold mb-16 text-center font-space-mono">Connect With Me</h1>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-12 place-items-center">
            <a className="text-x1 md:text-2xl text-gray-400 font-bold " href="https://github.com/yeehawtoast">
              <img src="/github.svg" alt="Connect" className="size-24" />
              Github
            </a>
            <a className="text-x1 md:text-2xl text-gray-400 font-bold" href="">
              <img src="/resume.svg" alt="Connect" className="size-24" />
              Resume</a>
            <a className="text-x1 md:text-2xl text-gray-400 font-bold"
               href="http://linkedin.com/in/christopher-smith-508347148">
              <img src="/linkedin.svg" alt="Connect" className="size-24" />
              LinkedIn
            </a>
            <a className="text-x1 md:text-2xl text-gray-400 font-bold" href="mailto:cpsmith96@gmail.com">
              <img src="/mail.svg" alt="Connect" className="size-24" />
              Contact
            </a>
            <a className="text-x1 md:text-2xl text-gray-400 font-bold" href="https://dev.to/yeehawtoast">
              <img src="/blog.svg" alt="Blog" className="size-24" />
              Blog
            </a>
            <a className="text-x1 md:text-2xl text-gray-400 font-bold" href="https://instagram.com/chrispybacon_">
              <img src="/fb.svg" alt="Facebook" className="size-24" />
              Meta
            </a>
          </div>

        </div>
      </div>
    </>
  )
}

export default Contact