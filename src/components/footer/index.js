import React from "react";

import { Container } from "./styles";

import SerialSettings from "../serialSettings";
import Modal from "./../modal";

export default function Footer() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <div>
        <label onClick={handleOpen}>PT COM1 BD 9600</label>
      </div>

      <Modal component={SerialSettings} handleClose={handleClose} open={open} />
    </Container>
  );
}
