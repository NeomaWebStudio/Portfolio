import React from 'react';
import style from "./css/team.module.css"
import Card from './card/card';

const Team = () => {
	return (
		<div className={style.teamContainer}>
			<h2 className={style.title}>Наша команда</h2>
			<Card/>
		</div>
	);
}

export default Team;
