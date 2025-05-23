import HeroImg from "../../assets/images/hero.png";
import HeroImg2x from "../../assets/images/hero@2x.png";
import HeroImg3x from "../../assets/images/hero@3x.png";
import { Button } from "../ui";

const Hero: React.FC = () => {
    const handleClick = () => {

    }
  return (
    <section aria-label="Hero Section" className="xl:min-h-screen relative">
      <img
        src={HeroImg}
        srcSet={`${HeroImg2x} 2x, ${HeroImg3x} 3x`}
        alt="Hero"
        className="xl:h-full w-full object-center object-contain"
      />
      <Button label="Test Drive" classes="absolute bottom-[123px] left-[50%] -translate-x-[50%] border-1 border-white text-white cursor-pointer px-3 py-1 transition-all duration-200 hover:bg-white hover:text-black" onClick={handleClick} />
    </section>
  );
};
export default Hero;