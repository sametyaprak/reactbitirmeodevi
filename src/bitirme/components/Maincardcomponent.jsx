import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import LocalData from "./InfoComponent";
import ButtonExampleLabeledBasic from "./ButtonComponent";
import 'semantic-ui-css/semantic.min.css'


export default function Maincardcomponent() {
  const [alldata, setAlldata] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/users")
      .then((response) => setAlldata(response.data));
  }, []);
  

  return (
    <div>
      <div className="container-flex m-5">
        <div className="row d-flex justify-content-center">
          {alldata.map((data, index) => {
            const { id, login, avatar_url } = data;
            const { dusunceler, puan } = LocalData[index];
            console.log(index);
            return (
              <div
                className="col col-sm-12 col-md-6 col-xl-4 my-2 d-flex justify-content-center"
                key={id}
              >
                <div>
                  <Card style={{ width: "26rem" }}>
                    <Card.Img variant="top" src={avatar_url} className="foto" />
                    <Card.Body>
                      <Card.Title>{id}</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroupItem>{login}</ListGroupItem>
                      <ListGroupItem>{dusunceler}</ListGroupItem>
                      <ListGroupItem>         
                         <ButtonExampleLabeledBasic puan={puan} id={id}/>
                      </ListGroupItem>
                    </ListGroup>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
