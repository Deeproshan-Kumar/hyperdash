import CountUp from "react-countup";

const CounterUp: React.FC = () => {
  return (
    <section
      aria-label="Counter Up"
      className="md:min-h-[225px] lg:min-h-[525px] py-10 md:py-0 flex items-center"
    >
      <div className="container mx-auto">
        <ul className="flex justify-between">
          <li className="w-3/12 text-center">
            <p className="mb-5">
              <small className="text-[12px] text-white">Max power</small>
            </p>
            <CountUp
              start={0}
              end={1200}
              duration={3}
              suffix="+"
              className="text-5xl text-white"
            />
            <h3 className="text-4xl text-white font-light mt-2">hp</h3>
          </li>
          <li className="w-3/12 text-center">
            <p className="mb-5">
              <small className="text-[12px] text-white">
                EPA estimated range up to
              </small>
            </p>
            <CountUp
              start={0}
              end={516}
              duration={3}
              suffix=""
              className="text-5xl text-white"
            />
            <h3 className="text-4xl text-white font-light mt-2">mi</h3>
          </li>
          <li className="w-3/12 text-center">
            <p className="mb-5">
              <small className="text-[12px] text-white">
                minutes to charge 200 miles
              </small>
            </p>
            <CountUp
              start={0}
              end={12}
              duration={3}
              suffix=""
              className="text-5xl text-white"
            />
            <h3 className="text-4xl text-white font-light mt-2">mins</h3>
          </li>
          <li className="w-3/12 text-center">
            <p className="mb-5">
              <small className="text-[12px] text-white">0-60 mph</small>
            </p>
            <CountUp
              start={0}
              end={2}
              duration={3}
              prefix="<"
              suffix=""
              className="text-5xl text-white"
            />
            <h3 className="text-4xl text-white font-light mt-2">sec</h3>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default CounterUp;