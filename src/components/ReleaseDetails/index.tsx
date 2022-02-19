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

import { IonCard, IonCardHeader, IonCardTitle } from '@ionic/react'
import {
	DatabaseTypes,
	TITLE_CONTENT_TYPE_CODE_ENUM,
	TITLE_SEASON_CODE_ENUM,
} from '@maxqwars/xconn'
import { useTranslation } from 'react-i18next'
import millify from 'millify'
import React from 'react'
import styles from './index.module.css'

interface IReleaseDetailsProps {
	release: DatabaseTypes.ITitle
}

function ReleaseDetails(props: IReleaseDetailsProps) {
	const { release } = props
	const { t, i18n } = useTranslation()
	const lng = i18n.language

	const decodeSeason = (seasonCode: TITLE_SEASON_CODE_ENUM) => {
		switch (+seasonCode) {
			case TITLE_SEASON_CODE_ENUM.AUTUMN: {
				return t('season-autumn-label')
			}
			case TITLE_SEASON_CODE_ENUM.SPRING: {
				return t('season-spring-label')
			}
			case TITLE_SEASON_CODE_ENUM.SUMMER: {
				return t('season-summer-label')
			}
			case TITLE_SEASON_CODE_ENUM.WINTER: {
				return t('season-winter-label')
			}
			default: {
				return 'N/D'
			}
		}
	}

	const decodeType = (typeCode: TITLE_CONTENT_TYPE_CODE_ENUM) => {
		switch (+typeCode) {
			case TITLE_CONTENT_TYPE_CODE_ENUM.MOVIE: {
				return 'MOVIE'
			}
			case TITLE_CONTENT_TYPE_CODE_ENUM.ONA: {
				return 'ONA'
			}
			case TITLE_CONTENT_TYPE_CODE_ENUM.OVA: {
				return 'OVA'
			}
			case TITLE_CONTENT_TYPE_CODE_ENUM.SPECIAL: {
				return 'SPECIAL'
			}
			case TITLE_CONTENT_TYPE_CODE_ENUM.TV: {
				return 'TV'
			}
			default: {
				return 'N/D'
			}
		}
	}

	return (
		<div className={styles['release-details']}>
			<IonCard>
				<IonCardHeader>
					<IonCardTitle>
						{lng === 'ru' ? release?.names?.ru : release?.names?.en}
					</IonCardTitle>
				</IonCardHeader>
			</IonCard>

			<div className={styles['release-details__stats-box']}>
				<div className={styles['release-details__stat-item']}>
					<div className={styles['release-details__stat-item-value']}>
						{millify(release.inFavorites as number)}
					</div>
					<div className={styles['release-details__stat_item-sign']}>
						{t('saves-label').toLowerCase()}
					</div>
				</div>

				<div className={styles['release-details__stat-item']}>
					<div className={styles['release-details__stat-item-value']}>
						{decodeType(release.type?.code as TITLE_CONTENT_TYPE_CODE_ENUM)}
					</div>
					<div className={styles['release-details__stat_item-sign']}>
						{t('type-label').toLowerCase()}
					</div>
				</div>

				<div className={styles['release-details__stat-item']}>
					<div className={styles['release-details__stat-item-value']}>
						{release?.type?.series}
					</div>
					<div className={styles['release-details__stat_item-sign']}>
						{t('episodes-label').toLowerCase()}
					</div>
				</div>

				<div className={styles['release-details__stat-item']}>
					<div className={styles['release-details__stat-item-value']}>
						{release?.season?.year}
					</div>
					<div className={styles['release-details__stat_item-sign']}>
						{t('year-label').toLowerCase()}
					</div>
				</div>

				<div className={styles['release-details__stat-item']}>
					<div className={styles['release-details__stat-item-value']}>
						{decodeSeason(release?.season?.code as TITLE_SEASON_CODE_ENUM)}
					</div>
					<div className={styles['release-details__stat_item-sign']}>
						{t('season-label').toLowerCase()}
					</div>
				</div>
			</div>

			<div className={styles['release-details__box']}>
				{release.description}
			</div>
		</div>
	)
}

export default ReleaseDetails
