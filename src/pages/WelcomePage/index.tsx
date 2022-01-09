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

import '../../../node_modules/swiper/swiper.min.css'
import '@ionic/react/css/ionic-swiper.css'

import { IonButton, IonCard, IonContent, IonIcon, IonInput, IonItem, IonLabel, IonPage, IonText } from '@ionic/react'
import React, { useCallback, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { arrowForward, checkmark, qrCode, ribbon, settings, shapes } from 'ionicons/icons'

import AppConfigService from '../../services/AppConfigService'
import AppGuardService from '../../services/AppGuardService'
import styles from './index.module.css'
import { useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

interface IWelcomePageProps {}

const WelcomePage = (props: IWelcomePageProps) => {
  const { t } = useTranslation()
  const history = useHistory()
  const [inputValue, setInputValue] = useState('')

  const setApiServer = useCallback(async () => {
    AppConfigService.setApiUrl(inputValue)
  }, [inputValue])

  const completeSetup = useCallback(async () => {
    await AppGuardService.setIsFirstLaunch(false)
    history.push('/home')
    window.location.reload()
  }, [history])

  return (
    <IonPage>
      <IonContent>
        <Swiper style={{ height: '100%', width: '100%' }} keyboard={true}>
          {/* About app */}
          <SwiperSlide className={styles['slide']}>
            <div className={styles['slide__illustration']}>
              <IonIcon icon={shapes} className={styles['slide__illustration__icon']} />
            </div>

            <div className={styles['slide__content']}>
              <h1>{t('welcome-about-app-head-text')}</h1>
              <IonText>{t('welcome-about-app-text')}</IonText>
              <IonButton>
                <IonLabel>{t('next-label')}</IonLabel>
                <IonIcon icon={arrowForward} />
              </IonButton>
            </div>
          </SwiperSlide>

          {/* License */}
          <SwiperSlide className={styles['slide']}>
            <div className={styles['slide__illustration']}>
              <IonIcon icon={ribbon} className={styles['slide__illustration__icon']} />
            </div>
            <div className={styles['slide__content']}>
              <h1>{t('welcome-open-source-head-text')}</h1>
              <IonText>{t('welcome-open-source-text')}</IonText>
              <IonButton>
                <IonLabel>{t('next-label')}</IonLabel>
                <IonIcon icon={arrowForward} />
              </IonButton>
            </div>
          </SwiperSlide>

          {/* Configure */}
          <SwiperSlide className={styles['slide']}>
            <div className={styles['slide__illustration']}>
              <IonIcon icon={settings} className={styles['slide__illustration__icon']} />
            </div>
            <div className={styles['slide__content']}>
              <h1>{t('welcome-setup-app-head-text')}</h1>
              <IonText>{t('welcome-setup-app-text')}</IonText>
              <IonCard>
                <IonItem>
                  <IonInput
                    placeholder={t('api-server-control-placeholder')}
                    onIonChange={e => setInputValue(e.detail.value!)}
                  />
                  <IonButton fill="clear" onClick={setApiServer}>
                    {t('apply-label')}
                  </IonButton>
                  <IonButton fill="clear">
                    <IonIcon icon={qrCode} />
                  </IonButton>
                </IonItem>
              </IonCard>
              <div>
                <IonButton>
                  <IonLabel>{t('next-label')}</IonLabel>
                  <IonIcon icon={arrowForward} />
                </IonButton>
              </div>
            </div>
          </SwiperSlide>

          {/* Complete */}
          <SwiperSlide className={styles['slide']}>
            <div className={styles['slide__illustration']}>
              <IonIcon icon={checkmark} className={styles['slide__illustration__icon']} />
            </div>
            <div className={styles['slide__content']}>
              <b>
                <h1>{t('welcome-all-done-head-text')}</h1>
              </b>
              <IonText>{t('welcome-all-done-text')}</IonText>
              <div>
                <IonButton onClick={completeSetup}>
                  <IonLabel>{t('complete-label')}</IonLabel>
                </IonButton>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </IonContent>
    </IonPage>
  )
}

export default WelcomePage
