import AirXDesertImg from "../../assets/images/AirXDesert.png";
import { Button } from "../ui";

const AirXInDesert: React.FC = () => {
  return (
    <section aria-label="Air X Featured" className="relative">
      <img src={AirXDesertImg} alt="Air X" className="h-auto w-full" />
      <div className="absolute bottom-0 left-0 w-full lg:py-[86px] py-[50px]">
        <div className="container mx-auto">
          <h2 className="text-4xl text-white mb-4">AirX</h2>
          <h5 className="text-[27px] text-white mb-5">Accelerate into a New Era</h5>
          <div className="flex">
            <Button
              label="Order Now"
              as="a"
              classes="bg-white border-2 border-white text-black text-center text-[18px] font-medium min-w-[170px] p-4 transition-all duration-200 hover:bg-transparent hover:text-white"
              href="#"
            />
            <Button
              label="Learn More"
              as="a"
              classes="text-white text-center text-[18px] font-medium min-w-[170px] p-4 transition-all duration-200 hover:bg-white hover:text-black"
              href="#"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default AirXInDesert;
