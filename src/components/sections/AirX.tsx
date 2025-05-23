import { Button } from "../ui";

const AirX: React.FC = () => {
  return (
    <section aria-label="Air X" className="airX xl:min-h-screen min-h-[750px] flex items-center bg-white">
      <div className="container mx-auto">
        <h2 className="text-6xl mb-5">Air X</h2>
        <h5 className="text-4xl mb-10">Accelerate Into a New Era</h5>
        <p className="text-[14px] mb-12">
          Lorem ipsum dolor sit amet, consectetur
          <br /> adipiscing elit, sed do eiusmod tempor
        </p>
        <div className="flex">
          <Button
            label="Order Now"
            as="a"
            classes="bg-black border-2 border-black text-white text-center text-[18px] font-medium min-w-[170px] p-4 transition-all duration-200 hover:bg-transparent hover:text-black"
            href="#"
          />
          <Button
            label="Learn More"
            as="a"
            classes="bg-white text-black text-center text-[18px] font-medium min-w-[170px] p-4 transition-all duration-200 hover:bg-black hover:text-white"
            href="#"
          />
        </div>
      </div>
    </section>
  );
};

export default AirX;
