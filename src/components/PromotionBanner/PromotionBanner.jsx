import ImgBannerColjuegos from "../../assets/images/banner-coljuegos.png"

export const PromotionBanner = () => {
  return (
    <>
      <div className="container-fluid bg-white">
        <div className="container h-100 w-100 d-flex justify-content-end align-items-center mx-auto align-items-center  text-center">
          <img className="img-fluid" src={ImgBannerColjuegos} alt="banner-coljuegos" />
        </div>
      </div>
    </>
  )
}
