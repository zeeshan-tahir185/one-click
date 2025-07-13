import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const UserMenuItems = ({ parentClass }) => {
  const pathname = usePathname();
  const isActive = (href) => pathname.startsWith(href);
  return (
    <>
      <ul className={parentClass}>
        <li>
          <Link
            className={isActive("/account") ? "active" : ""}
            href="/account"
          >
            <i className="feather-user"></i>
            <span>Account</span>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default UserMenuItems;
