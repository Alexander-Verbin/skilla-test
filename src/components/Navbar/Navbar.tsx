import React from "react";
import style from "./Navbar.module.scss"
import {HandySvg} from 'handy-svg';
import logo from "../../assets/images/svg/logo.svg"
import {NavbarItem} from "./NavbarItem/NavbarItem";
import item1 from './images/svg/item1.svg';
import item2 from './images/svg/item2.svg';
import item3 from './images/svg/item3.svg';
import item4 from './images/svg/item4.svg';
import item5 from './images/svg/item5.svg';
import item6 from './images/svg/item6.svg';
import item7 from './images/svg/item7.svg';
import item8 from './images/svg/item8.svg';
import item9 from './images/svg/item9.svg';
import item10 from './images/svg/item10.svg';
import btn1 from './images/svg/btn1.svg'
import btn2 from './images/svg/btn2.svg'
export const Navbar = () => {
  return(
		<div className={style.wrapper}>
			<div className={style.logo}>
				<HandySvg src={logo} className={style.icon} width={"109"} height={"28"}/>
			</div>
			<div className={style.links}>
				<NavbarItem icon={item1} isActive={false} text={"Итоги"}/>
				<NavbarItem icon={item2} isActive={false} text={"Заказы"}/>
				<NavbarItem icon={item3} isActive={false} text={"Сообщения"}/>
				<NavbarItem icon={item4} isActive={true} text={"Звонки"}/>
				<NavbarItem icon={item5} isActive={false} text={"Контрагенты"}/>
				<NavbarItem icon={item6} isActive={false} text={"Документы"}/>
				<NavbarItem icon={item7} isActive={false} text={"Исполнители"}/>
				<NavbarItem icon={item8} isActive={false} text={"Отчеты"}/>
				<NavbarItem icon={item9} isActive={false} text={"База знаний"}/>
				<NavbarItem icon={item10} isActive={false} text={"Настройки"}/>
			</div>
			<div className={style.buttons}>
				<div className={style.button}>
					<p className={style.button__text}>Добавить заказ</p>
					<div className={style.button__icon}>
						<HandySvg src={btn1} width={'24'} height={"24"}/>
					</div>
				</div>
				<div className={style.button}>
					<p className={style.button__text}>Оплата</p>
					<div className={style.button__icon}>
						<HandySvg src={btn2} width={'25'} height={"25"}/>
					</div>
				</div>
			</div>
		</div>
	)
}