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

import { IonGrid, IonRow, IonCol, IonCard, IonChip, IonIcon, IonText } from '@ionic/react'
import { DatabaseTypes } from '@maxqwars/xconn'
import React, { useEffect, useState } from 'react'
import { ReleaseBriefly, ReleasePosterImage } from '../../components'
import { useAppSelector } from '../../redux/hooks'
import DatabaseService from '../../services/DatabaseService'
import styles from './index.module.css'
import { heartCircleOutline, shareOutline } from 'ionicons/icons'
import { ReleaseViewLayout } from '../../layout'

interface IReleaseViewProps {
  releaseCode: string
}

const ReleaseView = (props: IReleaseViewProps) => {
  const [releaseData, setReleaseData] = useState<null | DatabaseTypes.ITitle>(null)
  const { releaseCode } = props
  const apiUrl = useAppSelector(state => state.appConfig.apiUrl)

  useEffect(() => {
    DatabaseService.init(apiUrl as string)
    DatabaseService.getTitle(releaseCode).then(data => setReleaseData(data))
  }, [apiUrl, releaseCode])

  console.log(releaseData)

  if (releaseData === null) {
    return <div>none</div>
  }

  return (
    <ReleaseViewLayout
      narrowColumn={<ReleaseBriefly release={releaseData} />}
      wideColumn={<h2>Right column</h2>}
      playerVideoView={<h1>VideoView</h1>}
      playerEpisodeSelector={<h2>Episode selector</h2>}
    />
  )

  return (
    <IonGrid>
      {/* Info */}
      <IonRow>
        <IonCol sizeXs="12" sizeXl="2" offsetXl="3">
          <div className={styles['header_block']}>
            <ReleasePosterImage
              code={releaseData?.code as string}
              apiUrl={''}
              className={styles['header_block__poster_image']}
            />
          </div>

          <div className={styles['header_block__actions']}>
            <button className={styles['header_block__action_button']}>
              <IonIcon icon={heartCircleOutline} />
            </button>
            <button className={styles['header_block__action_button']}>
              <IonIcon icon={shareOutline} />
            </button>
            {/* <IonButton>
              <IonIcon />
            </IonButton> */}
          </div>

          <div className={styles['header_block__genres_list']}>
            {releaseData?.genres?.map(genre => (
              <IonChip key={genre}>{genre}</IonChip>
            ))}
          </div>
        </IonCol>
        <IonCol sizeXs="12" sizeXl="4">
          {releaseData?.announce !== null ? null : <IonCard color="primary">releaseData?.announce</IonCard>}

          <div className={styles['info_block__stats_box']}>
            <div className={styles['info_block__stats_item']}>2</div>
            <div className={styles['info_block__stats_item']}>1</div>
            <div className={styles['info_block__stats_item']}>1</div>
            <div className={styles['info_block__stats_item']}>1</div>
            <div className={styles['info_block__stats_item']}>1</div>
          </div>

          <div className={styles['info_block']}>
            <div className={styles['info_block__box']}>
              <IonText>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti quos sed ab voluptatum dignissimos
                repudiandae minus, nesciunt necessitatibus nostrum et aspernatur aliquid obcaecati alias autem. Quaerat
                totam nemo modi mollitia quo voluptatum!
              </IonText>
            </div>

            <div className={styles['info_block__box']}>
              <p>{releaseData?.description}</p>
            </div>
          </div>
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
