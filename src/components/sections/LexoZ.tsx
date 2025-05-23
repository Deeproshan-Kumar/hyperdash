import LexoZImg from "../../assets/images/LexoZ.png";
import LexoZImg2x from "../../assets/images/LexoZ@2x.png";
import LexoZImg3x from "../../assets/images/LexoZ@3x.png";
import { Button } from "../ui";

const LexoZ: React.FC = () => {
  return (
    <section aria-label="Lexo Z" className="container mx-auto">
      <div className="flex items-center">
        <div className="w-6/12 text-white">
          <div>
            <h2 className="text-5xl mb-5">Lexo Z</h2>
            <h6 className="text-3xl mb-10">Accelerete Into a New Era</h6>
            <ul className="text-[14px] max-w-[370px] mb-16">
              <li className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </li>
              <li className="mb-4">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip
              </li>
              <li className="mb-4">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat
              </li>
            </ul>
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
        <div className="w-6/12">
          <img
            src={LexoZImg}
            srcSet={`${LexoZImg2x} 2x, ${LexoZImg3x} 3x`}
            alt="Lexo Z"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default LexoZ;
