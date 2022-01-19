// Copyright (C) 2022 Maxim "maxqwars" Maximenko <maxqwars@gmail.com>
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

import { IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonTitle } from '@ionic/react'
import { DatabaseTypes } from '@maxqwars/xconn'
import React from 'react'

interface IReleaseViewProps {
  release: DatabaseTypes.ITitle
}

const ReleaseView = (props: IReleaseViewProps) => {
  const { release } = props

  return (
    <IonGrid>
      {/* Info */}
      <IonRow>
        <IonCol></IonCol>
        <IonCol>
          <IonCard>
            <IonCardHeader>
              <IonTitle></IonTitle>
            </IonCardHeader>
          </IonCard>
        </IonCol>
      </IonRow>

      {/* Player */}
      <IonRow>
        <IonCol></IonCol>
        <IonCol></IonCol>
      </IonRow>
    </IonGrid>
  )
}

export default ReleaseView
