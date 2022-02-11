// Copyright (C) 2022 Maxim "maxqwars" Maximenko <maxqwars@gmail.com>
//
// This file is part of @maxqwars/pathogen.
//
// @maxqwars/pathogen is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// @maxqwars/pathogen is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with @maxqwars/pathogen.  If not, see <http://www.gnu.org/licenses/>.

// eslint-disable-next-line import/no-relative-packages
import '../../../node_modules/swiper/swiper.min.css'
import '@ionic/react/css/ionic-swiper.css'

import {
	IonButton,
	IonCard,
	IonContent,
	IonInput,
	IonItem,
	IonPage,
} from '@ionic/react'
import React, { useCallback } from 'react'
// eslint-disable-next-line import/extensions, import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react'

import { useHistory } from 'react-router-dom'
import AppGuardService from '../../services/AppGuardService'
import AppLogoImage from '../../assets/pathogen.svg'
import OneCodebaseAnyPlatformImage from '../../assets/one_codebase_any_platform.svg'
import styles from './styles.module.css'

function WelcomePageAlt() {
	/* Hooks */
	// const { t } = useTranslation()
	const history = useHistory()

	/* Callbacks */
	const finishSetup = useCallback(async () => {
		await AppGuardService.setIsFirstLaunch(false)
		history.push('/home')
		window.location.reload()
	}, [history])

	return (
		<IonPage>
			<IonContent>
				<Swiper style={{ height: '100%', width: '100%' }}>
					{/* ----------------------------- About Pathogen ----------------------------- */}
					<SwiperSlide className={styles.slide}>
						<div className={styles.contentContainer}>
							<div className={styles.containerItem}>
								<img className={styles.itemImage} src={AppLogoImage} alt='' />
							</div>
							<div className={styles.containerItem}>
								<h1 className={styles.heading}>Welcome to Pathogen</h1>
								<p className={styles.paragraph}>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quisquam
									labore cupiditate architecto?
								</p>
								<div className={styles.itemActions}>
									<IonButton>Next</IonButton>
								</div>
							</div>
						</div>
					</SwiperSlide>

					{/* -------------------------------- Fully functional ------------------------------- */}
					<SwiperSlide className={styles.slide}>
						<div className={styles.contentContainer}>
							<div className={styles.containerItem}>
								<img className={styles.itemImage} src={AppLogoImage} alt='' />
							</div>
							<div className={styles.containerItem}>
								<h1 className={styles.heading}>Fully functional</h1>
								<p className={styles.paragraph}>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
									molestiae at iusto incidunt.
								</p>
								<div className={styles.itemActions}>
									<IonButton>next</IonButton>
								</div>
							</div>
						</div>
					</SwiperSlide>

					{/* ----------------------- One codebase. Any Platform ----------------------- */}
					<SwiperSlide className={styles.slide}>
						<div className={styles.contentContainer}>
							<div className={styles.containerItem}>
								<img
									className={styles.itemImage}
									src={OneCodebaseAnyPlatformImage}
									alt=''
								/>
							</div>
							<div className={styles.containerItem}>
								<h1 className={styles.heading}>One codebase. Any platform.</h1>
								<p className={styles.paragraph}>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
									molestiae at iusto incidunt.
								</p>
								<div className={styles.itemActions}>
									<IonButton>next</IonButton>
								</div>
							</div>
						</div>
					</SwiperSlide>

					{/* -------------------------------- Community ------------------------------- */}
					<SwiperSlide className={styles.slide}>
						<div className={styles.contentContainer}>
							<div className={styles.containerItem}>
								<img className={styles.itemImage} src={AppLogoImage} alt='' />
							</div>
							<div className={styles.containerItem}>
								<h1 className={styles.heading}>Community</h1>
								<p className={styles.paragraph}>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
									molestiae at iusto incidunt.
								</p>
								<div className={styles.itemActions}>
									<IonButton>next</IonButton>
								</div>
							</div>
						</div>
					</SwiperSlide>

					{/* -------------------------------- Configure ------------------------------- */}
					<SwiperSlide className={styles.slide}>
						<div className={styles.contentContainer}>
							<div className={styles.containerItem}>
								<img className={styles.itemImage} src={AppLogoImage} alt='' />
							</div>
							<div className={styles.containerItem}>
								<h1 className={styles.heading}>Configure app</h1>
								<p className={styles.paragraph}>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
									molestiae at iusto incidunt.
								</p>
								<IonCard>
									<IonItem>
										<IonInput placeholder='Enter API URL' />
										<IonButton>apply</IonButton>
									</IonItem>
								</IonCard>
								<div className={styles.itemActions}>
									<IonButton>next</IonButton>
								</div>
							</div>
						</div>
					</SwiperSlide>

					{/* -------------------------------- All done -------------------------------- */}
					<SwiperSlide className={styles.slide}>
						<div className={styles.contentContainer}>
							<div className={styles.containerItem}>
								<img className={styles.itemImage} src={AppLogoImage} alt='' />
							</div>
							<div className={styles.containerItem}>
								<h1 className={styles.heading}>All done</h1>
								<p className={styles.paragraph}>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
									molestiae at iusto incidunt.
								</p>
								<div className={styles.itemActions}>
									<IonButton onClick={finishSetup}>Done</IonButton>
								</div>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</IonContent>
		</IonPage>
	)
}

export default WelcomePageAlt
