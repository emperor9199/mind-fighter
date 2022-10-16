import React from "react";
import maleCover from "../../images/maleCover.jpg";
import femaleCover from "../../images/femaleCover.jpg";

const TestiMonialsDetails = ({ testiMonialDetail }) => {
  const { name, address, description, img, gender } = testiMonialDetail;
  return (
    <figure className="item snip1515">
      <div className="profile-image">
        <img src={gender === "male" ? maleCover : femaleCover} alt="coverImg" />
      </div>
      <figcaption className="shadow-effect shadow-effect-card">
        <h3>{name}</h3>
        {/* <h4>{address}</h4> */}
        <p>{description}</p>
      </figcaption>
    </figure>

    // <div className="item snip1515">
    //   <div className="shadow-effect">
    //     <img className="profile-image" src={img} />
    //     <p>{description}</p>
    //   </div>
    //   <div className="testimonial-name">
    //     <h5>{name}</h5>
    //     <small>{address}</small>
    //   </div>
    // </div>
  );
};

export default TestiMonialsDetails;
