import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footerAll">
      <div className="container-footer">
        <div className="container-items">
          {/* <div className="container-text">
            <h3>Информация</h3>
            <p>Создание сайтов любой сложности.</p>
          </div> */}
          <div className="container-text">
            <h3>Контакты</h3>
            <p>
              +996 (703) 240 132 <br />
              moonchild_777@mail.ru <br />
              <br />
              +996 (701) 446 077 <br />
              bori_z@gmail.com
            </p>
          </div>
          {/* <div className="container-text">
            <h3>Социальные сети</h3>
            <p>
              Instagram <br />
              <br />
              Facebook <br />
              <br />
              Telegram <br />
              <br />
              Youtube
            </p>
          </div> */}
        </div>
        <div className="footer-h5">
          {/* <h5>
            Copyright Boris & Nursultan <br />
            09.06.2022{" "}
          </h5> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
