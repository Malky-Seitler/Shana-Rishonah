import React from "react";
import { Modal } from "semantic-ui-react";

export const modalStyles = {
  height: "auto",
  top: "auto",
  left: "auto",
  bottom: "auto",
  right: "auto",
};

const FeedbackModal = ({ setOpen }) => {
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={true}
      style={modalStyles}
    >
         <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSf3xKxcZdEd6LWeCFFQxF-RzTpeZXtL3c8sA-Hae1rU-AwWpQ/viewform?embedded=true"
        width="640"
        height="1587"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </iframe>
    </Modal>
  );
};
export default FeedbackModal;
