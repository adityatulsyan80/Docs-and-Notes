import React from "react";

function Header() {
  const logo = (
    <img
      src="https://www.gstatic.com/images/branding/product/2x/docs_2020q4_48dp.png"
      alt="logo" height="60px" width="60px"
    />
  );
  return (
    <div className="header">
      {logo}
      <h1>Notes</h1>
      
      <a href="http://localhost:3001" target="_self">Title_Notes</a>
      
    </div>
  );
}

export default Header;
