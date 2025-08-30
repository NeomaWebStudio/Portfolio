import React from "react";
import style from "./css/card.module.css";
import { FaRegEnvelope } from "react-icons/fa"; // Іконка конверта з бібліотеки react-icons
import { FiLinkedin } from "react-icons/fi"; // Іконка LinkedIn
import { LuGithub } from "react-icons/lu"; // Іконка GitHub


const Card = () => {
 return (
  <div className={style.cardContainer}>
   <div className={style.card}>
    <img src='/igorAvatar.png' alt="" className={style.img}/>
				<div className={style.iconsContainer}>
					<FaRegEnvelope className={style.icon} />
					<FiLinkedin className={style.icon} />
					<LuGithub className={style.icon} />
				</div>
    <div className={style.info}>
     <h3 className={style.titleCard}>Ігор Чігінцев</h3>
     <p className={style.role}>MERN Backend Developer</p>
     <p className={style.description}>Невидимий оплот бізнесу та продуктивності
     </p>
     <div>
      <ul className={style.list}>
       <li className={style.listpunkt}>React</li>
       <li className={style.listpunkt}>Express</li>
       <li className={style.listpunkt}>Node.js</li>
       <li className={style.listpunkt}>MongoDB</li>
       <li className={style.listpunkt}>PostgreSQL</li>
      </ul>
     </div>
    </div>
   </div>

   <div className={style.cardTwo}>
    <img src='/homkaAvatar.png' alt="" className={style.imgTwo}/>
				<div className={style.iconsContainer}>
					<FaRegEnvelope className={style.icon} />
					<FiLinkedin className={style.icon} />
					<LuGithub className={style.icon} />
				</div>
    <div className={style.infoTwo}>
     <h3 className={style.titleCardTwo}>Івасько Роман</h3>
     <p className={style.roleTwo}>Frontend Developer & Team Lead</p>
     <p className={style.descriptionTwo}>
     Розробник інтерфейсів на React та сучасних технологіях
     </p>
     <div>
      <ul className={style.listTwo}>
       <li className={style.listpunktTwo}>React</li>
       <li className={style.listpunktTwo}>JavaScript</li>
       <li className={style.listpunktTwo}>TaillWind</li>
       <li className={style.listpunktTwo}>Framer Motion</li>
      </ul>
     </div>
    </div>
   </div>

   <div className={style.cardThree}>
    <img src='/maxAvatar.png' alt="" className={style.imgThree}/>
				<div className={style.iconsContainer}>
					<FaRegEnvelope className={style.icon} />
					<FiLinkedin className={style.icon} />
					<LuGithub className={style.icon} />
				</div>
    <div className={style.infoThree}>
     <h3 className={style.titleCardThree}>Максим Пятковський</h3>
     <p className={style.roleThree}>Frontend Developer</p>
     <p className={style.descriptionThree}>
      Розробник веб-інтерфейсів на React з JavaScript, CSS/SCSS, Figma та Git.
     </p>
     <div>
      <ul className={style.listThree}>
       <li className={style.listpunktThree}>React</li>
       <li className={style.listpunktThree}>CSS/SCSS</li>
       <li className={style.listpunktThree}>JavaScript</li>
       <li className={style.listpunktThree}>Git</li>
       <li className={style.listpunktThree}>Figma</li>
      </ul>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Card;
