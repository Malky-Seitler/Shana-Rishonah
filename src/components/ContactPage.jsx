import React, { useState } from "react";
import { ContactPageWrap, MessageWrap, TextAreaWrap } from "./StyledComponents";
import { Form, TextArea } from "semantic-ui-react";
import { ContactButton } from "./layout/StyledComponents";

const ContactPage = () => {
  const [message, setMessage] = useState("");

  const onEmailSend = async () => {
    const apiKey =
      "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";
    // sgMail.setApiKey(apiKey);
    // const msg = {
    //   to: "shanahRishonah@gmail.com",
    //   from: "shanahRishonah@gmail.com",
    //   subject: "You have a new comment on Shana Rishonah.com",
    //   text: message,
    // };
    // await sgMail.send(msg);
    const data = {
      personalizations: [
        {
          to: [{ email: "shanahRishonah@gmail.com" }],
          subject: "Hello from SendGrid",
        },
      ],
      from: { email: "shanahRishonah@gmail.com" },
      content: [{ type: "text/plain", value: "This is the body of the email" }],
    };
    fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Email sent");
        } else {
          console.error("Failed to send email:", response.statusText);
        }
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };
  return (
    <ContactPageWrap>
      <TextAreaWrap>
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
        <ContactButton onClick={() => onEmailSend()}>
          Submit Message
        </ContactButton>
      </div>
    </ContactPageWrap>
  );
};
export default ContactPage;
