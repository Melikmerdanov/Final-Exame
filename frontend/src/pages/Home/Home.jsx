import React from 'react'
import "./Home.scss"
import {Helmet} from "react-helmet"
const Home = () => {
  return (
    <div>
      <div className="section1">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Drimo - App Landing Page Template</title>
          <link rel="stylesheet" href="./Home" />
        </Helmet>
        <div className="section1__div">
          <p>Special Offer Now $10</p>
        </div>

        <div className="section1__text">
          <h2>BEST WEB HOSTING SERVER</h2>
          <h4>CREATE YOUR DOMAIN STARTED</h4>
          <p>
          It is a long established fact that a reader will be distracted by the readable content of a <br />
          page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or- <br />
          less normal distribution of letters.
          </p>
          <ul>
            <li>
              <p><i class="fa-regular fa-circle-check"></i> Summo tamquam.</p>
              <p><i class="fa-regular fa-circle-check"></i> Summo tamquam.</p>
            </li>
            <li>
              <p><i class="fa-regular fa-circle-check"></i> Summo tamquam.</p>
              <p><i class="fa-regular fa-circle-check"></i> Summo tamquam.</p>
            </li>
          </ul>
          <button>Started Now</button>
        </div>

        <div className="section1__picture">
          <img src="https://preview.colorlib.com/theme/drimo/drimo/img/banner/server-shap.png.webp" alt="" />
        </div>
      </div>
      {/* Section2 */}
      <div className="section2" id='service'>
        <span>OUR SERVICE</span>
        <div className="border"></div>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br />
        tempor incididunt ut labore et dolore magna aliqua Ut enim.
        </p>

        <div className="cards row">
          <div className="card ">
            <img src="https://preview.colorlib.com/theme/drimo/drimo/img/icon/ss-icon-1.png.webp" alt="" />
            <h5>Cloud Hosting</h5>
            <p>
            There are many variations of <br />
            passages of  Lorem Ipsum available,<br />
            but the majority have suffered.
            </p>
          </div>

          <div className="card">
            <img src="https://preview.colorlib.com/theme/drimo/drimo/img/icon/ss-icon-2.png.webp" alt="" />
            <h5>Web Hosting</h5>
            <p>
            There are many variations of <br />
            passages of  Lorem Ipsum available,<br />
            but the majority have suffered.
            </p>
          </div>

          <div className="card">
            <img src="https://preview.colorlib.com/theme/drimo/drimo/img/icon/ss-icon-3.png.webp" alt="" />
            <h5>Share Hosting</h5>
            <p>
            There are many variations of <br />
            passages of  Lorem Ipsum available,<br />
            but the majority have suffered.
            </p>
          </div>

          <div className="card">
            <img src="https://preview.colorlib.com/theme/drimo/drimo/img/icon/ss-icon-4.png.webp" alt="" />
            <h5>VPS Server</h5>
            <p>
            There are many variations of <br />
            passages of  Lorem Ipsum available,<br />
            but the majority have suffered.
            </p>
          </div>

          <div className="card">
            <img src="https://preview.colorlib.com/theme/drimo/drimo/img/icon/ss-icon-5.png.webp" alt="" />
            <h5>WHCMS</h5>
            <p>
            There are many variations of <br />
            passages of  Lorem Ipsum available,<br />
            but the majority have suffered.
            </p>
          </div>

          <div className="card">
          <img src="https://preview.colorlib.com/theme/drimo/drimo/img/icon/ss-icon-6.png.webp" alt="" />
          <h5>24/7 Support</h5>
            <p>
            There are many variations of <br />
            passages of  Lorem Ipsum available,<br />
            but the majority have suffered.
            </p>
          </div>

          <div className="card">
          <img src="https://preview.colorlib.com/theme/drimo/drimo/img/icon/ss-icon-7.png.webp" alt="" />
          <h5>Windows Hosting</h5>
            <p>
            There are many variations of <br />
            passages of  Lorem Ipsum available,<br />
            but the majority have suffered.
            </p>
          </div>

          <div className="card">
          <img src="https://preview.colorlib.com/theme/drimo/drimo/img/icon/ss-icon-8.png.webp" alt="" />
          <h5>Database Hosting</h5>
            <p>
            There are many variations of <br />
            passages of  Lorem Ipsum available,<br />
            but the majority have suffered.
            </p>
          </div>
        </div>
      </div>

      {/* Section3 */}

      <div className="section3">
        <span>HAPPY CLIENT</span>
        <div className="border"></div>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br />
        tempor incididunt ut labore et dolore magna aliqua Ut enim.
        </p>

        <div className="icons">
          <div className="icon">
            <div className="icon__div">
            <i class="fa-solid fa-briefcase"></i>
            </div>
            <div className="icon__text">
            <h2>	1172</h2>
            <p>Project Complete</p>
            </div>
          </div>
          <div className="icon">
            <div className="icon__div">
            <i class="fa-regular fa-face-smile"></i>
            </div>
            <div className="icon__text">
              <h2>1000</h2>
              <p>Happy Client</p>
            </div>
          </div>
          <div className="icon">
            <div className="icon__div">
            <i class="fa-solid fa-user-tie"></i>
            </div>
            <div className="icon__text">
            <h2>1200</h2>
            <p>Total Client’s</p>
            </div>
          </div>
          <div className="icon">
            <div className="icon__div">
            <i class="fa-solid fa-sack-dollar"></i>
            </div>
            <div className="icon__text">
            <h2>1172</h2>
            <p>Wining Award</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section4 */}

      <div className="section4" id='news'>
      <span>LATEST NEWS</span>
        <div className="border"></div>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br />
        tempor incididunt ut labore et dolore magna aliqua Ut enim.
        </p>

        <div className="cards">
          <div className="card">
            <img src="https://preview.colorlib.com/theme/drimo/drimo/img/blog/standard-blog/st-blog-1.jpg.webp" alt="" />
            <h5>Professional Website Hosting</h5>
            <p>I must explain to you how all this mistaken <br />
            idea of denouncing pleasure and praising <br />
            pain was born.
            </p>
          </div>
          <div className="card">
            <img src="https://preview.colorlib.com/theme/drimo/drimo/img/blog/standard-blog/st-blog-2.jpg.webp" alt="" />
            <h5>Professional Website Hosting</h5>
            <p>I must explain to you how all this mistaken <br />
            idea of denouncing pleasure and praising <br />
            pain was born.
            </p>
          </div>
          <div className="card">
            <img src="https://preview.colorlib.com/theme/drimo/drimo/img/blog/standard-blog/st-blog-3.jpg.webp" alt="" />
            <h5>Professional Website Hosting</h5>
            <p>I must explain to you how all this mistaken <br />
            idea of denouncing pleasure and praising <br />
            pain was born.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home