import React from "react";
import aboutImage from "../assets/images/banner-image.png";
import TitleComponent from "../components/title.component";

const AboutPage = () => {
  return (
    <section>
      <div className="wrapper">
        <div className="about-page">
          <div className="image">
            <img src={aboutImage} alt="" />
          </div>

          <div className="details">
            <TitleComponent
              title="LEARN ANYTHING"
              subTitle="WELCOME COMPANY NAME"
            />

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              ea error obcaecati culpa. Repellat ratione cumque cum eius magnam
              perspiciatis molestiae, velit facilis. Laborum suscipit id natus
              accusantium ut. Voluptatibus.
            </p>
            <h4>Our Vision</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              dolor temporibus corrupti quibusdam? Numquam cum, sequi,
              praesentium dolores animi ex veniam illum itaque fugit alias omnis
              voluptas quaerat quis magni!
            </p>
            <h4>Our Mission</h4>
            <ul>
              <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laudantium nesciunt assumenda
              </li>
              <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laudantium nesciunt assumenda
              </li>
              <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laudantium nesciunt assumenda
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
