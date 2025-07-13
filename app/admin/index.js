"use client";

import Context from "@/context/Context";
import HeaderDashboard from "@/components/Header/HeaderDashboard";
import PopupMobileMenu from "@/components/Header/PopupMobileMenu";
import LeftpanelDashboardAdmin from "@/components/Common/LeftpanelDashboardAdmin";
import { getSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { useState } from "react";
import Home from "@/components/Admin/Home";

const Admin = () => {

  const router = useRouter(); 
  const [permission, setPermission] = useState(false);

  setTimeout(async () => {
    const session = await getSession(); 
    if (!session) {
      router.push("/signin");
    }else if (session.user.role === 1){
       setPermission(true);
    }else{
      setPermission(false);
    }
  }, 1000)

  const user_data = useSelector(state => state);
  
  return (
    <>
      <main className="page-wrapper rbt-dashboard-page">
        <Context>
          <div className="rbt-panel-wrapper">
            <HeaderDashboard display="" />
            <PopupMobileMenu />
            <LeftpanelDashboardAdmin />

            <div className="rbt-main-content">
              <div className="rbt-daynamic-page-content">
                <div className="rbt-dashboard-content">
                  <div className="content-page">
                    { !user_data.loading && permission === true ?
                      <Home userData={user_data}/>
                      : 'No authorization'
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Context>
      </main>
    </>
  );
};

export default Admin;
