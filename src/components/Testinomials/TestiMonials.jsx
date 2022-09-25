import React, { useEffect, useState } from "react";
import TestiMonialsDetails from "./TestiMonialsDetails";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./TestiMonials.css";
import testImg from "../../images/left-image.png";
import saloni from "../../images/saloni.jpg";
import dharanee from "../../images/dharanee.jpg";
import sneha from "../../images/sneha.jpg";
import rohan from "../../images/rohan.jpg";
import luiza from "../../images/luiza.jpg";
import maleCover from "../../images/maleCover.jpg";
import femaleCover from "../../images/femaleCover.jpg";

const TestiMonials = () => {
  const testiMonials = [
    {
      name: "Sneha",
      description:
        "It was a pleasant experience with you because you didn’t care much about the fees (even though you have the right to) and focused more on my mental health. You are easily approachable, and I honestly feel safe talking to you. Thank you for being there when I needed you the most.",
      address: "Private Secretary",
      img: femaleCover,
      gender: "female",
    },
    {
      name: "Saloni",
      description:
        "The Mind Fighter has been a life-changing platform and experience for me. Ms. Janki Nayak has been a constant support through my overcoming Anxiety and overthinking issues. I would recommend anyone who is suffering from Anxiety or Stress or any other Mental Health issue to go to The Mind Fighter for help. It has the best service I have ever experienced.",
      address: "Tax Senior at Wipfli India LLP",
      img: femaleCover,
      gender: "female",
    },
    {
      name: "Rohan Porwal",
      description:
        "You will always need a person in life who will be there for you to vent out all your feelings and emotions and find a solution to all your problems and for me that person is Janki. She is a great counselor, her sessions helped me in coping with my depression. I recommend everyone to go to her who is having any personal or mental health issues as she is a great person to talk to about all your mental healthcare needs.",
      address: "Ophthalmologist",
      img: maleCover,
      gender: "male",
    },
    {
      name: "Dharnee Patel",
      description:
        "I highly recommend counselling from Ms. Janki as she is empathetic, nonjudgmental, and understanding. It was easy to share my problem with her and she helped to overcome my anxiety with her counselling.",
      address: "Software Engineer",
      img: femaleCover,
      gender: "female",
    },
    {
      name: "Luiza DSouza",
      description:
        "I was under severe stress, and it was affecting my personal and professional life. After, meeting Ms. Janki I felt relieved as she helped me to cope with stress through stress management. With the help of meditation and counselling provided by her, I finally came out of my stress. I felt very safe and peaceful talking to her, highly recommend taking sessions from The Mind Fighter.",
      address: "Export Executive",
      img: maleCover,
      gender: "female",
    },
  ];
  //Owl Carousel Settings
  const options = {
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <section id="testimonial" className="testimonials pt-70 pb-70">
      <div className="container mt-5 mb-5">
        <h4 className="miniTitle text-center">What Our Clients Says</h4>
        <div className="row">
          <div className="col-md-12">
            <OwlCarousel
              id="customer-testimonoals"
              className="owl-carousel owl-theme test-vk"
              {...options}
            >
              {testiMonials.length === 0 ? (
                <div class="item">
                  <div class="shadow-effect">
                    <img class="img-circle" src={testImg} />

                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                      magna.
                    </p>
                  </div>
                  <div class="testimonial-name">
                    <h5>Rajon Rony</h5>
                    <small>ITALY</small>
                  </div>
                </div>
              ) : (
                testiMonials.map((testiMonialDetail) => {
                  return (
                    <TestiMonialsDetails
                      testiMonialDetail={testiMonialDetail}
                      key={testiMonialDetail._key}
                    />
                  );
                })
              )}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestiMonials;
