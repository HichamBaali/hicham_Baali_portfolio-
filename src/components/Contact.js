import { useEffect, useState } from "react";
import { fatchData } from "../utilits";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };
  const [contactParams, setcontactParams] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log("changed", name, value);
    setcontactParams({
      ...contactParams,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("first", contactParams);
    emailjs
      .send(
        "service_ob2hw2j",
        "template_b2oypq8",
        contactParams,
        "KYQn6yvpbTSJcFzpl"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
    setcontactParams(initialValues);
  };

  const data = {
    name: "Hicham Baali",
    address: "Algeria",
    bio: "I'm motivated English teacher, and I'm very passionate and dedicated to my work.",
    mainSkill: "Creative English teacher",
    img: "/img/slider/avatar.webp",
    skills: [
      {
        name: "Scientific_Research",
        icon: "/img/logo/2.webp",
        color: "rgb(247, 80, 35)",
        value: 90,
      },
      {
        name: "Teaching_Skills",
        color: "rgb(28, 190, 89)",
        value: 95,
      },
      {
        name: "Soft_Skills",
        color: "rgb(128, 103, 240)",
        value: 88,
      },
    ],
    social: [
      {
        name: "facebook",
        icon: "icon-facebook-1",
        url: "https://www.facebook.com/hicham.baali.921?mibextid=ZbWKwL",
      },
      {
        name: "twitter",
        icon: "icon-twitter-1",
        url: "https://twitter.com/HichamBaaLi?t=5pD_MQZG-YKoaXCbjjN42Q&s=09",
      },
      {
        name: "linkedin",
        icon: "icon-linkedin-1",
        url: "https://www.linkedin.com/in/hicham-baali/",
      },
      {
        name: "instagram",
        icon: "icon-instagram-1",
        url: "https://www.instagram.com/hicham__baali/",
      },
    ],
    contact: {
      address: "Msila, Algeria",
      email: "hi.baali@lagh-univ.dz",
      phn: "+213 665 010 330",
    },
  };

  return (
    <div className="dizme_tm_section" id="contact">
      <div className="dizme_tm_contact">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span>Contact Me</span>
            <h3>I Want To Hear From You</h3>
            <p>
              Please fill out the form on this section to contact with me. Or
              call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday
            </p>
          </div>
          <div className="contact_inner">
            <div className="left wow fadeInLeft" data-wow-duration="1s">
              {data && data.contact && (
                <ul>
                  <li>
                    <div className="list_inner">
                      <div className="icon orangeBackground">
                        <i className="icon-location orangeText" />
                      </div>
                      <div className="short">
                        <h3>Address</h3>
                        <span>{data.contact.address}</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <div className="icon greenBackground">
                        <i className="icon-mail-1 greenText" />
                      </div>
                      <div className="short">
                        <h3>Email</h3>
                        <span>
                          <a href="#">{data.contact.email}</a>
                        </span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <div className="icon purpleBackground">
                        <i className="icon-phone purpleText" />
                      </div>
                      <div className="short">
                        <h3>Phone</h3>
                        <span>{data.contact.phn}</span>
                      </div>
                    </div>
                  </li>
                </ul>
              )}
            </div>
            <div className="right wow fadeInRight" data-wow-duration="1s">
              <div className="fields">
                <form
                  onSubmit={sendEmail}
                  // action="/"
                  // method="post"
                  className="contact_form"
                  id="contact_form"
                  autoComplete="off"
                >
                  <div
                    className="returnmessage"
                    data-success="Your message has been received, We will contact you soon."
                  />
                  <div className="empty_notice">
                    <span>Please Fill Required Fields</span>
                  </div>
                  <div className="input_list">
                    <ul>
                      <li>
                        <input
                          value={contactParams.name}
                          onChange={handleInputChange}
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Your Name"
                        />
                      </li>
                      <li>
                        <input
                          value={contactParams.email}
                          onChange={handleInputChange}
                          id="email"
                          name="email"
                          type="text"
                          placeholder="Your Email"
                        />
                      </li>
                      <li>
                        <input
                          value={contactParams.phone}
                          onChange={handleInputChange}
                          id="phone"
                          name="phone"
                          type="number"
                          placeholder="Your Phone"
                        />
                      </li>
                      <li>
                        <input
                          value={contactParams.subject}
                          onChange={handleInputChange}
                          id="subject"
                          name="subject"
                          type="text"
                          placeholder="Subject"
                        />
                      </li>
                    </ul>
                  </div>
                  <div className="message_area">
                    <textarea
                      value={contactParams.message}
                      onChange={handleInputChange}
                      id="message"
                      name="message"
                      placeholder="Write your message here"
                      defaultValue={""}
                    />
                  </div>
                  <div className="dizme_tm_button">
                    <a onClick={sendEmail} id="send_message" href="">
                      <span>Submit Now</span>
                    </a>
                  </div>
                </form>
              </div>
            </div>
            <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
              <img src="img/brushes/contact/2.png" alt="image" />
            </div>
          </div>

          <div className="dizme_tm_map wow fadeInUp" data-wow-duration="1s">
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  height={375}
                  style={{ width: "100%" }}
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=speak-IZY%20academy&t=&z=17&ie=UTF8&iwloc=&output=embed"
                />
                <a href="https://www.embedgooglemap.net/blog/divi-discount-code-elegant-themes-coupon" />
                <br />
              </div>
            </div>
          </div>
        </div>
        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
          <img src="img/brushes/contact/1.png" alt="image" />
        </div>
      </div>
    </div>
  );
};
export default Contact;
