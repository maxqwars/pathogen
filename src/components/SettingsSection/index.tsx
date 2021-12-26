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

import { IonCol, IonRow, IonText } from '@ionic/react'

import { CENTERED_COLUMN } from '../../constants/CENTERED_COLUMN'
import React from 'react'

interface ISettingsSectionProps {
  title: string
}

const SettingsSection = (props: ISettingsSectionProps) => {
  const { title } = props

  return (
    <IonRow>
      <IonCol {...CENTERED_COLUMN}>
        <IonText>
          <h2 className="ion-text-center">
            {title}
          </h2>
        </IonText>
      </IonCol>
    </IonRow>
  )
}

export default SettingsSection
