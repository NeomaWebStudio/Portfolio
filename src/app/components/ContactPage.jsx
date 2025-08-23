// src/components/ContactPage.jsx
"use client";
import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import styles from "./ContactPage.module.scss";

const ContactPage = () => {
  return (
    <div className={styles.container}>
      {/* 🔹 Блок форми контакту */}
      <div className={styles.contactFormWrapper}>
        <ContactForm />
      </div>

      {/* 🔹 Блок контактної інформації */}
      <div className={styles.contactInfoWrapper}>
        <ContactInfo />
      </div>
    </div>
  );
};

export default ContactPage;
