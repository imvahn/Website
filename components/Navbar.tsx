import Link from "next/link";
import ScrollIndicator from "./ScrollIndicator";

const navItems = ["home", "experience", "projects"];

const Navbar = () => {
  return (
    <>
      <div className="fixed inset-x-0 md:h-[70px] h-[130px] backdrop-blur-sm z-40">
        <div className="flex md:flex-row flex-col inset-0 mt-[10px] md:h-[60px] h-[120px] justify-evenly items-center">
          {navItems.map((item, index) => (
            <Link href={`/#${item}`} className="text-3xl font-bold hover:rotate-3 hover:ease-in-out duration-150" key={index}>
              {item.toUpperCase()}
            </Link>
          ))}
        </div>
      </div>
      <ScrollIndicator />
    </>
  );
};

export default Navbar;
