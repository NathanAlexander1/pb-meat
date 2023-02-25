import React from "react";
import fleshtablesShirt from "../assets/fleshtables-shirt.jpg";
import comingSoon from "../assets/comingSoon.png";
import Card from "react-bootstrap/Card";

function Merch() {
  const merchandise = [
    {
      image: fleshtablesShirt,
      title: "Fleshtables T-Shirt",
      description: "Comfortable t-shirt, available in all sizes!",
      pirce: "TBD",
    },
    {
        image: comingSoon,
        title: "Fleshtables Hat",
        description: "Share Fleshtables wherever you go with this hat!",
        pirce: "TBD",
      },
      {
        image: comingSoon,
        title: "Fleshtables Sweats",
        description: "Stay comfy while you eat with these Fleshtables sweatpants!",
        pirce: "TBD",
      },
      {
        image: comingSoon,
        title: "Fleshtables Bib",
        description: "Ethically eat in style with this Fleshtables adult bib!!",
        pirce: "TBD",
      },
  ];

  return (
    <>
      <div>For queries about merchandise, please reach out to:</div>
      <div className="ulForCards d-flex justify-content-center flex-wrap ">
      {merchandise.map((m, i) => {
        return (
          <div className="merchList mx-5 my-3" key={"b" + i}>
            <Card style={{ height: "100%" }}>
              <div className="projImg" key={"a" + i}>
                <Card.Img
                  style={{ height: "100%" }}
                  variant="top"
                  src={m.image}
                />
              </div>
              <hr/>
              <Card.Body>
                <Card.Title>{m.title}</Card.Title>
                <Card.Text>{m.description}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        );
      })}
      </div>
    </>
  );
}

export default Merch;
