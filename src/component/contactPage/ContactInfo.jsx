// src/app/components/ContactInfo.jsx
import React from "react"; // Імпортуємо React для створення компонентів
import styles from "../contactPage/contactInfoStyle/css/ContactInfo.module.css"; // Імпортуємо CSS-модуль для стилів
// Іконки для відображення контактів
import { FaRegEnvelope, FaRegClock } from "react-icons/fa";
import { FiPhone, FiMapPin } from "react-icons/fi";

const ContactInfo = () => {
  return (
    <div className={styles.contactInfo}>
      {/* ==========================
          Блок переваг компанії
      ========================= */}
      <div className={styles.advantagesContainer}>
        <h2>Наші переваги</h2>
        <ul className={styles.advantagesList}>
          <li>Безкоштовна консультація</li>
          <li>Гнучкі умови співпраці</li>
          <li>Підтримка після запуску</li>
          <li>Сучасні технології</li>
        </ul>
      </div>

      {/* ==========================
          Блок контактних карток
      ========================= */}
      <div className={styles.infoCards}>
        {/* Картка Email */}
        <div className={styles.card}>
          <div className={styles.iconCircle}>
            {/* Іконка конверта */}
            <FaRegEnvelope className={styles.icon} />
          </div>
          <p>Email</p>
          {/* Посилання для відправки листа */}
          <a href="mailto:info@neomawebstudio.com">info@neomawebstudio.com</a>
          <p className={styles.cta}>Написати нам</p>
        </div>

        {/* Картка Телефон */}
        <div className={styles.card}>
          <div className={styles.iconCircle}>
            {/* Іконка телефону */}
            <FiPhone className={styles.icon} />
          </div>
          <p>Телефон</p>
          {/* Посилання для дзвінка */}
          <a href="tel:+380951234567">+380 (95) 123-45-67</a>
          <p className={styles.cta}>Подзвонити</p>
        </div>

        {/* Картка Адреса */}
        <div className={styles.card}>
          <div className={styles.iconCircle}>
            {/* Іконка мітки для адреси */}
            <FiMapPin className={styles.icon} />
          </div>
          <p>Адреса</p>
          <p>Київ, Україна</p>
          <p className={styles.cta}>Головний офіс</p>
        </div>

        {/* Картка Робочі години */}
        <div className={styles.card}>
          <div className={styles.iconCircle}>
            {/* Іконка годинника */}
            <FaRegClock className={styles.icon} />
          </div>
          <p>Робочі години</p>
          <p>Пн-Пт: 9:00-18:00</p>
          <p className={styles.cta}>Київський час</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo; // Експортуємо компонент, щоб його можна було використовувати в інших файлах
