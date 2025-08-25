"use client";
import React from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { LuGithub } from "react-icons/lu";
import { IoIosArrowRoundUp } from "react-icons/io";
import styles from "./scss/Footer.module.scss";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.column}>
          <h4>Neoma Web Studio</h4>
          <p>
            Створюємо сучасні веб-рішення, які допомагають бізнесу рости та
            розвиватися в цифровому світі.
          </p>
          <div className={styles.socialIcons}>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LuGithub />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin />
            </a>
            <a href="mailto:info@neoma.com">
              <FaRegEnvelope />
            </a>
          </div>
        </div>
        <div className={styles.column}>
          <h3>Послуги</h3>
          <ul className={styles.linkList}>
            <li className={styles.linkItem}>Веб-розробка</li>
            <li className={styles.linkItem}>Мобільні додатки</li>
            <li className={styles.linkItem}>UI/UX дизайн</li>
            <li className={styles.linkItem}>Консалтинг</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Технології</h3>
          <ul className={styles.linkList}>
            <li className={styles.linkItem}>React & Next.js</li>
            <li className={styles.linkItem}>Node.js</li>
            <li className={styles.linkItem}>Python</li>
            <li className={styles.linkItem}>Cloud Solutions</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>Компанія</h3>
          <ul className={styles.linkList}>
            <li className={styles.linkItem}>Про нас</li>
            <li className={styles.linkItem}>Портфоліо</li>
            <li className={styles.linkItem}>Блог</li>
            <li className={styles.linkItem}>Кар'єра</li>
          </ul>
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.footerBottom}>
        <p>&copy; 2025 Neoma Web Studio. Всі права захищені.</p>
        <button onClick={handleScrollToTop} className={styles.backToTop}>
          <IoIosArrowRoundUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
