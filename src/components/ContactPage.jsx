import React, { useState } from "react";
import {
  ContactButtonWrap,
  ContactPageWrap,
  InputWrap,
  MessageWrap,
  TextAreaWrap,
} from "./StyledComponents";
import { Form, Input, TextArea } from "semantic-ui-react";
import { ContactButton, DesktopWrapper } from "./layout/StyledComponents";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import { Container } from "reactstrap";

const ContactPage = () => {
  const [message, setMessage] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const navigate = useNavigate();

  const onEmailSend = async () => {
    emailjs.init("X5vQhKQ9eLHN3Myc6");
    const params = {
      message,
      userEmail,
    };
    await emailjs.send(`default_service`, "template_wavevhv", params);
    setMessage(null);
    setUserEmail(null);
    setShowSuccess(true);
  };
  return (
    <Container style={{ paddingRight: 24, paddingLeft: 24 }}>
      <ContactPageWrap>
        {showSuccess ? (
          <>
            <h1>
              Thank you for taking the time to contact us.
              <br />
              We value your feedback! <br /> You can expect to hear back from
              one of our representitives shortly!
            </h1>
            <ContactButton onClick={() => navigate("/")}>Go Home</ContactButton>
          </>
        ) : (
          <>
            <TextAreaWrap>
              <InputWrap>
                <Input
                  style={{ width: "100%" }}
                  placeholder="Email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                />
              </InputWrap>
              <Form>
                <TextArea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Message"
                  rows="8"
                />
              </Form>
            </TextAreaWrap>
            <ContactButtonWrap>
              <ContactButton
                disabled={
                  !message ||
                  !userEmail?.includes("@") ||
                  !userEmail?.includes(".")
                }
                // onClick={() => onEmailSend()}
              >
                Submit Message
              </ContactButton>
            </ContactButtonWrap>
          </>
        )}
      </ContactPageWrap>
    </Container>
  );
};
export default ContactPage;
