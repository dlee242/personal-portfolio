import Link from "next/link";

export default function NavBar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl" href={"/"}>Douglas J. Lee</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {/* <li>
            <Link href={"/about"}>About Me</Link>
          </li> */}
          <li>
            <Link href={"/career"}>Career</Link>
          </li>
          {/* <li>
            <Link href={"/skills"}>Skills</Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
}
