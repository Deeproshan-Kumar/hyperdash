import CableDesignImg from "../../assets/images/impeccable-design.png";
import PerformanceImg from "../../assets/images/elevated-performance.png";
import InteriorImg from "../../assets/images/great-interior.png";
import CarRearProfileImg from "../../assets/images/car-back.png";
import AirXImg from "../../assets/images/airXImage.png";
import SteeringImg from "../../assets/images/steering.png";
import MapImg from "../../assets/images/map.png";
import ConsoleImg from "../../assets/images/console.png";
import SpeedoMeterImg from "../../assets/images/speedometer.png";
import HeadLampImg from "../../assets/images/headlamps.png";

const Gallery: React.FC = () => {
  return (
    <section aria-label="Gallery" className="py-[115px]">
      <div className="container mx-auto">
        <div className="flex xl:gap-[100px] lg:gap-[70px] gap-[50px] lg:mb-[75px] mb-[50px]">
          <div className="w-full">
            <img src={CableDesignImg} alt="Impect Design" className="w-full" />
            <div className="p-8">
              <h5 className="text-white text-2xl text-center">
                Impeccable Design
              </h5>
            </div>
          </div>
          <div className="w-full">
            <img
              src={PerformanceImg}
              alt="Elevated Performance"
              className="w-full"
            />
            <div className="p-8">
              <h5 className="text-white text-2xl text-center">
                Elevated Performance
              </h5>
            </div>
          </div>
          <div className="w-full">
            <img src={InteriorImg} alt="Great Interior" className="w-full" />
            <div className="p-8">
              <h5 className="text-white text-2xl text-center">
                Great Interior
              </h5>
            </div>
          </div>
        </div>
        <div className="flex xl:gap-[150px] lg:gap-[100px] gap-[50px] lg:mb-[110px] mb-[75px]">
          <div className="w-5/12">
            <img
              src={CarRearProfileImg}
              alt="Car Rear Profile"
              className="w-full"
            />
          </div>
          <div className="w-7/12">
            <article>
              <div>
                <img src={AirXImg} alt="Air X Image" className="w-full" />
              </div>
              <div className="py-8">
                <h3 className="text-white text-3xl mb-4">
                  Drive to a sustainable future
                </h3>
                <p className="text-white text-lg max-w-[436px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut.
                </p>
              </div>
            </article>
          </div>
        </div>
        <div className="flex justify-between xl:gap-[134px] lg:gap-[100px] gap-[70px]">
          <div className="w-6/12">
            <div className="flex flex-wrap lg:gap-[58px] gap-[30] -mx-2">
              <div className="p-2">
                <img
                  src={SteeringImg}
                  alt="Steering"
                  className="lg:max-w-[257px] lg:h-[257px] lg:w-full"
                />
              </div>
              <div className="p-2">
                <img src={MapImg} alt="Map" className="lg:max-w-[257px] lg:h-[257px] lg:w-full" />
              </div>
              <div className="p-2">
                <img
                  src={ConsoleImg}
                  alt="Console"
                  className="lg:max-w-[257px] lg:h-[257px] lg:w-full"
                />
              </div>
              <div className="p-2">
                <img
                  src={SpeedoMeterImg}
                  alt="Speedometer"
                  className="lg:max-w-[257px] lg:h-[257px] lg:w-full"
                />
              </div>
            </div>
          </div>
          <div className="w-5/12 flex justify-end">
            <img
              src={HeadLampImg}
              alt="Head Lamps"
              height={550}
              width={443}
              className="lg:h-[550px] h-[320px] lg:max-w-[443px] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Gallery;
