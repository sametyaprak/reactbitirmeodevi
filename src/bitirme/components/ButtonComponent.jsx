import React from "react";
import { Button, Icon, Label } from "semantic-ui-react";
import LocalData from "./InfoComponent";



/*
const ButtonExampleLabeledBasic = (props) => (

  <div>
    <Button as="div" labelPosition="right">
      <Button color="red" onClick={} >
        <Icon name="heart" />
        Like
      </Button>
      <Label as="a" basic color="red" pointing="left">
        <h4>{props.index}</h4>
      </Label>
    </Button>
  </div>
);
*/
export default ButtonExampleLabeledBasic;

function ButtonExampleLabeledBasic(props) {
  function plusOne(){
    LocalData[props.id].puan =  LocalData[props.id].puan + Number(1);
    console.log(LocalData[props.id].puan);
  }
  return (
    <div>
      <Button as="div" labelPosition="right" onClick={plusOne}>
       <Button color="red">
         <Icon name="heart" />
        Like
       </Button>
       <Label as="a" basic color="red" pointing="left">
         <h4>{props.puan}</h4>
        </Label>
      </Button>
   </div>
  );
 }
