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

/* eslint-disable no-unused-vars */

import 'react-loading-skeleton/dist/skeleton.css'

import React, { useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useDispatch } from 'react-redux'
import { ReleaseBriefly, ReleaseDetails } from '../../components'
import { setCode, setRelease } from '../../slices/releaseView'

import DatabaseService from '../../services/DatabaseService'
import { ReleaseViewLayout } from '../../layout'
import { useAppSelector } from '../../redux/hooks'

interface IReleaseViewProps {
	releaseCode: string
}

function ReleaseView(props: IReleaseViewProps) {
	const { releaseCode } = props

	/* Selectors */
	const apiUrl = useAppSelector(state => state.appConfig.apiUrl)
	const code = useAppSelector(state => state.releaseView.code)
	const releaseData = useAppSelector(state => state.releaseView.releaseData)

	/* Dispatch */
	const dispatch = useDispatch()

	/* Effect */
	useEffect(() => {
		DatabaseService.init(apiUrl as string)

		if (code === null) {
			DatabaseService.getRelease(releaseCode).then(release => {
				dispatch(setRelease(release))
				dispatch(setCode(releaseCode))
			})
		}

		if (code !== null && code !== releaseCode) {
			DatabaseService.getRelease(releaseCode).then(release => {
				dispatch(setRelease(release))
				dispatch(setCode(releaseCode))
			})
		}
	}, [])

	/*
	 * If releaseData is empty, show skeleton layout
	 */
	if (releaseData === null || code === null || code !== releaseCode) {
		return (
			<ReleaseViewLayout
				narrowColumn={
					<>
						<Skeleton height={240} />
						<br />
						<Skeleton height={60} />
						<br />
						<Skeleton height={100} />
					</>
				}
				wideColumn={
					<>
						<Skeleton height={40} />
						<br />
						<Skeleton height={80} />
						<br />
						<Skeleton height={280} />
					</>
				}
			/>
		)
	}

	/*
	 * Show release info
	 */
	return (
		<ReleaseViewLayout
			narrowColumn={<ReleaseBriefly release={releaseData} />}
			wideColumn={<ReleaseDetails release={releaseData} />}
		/>
	)
}

export default ReleaseView
