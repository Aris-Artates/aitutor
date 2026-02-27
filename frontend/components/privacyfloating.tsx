"use client";

import { useState } from "react";
import { useFloating, offset, flip, shift } from "@floating-ui/react-dom";

export default function PrivacyFloating() {
  const [open, setOpen] = useState<boolean>(false);

  const { refs, floatingStyles } = useFloating({
    placement: "top",
    middleware: [offset(10), flip(), shift()],
  });

  return (
    <>
      {/* Floating Button */}
      <button
        ref={refs.setReference}
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          padding: "10px 16px",
          borderRadius: "9999px",
          backgroundColor: "#111",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          zIndex: 9999,
        }}
      >
        Privacy Policy
      </button>

      {/* Floating Panel */}
      {open && (
        <div
          ref={refs.setFloating}
          style={{
            ...floatingStyles,
            width: "400px",
            maxHeight: "70vh",
            overflowY: "auto",
            background: "#fff",
            borderRadius: "12px",
            boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
            padding: "20px",
            zIndex: 9999,
          }}
        >
          <h2 style={{ fontSize: "18px", fontWeight: 600 }}>
            Privacy Policy
          </h2>

          <p style={{ fontSize: "12px", color: "#666" }}>
            Effective Date: January 1, 2026
          </p>

          <p style={{ marginTop: "10px" }}>
            This Privacy Policy complies with the Data Privacy Act of 2012
            (Republic Act No. 10173) of the Philippines.
          </p>

          <h3 style={{ marginTop: "15px", fontWeight: 600 }}>
            Your Rights
          </h3>
          <ul>
            <li>Right to be informed</li>
            <li>Right to access</li>
            <li>Right to object</li>
            <li>Right to rectification</li>
            <li>Right to erasure or blocking</li>
          </ul>

          <button
            onClick={() => setOpen(false)}
            style={{
              marginTop: "15px",
              padding: "6px 12px",
              background: "#eee",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Close
          </button>
        </div>
      )}
    </>
  );
}