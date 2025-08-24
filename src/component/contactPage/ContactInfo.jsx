// src/components/ContactInfo.js
import React from "react";
import styles from "./contactInfoStyle/css/ContactInfo.module.css";
import { FaRegEnvelope, FaRegClock } from "react-icons/fa";
import { FiPhone, FiMapPin } from "react-icons/fi";
import { motion } from "framer-motion";

const animateCard = {
  hidden: (i) => ({
    opacity: 0,
    x: i % 2 === 0 ? 100 : -100, // парні (0,2) — зправа, непарні (1,3) — зліва
  }),
  visible: (i) => ({
    opacity: 1,
    x: [i % 2 === 0 ? 100 : -100, 0, i % 2 === 0 ? -20 : 20, 0], // переліт + відскок
    transition: { duration: 1, ease: "easeInOut" },
  }),
};

// ВАЖЛИВО: staggerChildren усередині variants батька
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,   // інтервал між картками
      // delayChildren: 0.1,  //  затримка перед першою
    },
  },
};

const ContactInfo = () => {
  return (
    <div className={styles.contactInfo}>
      <div className={styles.advantagesContainer}>
        <h2>Наші переваги</h2>
        <motion.ul className={styles.advantagesList}
									variants={container}
        initial="hidden"
        whileInView="visible"           // тригеримо всі картки разом коли контейнер у в'ю
        viewport={{ once: true, amount: 0.2 }}
								>
          <motion.li
											variants={animateCard} custom={1}
										>Безкоштовна консультація</motion.li>
          <motion.li
											variants={animateCard} custom={1}
										>Гнучкі умови співпраці</motion.li>
          <motion.li
											variants={animateCard} custom={1}
										>Підтримка після запуску</motion.li>
          <motion.li
											variants={animateCard} custom={1}
										>Сучасні технології</motion.li>
        </motion.ul>
      </div>

      <motion.div
        className={styles.infoCards}
        variants={container}
        initial="hidden"
        whileInView="visible"           // тригеримо всі картки разом коли контейнер у в'ю
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className={styles.card} variants={animateCard} custom={0}>
          <div className={styles.iconCircle}><FaRegEnvelope className={styles.icon} /></div>
          <p>Email</p>
          <a href="mailto:info@neomawebstudio.com">info@neomawebstudio.com</a>
          <p className={styles.cta}>Написати нам</p>
        </motion.div>

        <motion.div className={styles.card} variants={animateCard} custom={1}>
          <div className={styles.iconCircle}><FiPhone className={styles.icon} /></div>
          <p>Телефон</p>
          <a href="tel:+380951234567">+380 (95) 123-45-67</a>
          <p className={styles.cta}>Подзвонити</p>
        </motion.div>

        <motion.div className={styles.card} variants={animateCard} custom={2}>
          <div className={styles.iconCircle}><FiMapPin className={styles.icon} /></div>
          <p>Адреса</p>
          <p>Київ, Україна</p>
          <p className={styles.cta}>Головний офіс</p>
        </motion.div>

        <motion.div className={styles.card} variants={animateCard} custom={3}>
          <div className={styles.iconCircle}><FaRegClock className={styles.icon} /></div>
          <p>Робочі години</p>
          <p>Пн-Пт: 9:00-18:00</p>
          <p className={styles.cta}>Київський час</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactInfo;
