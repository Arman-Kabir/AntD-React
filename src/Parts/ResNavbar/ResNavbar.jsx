import './ResNavbar.css';
import { Drawer, Menu } from "antd";
import { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
const ResNavbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div style={{ height: "100vh", backgroundColor: "rgb(0,150,255)" }}>
      <div
        style={{
          backgroundColor: "darkorange",
          height: 60,
          padding: "12px 0 0 12px",
        }}
        className="menuIcon"
      >
        <MenuOutlined
          style={{ color: "white", fontSize: 30 }}
          onClick={() => {
            setOpenMenu(true);
          }}
        ></MenuOutlined>
      </div>

      <span className="headerMenu">
        <AppMenu></AppMenu>
      </span>

      <Drawer
        placement="left"
        open={openMenu}
        onClose={() => {
          setOpenMenu(false);
        }}
        closable={false}
        bodyStyle={{ backgroundColor: "darkorange" }}
      >
        <AppMenu isInline></AppMenu>
      </Drawer>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
function AppMenu({ isInline = false }) {
  return (
    <Menu
      style={{
        backgroundColor: "darkorange",
        color: "white",
        fontSize: 24,
        border: "none",
      }}
      mode={isInline ? "inline" : "horizontal"}
      items={[
        {
          label: "Home",
          key: "home",
        },
        {
          label: "Contact Us",
          key: "contact Us",
        },
        {
          label: "About",
          key: "about",
        },
        {
          label: "Login",
          key: "login",
        },
      ]}
    ></Menu>
  );
}

export default ResNavbar;
