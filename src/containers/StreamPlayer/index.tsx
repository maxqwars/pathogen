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

import { DatabaseTypes } from '@maxqwars/xconn'
import React, { useCallback, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import { EpisodesList, VideoView } from '../../components'
import { VIDEO_QUALITY_ENUM } from '../../enums/VIDEO_QUALITY_ENUM'
import { VideoPlayerLayout } from '../../layout'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import StreamPlayerService from '../../services/StreamPlayerService'
import {
	setCode,
	setM3U,
	setEpisodeIndex,
	setPlaylist,
} from '../../slices/streamPlayer'

type Props = {
	releaseCode: string
}

function StreamPlayer(props: Props) {
	// Props
	const { releaseCode } = props

	// Dispatch
	const dispatch = useAppDispatch()

	/* -------------------------------- Selectors ------------------------------- */
	const apiUrl = useAppSelector(state => state.appConfig.apiUrl)
	const code = useAppSelector(state => state.streamPlayer.code)
	const episodeIndex = useAppSelector(state => state.streamPlayer.episodeIndex)
	const playlist = useAppSelector(state => state.streamPlayer.playlist)
	const quality = useAppSelector(state => state.streamPlayer.quality)
	const m3u = useAppSelector(state => state.streamPlayer.m3u)

	/* -------------------------------------------------------------------------- */
	/*                              Show UI skeleton                              */
	/* -------------------------------------------------------------------------- */
	if (true) {
		return (
			<VideoPlayerLayout
				wideColumn={
					<>
						<Skeleton height={240} />
						<br />
					</>
				}
				narrowColumn={
					<>
						<Skeleton height={240} />
						<br />
					</>
				}
			/>
		)
	}

	/* -------------------------------------------------------------------------- */
	/*                                   Show UI                                  */
	/* -------------------------------------------------------------------------- */
	return (
		<VideoPlayerLayout
			wideColumn={<EpisodesList setIndex={() => {}} list={playlist as string[]} />}
			narrowColumn={<VideoView m3u={m3u as string} />}
		/>
	)
}

export default StreamPlayer
