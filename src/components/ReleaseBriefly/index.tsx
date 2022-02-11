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

import React from 'react'
import { DatabaseTypes } from '@maxqwars/xconn'
// eslint-disable-next-line import/extensions
import { heart, share } from 'ionicons/icons'
import { IonChip, IonIcon } from '@ionic/react'
import styles from './index.module.css'
import Placeholder from '../../assets/placeholder.svg'

interface IReleaseBrieflyProps {
	release: DatabaseTypes.ITitle
}

function ReleaseBriefly(props: IReleaseBrieflyProps) {
	const { release } = props

	return (
		<div className={styles['release-briefly']}>
			<div className={styles['release-briefly__poster-container']}>
				<img
					className={styles['release-briefly__poster-image']}
					src={Placeholder}
					alt=''
				/>
			</div>

			<div className={styles['release-briefly__actions']}>
				<button type='button' className={styles['release-briefly__action-button']}>
					<IonIcon icon={heart} />
				</button>
				<button type='button' className={styles['release-briefly__action-button']}>
					<IonIcon icon={share} />
				</button>
			</div>

			<div className={styles['release-briefly__genres-container']}>
				{release.genres !== null
					? release?.genres.map(genre => <IonChip key={genre}>{genre}</IonChip>)
					: null}
			</div>
		</div>
	)
}

export default ReleaseBriefly
