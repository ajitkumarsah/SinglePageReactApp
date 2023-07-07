import React from "react";
import vg from "../assests/workingonlaptop.jpeg";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

alert("Hello Baby");
const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>Ronytech</h1>
          <p>Solutions with React</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            he application of scientific knowledge for practical purposes,
            especially in industry. "advances in computer technology" machinery
            and equipment developed from the application of scientific
            knowledge. "it will reduce the industry's ability to spend money on
            new technology" the branch of knowledge dealing with engineering or
            applied sciences.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            "advances in computer technology" machinery and equipment developed
            from the application of scientific knowledge. "it will reduce the
            industry's ability to spend money on new technology" the branch of
            knowledge dealing with engineering or applied sciences. "advances in
            computer technology" machinery and equipment developed from the
            application of scientific knowledge. "it will reduce the industry's
            ability to spend money on new technology" the branch of knowledge
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{ animationDelay: "0.5s" }}>
              <AiFillAmazonCircle />
              <p>Amazone</p>
            </div>
            <div style={{ animationDelay: "0.7s" }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div style={{ animationDelay: "1s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
