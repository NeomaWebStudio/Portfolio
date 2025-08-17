import React from 'react';
import Nav from '../nav/nav'
import style from './css/header.module.css'

const Header = () => {
	return (
		<div className={style.headerContainer}>
			<Nav/>
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
