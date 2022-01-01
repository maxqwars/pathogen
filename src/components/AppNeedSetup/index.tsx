// Copyright (C) 2022 Maxim "maxqwars" Maximenko <maxqwars@gmail.com>
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

import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonItem, IonLabel } from '@ionic/react'

import React from 'react'
import { useTranslation } from 'react-i18next'

interface IAppNeedSetupProps {

}

const AppNeedSetup = (props: IAppNeedSetupProps) => {

  const { t } = useTranslation()

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>{t('app-need-setup-title')}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        {t('app-need-setup-text')}
      </IonCardContent>
      <IonItem>
        <IonLabel>{t('app-need-setup-action-text')}</IonLabel>
        <IonButton routerLink="/settings">{t('go-to-label')}</IonButton>
      </IonItem>
    </IonCard>
  )
}

export default AppNeedSetup
