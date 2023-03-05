import React from "react";
import style from "./Header.module.scss"
import {useSelector} from "react-redux";
import {getDate} from "../../store/Reducers/HeaderReducer/HeaderSelector";
import {HandySvg} from "handy-svg";
import search from "../../assets/images/svg/search.svg"
import arrow from "../../assets/images/svg/arrow.svg"
import avatar from "../../assets/images/avatar.png"

export const Header = () => {
	const date = useSelector(getDate)
	return (
		<div className={style.wrapper}>
			<div className={style.left}>
				<div className={style.date}>
					<p className={style.text}>{date.day}, {date.date} {date.month}</p>
				</div>
				<div className={style.info}>
					<div className={style.info__block}>
						<p className={style.info__block_text}>Новые звонки <span className={style.info__block_text_green}>20 из 30 шт</span>
						</p>
						<div className={style.info__block_status}>
							<span className={style.info__block_status_green}></span>
						</div>
					</div>
					<div className={style.info__block}>
						<p className={style.info__block_text}>Качество разговоров
							<span className={style.info__block_text_yellow}> 40%</span>
						</p>
						<div className={style.info__block_status}>
							<span className={style.info__block_status_yellow}></span>
						</div>
					</div>
					<div className={style.info__block}>
						<p className={style.info__block_text}>Конверсия в заказ
							<span className={style.info__block_text_red}> 67%</span>
						</p>
						<div className={style.info__block_status}>
							<span className={style.info__block_status_red}></span>
						</div>
					</div>
				</div>
			</div>
			<div className={style.right}>
				<div className={style.search}>
					<HandySvg src={search} width="16" height="16"/>
				</div>
				<div className={style.block}>
					<div className={style.block__item}>
						<p className={style.text}>ИП Сидорова Александра Михайловна</p>
						<div className={style.arrow}>
							<HandySvg src={arrow} width="24" height="24"/>
						</div>
					</div>
					<div className={style.block__item}>
						<div className={style.picture}>
							<img src={avatar} alt="profile"/>
						</div>
						<div className={style.arrow}>
							<HandySvg src={arrow} width="24" height="24"/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}