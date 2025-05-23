const AirXSpecs: React.FC = () => {
  return (
    <section aria-label="Air X Specifications" className="air-x-specs bg-black">
      <div className="container mx-auto">
        <div className="xl:min-h-screen min-h-[750px] flex lg:justify-end justify-center items-center">
          <div>
            <h5 className="text-2xl text-white mb-12">
              Model Air X Specifications
            </h5>
            <table className="md:min-w-[475px] w-full">
              <tbody>
                <tr>
                  <td className="py-5">
                    <span className="text-white block py-1">Range (EPA est.)</span>
                    <span className="text-white block py-1">Upto 300 miles</span>
                  </td>
                  <td className="py-5">
                    <span className="text-white block py-1">Acceleration</span>
                    <span className="text-white block py-1">4.5s 0-60 mph</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-5">
                    <span className="text-white block py-1">Peak Power</span>
                    <span className="text-white block py-1">400 hp</span>
                  </td>
                  <td className="py-5">
                    <span className="text-white block py-1">Wheels</span>
                    <span className="text-white block py-1">19’’ or 20’’</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-5">
                    <span className="text-white block py-1">Towing</span>
                    <span className="text-white block py-1">2000 pounds</span>
                  </td>
                  <td className="py-5">
                    <span className="text-white block py-1">Seating</span>
                    <span className="text-white block py-1">Up to 5</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-5">
                    <span className="text-white block py-1">Drag Coefficient</span>
                    <span className="text-white block py-1">0.28 cd</span>
                  </td>
                  <td className="py-5">
                    <span className="text-white block py-1">Top Speed</span>
                    <span className="text-white block py-1">130 mph</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AirXSpecs;
