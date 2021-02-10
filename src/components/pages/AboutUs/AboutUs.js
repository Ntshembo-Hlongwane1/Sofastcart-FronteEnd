import { useEffect } from "react";
import "./AboutUs.css";

// Components
import Breadcrumbs from "../../layout/Breadcrumb/Breadcrumb";

const path = [{ title: "About Us", link: "/about-us" }];

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: "0px" });
  });

  return (
    <>
      <Breadcrumbs route={path} />
      <div className="aboutus">
        {/* Banner */}
        <div className="aboutus__banner">
          <h3>About Us</h3>
        </div>
        {/* 3 col grid */}
        <div className="row customer_container aboutus__story">
          <div className="col-1-3 aboutus__story-a">
            <img src="./images/aboutus-1.jpg" alt="man sitting" />
            <h5>What we really do?</h5>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              deleniti inventore aspernatur, sit hic praesentium minus labore
              recusandae ducimus quo rerum dolorem. Soluta, ad ipsam?
            </p>
          </div>
          <div className="col-1-3 aboutus__story-a">
            <img src="./images/aboutus-2.jpg" alt="man jumping" />
            <h5>What we really do?</h5>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
              repellendus porro quam voluptatum cum architecto, exercitationem
              minus corporis dolor inventore.
            </p>
          </div>
          <div className="col-1-3 aboutus__story-a">
            <img src="./images/aboutus-3.jpg" alt="rnadom tools" />
            <h5>What we really do?</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto numquam rem temporibus aspernatur tenetur porro omnis
              dolore minus doloribus, nam ex tempora, ad odit autem.
            </p>
          </div>
        </div>
        {/* The team banner */}
        <div className="aboutus__employees">
          <div className="customer_container">
            <div className="aboutus__employee">
              <div className="aboutus__employee-image">
                <img src="./images/aboutus-person1.jpg" alt="ceo and founder" />
              </div>
              <p className="aboutus__employee-name">Thomas Snow</p>
              <p className="aboutus__employee-roll">Ceo Founder</p>
            </div>

            <div className="aboutus__employee">
              <div className="aboutus__employee-image">
                <img src="./images/aboutus-person2.jpg" alt="ceo and founder" />
              </div>
              <p className="aboutus__employee-name">Anna Baranov</p>
              <p className="aboutus__employee-roll">Client Care</p>
            </div>

            <div className="aboutus__employee">
              <div className="aboutus__employee-image">
                <img src="./images/aboutus-person3.jpg" alt="ceo and founder" />
              </div>
              <p className="aboutus__employee-name">Andrei Kowalsy</p>
              <p className="aboutus__employee-roll">Support Boss</p>
            </div>

            <div className="aboutus__employee">
              <div className="aboutus__employee-image">
                <img src="./images/aboutus-person4.jpg" alt="ceo and founder" />
              </div>
              <p className="aboutus__employee-name">Pamela Doe</p>
              <p className="aboutus__employee-roll">Delivery Driver</p>
            </div>

            <div className="aboutus__employee">
              <div className="aboutus__employee-image">
                <img src="./images/aboutus-person5.jpg" alt="ceo and founder" />
              </div>
              <p className="aboutus__employee-name">Susan Mcain</p>
              <p className="aboutus__employee-roll">Marketing</p>
            </div>

            <div className="aboutus__employee">
              <div className="aboutus__employee-image">
                <div
                  className="aboutus__hiring-cricle"
                  style={{
                    backgroundColor: "#FED700",
                    width: "170px",
                    height: "170px",
                    borderRadius: "50%",
                  }}
                >
                  <p className="aboutus__hiring-top">We are</p>
                  <p className="aboutus__hiring-bottom">Hiring!</p>
                </div>
                <p className="aboutus__employee-name aboutus__employee-detailBtn">
                  See Details
                </p>
              </div>
            </div>
          </div>
        </div>
        <div></div>
        {/* 2 col grid*/}
        <div className="row customer_container aboutus__story">
          <div className="col-1-2 aboutus__story-b">
            <h5>What we really do?</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
              mollitia nobis molestias et, quidem explicabo amet reprehenderit
              expedita facilis dicta eaque autem nulla provident esse nesciunt
              alias enim dolore beatae tempore adipisci quibusdam facere!
              Tempora accusamus facere, vel rem tenetur quibusdam commodi harum
              sit reiciendis dolore dolores tempore in nemo.
            </p>
          </div>
          <div className="col-1-2 aboutus__story-b">
            <h5>Our vision</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
              mollitia nobis molestias et, quidem explicabo amet reprehenderit
              expedita facilis dicta eaque autem nulla provident esse nesciunt
              alias enim dolore beatae tempore adipisci quibusdam facere!
              Tempora accusamus facere, vel rem tenetur quibusdam commodi harum
              sit reiciendis dolore dolores tempore in nemo.
            </p>
          </div>
        </div>
        {/* 2 col grid */}
        <div className="row customer_container aboutus__story">
          <div className="col-1-2 aboutus__story-b">
            <h5>What we really do?</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
              mollitia nobis molestias et, quidem explicabo amet reprehenderit
              expedita facilis dicta eaque autem nulla provident esse nesciunt
              alias enim dolore beatae tempore adipisci quibusdam facere!
              Tempora accusamus facere, vel rem tenetur quibusdam commodi harum
              sit reiciendis dolore dolores tempore in nemo.
            </p>
          </div>
          <div className="col-1-2 aboutus__story-b">
            <h5>Our vision</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
              mollitia nobis molestias et, quidem explicabo amet reprehenderit
              expedita facilis dicta eaque autem nulla provident esse nesciunt
              alias enim dolore beatae tempore adipisci quibusdam facere!
              Tempora accusamus facere, vel rem tenetur quibusdam commodi harum
              sit reiciendis dolore dolores tempore in nemo.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
