import React from 'react'

function Footer() {
  return (
    <footer className="mx-auto my-4 w-full max-w-7xl px-8 py-4 text-center text-[0.8rem] text-text-secondary dark:text-d-text-secondary">
    <span>
      &copy; {new Date().getFullYear()} Anuj Gupta. Find me on{" "}
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className='underline hover:text-blue-500'
      >
        Linkedin
      </a>{" "}
      or{" "}
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className='underline hover:text-blue-500'
      >
        Twitter
      </a>
      .
      <br />
        Made with ❤️ in India
      .
    </span>
  </footer>
  )
}

export default Footer