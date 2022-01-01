// Copyright (C) 2021 Maxim "maxqwars" Maximenko <maxqwars@gmail.com>
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

import {
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar
} from '@ionic/react'

import { AppNeedSetupCard } from '../../components'
import { CENTERED_COLUMN } from '../../constants/CENTERED_COLUMN'
import React from 'react'
import { useAppSelector } from '../../redux/hooks'
import { useTranslation } from 'react-i18next'

interface IHomePageProps {}

const HomePage = (props: IHomePageProps) => {
  const apiUrl = useAppSelector(state => state.appConfig.apiUrl)
  const { t } = useTranslation()

  const page = (content: React.ReactNode) => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>{t('home-page-toolbar-label')}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">{t('home-page-toolbar-label')}</IonTitle>
            </IonToolbar>
          </IonHeader>
          {content}
        </IonContent>
      </IonPage>
    )
  }

  if (apiUrl?.length === 0) {
    return page(
      <IonGrid>
        <IonRow>
          <IonCol {...CENTERED_COLUMN}>{apiUrl?.length === 0 ? <AppNeedSetupCard /> : null}</IonCol>
        </IonRow>
      </IonGrid>
    )
  }

  return page(
    <IonGrid>
      <IonRow>
        <IonCol {...CENTERED_COLUMN}>
          <IonCard>
            <IonCardContent>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, perferendis.</IonCardContent>
          </IonCard>
        </IonCol>
      </IonRow>
    </IonGrid>
  )
}

export default HomePage
