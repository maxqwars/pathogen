// Copyright (C) 2021 Maxim "maxqwars" Maximenko <maxqwars@gmail.com>
// 
// This file is part of pathogen.
// 
// pathogen is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
// 
// pathogen is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
// 
// You should have received a copy of the GNU General Public License
// along with pathogen.  If not, see <http://www.gnu.org/licenses/>.

import '../../../node_modules/swiper/swiper.min.css';
import '@ionic/react/css/ionic-swiper.css';

import { IonButton, IonContent, IonPage, IonText } from '@ionic/react'
import { Swiper, SwiperSlide } from 'swiper/react'

import AppGuard from '../../services/AppGuardService'
import AppGuardService from '../../services/AppGuardService';
import React from 'react'
import styles from './index.module.css'

interface IWelcomePageProps { }

const WelcomePage = (props: IWelcomePageProps) => {
  return (
    <IonPage>
      <IonContent>
        <Swiper
          style={{ height: "100%", width: "100%" }}
          keyboard={true}
        >

          <SwiperSlide className={styles['slide']}>
            <div className={styles['slide__illustration']}>
              <img src="https://via.placeholder.com/350x150" alt="" />
            </div>
            <div className={styles['slide__actions']}>
              <IonText>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi similique mollitia at corrupti, eveniet rerum ea dignissimos libero dolorem velit autem a repudiandae voluptates! Non est dicta molestias aliquam facere laboriosam laborum.
              </IonText>
            </div>
          </SwiperSlide>

          <SwiperSlide className={styles['slide']}>
            <div className={styles['slide__illustration']}>
              <img src="https://via.placeholder.com/350x150" alt="" />
            </div>
            <div className={styles['slide__actions']}>
              <IonButton onClick={() => { AppGuardService.setIsFirstLaunch(false) }}>
                complete Setup
              </IonButton>
            </div>
          </SwiperSlide>


          {/* <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide> */}
        </Swiper>
      </IonContent>
    </IonPage>
  )
}

export default WelcomePage
