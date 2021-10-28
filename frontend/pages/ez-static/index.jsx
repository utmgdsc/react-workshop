import { Heading, List, ListIcon, ListItem } from "@chakra-ui/react";
import React from "react";
import { MdCheckCircle, MdRadioButtonUnchecked } from "react-icons/md";

export default function Home() {
  return (
    <div className="page-container">
      <Heading pb={2}>Daily Tasks</Heading>
      <List spacing={3}>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          Assumenda, quia temporibus eveniet a libero incidunt suscipit
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="green.500" />
          Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
        </ListItem>
        <ListItem>
          <ListIcon as={MdRadioButtonUnchecked} color="green.500" />
          Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
        </ListItem>
      </List>
    </div>
  );
}
