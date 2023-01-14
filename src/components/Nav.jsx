import Logo from "../assets/BOOKERS.svg";

const Nav = () => {
  return (
    <div className="mt-5 mx-auto">
      <img src={Logo} alt="" className="mb-5 mx-auto hover:cursor-pointer hover:opacity-80" />
      <hr className="border-[1px] border-[#222222]" />
    </div>
  );
};

export default Nav;
