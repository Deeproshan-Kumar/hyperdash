import { RxHamburgerMenu } from "react-icons/rx";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 w-full h-[97px] bg-[#1A1A1A] flex items-center z-50">
      <div className="container mx-auto">
        <div className="flex">
          <div className="w-4/12">
            <ul className="flex gap-[30px]">
              <li className="px-4 py-3 text-white cursor-pointer transition-all duration-300 hover:text-[#FCDC55]">
                Air X
              </li>
              <li className="px-4 py-3 text-white cursor-pointer transition-all duration-300 hover:text-[#FCDC55]">
                Lixo Z
              </li>
              <li className="px-4 py-3 text-white cursor-pointer transition-all duration-300 hover:text-[#FCDC55]">
                Gravity 9
              </li>
            </ul>
          </div>
          <div className="w-4/12">
            <h1 className="text-3xl italic font-bold text-center text-[#FCDC55] cursor-pointer">
              Hyper<span className="text-white">Dash</span>
            </h1>
          </div>
          <div className="w-4/12">
            <ul className="flex items-center justify-end gap-[30px]">
              <li className="px-4 py-3 text-white cursor-pointer transition-all duration-300 hover:text-[#FCDC55]">
                Shop
              </li>
              <li className="px-4 py-3 text-white cursor-pointer transition-all duration-300 hover:text-[#FCDC55]">
                Account
              </li>
              <li className="px-4 py-3 text-white cursor-pointer transition-all duration-300 hover:text-[#FCDC55]">
                <RxHamburgerMenu />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;