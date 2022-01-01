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

import { IonCard, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react'

import { BookmarksWidget } from '../../components'
import React from 'react'
import placeholderImage from '../../assets/placeholder.svg'
import { useTranslation } from 'react-i18next'

interface IHomePageProps {}

const HomePage = (props: IHomePageProps) => {

  const { t } = useTranslation()

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
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonSearchbar value={''} onIonChange={e => console.log(e.detail.value!)} />
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonGrid>
          <IonRow>
            <IonCol sizeXs="3">
              <IonCard>
                <img src={placeholderImage} alt="" style={{ borderRadius: "5px" }} />
              </IonCard>
            </IonCol>
            <IonCol sizeXs="3">
              <IonCard>
                <img src={placeholderImage} alt="" style={{ borderRadius: "5px" }} />
              </IonCard>
            </IonCol>
            <IonCol sizeXs="3">
              <IonCard>
                <img src={placeholderImage} alt="" style={{ borderRadius: "5px" }} />
              </IonCard>
            </IonCol>
            <IonCol sizeXs="3">
              <IonCard>
                <img src={placeholderImage} alt="" style={{ borderRadius: "5px" }} />
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonGrid>
          <IonRow>
            <IonCol sizeXs="12">
              <BookmarksWidget />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}

export default HomePage
