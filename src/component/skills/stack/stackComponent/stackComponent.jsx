"use client";
import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import style from "./css/stackComponent.module.css";
import {Animation, AnimationLine} from '@/animation/animationShowElement/animation';
import { motion } from "framer-motion"

const StackLine = ({title, percent, delay}) => {
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1
    });
    const [currentPercent, setCurrentPercent] = useState(0)
    const animationRef = useRef(null)
    // Змінюємо значення currentPercent від 0 до percent за 2 секунди
    useEffect(() => {
      if(!inView) return
      const duration = 1000
      let rafId
      let timeoutId
      let startTime
      // Функція для анімації процентів
      function animate(now) {
          // Час що пройшов з початку анімації
          const elapsed = now - startTime
          // Прогрес анімації від 0 до 1
          const progress = Math.min(elapsed / duration, 1)
          // Значення проценту яке має відобразитись
          const value = Math.round(progress * percent)
          setCurrentPercent(value);
            // Якщо прггрес не завершено запрошуємо наступний кадр анімації
          if (progress < 1) {
              animationRef.current = requestAnimationFrame(animate)
          }  
      }
      // Затримка
      timeoutId = setTimeout(() => {
        startTime = performance.now()
        rafId = requestAnimationFrame(animate)
      }, delay)
      // Очищення таймеру та відміна анімації
      return () => {
        clearTimeout(timeoutId)
        cancelAnimationFrame(rafId)
      };

    }, [inView, percent, delay])


  return (
    // Контейнер для елемента лінії
    <div className={style.stackLineContainer}>
        {/* Заголовок */}
        <span>{title}</span>
        {/* Пустотіла лінія */}
        <div className={style.lineContainer}>
            {/* Заповнена частина лінії */}
           
            <div 
            ref={ref}
            className={`${inView ? style.line : ''}`} 
            style={{width: `${currentPercent}%`, animationDelay: `${delay}s`}}>
                <span className={`${style.percent} ${inView ? style.percentVisible : ''}`}>
                  {currentPercent}%
                </span>
            </div>
        </div>
    </div>
  )
}

const FrameworkBlock = ({text}) => {
  return (
    <Animation>
    <div className={style.frameworkContainer}>
      <span>{text}</span>
    </div>
    </Animation>
  )
}


export {FrameworkBlock, StackLine}
