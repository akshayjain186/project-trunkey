import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CardTitle,
  Form,
} from "reactstrap";

import "./home.scss";


import shoppingCart from "../../../assets/images/shopping-cart.png";
import monitor from "../../../assets/images/monitor.png";
import lines from "../../../assets/images/sort.png";
import phone from "../../../assets/images/phone-call.png";
import telephone from "../../../assets/images/old-typical-phone.png";
import pinterest from "../../../assets/images/p-Photoroom.png";
import cross from "../../../assets/images/cross-Photoroom.png";
import data from "../../../assets/images/data-Photoroom.png";
import ebay from "../../../assets/images/ebay-Photoroom.png";
import redbull from "../../../assets/images/redbull-Photoroom.png";
import zendesk from "../../../assets/images/zendesk-Photoroom.png";
import jazz from "../../../assets/images/jazz-Photoroom.png";
import rh from "../../../assets/images/rh-Photoroom.png";
import quality from "../../../assets/images/qaulity.png";
import efficiency from "../../../assets/images/efficiency.png";
import honesty from "../../../assets/images/honesty.png";
import creative from "../../../assets/images/creative.png";
import time from "../../../assets/images/time.png";
import wallet from "../../../assets/images/wallet .png";
import pencil from "../../../assets/images/pencil.png";
import gallery from "../../../assets/images/gallery.png";
import img11 from "../../../assets/images/img11.jpg";
import img2 from "../../../assets/images/img2.jpg";
import img3 from "../../../assets/images/img3.jpg";
import img4 from "../../../assets/images/img4.jpg";
import img55 from "../../../assets/images/img55.jpg";

// First slider Images
const items = [
  {
    id: "1",
    src: img11,
    altText: "Slide 1",
    caption: "Marketing Solutions",
  },
  {
    id: "2",
    src: img2,
    altText: "Slide 2",
    caption: "Lead Management",
  },
  {
    id: "3",

    src: img3,
    altText: "Slide 3",
    caption: "Estimates",
  },
  {
    id: "4",
    src: img4,
    altText: "Slide 4",
    caption: "Proposals",
  },
  {
    id: "5",
    src: img55,
    altText: "Slide 5",
    caption: "Project Management",
  },
  {
    id: "6",
    src: img2,
    altText: "Slide 2",
    caption: "Lead Management",
  },
  {
    id: "7",
    src: img2,
    altText: "Slide 2",
    caption: "Lead Management",
  },
  {
    id: "8",
    src: img2,
    altText: "Slide 2",
    caption: "Lead Management",
  },
  {
    id: "9",
    src: img2,
    altText: "Slide 2",
    caption: "Lead Management",
  },
  {
    id: "10",
    src: img2,
    altText: "Slide 2",
    caption: "Lead Management",
  },
  {
    id: "12",
    src: img2,
    altText: "Slide 2",
    caption: "Lead Management",
  },
  {
    id: "13",
    src: img2,
    altText: "Slide 2",
    caption: "Lead Management",
  },
];

//second slider images
const imageitems = [
  {
    id :"1",
    src: img11,
    altText: "Slide 1",
    caption: "Construction Management Software",
    key: 1,
  },
  {
    id :"2",
    src: img2,
    altText: "Slide 2",
    caption: "Interior Design Software",
    key: 2,
  },
  {
    id :"3",
    src: img3,
    altText: "Slide 3",
    caption: "Construction Project Management",
    key: 3,
  },
  {
    id :"4",
    src: img4,
    altText: "Slide 4",
    caption: "General Contractor Software",
    key: 4,
  },
  {
    id :"5",
    src: img55,
    altText: "Slide 5",
    caption: "Solar Business Software",
    key: 5,
  },
  {
    id :"6",
    src: img2,
    altText: "Slide 2",
    caption: "Roofing Leads",
    key: 2,
  },
  {
    id :"7",
    src: img2,
    altText: "Slide 2",
    caption: "Lead Management",
    key: 2,
  },
  {
    id :"8",
    src: img2,
    altText: "Slide 2",
    caption: "Lead Management",
    key: 2,
  },
  {
    id :"9",
    src: img2,
    altText: "Slide 2",
    caption: "Lead Management",
    key: 2,
  },
  {
    id :"10",
    src: img2,
    altText: "Slide 2",
    caption: "Lead Management",
    key: 2,
  },
  {
    id :"11",
    src: img2,
    altText: "Slide 2",
    caption: "Lead Management",
    key: 2,
  },
  {
    id :"12",
    src: img2,
    altText: "Slide 2",
    caption: "Lead Management",
    key: 2,
  },
];

const Design = () => {
  // first image slider code
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [itemsPerSlide, setItemsPerSlide] = useState(6);

  const next = () => {
    if (animating) return; 
    if (activeIndex + itemsPerSlide >= items.length) return; 
    setActiveIndex(activeIndex + 1);
  };

  const previous = () => {
    if (animating) return; 
    if (activeIndex <= 0) return; 
    setActiveIndex(activeIndex - 1);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 576) {
        setItemsPerSlide(1); // Show 1 image per slide on small screens
      } else if (window.innerWidth < 768) {
        setItemsPerSlide(3); // Show 2 images per slide on medium screens
      } else {
        setItemsPerSlide(6); // Show 3 images per slide on larger screens
      }
    };

    // Call handleResize initially and on resize
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slides1 = [];
  for (let i = 0; i < items.length - itemsPerSlide + 1; i++)  {
    slides1.push(
      <CarouselItem
        key={[i]}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
       
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
            padding: "40px",
            height: "auto", // Make sure height is consistent
          }}
        >
           {items.slice(i, i + itemsPerSlide).map((item) => (
            <div
              key={item.id} // Use item.id for consistency
              style={{
                textAlign: "center",
                flex: "1",
                display: "flex", // Added to ensure uniformity
                flexDirection: "column", // Added to align image and caption properly
                justifyContent: "center", // Center the content
              }}
            >
              <img
                src={item.src}
                alt={item.altText}
                style={{
                  width: "100%",
                  height: "100px",
                  objectFit: "cover",
                  borderRadius: "3px",
                }}
              />
              <p
                style={{
                  fontWeight: "600",
                  color: "#000000",
                  fontSize: "10px",
                  backgroundColor: "white",
                  padding: "10px",
                  borderRadius: "3px",
                }}
              >
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </CarouselItem>
    );
  }

  // Second slider code
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [itemsSlide, setItemsSlide] = useState(6);

  const goToNextSlide = () => {
    if (isAnimating) return;
        if (currentSlideIndex + itemsSlide >= imageitems.length) return;
    setCurrentSlideIndex(currentSlideIndex + 1);
  };

  const goToPreviousSlide = () => {
    if (isAnimating) return;
if (currentSlideIndex <= 0) return;
    setCurrentSlideIndex(currentSlideIndex - 1);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 576) {
        setItemsSlide(1); // Show 1 image per slide on small screens
      } else if (window.innerWidth < 768) {
        setItemsSlide(3); // Show 2 images per slide on medium screens
      } else {
        setItemsSlide(6); // Show 3 images per slide on larger screens
      }
    };

    // Call handleResize initially and on resize
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const carouselSlides = [];

  for (let i = 0; i < imageitems.length - itemsSlide +1 ; i++) {
    carouselSlides.push(
      <CarouselItem
        key={i}
        onExiting={() => setIsAnimating(true)}
        onExited={() => setIsAnimating(false)}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
            padding: "40px",
            height: "auto",
          }}
        >
          {imageitems.slice(i, i + itemsSlide).map((item) => (
            <div
              key={item.id}
              style={{
                textAlign: "center",
                flex: "1",
                display: "flex", // Added to ensure uniformity
                flexDirection: "column", // Added to align image and caption properly
                justifyContent: "center", // Center the content
              }}
            >
              <img
                src={item.src}
                alt={item.altText}
                style={{
                  width: "100%",
                  height: "100px",
                  objectFit: "cover",
                  borderRadius: "3px",
                }}
              />
              <p
                 style={{
                  fontWeight: "600",
                  color: "#000000",
                  fontSize: "10px",
                  backgroundColor: "white",
                  padding: "10px",
                  borderRadius: "3px",
                }}
              >
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </CarouselItem>
    );
  }

  const slides = [
    "Ahsell",
    "Noorfloor",
    "Brodrene Dahi",
    "Heidenrik",
    "Elektro importoren",
    "VVS Experten",
    "VVS Experten",
    "VVS Experten",
    "VVS Experten",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(6);

  useEffect(() => {
    const updateVisibleSlides = () => {
      if (window.innerWidth < 576) {
        setVisibleSlides(2);
      } else if (window.innerWidth < 768) {
        setVisibleSlides(3);
      } else if (window.innerWidth < 992) {
        setVisibleSlides(4);
      } else {
        setVisibleSlides(6);
      }
    };

    updateVisibleSlides();
    window.addEventListener("resize", updateVisibleSlides);

    return () => {
      window.removeEventListener("resize", updateVisibleSlides);
    };
  }, []);

  const updateSlidePosition = () => {
    const slideTrack = document.querySelector(".slide-track");
    const offset = -currentIndex * (100 / visibleSlides);
    if (slideTrack) {
      slideTrack.style.transform = `translateX(${offset}%)`;
    }
  };

  const moveSlide = (direction) => {
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + direction;

      // Prevent wrapping around
      if (newIndex < 0) {
        newIndex = 0;
      } else if (newIndex > slides.length - visibleSlides) {
        newIndex = slides.length - visibleSlides;
      }

      return newIndex;
    });
  };

  useEffect(() => {
    updateSlidePosition();
  }, [currentIndex, visibleSlides]);

  const showPrevButton = currentIndex > 0;
  const showNextButton = currentIndex < slides.length - visibleSlides;

  return (
    <div className="container-fluid">
      {/* Slogan and Heading */}
      <div className="slogan-heading">
        <div className="row p-5">
          <div className="col-12 col-md-8 mx-auto text-start ms-2">
            <h1 className="all-h1-tags">
              Some slogan text or heading <br /> here
            </h1>
            <p className="all-p-tags">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>

      {/* Small Jobs */}
      <div className="row mt-5">
        <div className="col-12 col-md-11 mx-auto text-start">
          <h3 className="all-h3-tags">Small jobs for your next project</h3>
          <p style={{ color: "#555555" }}>
            If you want specific work for your project - pick the designation
            you need and we'll find the best professional for you
          </p>
          <div className="row mt-4">
            <div className="col-6 col-md-3">
              <button className="btn-light text-start buttons">
                <span> Carpenter and building tradesmen</span>
              </button>
            </div>
            <div className="col-6 col-md-3">
              <button className="btn-light text-start buttons">
                <span>Plumber</span>
              </button>
            </div>
            <div className="col-6 col-md-3 mb-3">
              <button className="btn-light text-start buttons">
                <span>Electrician</span>
              </button>
            </div>
            <div className="col-6 col-md-3">
              <button
                className="btn text-start"
                style={{
                  border: "1px solid #000000",
                  color: "#000000",
                  width: "100%",
                  height: "50px",
                }}
              >
                <span>See all designations</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Larger Projects */}
      <div className="row mb-5 mt-5">
        <div className=" col-12 col-md-11 mx-auto text-start ">
          <h3 className="all-h3-tags">Go for larger projects</h3>
          <p className="all-p-tags">
            Do you need full room renovation or new home from scratch? You'll
            definitely find the best workers from professionals database
          </p>
          <div className="row mt-4">
            <div className="col-6 col-md-3">
              <button className=" btn-light w-100 text-start buttons">
                <span> Bathroom renovation</span>
              </button>
            </div>{" "}
            <div className="col-6 col-md-3 ">
              <button className=" btn-light w-100 text-start buttons">
                <span>Facade work</span>
              </button>
            </div>{" "}
            <div className="col-6 col-md-3 ">
              <button className="btn-light w-100 text-start buttons">
                <span>Build a garage</span>
              </button>
            </div>
            <div className="col-6 col-md-3 ">
              <button
                className="btn w-100 text-start "
                style={{
                  border: "1px solid #000000",
                  color: "#000000",
                  width: "100%",
                  height: "50px",
                }}
              >
                <span> See all services</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* About Us and Stats */}

      <div className="about col-12 mb-4 text-start">
        <h3 style={{ marginLeft: "50px" }}>
          About us, services, what you can do here
        </h3>
        <p style={{ marginLeft: "50px", fontWeight: "bold" }}>
          Aim, goals, what we have: professionals database, calculator, shop
        </p>
      </div>
      <div className="about-background col-md-11 ms-5">
        <div className="row justify-content-between">
          <div className="col-12 col-md-5 p-5 custom-margin">
            <h2>
              We are a digital design agency and we bring business ideas to
              life.
            </h2>
            <p className="all-p-tags">
              Sad porttitor lacus nibh. Cras ultricies ligula sed magna dictum
              porta. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar
              a.
            </p>
            <button className="About-btn">Learn More</button>
          </div>
          <div className="col-12 col-md-4 py-4">
            <div className="row">
              <div className="col-6 col-md-6 col-lg-5 p-2">
                <div className=" p-3 text-center bg-dark">
                  <h4 className="fs-2 text-light">12</h4>
                  <p className="text-light">Countries</p>
                </div>
              </div>
              <div className="col-6 col-md-6 col-lg-5 p-2">
                <div className="p-3 bg-light text-center">
                  <h4 className="fs-2 text-dark">234</h4>
                  <p className="text-dark">Projects</p>
                </div>
              </div>
              <div className="col-6 col-md-6 col-lg-5 p-2">
                <div className="p-3 bg-light text-center">
                  <h4 className="fs-2 text-dark">2038</h4>
                  <p className="text-dark">Cup Coffee</p>
                </div>
              </div>
              <div className="col-6 col-md-6 col-lg-5 p-2">
                <div className=" p-3 text-center bg-dark">
                  <h4 className="fs-2 text-light">8</h4>
                  <p className="text-light">Team Members</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Advantages */}
      <div className="row mb-5 mt-5">
        <div className="product col-md-11 mx-auto text-start ">
          <h3 className="all-h3-tags">Advantages, why us</h3>
          <div className=" col-md-12 row py-5 ms-5 d-flex justify-content-between">
            <div class="col-12 col-md-6 mt-5">
              <div class="row g-5 mt-4">
                <div class="why-us col-4 col-md-3 text-center">
                  <div class="stat-item1">
                    <img src={wallet} alt="" />
                  </div>
                  <div class="Advantages-threeDiv">SAVE MONEY</div>
                </div>
                <div class="why-us col-4 col-md-3 text-center">
                  <div class="stat-item1">
                    <img src={pencil} alt="" />
                  </div>
                  <div class="Advantages-threeDiv">WEBSITE TAILORED</div>
                </div>
                <div class="why-us col-4 col-md-3 text-center">
                  <div class="stat-item1">
                    <img src={time} alt="" />
                  </div>
                  <div class="Advantages-threeDiv">SAVE TIME</div>
                </div>
              </div>
            </div>

            <div className="col-md-5 me-5">
              <div className="row main-advantage">
                <div
                  className="row"
                  style={{
                    borderBottom: "1.4px solid #444546",
                    paddingBottom: "10px",
                  }}
                >
                  <div className="col-12 col-md-5 p-2">
                    <div className="advantage p-2 text-start">
                      <div className="boxes-image">
                        <img src={creative} alt="" style={{ width: "25px" }} />
                      </div>
                      <div className="boxes">
                        <h6 className="fs-5 text-start">Creativity</h6>
                        <p className="fs-6 text-start">
                          Lorem ipsum dolor sit lorem Lorem ipsum dolor sit.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-5 p-2">
                    <div className="advantage p-2 text-start">
                      <div className="boxes-image">
                        <img src={honesty} alt="" style={{ width: "25px" }} />
                      </div>
                      <div className="boxes">
                        <h6 className="fs-5 text-start">Honesty</h6>
                        <p className="fs-6 text-start">
                          Lorem ipsum dolor sit lorem Lorem ipsum dolor sit.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-5 p-2">
                    <div className="advantage p-2 text-start">
                      <div className="boxes-image">
                        <img
                          src={efficiency}
                          alt=""
                          style={{ width: "25px" }}
                        />
                      </div>
                      <div className="boxes">
                        <h6 className="fs-5 text-start">Efficiency</h6>
                        <p className="fs-6 text-start">
                          Lorem ipsum dolor sit lorem Lorem ipsum dolor sit.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 col-md-5 p-2">
                    <div className="advantage p-2 text-start">
                      <div className="boxes-image">
                        <img src={quality} alt="" style={{ width: "25px" }} />
                      </div>
                      <div className="boxes">
                        <h6 className="fs-5 text-start">Quality</h6>
                        <p className="fs-6 text-start">
                          Lorem ipsum dolor sit lorem Lorem ipsum dolor sit.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team section */}
      <div className="row mb-5 mt-5">
        <div className="team col-md-12 mx-auto text-center ">
          <h3 className="all-h3-tags">
            We are a team of creatives our biggest <br /> passion is creating
            unique Child Themes
          </h3>
          <p style={{ color: "#c9c9c9" }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores
            est quod nemo!
          </p>
          <hr
            style={{
              border: "1px solid rgb(229 229 229) ",
              width: "20%",
              margin: "auto",
            }}
          />
          <div className="card-background  row mt-5 mx-auto d-flex justify-content-center">
            <div
              className="col-10 col-md-3 "
              style={{
                background: "linear-gradient(to bottom ,#f9f9f9, #f5f4f4)",
              }}
            >
              <div className="card p-3 text-center">
                <img src={lines} alt="" className="mx-auto" />
                <h5 className="card-title mt-4">Easy to use</h5>
                <p className="card-text1">
                  Expertise in various construction projects, from small repairs
                  to major.
                </p>
              </div>
            </div>

            <div
              className="col-10 col-md-3"
              style={{
                background: "linear-gradient(to bottom , #f9f9f9, #f5f4f4)",
              }}
            >
              <div className="card p-3 text-center">
                <img src={shoppingCart} alt="" className="mx-auto" />
                <h5 className="card-title mt-4">WooCommerce Integration</h5>
                <p className="card-text1">
                  Professional painting services to give your spaces a fresh
                  look.
                </p>
              </div>
            </div>

            <div
              className="col-10 col-md-3"
              style={{
                background: "linear-gradient(to bottom ,#f9f9f9, #f5f4f4)",
              }}
            >
              <div className="card p-3 text-center">
                <img src={monitor} alt="" className="mx-auto" />
                <h5 className="card-title mt-4">Pixel Perfect</h5>
                <p className="card-text1">
                  Comprehensive maintenance services for home and office needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Product */}
      <div className="row mb-5 mt-5">
        <div className="product col-md-11 mx-auto text-start ">
          <h3 className="all-h3-tags">Our best seller products</h3>

          <div className="row mt-2 justify-content-center">
            <div className="row mt-5 justify-content-center">
              <div className="col-md-12">
                <div className="product-container">
                  <div className="product-card text-start">
                    <div className="product-image">
                      <img src={img11} alt="Product 1" className="img-fluid" />
                    </div>
                    <h5 className="card-title">Product 1</h5>
                    <h6>Description or shop</h6>
                    <p className="card-price mt-3">3250 kr</p>
                  </div>

                  <div className="product-card text-start">
                    <div className="product-image">
                      <img src={img2} alt="Product 2" className="img-fluid" />
                    </div>
                    <h5 className="card-title">Product 2</h5>
                    <h6>Description or shop</h6>
                    <p className="card-price mt-3">3250 kr</p>
                  </div>

                  <div className="product-card text-start">
                    <div className="product-image">
                      <img src={img3} alt="Product 3" className="img-fluid" />
                    </div>
                    <h5 className="card-title">Product 3</h5>
                    <h6>Description or shop</h6>
                    <p className="card-price mt-3">3250 kr</p>
                  </div>

                  <div className="product-card text-start">
                    <div className="product-image">
                      <img src={img4} alt="Product 4" className="img-fluid" />
                    </div>
                    <h5 className="card-title">Product 4</h5>
                    <h6>Description or shop</h6>
                    <p className="card-price mt-3">3250 kr</p>
                  </div>

                  <div className="product-card text-start">
                    <div className="product-image">
                      <img src={img55} alt="Product 5" className="img-fluid" />
                    </div>
                    <h5 className="card-title">Product 5</h5>
                    <h6>Description or shop</h6>
                    <p className="card-price mt-3">3250 kr</p>
                  </div>

                  <div className="product-card text-start">
                    <div className="product-image">
                      <img src={img11} alt="Product 6" className="img-fluid" />
                    </div>
                    <h5 className="card-title">Product 6</h5>
                    <h6>Description or shop</h6>
                    <p className="card-price mt-3">3250 kr</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shop */}
      <div className="row mb-5 mt-5">
        <div className="product col-md-11 mx-auto text-start ">
          <h3 className="all-h3-tags">Shops</h3>
          <div className="slider col-md-11">
            <div
              className="slide-track"
              style={{ transition: "transform 0.5s ease" }}
            >
              {slides.map((slide, index) => (
                <div className="slide col-md-2" key={index}>
                  <h3>{slide}</h3>
                </div>
              ))}
            </div>
            <button
              className="slider-btn prev1"
              onClick={() => moveSlide(-1)}
              disabled={!showPrevButton}
            >
              <span className="icon-prev"></span>
            </button>
            <button
              className="slider-btn next1"
              onClick={() => moveSlide(1)}
              disabled={!showNextButton}
            >
              <span className="icon-next"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Gallery */}

      <div className="row mb-5 mt-5">
        <div className="product col-md-11 mx-auto text-start ">
          <h3 className="all-h3-tags">
            References, examples of renovations (gallery)
          </h3>
          <div className="gallery mt-4 ms-5">
            <img src={gallery} alt="" />
          </div>
        </div>
      </div>

      {/* intro */}
      {/* <div className="row mb-5 mt-5"> */}
        <div className="intro col-md-11  mx-auto text-start">
          <h3 className="all-h3-tags">(Intro for Pros)</h3>
        </div>

        {/* First image slider */}
        <div className="row mt-5 p-4" style={{ backgroundColor: "#edf6fc" }}>
          <div className="d-flex justify-content-between">
            <div className="ms-5">
              <CardTitle>Try New Tools for Pros</CardTitle>
            </div>
            <div className="me-5">
              <a href="" className="link-success">
                Learn More
              </a>
            </div>
          </div>

          <div className="col-md-12">
            <Carousel
              activeIndex={activeIndex}
              next={next}
              previous={previous}
              interval={false}
            >
              {slides1}
              <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={previous}
                disabled={animating || activeIndex === 0}
              />
              <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={next}
                disabled={animating || activeIndex + itemsPerSlide >= items.length} 
              />
            </Carousel>
          </div>

          {/* second image slider  */}
          <div className="mt-5 ms-5">
            <CardTitle>Software for Contractors and Design Pros</CardTitle>
          </div>
          <div className="col-md-12">
            <Carousel
              activeIndex={currentSlideIndex}
              next={goToNextSlide}
              previous={goToPreviousSlide}
              interval={false}
            >
              {carouselSlides}
              <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={goToPreviousSlide}
                disabled={isAnimating || currentSlideIndex === 0}
              />
              <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={goToNextSlide}
                disabled={isAnimating || currentSlideIndex + itemsSlide >= imageitems.length} 
              />
            </Carousel>
          </div>
        </div>
      {/* </div> */}

      {/* About */}

      <div className="row mb-5 mt-5">
        <div className="product col-md-11 mx-auto text-start">
          <h3 className="all-h3-tags">About Portal</h3>
          <p className="all-p-tags">Portal description, screenshots</p>
        </div>
      </div>

      {/* testimonials */}

      <div className="row mb-5 mt-5">
        <div class="container mt-5">
          <h3 style={{ fontWeight: "bold" }}>Testimonials? Some statistic</h3>
          <div class="row main-container mt-4">
            <div class="testimonial col-11 col-md-5">
              <div class="p-3 text-center">
                <h4 class="cruise-image">Cruise</h4>
                <p class="card-text text-start fs-6 fw-bold">
                  Expertise in various construction projects, from small repairs
                  to major builds. Expertise in various projects, from small
                  repairs to major builds.
                </p>
                <h5 class="card-title mt-4">Adrian Macneil</h5>
                <p className="all-p-tags">
                  Director of Infrastructure Engineering at Cruise
                </p>
              </div>
            </div>

                      <div className="col-11 col-md-6 text-center new-company">
          <div class="stats-section p-4 ">
              <h2 class=" text-white py-2 px-3 mx-auto">Company Stats</h2>
              <div class="row">
                <div class="col-3">
                  <div class="stat-item">#1</div>
                  <div class="stat-label">Ranking in the State</div>
                </div>
                <div class="col-3">
                  <div class="stat-item">75</div>
                  <div class="stat-label">On-site Employees</div>
                </div>
                <div class="col-3">
                  <div class="stat-item">25</div>
                  <div class="stat-label">Fortune 500 Clients</div>
                </div>
                <div class="col-3 ">
                  <div class="stat-item">7th</div>
                  <div class="stat-label">Largest in the Nation</div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>

      {/* Partners */}

      <div className="row mb-5 mt-5">
        <div className="product col-md-11 mx-auto text-start ">
          <h3 className="all-h3-tags">Partners?</h3>
          <div className="row mt-5 col-md-10  text-center">
            <div className="partners col-6 col-md-3 mb-3">
              <img src={zendesk} alt="" />
            </div>
            <div className="partners1 col-6 col-md-3 mb-3">
              <img src={redbull} alt="" />
            </div>
            <div
              className="partners col-6 col-md-3 mb-3"
              style={{ marginTop: "-28px" }}
            >
              <img src={data} alt="" />
            </div>

            <div className="partners col-6 col-md-3 mb-3">
              <img src={jazz} alt="" />
            </div>
          </div>
          <div className="row mt-5 col-md-10 text-center">
            <div
              className="partners col-6 col-md-3 mb-3"
              style={{ marginTop: "-10px" }}
            >
              <img src={pinterest} alt="" />
            </div>
            <div
              className="partners col-6 col-md-3 mb-3"
              style={{ marginTop: "-28px" }}
            >
              <img src={ebay} alt="" />
            </div>
            <div className="partners1 col-6 col-md-3 mb-3">
              <img src={rh} alt="" />
            </div>

            <div className="partners col-6 col-md-3 mb-3">
              <img src={cross} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* blog */}
      <div className="row mb-5 mt-5">
        <div className="product col-md-11 mx-auto text-start ">
          <h3 className="all-h3-tags">Blog/News?</h3>
        </div>
      </div>

      <div class=" footer-container p-4">
        <div class="row  footer-start">
          <div class="col-md-6">
            <h2>Turnkey</h2>
            <p className="all-p-tags">Venåsvegen 42, 0672 Oslo, Norway</p>
            <p className="all-p-tags">info@turnkey.com</p>
          </div>
          <div class="col-md-6 text-md-end mt-5">
            <div class="social-icons mb-3">
              <a href="https://twitter.com" target="_blank">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="https://linkedin.com" target="_blank">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="https://facebook.com" target="_blank">
                <i class="fab fa-facebook"></i>
              </a>
            </div>
            <div class="footer-links">
              <a href="#">FIND PROFESSIONAL</a>
              <a href="#">CALCULATOR</a>
              <a href="#">STORE</a>
            </div>
          </div>
        </div>
        <div class="row footer-bottom">
          <div class="col-md-8 text-center">
            <span>© 2022 All right reserved</span>
          </div>
          <div class="col-md-4 text-md-end">
            <a href="#">Terms of Use</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Design;