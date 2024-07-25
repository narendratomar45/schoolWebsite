import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Springdale Public School. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;