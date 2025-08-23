// src/components/ContactForm.jsx
"use client";
import React, { useState } from "react";
import styles from "./ContactForm.module.scss";

const ContactForm = () => {
  // Стейт для зберігання даних форми
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  // Стейт для зберігання повідомлень про помилки
  const [errors, setErrors] = useState({});
  // Стейт для показу/приховання списку типів проектів
  const [show, setShow] = useState(false);

  // Показати/сховати меню вибору проекту
  const showMenu = (e) => {
    e.preventDefault();
    setShow((prev) => !prev);
  };

  // Обробка вибору типу проекту
  const handleProjectSelect = (value) => {
    setFormData({ ...formData, projectType: value });
    setShow(false); // Закриваємо меню після вибору
  };

  // Масив типів проектів
  const projects = ["E-Commerce", "SaaS", "Landing page", "Інше"];

  // Функція валідації форми
  const validate = () => {
    let tempErrors = {};

    // Перевірка firstName
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

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0; // true, якщо помилок немає
  };

  // Обробка змін у полях форми
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Обробка відправки форми
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form data submitted:", formData);
      alert("Заявка відправлена!");
    } else {
      console.log("Form has errors.");
    }
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <h2>Залиште заявку</h2>

      {/* Ряд для імені та прізвища */}
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
            onChange={handleChange}
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
            onChange={handleChange}
          />
          {errors.lastName && (
            <span className={styles.errorMessage}>{errors.lastName}</span>
          )}
        </div>
      </div>

      {/* Email */}
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

      {/* Телефон */}
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

        {/* Список варіантів */}
        <div className={`${styles.optionContainer} ${show ? styles.open : ""}`}>
          {projects.map((opt) => (
            <div
              key={opt}
              className={styles.option}
              onClick={() => handleProjectSelect(opt)}
            >
              {opt}
            </div>
          ))}
        </div>
      </div>

      {/* Повідомлення */}
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

export default ContactForm;
