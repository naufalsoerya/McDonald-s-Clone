import Link from "next/link";

export default function NavBar() {
  return (
    <div className="navbar bg-base-100 static top-0">
      <div className="navbar-start px-12 text-yellow-500">
        <Link href={"/home"} className="btn btn-ghost text-xl">McDonald's</Link>
      </div>
      <div className="navbar-center hidden lg:flex font-bold text-gray-400">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Menu</a>
          </li>
          <li>
            <a>Wishlist</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Login</a>
      </div>
    </div>
  );
}
