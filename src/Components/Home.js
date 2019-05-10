import React from 'react'

function Home() {
  return <>
         <div className="top-right">
           <img src="/headshot2squared.png" alt="Mike Dilley headshot" className="img-circle" />
         </div>
         <div className="bottom-right">
         <div className="desc">
          I am a web developer who finds passion in actualizing products and learning to apply new technologies. I enjoy incremental improvement and value flexibility and adaptivity in the development process.
         </div><br/>
           <a href="https://github.com/mddilley"><i className="fab fa-github"></i></a><span>  | </span>
           <a href="https://www.linkedin.com/in/mike-dilley"><i className="fab fa-linkedin-in"></i></a><span>  | </span>
           <a href="https://www.instagram.com/mdilley/"><i className="fab fa-instagram"></i></a><span>  | </span>
           <a href="https://www.goodreads.com/mddilley/"><i class="fab fa-goodreads"></i></a><span>  | </span>
           <a href="https://www.facebook.com/mddilley"><i className="fab fa-facebook-f"></i></a><span>  | </span>
           <a href="mailto:mike.dilley@gmail.com"><i className="far fa-envelope"></i></a>
           <h1>/ / / / mike dilley</h1>
         </div>
         </>
}

export default Home;
