import React from "react";
import mainImg from "../images/assets/Client-First - IMAGES/photo-of-woman-wearing-eyeglasses-3184405.svg";

function BlogPostSection() {
  return (
    <div className="container my-5">
      {/* Image Section */}
      <div className="row mb-5">
        <div className="col-12">
          <img src={mainImg} alt="Team at work" className="img-fluid w-100" />
        </div>
      </div>

      {/* Blog Post Content */}
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2 className="fw-bold mb-3 " style={{color:"#232536", fontFamily:"sans-serif"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </h2>
          <p className="text-muted " style={{color:"#6D6E76", fontFamily:"Inter"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
            blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
            At risus viverra adipiscing at in tellus. Sit sollicitudin nibh sit
            amet commodo. Ridiculus mus mauris vitae ultricies leo. Nascetur
            eget nulla facilisi etiam dignissim.
          </p>
        </div>
      </div>

      {/* Blog Post with Bulleted List */}
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2 className="fw-bold mb-3 "  style={{color:"#232536", fontFamily:"sans-serif"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </h2>
          <p className="text-muted " style={{color:"#6D6E76", fontFamily:"Inter"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
            blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
            At risus viverra adipiscing at in tellus. Sit sollicitudin nibh sit
            amet commodo. Ridiculus mus mauris vitae ultricies leo. Nascetur
            eget nulla facilisi etiam dignissim.
          </p>
          <p className="text-muted " style={{color:"#6D6E76", fontFamily:"Inter"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
            blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
            At risus viverra adipiscing at in tellus. Sit sollicitudin nibh sit
            amet commodo. Ridiculus mus mauris vitae ultricies leo. Nascetur
            eget nulla facilisi etiam dignissim.
          </p>
          <ul className="my-4" style={{color:"#6D6E76", fontFamily:"Inter"}}>
            <li className="mb-2">Lorem ipsum dolor sit amet</li>
            <li className="mb-2">Non blandit massa enim nec scelerisque</li>
            <li>Neque egestas congue quisque egestas</li>
          </ul>
          <p className="text-muted " style={{color:"#6D6E76", fontFamily:"Inter"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
            blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
            At risus viverra adipiscing at in tellus. Sit sollicitudin nibh sit
            amet commodo. Ridiculus mus mauris vitae ultricies leo. Nascetur
            eget nulla facilisi etiam dignissim.
          </p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2 className="fw-bold mb-3 " style={{color:"#232536", fontFamily:"sans-serif"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </h2>
          <p className="text-muted " style={{color:"#6D6E76", fontFamily:"Inter"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
            blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
            At risus viverra adipiscing at in tellus. Sit sollicitudin nibh sit
            amet commodo. Ridiculus mus mauris vitae ultricies leo. Nascetur
            eget nulla facilisi etiam dignissim.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BlogPostSection;
