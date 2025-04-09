import React from "react";
import "./AboutUs.css";
import { FaInstagram, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { assets } from "../../assets/assets";

const AboutUs = () => {
  const team = [
    {
      name: "Gabani Dhruv",
      image: assets.about1,
      year: "TYBCA-100",
      instagram: "https://www.instagram.com/im._dhruvv?igsh=dnc3bmY3djFmd2ph",
      email: "mailto:gabanidhruv204@gmail.com",
      phone: "tel:+917016076757",
    },
    {
      name: "Utsav Kalavadiya",
      image: assets.about2,
      year: "TYBCA-110",
      instagram: "https://www.instagram.com/_utsav_03?igsh=OHFhaThtam1mOXE2",
      email: "mailto:utsav.kalavadiya05@gmail.com",
      phone: "tel:+917778800891",
    },
    {
      name: "Papaniya Dhruv",
      image: assets.about3,
      year: "TYBCA-131",
      instagram:
        "https://www.instagram.com/dhruv_ahir_0054?igsh=MTcweTh4dHUwZGowaw==",
      email: "mailto:dhruvahir140@gmail.com",
      phone: "tel:+919624415796",
    },
  ];

  return (
    <div className="aboutus" id="about">
      <h2>Meet Our Team</h2>
      <p>
        We are passionate TYBCA students working together to brew a unique
        experience with <strong>The Espresso Cafe</strong>.
      </p>
      <div className="team-container">
        {team.map((member, index) => (
          <div key={index} className="team-card">
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <p className="year">{member.year}</p>
            <div className="contact-icons">
              <a
                href={member.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a href={member.email}>
                <FaEnvelope />
              </a>
              <a href={member.phone}>
                <FaPhoneAlt />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
