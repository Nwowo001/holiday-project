import React, { useRef, useState } from "react";
import "./Section.css";
import background from "../../assets/modern-office-architecture.webp";
import ButtonComponent from "../ButtonComponent/Button";
import { motion, useInView } from "framer-motion";
import ArchitecturalDesign from "../../assets/house-design-example.webp";
import urbanplanning from "../../assets/20190603_094926-cropped.webp";
import interiordesign from "../../assets/luxurious-modern-interiors-of-a-living-room-in-3d.webp";
import landscape from "../../assets/landscaping-ideas-hbx050119paint014-1675200657.webp";

const Section = () => {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const blogRef = useRef(null);

  const aboutInView = useInView(aboutRef, { once: true });
  const blogInView = useInView(blogRef, { once: true });

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  const services = [
    { img: ArchitecturalDesign, alt: "Architectural Design" },
    { img: urbanplanning, alt: "Urban Planning" },
    { img: interiordesign, alt: "Interior Design" },
    { img: landscape, alt: "Landscape Architecture" },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

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
      >
        <h2>About Us</h2>
        <p>
          Our team of architects and designers is dedicated to creating
          innovative and sustainable spaces that inspire and transform. We
          combine aesthetics with functionality to redefine modern living and
          working environments.
        </p>
      </motion.section>
      <section id="Services" ref={servicesRef} className="services">
        <h2>Our Services</h2>
        <div className="slider">
          <button className="prev" onClick={prevSlide}>
            &#8592;
          </button>
          <motion.div
            className="slide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={services[currentSlide].img}
              alt={services[currentSlide].alt}
              className="service-img"
            />
            <p className="service-text">{services[currentSlide].alt}</p>
          </motion.div>
          <button className="next" onClick={nextSlide}>
            &#8594;
          </button>
        </div>
      </section>
      <motion.section
        id="Blog"
        ref={blogRef}
        className="blog"
        initial="hidden"
        animate={blogInView ? "visible" : "hidden"}
        variants={fadeInVariants}
      >
        <h2>Blog</h2>
        <p>
          Stay updated with the latest trends and insights in architecture and
          design. Our blog features expert opinions, tips, and case studies to
          keep you informed and inspired.
        </p>
      </motion.section>
    </>
  );
};

export default Section;
