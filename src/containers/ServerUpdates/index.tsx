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

/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { useEffect } from 'react'
import { useHistory } from 'react-router'
import Skeleton from 'react-loading-skeleton'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'

import FeedService from '../../services/FeedService'
import { ReleasePosterImage } from '../../components'
import { setUpdates } from '../../slices/serverUpdates'
import styles from './index.module.css'
import 'react-loading-skeleton/dist/skeleton.css'

function ServerUpdates() {
	const dispatch = useAppDispatch()
	const apiUrl = useAppSelector(state => state.appConfig.apiUrl)
	const updates = useAppSelector(state => state.serverUpdates.updates)
	const history = useHistory()

	const onCardClick = (code: string) => {
		history.push(`/release/${code}`)
	}

	useEffect(() => {
		FeedService.init(apiUrl as string)
		FeedService.getUpdates().then(upd => dispatch(setUpdates(upd)))
	}, [apiUrl, dispatch])

	if (updates === null) {
		return (
			<div className={styles.box}>
				<Skeleton width={120} height={200} />
				<Skeleton width={120} height={200} />
				<Skeleton width={120} height={200} />
				<Skeleton width={120} height={200} />
			</div>
		)
	}

	return (
		<div className={styles.box}>
			{updates.map(release => (
				<div
					onClick={() => onCardClick(release.code as string)}
					key={release.code}
				>
					<ReleasePosterImage
						apiUrl={apiUrl as string}
						className={styles.image}
						code={release.code as string}
					/>
				</div>
			))}
		</div>
	)
}

export default ServerUpdates
