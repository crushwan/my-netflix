import Image from "next/image";
import Link from "next/link";
import NavWrap from "./NavWrap";

function Nav() {
  return (
    <NavWrap>
      <div className="flex justify-between">
        <Link href={"/"}>
          <div className="fixed top-1 left-0 pl-5 cursor-pointer w-20 h-8">
            <Image
              src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
              alt=""
              style={{ objectFit: "contain" }}
              fill
              sizes="auto"
            />
          </div>
        </Link>
        <Link href={"/profile"}>
          <div className="fixed top-2 h-6 right-5 cursor-pointer w-7">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              alt=""
              fill
              sizes="auto"
            />
          </div>
        </Link>
      </div>
    </NavWrap>
  );
}

export default Nav;
