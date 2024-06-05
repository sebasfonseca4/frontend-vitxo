import { BannerHome } from '../../components/BannerHome/BannerHome';
import { RegisterUser } from "../../components/RegisterUser/RegisterUser"
import { AvailableEvents } from "../../components/AvailableEvents/AvailableEvents";
import { HowAppWorks } from "../../components/HowAppWorks/HowAppWorks";
import { Testimonials } from "../../components/Testimonials/Testimonials";
import { PromotionBanner } from "../../components/PromotionBanner/PromotionBanner";

export const Home = () => {
  return (
    <>        
      <BannerHome/>
      <RegisterUser />
      <AvailableEvents />
      <HowAppWorks />
      <Testimonials />
      <PromotionBanner />
    </>
  )
}
