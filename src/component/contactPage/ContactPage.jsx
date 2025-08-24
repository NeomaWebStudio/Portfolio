// src/app/components/ContactPage.jsx
"use client"; // Потрібно для Next.js, щоб компонент рендерився на клієнті
import React from "react"; // Імпортуємо React для створення компонентів
import ContactForm from "./ContactForm"; // Імпортуємо компонент форми
import ContactInfo from "./ContactInfo"; // Імпортуємо компонент контактної інформації
import styles from "../contactPage/contactPageStyle/css/ContactPage.module.css"; // Імпортуємо CSS-модуль для стилів

const ContactPage = () => {
  return (
    <div className={styles.container}>
      {/* 🔹 Блок форми контакту */}
      <div className={styles.contactFormWrapper}>
        {/* Вставляємо компонент форми контакту */}
        <ContactForm />
      </div>

      {/* 🔹 Блок контактної інформації */}
      <div className={styles.contactInfoWrapper}>
        {/* Вставляємо компонент контактної інформації */}
        <ContactInfo />
      </div>
    </div>
  );
};

// Експортуємо компонент, щоб його можна було використовувати на інших сторінках
export default ContactPage;
