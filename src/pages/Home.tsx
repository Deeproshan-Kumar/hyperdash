import {
  AirX,
  AirXInDesert,
  AirXInterior,
  AirXSpecs,
  CounterUp,
  Gallery,
  Hero,
  LexoZ,
  Stories,
} from "../components/sections";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <AirXInterior />
      <LexoZ />
      <AirX />
      <AirXSpecs />
      <CounterUp />
      <Gallery />
      <AirXInDesert />
      <Stories />
    </>
  );
};

export default Home;
