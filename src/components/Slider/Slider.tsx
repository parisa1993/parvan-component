import React from "react";
import "./Slider.scss";
import { Tooltip } from "../index";

export interface MenuItem {
  id: string;
  title: string;
  path: string;
  icon?: any;
}

export interface SliderProps {
  logo?: string;
  smallLogo?: string;
  username?: string;
  menuItems?: MenuItem[];
  onItemClicked: Function;
  onExitClicked: Function;
  selectedMenuId?: string;
  menuCollapsed?: boolean;
  toggleHandler?: React.MouseEventHandler<HTMLButtonElement>;
}

const Slider = (props: SliderProps) => {
  const {
    logo,
    smallLogo,
    username,
    menuItems,
    onItemClicked,
    onExitClicked,
    selectedMenuId,
    menuCollapsed,
    toggleHandler,
  } = props;

  const exitIcon = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className="exit-icon"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17 8L15.59 9.41L17.17 11H9V13H17.17L15.59 14.58L17 16L21 12L17 8ZM5 5H12V3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H12V19H5V5Z" />
    </svg>
  );

  const usernameIcon = (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.3271 2C6.80715 2 2.32715 6.48 2.32715 12C2.32715 17.52 6.80715 22 12.3271 22C17.8471 22 22.3271 17.52 22.3271 12C22.3271 6.48 17.8471 2 12.3271 2ZM7.67715 18.5C8.98715 17.56 10.5871 17 12.3271 17C14.0671 17 15.6671 17.56 16.9771 18.5C15.6671 19.44 14.0671 20 12.3271 20C10.5871 20 8.98715 19.44 7.67715 18.5ZM18.4671 17.12C16.7771 15.8 14.6471 15 12.3271 15C10.0071 15 7.87715 15.8 6.18715 17.12C5.02715 15.73 4.32715 13.95 4.32715 12C4.32715 7.58 7.90715 4 12.3271 4C16.7471 4 20.3271 7.58 20.3271 12C20.3271 13.95 19.6271 15.73 18.4671 17.12Z"
        fill="#828282"
      />
      <path
        d="M12.3271 6C10.3971 6 8.82715 7.57 8.82715 9.5C8.82715 11.43 10.3971 13 12.3271 13C14.2571 13 15.8271 11.43 15.8271 9.5C15.8271 7.57 14.2571 6 12.3271 6ZM12.3271 11C11.4971 11 10.8271 10.33 10.8271 9.5C10.8271 8.67 11.4971 8 12.3271 8C13.1571 8 13.8271 8.67 13.8271 9.5C13.8271 10.33 13.1571 11 12.3271 11Z"
        fill="#828282"
      />
    </svg>
  );

  const arrowRight = (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      style={{ marginBottom: "-7px" }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.91715 16.59L10.3271 18L16.3271 12L10.3271 6L8.91715 7.41L13.4971 12L8.91715 16.59Z"
        fill="#333333"
      />
    </svg>
  );

  const arrowLeft = (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      style={{ marginBottom: "-7px" }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.7371 7.41L14.3271 6L8.32715 12L14.3271 18L15.7371 16.59L11.1571 12L15.7371 7.41Z"
        fill="#333333"
      />
    </svg>
  );

  return (
    <div className={`slider ${menuCollapsed && "transform"}`}>
      <header className="logo">{menuCollapsed ? smallLogo : logo}</header>
      <main className="menu">
        <section className="menu-item username">
          {!menuCollapsed ? (
            <>
              {usernameIcon}
              <span style={{ marginRight: "5px", color: "#828282" }}>
                {username}
              </span>
            </>
          ) : (
            <Tooltip element={usernameIcon} text={username} />
          )}
        </section>
        {menuItems?.map((item) => (
          <section
            key={item.id}
            className={`menu-item link ${
              item.id === selectedMenuId ? "active" : ""
            }`}
            onClick={() => onItemClicked(item)}
          >
            {!menuCollapsed ? (
              <>
                {item.icon}
                <span style={{ marginRight: "5px" }}>{item.title}</span>
              </>
            ) : (
              <Tooltip element={item.icon} text={item.title} />
            )}
          </section>
        ))}
        <section className="menu-item exit" onClick={() => onExitClicked()}>
          {!menuCollapsed ? (
            <>
              {exitIcon}
              <span style={{ marginRight: "5px" }}>خروج</span>
            </>
          ) : (
            <Tooltip element={exitIcon} text={"خروج"} />
          )}
        </section>
      </main>
      <footer className="trigger-div" onClick={toggleHandler}>
        <span className={`arrow ${menuCollapsed ? "left" : ""}`}>
          {!menuCollapsed ? arrowRight : arrowLeft}
        </span>
        {!menuCollapsed ? (
          <span style={{ marginRight: "5px" }}>بستن منو</span>
        ) : (
          ""
        )}
      </footer>
    </div>
  );
};

export default Slider;
