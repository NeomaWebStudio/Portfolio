"use client"; // Вказує Next.js, що цей компонент виконується на клієнті (браузері)
import React from "react"; // Імпортуємо React, щоб створювати компоненти
import { FaRegEnvelope } from "react-icons/fa"; // Іконка конверта з бібліотеки react-icons
import { FiLinkedin } from "react-icons/fi"; // Іконка LinkedIn
import { LuGithub } from "react-icons/lu"; // Іконка GitHub
import { IoIosArrowRoundUp } from "react-icons/io"; // Іконка стрілки вгору
import styles from "./scss/Footer.module.scss"; // Імпорт стилів CSS-модулем

// Створюємо функціональний компонент Footer
const Footer = () => {
  // Функція, яка прокручує сторінку вгору при кліку на кнопку
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0, // Встановлюємо позицію в 0 пікселів зверху
      behavior: "smooth", // Прокрутка відбувається плавно
    });
  };

  return (
    // Основний тег footer для нижньої частини сайту
    <footer className={styles.footer}>
      {/* Блок основного контенту футера */}
      <div className={styles.footerContent}>
        {/* Перший стовпчик з інформацією про компанію */}
        <div className={styles.column}>
          <h4>Neoma Web Studio</h4>
          <p>
            Створюємо сучасні веб-рішення, які допомагають бізнесу рости та
            розвиватися в цифровому світі.
          </p>
          {/* Соціальні іконки */}
          <div className={styles.socialIcons}>
            <a
              href="https://github.com/"
              target="_blank" // Відкриває посилання в новій вкладці
              rel="noopener noreferrer" // Безпека для зовнішніх посилань
            >
              <LuGithub /> {/* Іконка GitHub */}
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin /> {/* Іконка LinkedIn */}
            </a>
            <a href="mailto:info@neoma.com">
              <FaRegEnvelope /> {/* Іконка конверта для email */}
            </a>
          </div>
        </div>

        {/* Другий стовпчик – послуги */}
        <div className={styles.column}>
          <h3>Послуги</h3>
          <ul className={styles.linkList}>
            <li className={styles.linkItem}>Веб-розробка</li>
            <li className={styles.linkItem}>Мобільні додатки</li>
            <li className={styles.linkItem}>UI/UX дизайн</li>
            <li className={styles.linkItem}>Консалтинг</li>
          </ul>
        </div>

        {/* Третій стовпчик – технології */}
        <div className={styles.column}>
          <h3>Технології</h3>
          <ul className={styles.linkList}>
            <li className={styles.linkItem}>React & Next.js</li>
            <li className={styles.linkItem}>Node.js</li>
            <li className={styles.linkItem}>Python</li>
            <li className={styles.linkItem}>Cloud Solutions</li>
          </ul>
        </div>

        {/* Четвертий стовпчик – компанія */}
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

      {/* Роздільник між контентом і нижньою частиною футера */}
      <div className={styles.divider}></div>

      {/* Нижня частина футера */}
      <div className={styles.footerBottom}>
        <p>&copy; 2025 Neoma Web Studio. Всі права захищені.</p>
        {/* Кнопка для прокрутки вгору */}
        <button onClick={handleScrollToTop} className={styles.backToTop}>
          <IoIosArrowRoundUp /> {/* Іконка стрілки вгору */}
        </button>
      </div>
    </footer>
  );
};

// Експортуємо компонент, щоб його можна було імпортувати в інших файлах
export default Footer;
