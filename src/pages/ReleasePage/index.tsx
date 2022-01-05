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

import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react'
import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useAppSelector } from '../../redux/hooks'
import DatabaseService from '../../services/DatabaseService'

interface IReleasePageProps {}

const ReleasePage = (props: IReleasePageProps) => {
  const apiUrl = useAppSelector(state => state.appConfig.apiUrl)
  const params = useParams<{ code: string }>()

  useEffect(() => {
    DatabaseService.setApiUrl(apiUrl as string)
    DatabaseService.getTitle(params['code']).then(res => {
      console.log(res)
    })
  }, [apiUrl, params])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Release_Page</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle>Release_Page</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  )
}

export default ReleasePage