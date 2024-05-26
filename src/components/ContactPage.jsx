import React, { useState } from "react";
import {
  ContactButtonWrap,
  ContactPageWrap,
  InputWrap,
  MessageWrap,
  TextAreaWrap,
} from "./StyledComponents";
import { Form, Input, Loader, TextArea } from "semantic-ui-react";
import { ContactButton, DesktopWrapper } from "./layout/StyledComponents";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import { Container } from "reactstrap";

const ContactPage = () => {
  const [message, setMessage] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const onEmailSend = async () => {
    setLoading(true);
    emailjs.init("crryC68HqvblxVf5t");
    const params = {
      message,
      from_name: userEmail,
    };
    await emailjs.send(`default_service`, "template_to_use", params);
    setMessage(null);
    setUserEmail(null);
    setLoading(false);
    setShowSuccess(true);
  };

  return (
    <Container style={{ paddingRight: 24, paddingLeft: 24 }}>
      <ContactPageWrap>
        {showSuccess ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                textAlign: "center",
                flexWrap: "wrap",
              }}
            >
              <div style={{ fontSize: 32 }}>
                Thank you for taking the time to contact us.
                <div style={{ marginTop: 32, fontSize: 28 }}>
                  Your feedback is greatly appriciated!
                </div>
                <div style={{ marginTop: 32, fontSize: 18 }}>
                  One of our representitives will contact you shortly.
                </div>
              </div>
            </div>
            <div style={{ marginTop: 24 }}>
              <ContactButton onClick={() => navigate("/")}>
                Go Home
              </ContactButton>
            </div>
          </div>
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
              {loading ? (
                <Loader active />
              ) : (
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
              )}
            </ContactButtonWrap>
          </>
        )}
      </ContactPageWrap>
    </Container>
  );
};
export default ContactPage;
