import { useEffect } from "react";
import BannerSection from "../../components/BannerSection/BannerSection";
import VolunteerNeedsSection from "../../components/VolunteerNeedsSection/VolunteerNeedsSection";

const HomePage = () => {
  useEffect(()=> {
    document.title = 'Home page | Volunteer management'
  }, [])
    return (
        <div>
          <BannerSection></BannerSection> 
          <VolunteerNeedsSection></VolunteerNeedsSection>
        </div>
    );
};

export default HomePage;