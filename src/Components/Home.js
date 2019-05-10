import React from 'react'

function Home() {
  return <>
         <div class="top-right">
           <img src="/headshot2squared.png" alt="Mike Dilley headshot" class="img-circle" />
         </div>
         <div className="bottom-right">
           <a href="https://github.com/mddilley"><i className="fab fa-github"></i></a><span>  | </span>
           <a href="https://www.linkedin.com/in/mike-dilley"><i className="fab fa-linkedin-in"></i></a><span>  | </span>
           <a href="https://www.instagram.com/mdilley/"><i className="fab fa-instagram"></i></a><span>  | </span>
           <a href="https://www.facebook.com/mddilley"><i className="fab fa-facebook-f"></i></a><span>  | </span>
           <a href="mailto:mike.dilley@gmail.com"><i className="far fa-envelope"></i></a>
           <h2>/ / / / mike dilley</h2>
         </div>
         </>
}

export default Home;
