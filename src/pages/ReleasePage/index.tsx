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

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonProgressBar,
  IonBackButton,
  IonButtons
} from '@ionic/react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router'
import { ReleaseView } from '../../containers'

interface IReleasePageProps {}

const ReleasePage = (props: IReleasePageProps) => {
  const { t } = useTranslation()
  const params = useParams<{ code: string }>()
  const releaseCode = params['code'] || null

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>{t('release-page-header-label')}</IonTitle>
        </IonToolbar>
        {releaseCode === null ? <IonProgressBar type="indeterminate" /> : null}
      </IonHeader>

      <IonContent fullscreen>
        {releaseCode !== null ? <ReleaseView releaseCode={params['code'] as string} /> : null}
      </IonContent>
    </IonPage>
  )
}

export default ReleasePage
