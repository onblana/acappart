import Login from "./Login";
import Search from "./Search";

const Header = () => {
  return (
    <div className="inline-flex items-end mb-8 gap-4">
      <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F9A7A7] to-[#0057FF]">
        acappart
      </span>
      <span className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-[#F9A7A7] to-[#0057FF]">
        Acappella community
      </span>
      <div className="fixed right-20">
        <Search />
        <Login />
      </div>
    </div>
  );
};

export default Header;
