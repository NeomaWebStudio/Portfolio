'use client'
import React, { useEffect, useState } from 'react'
import Stack from './stack/stack'
import TypeProject from './typeProject/typeProject'
import style from './css/skills.module.css'
import { AnimatePresence, motion } from "framer-motion"
import {Animation} from '@/animation/animationShowElement/animation'

const Skills = () => {

  const [stackShow, setStackShow] = useState('stack')
  // відображення контенту при натискані на силку
  const handleShow = (tab) => {
    if(stackShow === tab) return
    setStackShow(tab)
  }

  // анімація появи компонентів
  const fadeUp = {
    hidden:  { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    exit:    { opacity: 0, y: 20, transition: { duration: 0.3, ease: 'easeIn' } }
  }


  return (
    <div className={style.sectionContainer}>
    {/* Заголовок та опис */}
      <div className={style.titleContainer}>
          <h2 className={style.title}>Наші навички</h2>
          <p className={style.descStack}>Ми володіємо сучасними технологіями та інструментами веб-розробки</p>
      </div>
      {/* Блок перемикання між компонентами */}
      <div className={style.swapComponent}>
          <span className={`${style.tab} ${stackShow === 'stack' ? style.tabActive: ''}`} 
          onClick={() => handleShow('stack')}>
            Технології
            {/* Анімація нижньої лінії */}
            {stackShow === 'stack' && 
              <motion.div 
                className={style.activeTabIndicator}
                layoutId='activeTab'
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            }
          </span>
          <span className={`${style.tab} ${stackShow === 'type' ? style.tabActive: ''}`}
           onClick={() => handleShow('type')}>
            Типи проектів
            {stackShow === 'type' && 
              <motion.div 
                className={style.activeTabIndicator}
                layoutId='activeTab'
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            }
          </span>
      </div>
      {/* Показувати анімацію при відображені 0.1 елемента */}
      <Animation>
        {/* Показувати анімацію виходу */}
      <AnimatePresence mode='wait'>
        {/* Анімація появи */}
      {stackShow === 'stack' ? 
        <motion.div
        key='stack'
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        exit="exit"
        >
          <Stack/>
        </motion.div> :
        <motion.div
        key='type'
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        exit="exit"
        >
          <div className={style.typeContainer}>
            <TypeProject/>
          </div>
        </motion.div> 
        }
        </AnimatePresence>
      </Animation>
    </div>
  )
}

export default Skills
