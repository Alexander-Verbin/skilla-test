import React from "react";
import style from "./NavbarItem.module.scss"
import {HandySvg} from 'handy-svg';

type Props = {
	icon: string
	text: string
	isActive: boolean
}
export const NavbarItem = (props: Props) => {
  return(
		<div className={props.isActive ? style.active : style.wrapper}>
			<div className={style.logo}>
				<HandySvg src={props.icon} width={"24"} height={"24"}/>
			</div>
			<p className={style.text}>{props.text}</p>
		</div>
	)
}