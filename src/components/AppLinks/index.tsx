// Copyright (C) 2022 Maxim "maxqwars" Maximenko
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

import { IonButton, IonCard, IonCardHeader, IonCardTitle, IonItem, IonLabel } from '@ionic/react'

import APP_LINKS_LIST from '../../constants/APP_LINKS_LIST'
import React from 'react'
import { useTranslation } from 'react-i18next'

type Props = {}

const AppLinks = (props: Props) => {
  const { t } = useTranslation()

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Links</IonCardTitle>
      </IonCardHeader>
      {APP_LINKS_LIST.map(item => {
        return (
          <IonItem key={item.label}>
            <IonLabel>{item.label}</IonLabel>
            <IonButton href={item.url} target="_blank">
              {t('go-to-label')}
            </IonButton>
          </IonItem>
        )
      })}
    </IonCard>
  )
}

export default AppLinks
