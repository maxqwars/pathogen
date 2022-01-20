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

import { IonGrid, IonRow, IonCol } from '@ionic/react'

interface IReleaseViewProps {
  leftColumn: React.ReactNode
  rightColumn: React.ReactNode
  playerVideoView?: React.ReactNode
  playerEpisodeSelector?: React.ReactNode
}

const ReleaseViewLayout = (props: IReleaseViewProps) => {
  const { leftColumn, rightColumn, playerVideoView, playerEpisodeSelector } = props
  return (
    <IonGrid>
      <IonRow>
        <IonCol sizeXs="12" sizeXl="2" offsetXl="3">
          {leftColumn}
        </IonCol>
        <IonCol sizeXs="12" sizeXl="4">
          {rightColumn}
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol sizeXs="12" sizeXl="4" offsetXl="3">
          {playerVideoView}
        </IonCol>
        <IonCol sizeXs="12" sizeXl="2">
          {playerEpisodeSelector}
        </IonCol>
      </IonRow>
    </IonGrid>
  )
}

export default ReleaseViewLayout
