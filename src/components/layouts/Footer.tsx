import { FaArrowRight } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A1A1A] lg:py-7">
      <div className="container mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl text-white mb-4">
            Subscribe to our newsletter
          </h2>
          <form className="max-w-[360px] w-full border-b-2 border-b-white flex items-center">
            <input
              type="email"
              placeholder="enter your email"
              className="w-10/12 outline-0 py-4 text-white"
            />
            <button className="w-1/12 h-full flex justify-center cursor-pointer">
              <FaArrowRight className="text-white" />
            </button>
          </form>
        </div>
        <div className="flex justify-between lg:py-[70px] py-[50px]">
          <div className="w-4/12 flex justify-between">
            <div className="">
              <ul className="flex flex-col gap-5">
                <li className="text-lg text-white cursor-pointer">Air X</li>
                <li className="text-lg text-white cursor-pointer">Lexo Z</li>
                <li className="text-lg text-white cursor-pointer">Gravity 9</li>
              </ul>
            </div>
            <div className="">
              <ul className="flex flex-col gap-5">
                <li className="text-lg text-white cursor-pointer">Fleet</li>
                <li className="text-lg text-white cursor-pointer">Company</li>
                <li className="text-lg text-white cursor-pointer">Stories</li>
              </ul>
            </div>
          </div>
          <div className="w-4/12 flex justify-between">
            <div className="">
              <ul className="flex flex-col gap-5">
                <li className="text-lg text-white cursor-pointer">
                  Purchasing
                </li>
                <li className="text-lg text-white cursor-pointer">Charging</li>
                <li className="text-lg text-white cursor-pointer">Insurance</li>
                <li className="text-lg text-white cursor-pointer">Service</li>
              </ul>
            </div>
            <div className="">
              <ul className="flex flex-col gap-5">
                <li className="text-lg text-white cursor-pointer">Spaces</li>
                <li className="text-lg text-white cursor-pointer">Investors</li>
                <li className="text-lg text-white cursor-pointer">Careers</li>
                <li className="text-lg text-white cursor-pointer">
                  Contact Us
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
