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

import { IonCard, IonCardHeader, IonCardTitle, IonItem, IonLabel } from '@ionic/react'

import React from 'react'

type Props = {}

const AppComponentsList = (props: Props) => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Used components</IonCardTitle>
      </IonCardHeader>
      <IonItem>
        <IonLabel>Ionic Framework</IonLabel>
      </IonItem>
    </IonCard>
  )
}

export default AppComponentsList
