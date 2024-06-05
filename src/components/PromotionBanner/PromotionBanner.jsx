import TextPromotionBanner from "../../assets/images/text-promontion-banner.png"

export const PromotionBanner = () => {
  return (
    <>
      <div className="container-fluid bg-promotion-banner">
        <div className="container h-100 w-100 d-flex justify-content-end align-items-center m-auto align-items-center ">
          <img src={TextPromotionBanner} alt="" />
        </div>
      </div>
    </>
  )
}
