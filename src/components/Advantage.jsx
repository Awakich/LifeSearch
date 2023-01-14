import CountUp from "react-countup";

const Advantage = () => {
  return (
    <div className="bg-[#FFB55E] text-center italic py-12 my-5">
      <p className="font-black text-9xl">
        <CountUp start={0} end={500} delay={1} />+
        <p className="font-light text-6xl mt-5">NEW BOOKS FROM ALL TIMES</p>
      </p>
    </div>
  );
};

export default Advantage;
