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

import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonProgressBar } from '@ionic/react'
import { DatabaseTypes } from '@maxqwars/xconn'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { ReleaseView } from '../../containers'
import { useAppSelector } from '../../redux/hooks'
import DatabaseService from '../../services/DatabaseService'

interface IReleasePageProps {}

const ReleasePage = (props: IReleasePageProps) => {
  const [release, setRelease] = useState<DatabaseTypes.ITitle | null>(null)
  const apiUrl = useAppSelector(state => state.appConfig.apiUrl)
  const params = useParams<{ code: string }>()

  useEffect(() => {
    DatabaseService.init(apiUrl as string)

    if (release === null) {
      DatabaseService.getTitle(params['code']).then(res => {
        setRelease(res)
      })
    } else {
      if (release.code !== params['code']) {
        DatabaseService.getTitle(params['code']).then(res => {
          setRelease(res)
        })
      }
    }
  }, [apiUrl, params, release])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Release_Page</IonTitle>
        </IonToolbar>
        {release === null ? <IonProgressBar type="indeterminate" /> : null}
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle>Release_Page</IonTitle>
          </IonToolbar>
          {release === null ? <IonProgressBar type="indeterminate" /> : null}
        </IonHeader>

        {release !== null ? <ReleaseView release={release} /> : null}
      </IonContent>
    </IonPage>
  )
}

export default ReleasePage
