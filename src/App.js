import "./App.css";
import Navbar from "./components/Navbar";
import linkImage from "./images/Vector 2.png";
import linkImage2 from "./images/Frame 29546.png";

function App() {
  return (
    <>
      <div className="hero-section">
        <Navbar />
        <div className="container mt-2 text-center hero_box">
          <h1 className="fw-bold">
            Optimize Your Online Experience with Our Advanced{" "}
            <span className="text-primary">URL Shortening</span> Solution
          </h1>
          <p className="small hero_text">
            Personalize your shortened URLs to align with your brand identity.
            Utilize custom slugs, branded links, and domain customization
            options to reinforce your brand presence and enhance user
            engagement.
          </p>
          <div className="mb-5 mt-5">
            <button className="btn btn-primary me-5">Sign Up</button>
            <button className="btn btn-outline-primary">Learn more</button>
          </div>
          <img src={linkImage} alt="a vec" className="img-fluid" />
          <img src={linkImage2} alt="a vec2" className="img-fluid image2" />
        </div>
      </div>
      <div className="rate_feature">
        <div className="container p-4">
          <div className="row">
            <div className="col-lg-4">
              <p>One Stop.</p>
              <p>
                Four <span className="text-primary">Possibilities</span>.
              </p>
            </div>
            <div className="col-lg-8 text-center">
              <div className="row">
                <div className="col-3">
                  <p className="fw-bold h3">3M</p>
                  <p className="small">Active users</p>
                </div>
                <div className="col-3">
                  <p className="fw-bold h3">60M</p>
                  <p className="small">
                    Links & QR <br /> codes created
                  </p>
                </div>
                <div className="col-3">
                  <p className="fw-bold h3">1B</p>
                  <p className="small">
                    Clicked & Scanned <br /> connections
                  </p>
                </div>
                <div className="col-3">
                  <p className="fw-bold h3">300K</p>
                  <p className="small">Apps integrations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about_section mt-5">
        <div className="container p-4">
          <div className="row">
            <div className="col-lg-4">
              <p className="fw-medium display-6">
                <span className="vr"></span> Why choose <span className="text-primary">cutIT</span>
              </p>
              <p className="small">
                cutIT is the hub of everything that has to do with your link
                management. We shorten your URLs, allow you creating custom ones
                for your personal, business, event usage. Our swift QR code
                creation, management and usage tracking with advance analytics
                for all of these is second to none.
              </p>
            </div>
            <div className="col-lg-8 ps-5">
              <div className="row">
                <div className="col-lg-6">
                  <div className="icon"></div>
                  <p className="h4">URL Shortening</p>
                  <p className="small">cutIT allows you to shorten URLs of your business, events. Shorten your URL at scale, URL redirects.</p>
                </div>
                <div className="col-lg-6">
                  <div className="icon"></div>
                  <p className="h4">Custom URLs</p>
                  <p className="small">With cutIT, you can create custom URLs, with the length you want! A solution for socials and businesses.</p>
                </div>
                <div className="col-lg-6">
                  <div className="icon"></div>
                  <p className="h4">QR Codes</p>
                  <p className="small">Generate QR codes to your business, events. Bring your audience and customers to your doorstep with this scan and go solution.</p>
                </div>
                <div className="col-lg-6">
                  <div className="icon"></div>
                  <p className="h4">Data Analytics</p>
                  <p className="small">Receive data on the usage of either your shortened URL, custom URLs or generated QR codes. Embedded to monitor progress.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
