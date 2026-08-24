import NavBtn from "./NavBtn";

const buttonInfo = [
  { name: "피치파이프!", href: "/pitchpipe" },
  { name: "전체보기", href: "/" },
  { name: "공지", href: "/notice" },
  { name: "모집", href: "/recruit" },
  { name: "자유", href: "/anything" },
  { name: "홍보", href: "/spotlight" },
];

const Navbar = () => {
  return (
    <div className="flex justify-center bg-rose-100 w-full mb-10">
      <div className="flex justify-evenly w-3/4 max-w-3xl">
        {buttonInfo.map((info, i) => (
          <NavBtn name={info.name} key={i} href={info.href} />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
