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

import { IonContent, IonPage } from '@ionic/react'
import { Swiper, SwiperSlide } from 'swiper/react'

import React from 'react'

interface IWelcomePageProps { }

const WelcomePage = (props: IWelcomePageProps) => {
  return (
    <IonPage>
      <IonContent>
        <Swiper>
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
        </Swiper>
      </IonContent>
    </IonPage>
  )
}

export default WelcomePage
