import React from "react";

const TestiMonialsDetails = ({ testiMonialDetail }) => {
  const { name, address, description, img } = testiMonialDetail;
  console.log("testiMonialDetail" + testiMonialDetail);
  return (
    <figure className="item snip1515">
      <div className="profile-image">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample47.jpg"
          alt="sample47"
        />
      </div>
      <figcaption className="shadow-effect shadow-effect-card">
        <h3>{name}</h3>
        <h4>{address}</h4>
        <p>
        {description}
        </p>
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
