import React from "react";
import "../../css/footer.booking.css";

const Footers = () => {
  return (
    <footer class="footers">
      <div class="footer_contents">
        <a href="privacy policy">
          <span>&nbsp; &nbsp;Privacy Policy</span>
        </a>
        <a href="passanger_rights">
          {" "}
          <span>&nbsp;&nbsp;Passanger Rights</span>
        </a>
        <a href="legal_notice">
          {" "}
          <span>&nbsp;&nbsp; Legal Notice</span>
        </a>
        <a href="goRoute">
          {" "}
          <span>&nbsp; &nbsp; &nbsp; @2023 GoRoute</span>
        </a>
      </div>
    </footer>
  );
};

export default Footers;
