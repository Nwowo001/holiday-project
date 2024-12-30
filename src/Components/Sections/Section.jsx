import React, { useRef } from "react";
import "./Section.css";
import background from "../../assets/modern-office-architecture.webp";
import ButtonComponent from "../ButtonComponent/Button";
import { motion, useInView } from "framer-motion";
import ArchitecturalDesign from "../../assets/house-design-example.webp";
import urbanplanning from "../../assets/20190603_094926-cropped.webp";
import interiordesign from "../../assets/luxurious-modern-interiors-of-a-living-room-in-3d.webp";
import landscape from "../../assets/landscaping-ideas-hbx050119paint014-1675200657.webp";
import about from "../../assets/about.jpg";
import blog from "../../assets/blog.jpg";
import blog1 from "../../assets/blog 1.jpg";
import blog2 from "../../assets/blog 2.jpg";
import blog3 from "../../assets/blog 3.webp";
import blog4 from "../../assets/blog 4.jpg";
import about1 from "../../assets/about pics/about 1.jpg";
import about2 from "../../assets/about pics/about 2.jpg";
import about3 from "../../assets/about pics/about 3.jpg";
import about4 from "../../assets/about pics/about 4.jpg";
import about5 from "../../assets/about pics/about 5.jpg";
import about6 from "../../assets/about pics/about 6.jpg.webp";
import about7 from "../../assets/about pics/about 7.jpg.webp";
import about8 from "../../assets/about pics/about 8.jpg";
import about9 from "../../assets/about pics/about 9.jpg";
import about10 from "../../assets/about pics/about 10.jpg";
import about11 from "../../assets/about pics/about 11.jpg";
import about12 from "../../assets/about pics/about 12.jpg.webp";
import about13 from "../../assets/about pics/about 13.jpg";
import about14 from "../../assets/about pics/about 14.jpg.webp";
import about15 from "../../assets/about pics/about 15.jpg.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
const Section = () => {
  const aboutRef = useRef(null);
  const blogRef = useRef(null);

  const aboutInView = useInView(aboutRef, { once: true });
  const blogInView = useInView(blogRef, { once: true });

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const services = [
    {
      img: ArchitecturalDesign,
      alt: "Architectural Design",
      text: `We provide full architectural design for projects in all sectors, including residential, commercial, institutional, civic and cultural buildings. We are capable of working on new builds, extensions or renovations and our service is from concept to completion.`,
    },
    {
      img: urbanplanning,
      alt: "Urban Planning",
      text: `Our urban planning services focus on designing sustainable and efficient communities. We develop masterplans, zoning strategies, and detailed layouts that integrate seamlessly with existing landscapes.`,
    },
    {
      img: interiordesign,
      alt: "Interior Design",
      text: `We provide interior architecture and interior design services for new projects and renovations including custom furniture, joinery and lighting design.`,
    },
    {
      img: landscape,
      alt: "Landscape Architecture",
      text: `Our landscape architecture services include designing outdoor spaces that blend beauty with functionality. From gardens to urban parks, we create environments that enhance quality of life.`,
    },
  ];

  return (
    <>
      <div className="section">
        <section
          id="Home"
          className="home"
          style={{ backgroundImage: `url(${background})` }}
        >
          <motion.div
            className="content"
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
          >
            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              Modern Architectural Designs
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Explore the beauty and functionality of cutting-edge architecture.
              Discover designs that inspire creativity and redefine urban
              spaces.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <ButtonComponent
                backgroundColor="#201e50"
                fontSize="16px"
                borderRadius="8px"
                color="white"
                border="none"
                margin="0 0 0 25px"
                padding="14px 28.8px"
                cursor="pointer"
                fontFamily="Arial"
                className="learn-more"
                onClick={scrollToAbout}
              >
                Learn More
              </ButtonComponent>
            </motion.div>
          </motion.div>
        </section>
      </div>

      <motion.section
        id="About"
        ref={aboutRef}
        className="about"
        initial="hidden"
        animate={aboutInView ? "visible" : "hidden"}
        variants={fadeInVariants}
        style={{ backgroundImage: `url(${about})` }}
      >
        <h2>About Us</h2>
        <p>
          Our team of architects and designers is dedicated to creating
          innovative and sustainable spaces that inspire and transform. We
          combine aesthetics with functionality to redefine modern living and
          working environments.
        </p>
        <p>
          Studio Contra is an architectural, urban, and interior design practice
          based in Lagos, Nigeria. Committed to the delivery of innovative and
          thoughtful architecture, we work within West Africa as well as in
          collaboration with practices in other parts of the world. We strive to
          blend a contemporary African interpretation with challenging briefs
          and new contexts.
        </p>
        <p>
          Our philosophy centers on sustainable practices and a deep commitment
          to client satisfaction. Each project we undertake is a step toward
          shaping a better and more beautiful world.
        </p>
        <h2>Some Of Our Works And Collaborations</h2>
        <div className="about-pics">
          <div className="pic-container">
            <img src={about1} alt="THE PARAGON" />
            <div className="pic-title">THE PARAGON</div>
          </div>
          <div className="pic-container">
            <img src={about2} alt="ILE-OJA,OPEBI" />
            <div className="pic-title">ILE-OJA,OPEBI</div>
          </div>
          <div className="pic-container">
            <img src={about3} alt="ENDIZA PEARL APARTMENT" />
            <div className="pic-title">ENDIZA PEARL APARTMENT</div>
          </div>
          <div className="pic-container">
            <img src={about4} alt="YAZEBA COURTS" />
            <div className="pic-title">YAZEBA COURTS</div>
          </div>
          <div className="pic-container">
            <img src={about5} alt="MOTHER AND CHILD" />
            <div className="pic-title">MOTHER AND CHILD</div>
          </div>
          <div className="pic-container">
            <img src={about6} alt="THE BLOOM" />
            <div className="pic-title">THE BLOOM</div>
          </div>
          <div className="pic-container">
            <img src={about7} alt="PRIVATE RESIDENCE" />
            <div className="pic-title">PRIVATE RESIDENCE</div>
          </div>
          <div className="pic-container">
            <img src={about8} alt="IDEAL HEIGHTS" />
            <div className="pic-title">IDEAL HEIGHTS</div>
          </div>
          <div className="pic-container">
            <img src={about9} alt="THE GENTRY" />
            <div className="pic-title">THE GENTRY</div>
          </div>
          <div className="pic-container">
            <img src={about10} alt="LUXURY APARTMENT, ABIJO " />
            <div className="pic-title">LUXURY APARTMENT, ABIJO </div>
          </div>
          <div className="pic-container">
            <img src={about11} alt="PAC OFFICE, LEKKI" />
            <div className="pic-title">PAC OFFICE, LEKKI</div>
          </div>
          <div className="pic-container">
            <img src={about12} alt="ENZIDA APARTMENTS" />
            <div className="pic-title">ENZIDA APARTMENTS</div>
          </div>
          <div className="pic-container">
            <img src={about13} alt="316 CLOSE" />
            <div className="pic-title">316 CLOSE</div>
          </div>
          <div className="pic-container">
            <img src={about14} alt="KWARA IRS" />
            <div className="pic-title">KWARA IRS</div>
          </div>
          <div className="pic-container">
            <img src={about15} alt="GIOVANNI" />
            <div className="pic-title">GIOVANNI</div>
          </div>
        </div>
      </motion.section>

      <section id="Services" className="services">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial="hidden"
              whileHover={{ scale: 1.05 }}
              animate={{ opacity: 1 }}
              style={{ backgroundImage: `url(${service.img})` }}
            >
              <div className="overlay">
                <p className="service-title">{service.alt}</p>
                <p className="service-text">{service.text}</p>
                <p className="service-hover-text">
                  Explore more about our {service.alt.toLowerCase()} offerings.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <motion.section
        id="Blog"
        ref={blogRef}
        className="blog"
        initial="hidden"
        animate={blogInView ? "visible" : "hidden"}
        variants={fadeInVariants}
        style={{ backgroundImage: `url(${blog})` }}
      >
        <h2>Blog</h2>
        <p>
          Stay updated with the latest trends and insights in architecture and
          design. Our blog features expert opinions, tips, and case studies to
          keep you informed and inspired.
        </p>
        <div className="blog-pics">
          <div className="pic-container">
            <img
              src={blog1}
              alt="Studio Contra honoured among Architectural Record 2023 Design Vanguard"
            />
            <div className="pic-title">
              Studio Contra honoured among Architectural Record 2023 Design
              Vanguard
            </div>
          </div>
          <div className="pic-container">
            <img
              src={blog2}
              alt="Creative Director, Olayinka Dosekun-Adjei among judges of Dezeen Awards 2023"
            />
            <div className="pic-title">
              Creative Director, Olayinka Dosekun-Adjei among judges of Dezeen
              Awards 2023
            </div>
          </div>
          <div className="pic-container">
            <img
              src={blog3}
              alt="Studio Contra Features in Wallpaper 2022 Architects' Directory"
            />
            <div className="pic-title">
              Studio Contra Features in Wallpaper 2022 Architects' Directory
            </div>
          </div>
          <div className="pic-container">
            <img
              src={blog4}
              alt="Studio Contra among Shortlist to design £120m London School of Economics academic building with Alison Brooks Architects"
            />
            <div className="pic-title">
              Studio Contra among Shortlist to design £120m London School of
              Economics academic building with Alison Brooks Architects
            </div>
          </div>
        </div>

        <h3>Contact</h3>
        <p>
          We look forward to welcoming you to our office. Please see location
          details below or contact us on phone if you need to speak with someone
          quickly.
        </p>
        <p>
          <FontAwesomeIcon icon={faEnvelope} />
          E-mail: victornwowo@gmail.com
        </p>
        <p>
          <FontAwesomeIcon icon={faPhone} />
          Phone Number: 08051214598
        </p>
        <p>
          <FontAwesomeIcon icon={faWhatsapp} />
          WhatsApp: 08051214598
        </p>
      </motion.section>
    </>
  );
};

export default Section;
