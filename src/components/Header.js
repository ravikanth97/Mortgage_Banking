import React from "react";

const Header = () => {
  return (
    <header className="bg-primary text-white text-center py-3">
      <h1>ABC Mortgage Banking</h1>
      <p
          className="text-center mb-4 text-white"
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            fontStyle: "italic",
          }}
        >
          - Welcome to the future of banking!
      </p>
    </header>
  );
};

export default Header;