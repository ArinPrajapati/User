import React, { useState } from "react";
import { CardProps } from "../helper/types";
//@ts-ignore
import dummyAvatar from "../assets/avatar.svg";
//@ts-ignore
import imgLoad from "../assets/imgload.gif";
import "./Card.css";
import { Accordion } from "react-bootstrap";

const Card = ({
  avatar,
  username,
  firstName,
  lastName,
  email,
  jobTitle,
  Bio,
}: CardProps) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageError: React.ReactEventHandler<HTMLImageElement> = (e) => {
    e.currentTarget.src = dummyAvatar;
    setIsLoading(false);
  };

  const handleImageLoad: React.ReactEventHandler<HTMLImageElement> = () => {
    console.log("Image loaded successfully");
    setIsLoading(false);
  };

  return (
    <div>
      <div className="cardholder ">
        <div className="card-heading">
          <img
            src={avatar || dummyAvatar}
            className=""
            alt="..."
            style={{ objectFit: "cover" }}
            onError={handleImageError}
            onLoad={handleImageLoad}
            loading="lazy"
          />
          <div className="card-body">
            <h5 className="card-title">
              {firstName} {lastName}
            </h5>
            <p className="card-text">{username}</p>
          </div>
        </div>
        <div className="iconTray">
          <div style={{ display: "flex", gap: "20px" }}>
            <i className="bx bxl-linkedin"></i>
            <i className="bx bxl-github"></i>
          </div>

          <i className="bx bxs-message-rounded"></i>
        </div>
        <hr className="line" />
        <div className="card-details ">
          <h5>Position</h5>
          <p>{jobTitle}</p>
        </div>
        <div className="moreInfo accordion " id="accordionExample">
          <Accordion className="customAccordion1">
            <Accordion.Item eventKey="0" className="customAccordionItem">
              <Accordion.Header className="accordion-header" title="Bio">
                <i
                  className="bx bxs-info-circle"
                  style={{ fontSize: "30px" }}
                ></i>
              </Accordion.Header>
              <Accordion.Body className="accordion-body">
                <h4>Bio:</h4>
                {Bio}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion className="customAccordion" title="Email">
            <Accordion.Item eventKey="1" className="customAccordionItem">
              <Accordion.Header className="accordion-header">
                <i className="bx bxl-gmail"></i>
              </Accordion.Header>
              <Accordion.Body className="accordion-body">
                <h6>Email:</h6>
                {email}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        {isLoading && (
          <div
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "rgba(255, 255, 255, 0.5)",
            }}
          >
            <img src={imgLoad} alt="loading" width={50} />
          </div>
        )}

        <div className="" style={{ padding: "15px" }}></div>
      </div>
    </div>
  );
};

export default Card;
