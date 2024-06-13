import { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";
import ImgBrand from '../../assets/images/Logo.png'

export const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://654ff546358230d8f0cdd1a1.mockapi.io/testimonials"
        );
        setTestimonials(response.data);
      } catch (error) {
      }
    };
    fetchData();
  }, []);

  let settingsBanner = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    centerMode: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="container-fluid bg-dark-blue py-5">
        <div className="container pt-5 pb-2">
          <h2 className="text-white text-center fw-bolder text-title-principal">
            EL ESCENARIO DE LOS GANADORES
          </h2>
          <p className="text-center grey-medium col-8 mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            nesciunt veniam dolores recusandae cupiditate, eaque voluptates
            illum dolorem! Corrupti saep1ectetur nesciunt veniam dolores recusa
          </p>
        </div>
        <div className="container my-2">
          <Slider {...settingsBanner}>
            {testimonials.map((testimonial) => (
              <div className="mx-2" key={testimonial.id}>
                <div className="d-flex flex-column justify-content-center mt-4 px-1 px-md-2">
                  <div className="m-1 p-3 border border-white d-flex flex-column justify-content-center rounded-4">
                    <div className="mx-auto mt-2 mb-4">
                      <img
                        className="img-brand-testimonials img-fluid"
                        src={ImgBrand}
                        alt="Logo Ipsum"
                      />
                    </div>
                    <p className="text-white text-center mt-3 mb-5 text-description-testimonials">
                      {testimonial.description}
                    </p>
                    <div className="text-white d-flex flex-column justify-content-center text-center">
                      <div className="img-profile-testimonials mx-auto mb-2">
                        <img
                          className="w-100 h-100 object-fit-cover rounded-5 "
                          src={testimonial.img_profile}
                          alt="profile-img"
                        />
                      </div>
                      <p className="mb-1">{testimonial.name}</p>
                      <span className="grey-medium">{testimonial.job}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};
