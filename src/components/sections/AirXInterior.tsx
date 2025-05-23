import AirXInteriorImg from "../../assets/images/airX.png";
import AirXInteriorImg2x from "../../assets/images/airX@2x.png";
import AirXInteriorImg3x from "../../assets/images/airX@3x.png";

const AirXInterior: React.FC = () => {
  return (
    <section aria-label="Air X Interior" className="max-w-[1440px] w-full mx-auto">
      <div className="container mx-auto flex justify-center items-center">
        <div className="py-[120px]">
          <div className="relative">
            <h2 className="text-white text-7xl absolute -top-10 left-5">Air X</h2>
            <img
              src={AirXInteriorImg}
              srcSet={`${AirXInteriorImg2x} 2x, ${AirXInteriorImg3x} 3x`}
              alt="Air X Interior"
            />
          </div>
          <h2 className="text-4xl text-white mt-2">Accelerate Into a New Era</h2>
        </div>
      </div>
    </section>
  );
};

export default AirXInterior;