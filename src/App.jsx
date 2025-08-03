import HeroSection from './components/HeroSection';
import CommunitySection from './components/CommunitySection';
import FeaturesSection from './components/FeaturesSection';
import PopularTravelersSection from './components/PopularTravelersSection';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div id="travel-diary">
      <HeroSection />
      <CommunitySection />
      <FeaturesSection />
      <PopularTravelersSection />
      <PricingSection />
      <Footer />
    </div>
  );
}