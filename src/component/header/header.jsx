"use client";
import React from 'react';
import Nav from '../nav/nav'
import style from './css/header.module.css'
import { FaCode } from "react-icons/fa6";
import { LuPalette } from "react-icons/lu";
import { FaRocket } from "react-icons/fa6";
import { FaBolt } from "react-icons/fa6";;
import { motion } from "framer-motion";

const Header = () => {

	const iconAnimate = [
    { Icon: FaCode, delay: 0, x: 100, y: 50, className: "fistIcon" },
    { Icon: LuPalette, delay: 0.2, x: -100, y: -30, className: "twoIcon" },
    { Icon: FaRocket, delay: 0.4, x: 150, y: -50, className: "threeIcon" },
    { Icon: FaBolt, delay: 0.6, x: -150, y: 80, className: "fourIcon" },
  ];
	return (
		<div className={style.headerContainer}>
			<Nav/>
			{iconAnimate.map(({ Icon, delay, x, y, className}, index) => (
        <motion.div
          key={index}
										className={`${style.iconContainer} ${style[className]}`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: [0, x * 0.5, 0],
            y: [0, y * 0.5, 0],
          }}
          transition={{
            delay,
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            left: `${20 + index * 15}%`,
            top: `${20 + index * 20}%`,
            color:
              index % 2 === 0
                ? "#FFB84D"
                : "#4F9CF9",
          }}
        >
          <Icon size={48} />
        </motion.div>
      ))}
			<div className={style.headerInnerContainer}>
				<h1 className={style.title}>Neoma Web Studio</h1>
				<p className={style.subTitle}>Створюй сучасні веб-рішення з NEOMA </p>
				<div className={style.buttonContainer}>
					<a href="" className={style.buttonLinkProject}>Наші проєкти</a>
					<a href="" className={style.buttonLinkContact}>Зв'язатись з нами</a>
				</div>
				<div className={style.cardContainer}>
					<div className={style.card}>
						<h3 className={style.titleCardOne}>50+</h3>
						<p className={style.descCard}>Lorem, ipsum.</p>
					</div>

					<div className={style.card}>
						<h3 className={style.titleCardTwo}>5+</h3>
						<p className={style.descCard}>Lorem, ipsum.</p>
					</div>

					<div className={style.card}>
						<h3 className={style.titleCardThree}>100%</h3>
						<p className={style.descCard}>Lorem, ipsum.</p>
					</div>

				</div>
			</div>
		</div>
	);
}

export default Header;
