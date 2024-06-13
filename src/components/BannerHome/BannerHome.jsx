import Slider from "react-slick";
import LogoIpsum from "../../assets/images/Logo.png"
import Banner1 from "../../assets/images/Banner1.png"
import Banner2 from "../../assets/images/Banner2.png"
import Banner3 from "../../assets/images/Banner3.png"
import Banner4 from "../../assets/images/Banner4.png"
import Banner1Mobile from "../../assets/images/Banner1Mobile.jpg"
import Banner2Mobile from "../../assets/images/Banner2Mobile.jpg"
import { useMediaQuery } from 'react-responsive'

export const BannerHome = () => {

  const isDesktop = useMediaQuery({
    query: '(min-width: 1024px)'
  })  

  const isMobile = useMediaQuery({
    query: '(max-width: 1024px)'
  })

  const imgsBanner = [
    {
      id: 1,
      srcDesktop: Banner1,
      srcMobile: Banner1Mobile,
      alt: 'Banner 1'
    },
    {
      id: 2,
      srcDesktop: Banner2,
      srcMobile: Banner2Mobile,
      alt: 'Banner 2'
    },
    {
      id: 3,
      srcDesktop: Banner3,
      srcMobile: Banner1Mobile,
      alt: 'Banner 3'
    },
    {
      id: 4,
      srcDesktop: Banner4,
      srcMobile: Banner2Mobile,
      alt: 'Banner 4'
    },
  ]

  let settingsBanner = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  let settingsBrandSlider = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive : [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]

  };

  return (
    <>
      <div className="bg-dark-blue container-fluid pb-5 w-100 px-0">
        <Slider {...settingsBanner} className="pb-5 w-100">
          {
            imgsBanner.map(banner => (
              <div key={banner.id} className="container-fluid d-flex justify-content-center h-block px-0 ">
                <div className="w-100 mx-0 px-0">
                  <a href="/">
                    {
                      isDesktop &&
                      <img
                        className="d-block w-100 h-100 object-fit-cover"
                        src={banner.srcDesktop}
                        alt={banner.alt}
                      />
                    }
                    {
                      isMobile &&
                      <img
                        className="d-block w-100 h-100 object-fit-cover"
                        src={banner.srcMobile}
                        alt={banner.alt}
                      />
                    }
                  </a>
                </div>
              </div>
            ))
          }
        </Slider>
      </div>
      <div className="bg-dark-blue pb-3 pt-4">
            <p className="text-center grey-medium fs-5 px-2 px-md-0">
                160,000+ sorteos y conciertos con 200+ gestores y 345,000+ usuarios satisfechos
            </p>
      </div>
      <div className="bg-dark-blue pt-4 pb-5">
        <Slider {...settingsBrandSlider} className="container">
            {
              imgsBanner.map(banner => (
                <div className="text-center d-flex justify-content-center" key={banner.id}>
                    <img className="brand-width-slider" src={LogoIpsum} alt={banner.alt} />
                </div>
              ))
            }
        </Slider>
      </div>
    </>
  );
};
