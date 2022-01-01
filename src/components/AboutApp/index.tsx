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

import { IonCard, IonCardContent, IonCol, IonItem, IonLabel, IonList, IonRow } from '@ionic/react'

import AboutAppCoverImage from '../../assets/about-app-cover.svg'
import { CENTERED_COLUMN } from '../../constants/CENTERED_COLUMN'
import React from 'react'
import { useTranslation } from 'react-i18next'

interface IAboutAppProps {}

const AboutApp = (props: IAboutAppProps) => {
  const { t } = useTranslation()

  return (
    <IonRow>
      <IonCol {...CENTERED_COLUMN}>
        <IonCard>
          <img src={AboutAppCoverImage} alt="" width="100%" height="auto" />

          <IonCardContent>
            <p>{t('about-app-card-text')}</p>
          </IonCardContent>

          <IonList>
            <IonItem>
              <IonLabel>Release</IonLabel>
              <IonLabel>{process.env.REACT_APP_VERSION || 'N/D'}</IonLabel>
            </IonItem>

            <IonItem>
              <IonLabel>Channel</IonLabel>
              <IonLabel>{process.env.REACT_APP_UPDATES_CHANNEL || 'N/D'}</IonLabel>
            </IonItem>
          </IonList>
        </IonCard>
      </IonCol>
    </IonRow>
  )
}

export default AboutApp
