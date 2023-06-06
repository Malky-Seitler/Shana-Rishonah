import React, { useState } from "react";
import {
  ContactPageWrap,
  InputWrap,
  MessageWrap,
  TextAreaWrap,
} from "./StyledComponents";
import { Form, Input, TextArea } from "semantic-ui-react";
import { ContactButton } from "./layout/StyledComponents";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

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
    <ContactPageWrap>
      {showSuccess ? (
        <>
          <h1>
            Thank you for taking the time to contact us.
            <br />
            We value your feedback! <br /> You can expect to hear back from one
            of our representitives shortly!
          </h1>
          <ContactButton onClick={() => navigate("/")}>
            Go Home
          </ContactButton>
        </>
      ) : (
        <>
          <TextAreaWrap>
            <InputWrap>
              <Input
                style={{ width: "100%" }}
                placeholder="Your email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
              />
            </InputWrap>
            <Form>
              <TextArea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your message goes here"
                rows="8"
              />
            </Form>
          </TextAreaWrap>
          <div style={{ float: "right", padding: "10px 270px" }}>
            <ContactButton
              disabled={
                !message ||
                !userEmail?.includes("@") ||
                !userEmail?.includes(".")
              }
              onClick={() => onEmailSend()}
            >
              Submit Message
            </ContactButton>
          </div>
        </>
      )}
    </ContactPageWrap>
  );
};
export default ContactPage;
