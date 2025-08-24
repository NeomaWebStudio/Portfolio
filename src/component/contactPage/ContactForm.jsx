// src/components/ContactForm.jsx
"use client"; // Для Next.js: вказуємо, що цей компонент працює на клієнті (браузері)
import React, { useState } from "react"; // Імпортуємо React та useState для стейтів
import styles from "../contactPage/contactFormStyle/css/ContactForm.module.css"; // Імпортуємо CSS модуль для стилів

const ContactForm = () => {
  // Стейт для зберігання даних, які вводить користувач
  const [formData, setFormData] = useState({
    firstName: "", // ім'я
    lastName: "", // прізвище
    email: "", // email
    phone: "", // телефон
    projectType: "", // тип проєкту
    message: "", // повідомлення
  });

  // Стейт для зберігання помилок валідації
  const [errors, setErrors] = useState({});

  // Стейт для показу/приховання списку типів проектів
  const [show, setShow] = useState(false);

  // Функція для показу або приховання меню вибору проекту
  const showMenu = (e) => {
    e.preventDefault(); // Блокуємо стандартну поведінку кнопки
    setShow((prev) => !prev); // Перемикаємо стан show на true/false
  };

  // Обробка вибору типу проекту з меню
  const handleProjectSelect = (value) => {
    setFormData({ ...formData, projectType: value }); // Записуємо вибраний тип проекту
    setShow(false); // Закриваємо меню після вибору
  };

  // Можливі варіанти типів проектів
  const projects = ["E-Commerce", "SaaS", "Landing page", "Інше"];

  // Функція перевірки введених даних (валідація)
  const validate = () => {
    let tempErrors = {}; // тимчасовий об'єкт для помилок

    // Перевірка поля firstName
    if (!formData.firstName) {
      tempErrors.firstName = "Ім'я є обов'язковим.";
    } else if (formData.firstName.length < 2) {
      tempErrors.firstName = "Ім'я має бути не менше 2 символів.";
    } else if (formData.firstName.length > 50) {
      tempErrors.firstName = "Ім'я має бути не більше 50 символів.";
    }

    // Перевірка email
    if (!formData.email) {
      tempErrors.email = "Email є обов'язковим.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email має бути дійсним.";
    }

    // Перевірка телефону
    if (!formData.phone) {
      tempErrors.phone = "Телефон є обов'язковим.";
    } else if (!/^\+380\s\(\d{2}\)\s\d{3}-\d{2}-\d{2}$/.test(formData.phone)) {
      tempErrors.phone = "Невірний формат телефону (+380 (XX) XXX-XX-XX).";
    }

    // Перевірка типу проекту
    if (!formData.projectType) {
      tempErrors.projectType = "Тип проєкту є обов'язковим.";
    }

    setErrors(tempErrors); // Зберігаємо помилки в стейт
    return Object.keys(tempErrors).length === 0; // Повертаємо true, якщо помилок немає
  };

  // Функція для обробки змін у полях форми
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Оновлюємо конкретне поле (firstName, lastName, email тощо)
  };

  // Функція для обробки натискання кнопки "Відправити"
  const handleSubmit = (e) => {
    e.preventDefault(); // Блокуємо стандартне оновлення сторінки
    if (validate()) {
      // Якщо форма пройшла валідацію
      console.log("Form data submitted:", formData); // Виводимо дані у консоль
      alert("Заявка відправлена!"); // Повідомлення користувачу
    } else {
      console.log("Form has errors."); // Якщо є помилки — виводимо в консоль
    }
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <h2>Залиште заявку</h2>

      {/* Рядок для введення імені та прізвища */}
      <div className={styles.formRow}>
        <div className={styles.formField}>
          <span>
            <label htmlFor="firstName">Ім’я</label>
          </span>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="Ваше ім'я"
            value={formData.firstName}
            onChange={handleChange} // Оновлення стейту при введенні
          />
          {errors.firstName && (
            <span className={styles.errorMessage}>{errors.firstName}</span>
          )}
        </div>

        <div className={styles.formField}>
          <span>
            <label htmlFor="lastName">Прізвище</label>
          </span>
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Ваше прізвище"
            value={formData.lastName}
            onChange={handleChange} // Оновлення стейту при введенні
          />
          {errors.lastName && (
            <span className={styles.errorMessage}>{errors.lastName}</span>
          )}
        </div>
      </div>

      {/* Поле Email */}
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="your@email.com"
        value={formData.email}
        onChange={handleChange}
      />
      {errors.email && (
        <span className={styles.errorMessage}>{errors.email}</span>
      )}

      {/* Поле Телефон */}
      <label htmlFor="phone">Телефон</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        placeholder="+380 (95) 123-45-67"
        value={formData.phone}
        onChange={handleChange}
      />
      {errors.phone && (
        <span className={styles.errorMessage}>{errors.phone}</span>
      )}

      {/* Вибір типу проекту */}
      <div className={styles.projectContainer}>
        <label>Тип проєкту</label>
        <button className={styles.selectPole} onClick={showMenu}>
          {formData.projectType || "Виберіть тип проєкту"}
        </button>
        {errors.projectType && (
          <span className={styles.errorMessage}>{errors.projectType}</span>
        )}

        {/* Випадаючий список */}
        <div className={`${styles.optionContainer} ${show ? styles.open : ""}`}>
          {projects.map((opt) => (
            <div
              key={opt}
              className={styles.option}
              onClick={() => handleProjectSelect(opt)} // Обираємо проект
            >
              {opt}
            </div>
          ))}
        </div>
      </div>

      {/* Поле для повідомлення */}
      <label htmlFor="message">Повідомлення</label>
      <textarea
        id="message"
        name="message"
        placeholder="Розкажіть про ваш проект детальніше..."
        value={formData.message}
        onChange={handleChange}
      />
      {errors.message && (
        <span className={styles.errorMessage}>{errors.message}</span>
      )}

      {/* Кнопка відправки */}
      <button type="submit" className={styles.submitButton}>
        Відправити заявку
      </button>
    </form>
  );
};

export default ContactForm; // Експорт компонента для використання в інших файлах
