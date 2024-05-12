import Link from "next/link";

export default function NavBar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl" href={"/"}>
          Douglas J. Lee
        </Link>
      </div>
      <div className="flex-none">
        <ul className="invisible menu menu-horizontal px-1 lg:visible">
          <li>
            <Link href={"/about"}>About Me</Link>
          </li>
          <li>
            <Link href={"/career"}>Career</Link>
          </li>
          {/* <li>
            <Link href={"/skills"}>Skills</Link>
          </li> */}
        </ul>
        <MobileDropDown />
      </div>
    </div>
  );
}

function MobileDropDown() {
  return (
    <div className="dropdown dropdown-end lg:hidden">
      <div tabIndex={0} role="button" className="btn btn-ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 lg:invisible"
        >
          <path
            fillRule="evenodd"
            d="M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <Link href={"/about"}>About Me</Link>
        </li>
        <li>
          <Link href={"/career"}>Career</Link>
        </li>
      </ul>
    </div>
  );
}
