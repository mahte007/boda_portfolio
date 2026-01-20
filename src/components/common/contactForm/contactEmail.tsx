import * as React from "react";

export function ContactEmail(props: {
  name: string;
  email: string;
  message: string;
}) {
  const { name, email, message } = props;

  return (
    <div style={{ fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial" }}>
      <h2>New contact form message</h2>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Message:</strong>
      </p>
      <pre style={{ whiteSpace: "pre-wrap", lineHeight: 1.4 }}>{message}</pre>
    </div>
  );
}
