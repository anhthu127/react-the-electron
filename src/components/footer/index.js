import React from "react";

import { Footer } from "./styles";

import SerialSettings from "./../serial";
import Modal from "./../modal";

export default function FooterBar() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Footer>
        <label onClick={handleOpen}>PT COM1 BD 9600</label>
      </Footer>

      <Modal component={SerialSettings} handleClose={handleClose} open={open} />
    </React.Fragment>
  );
}
