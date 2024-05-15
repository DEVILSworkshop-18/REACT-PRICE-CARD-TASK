import React from "react";
import "./Info.css";
const Info = ({ info }) => {
  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4 mainCard">
        {info.map((element, index) => {
          return (
            <>
              <div key={index}>
                <div className="col cards">
                  <div className="card">
                    <div className="header">
                      <h4 className="card-title">{element.type}</h4>
                      <h1 className="card-title">{element.rate}</h1>
                    </div>
                    <hr className="breakLine"></hr>
                    <ul className="fa-ul">
                      <li>
                        <span className="fa-li">
                          <i className="fa-solid fa-check"></i>
                        </span>
                        {element.user}
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fa-solid fa-check"></i>
                        </span>
                        50GB Storage
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fa-solid fa-check"></i>
                        </span>
                        Unlimited Public Project
                      </li>
                      <li>
                        <span className="fa-li">
                          <i className="fa-solid fa-check"></i>
                        </span>
                        Community Access
                      </li>
                      <li className={element.project}>
                        <span className="fa-li">
                          <i className={element.proIcon}></i>
                        </span>
                        Unlimited Private Project
                      </li>
                      <li className={element.support}>
                        <span className="fa-li">
                          <i className={element.supIcon}></i>
                        </span>
                        Dedicated Phone support
                      </li>
                      <li className={element.domain}>
                        <span className="fa-li">
                          <i className={element.domIcon}></i>
                        </span>
                        Free subdomain
                      </li>
                      <li className={element.report}>
                        <span className="fa-li">
                          <i className={element.repIcon}></i>
                        </span>
                        Monthly Status Report
                      </li>
                    </ul>
                    <div className="buy">
                      <button className="btn">Button</button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Info;
