import Link from "next/link";
import UserMenuItems from "./HeaderProps/UserMenuItems";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

const UserMenu = () => {

  const { data: session } = useSession();

  return (
    <>
      <div className="inner">
        <div className="rbt-admin-profile">
          <div className="admin-info">
            <span className="name">{session && session.user.user_email}</span>
          </div>
        </div>
        <UserMenuItems parentClass="user-list-wrapper user-nav" />
        <hr className="mt--10 mb--10" />
        <ul className="user-list-wrapper user-nav">
          <li>
            <Link href="/help">
              <i className="feather-help-circle"></i>
              <span>Help Center</span>
            </Link>
          </li>
        </ul>
        <hr className="mt--10 mb--10" />
        <ul className="user-list-wrapper">
          <li>
            <a href="#" style={{fontSize: '14px'}} onClick={(e) => {
              e.preventDefault();
              signOut({ callbackUrl: "/" });
            }}
            ><i className="feather-log-out"></i> Logout</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default UserMenu;
