import User from "./User";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <div className="logo28">
          <div className="logo16"></div>
        </div>
        <h1 className="logoName">Loyha nomi</h1>
      </div>
      <div className="header_nav">
        <div className="header_diva">
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.3333 7.16665H12.6667C14 7.16665 14.6667 6.49998 14.6667 5.16665V3.83331C14.6667 2.49998 14 1.83331 12.6667 1.83331H11.3333C10 1.83331 9.33334 2.49998 9.33334 3.83331V5.16665C9.33334 6.49998 10 7.16665 11.3333 7.16665Z"
              stroke="rgba(146, 146, 157, 1)"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.33334 15.1666H4.66668C6.00001 15.1666 6.66668 14.5 6.66668 13.1666V11.8333C6.66668 10.5 6.00001 9.83331 4.66668 9.83331H3.33334C2.00001 9.83331 1.33334 10.5 1.33334 11.8333V13.1666C1.33334 14.5 2.00001 15.1666 3.33334 15.1666Z"
              stroke="rgba(146, 146, 157, 1)"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.00001 7.16665C5.47277 7.16665 6.66668 5.97274 6.66668 4.49998C6.66668 3.02722 5.47277 1.83331 4.00001 1.83331C2.52725 1.83331 1.33334 3.02722 1.33334 4.49998C1.33334 5.97274 2.52725 7.16665 4.00001 7.16665Z"
              stroke="rgba(146, 146, 157, 1)"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeMinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 15.1666C13.4728 15.1666 14.6667 13.9727 14.6667 12.5C14.6667 11.0272 13.4728 9.83331 12 9.83331C10.5273 9.83331 9.33334 11.0272 9.33334 12.5C9.33334 13.9727 10.5273 15.1666 12 15.1666Z"
              stroke="rgba(146, 146, 157, 1)"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeMinejoin="round"
            />
          </svg>
          <a href="" className="header_a clo">
            Asosiy
          </a>
        </div>

        <div className="header_diva">
          <img src="./odam.svg" alt="" />
          <a href="" className="header_a clo ">
            Mijozlar bazasi
          </a>
        </div>
        <div className="header_diva bb">
          <img src="./sms.svg" alt="" />
          <a href="" className="header_a clk ">
            Tracking loyihalari
          </a>
        </div>
        <div className="header_diva">
          <img src="./tebl.svg" alt="" />
          <a href="" className="header_a clo ">
            Sharh olish loyihalari
          </a>
        </div>
        <div className="header_diva">
          <img src="./ch.svg" alt="" />
          <a href="" className="header_a clo ">
            Redirect loyihalari
          </a>
        </div>
      </div>
      <div style={{ height: "32px" }}>
        <User />
      </div>
    </header>
  );
}

export default Header;
