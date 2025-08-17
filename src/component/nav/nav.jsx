import React from 'react';
import style from './css/nav.module.css'

const Nav = () => {
	return (
		<nav className={style.navigationContainer}>
			<h2 className={style.logo}>Neoma Web Studio</h2>
			<ul className={style.linkContainer}>
				<li className={style.link}>Головна</li>
				<li className={style.link}>Про нас</li>
				<li className={style.link}>Навички</li>
				<li className={style.link}>Портфоліо</li>
				<li className={style.link}>Контакти</li>
			</ul>
		</nav>
	);
}

export default Nav;
