import React, { useState } from "react";
import { Image, Modal, Button } from "react-bootstrap";
import "animate.css/animate.min.css";
import CardDetail from "./CardDetail";
import { Link } from "react-router-dom";

export default function Card(props) {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  const { card, category } = props;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>{card.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CardDetail name={card.name} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" as={Link} to={card.website}>
            Learn More
          </Button>
        </Modal.Footer>
      </Modal>
      <li
        className={hovered ? "pulse animated " : ""}
        style={{ marginBottom: "18px", cursor: "pointer" }}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      >
        <div onClick={handleShow}>
          <p style={{ margin: 0 }}>
            {card.name} - {card[`${category}`]}%
            <span
              style={{
                paddingLeft: "5px",
                color: "hotpink",
                fontStyle: "oblique",
              }}
            >
              {card[`${category}Additional`] &&
                "(" + card[`${category}Additional`] + ")"}
            </span>
          </p>
          <Image
            src={`${
              process.env.PUBLIC_URL && `${process.env.PUBLIC_URL}`
            }/images/${card.image}`}
            style={{
              border: "none",
              background: "none",
              padding: "none",
              width: "80%",
            }}
            thumbnail
          />
        </div>
      </li>
    </>
  );
}
