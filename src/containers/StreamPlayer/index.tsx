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

import React, { useCallback, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import { EpisodesList, VideoView } from '../../components'
import { VIDEO_QUALITY_ENUM } from '../../enums/VIDEO_QUALITY_ENUM'
import developmentMessage from '../../functions/developmentMessage'
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
	/* Props */
	const { releaseCode } = props

	/* Dispatch */
	const dispatch = useAppDispatch()

	/* -------------------------------- Selectors ------------------------------- */
	const apiUrl = useAppSelector(state => state.appConfig.apiUrl)
	const code = useAppSelector(state => state.streamPlayer.code)
	const episodeIndex = useAppSelector(state => state.streamPlayer.episodeIndex)
	const m3u = useAppSelector(state => state.streamPlayer.m3u)
	const playlist = useAppSelector(state => state.streamPlayer.playlist)
	const quality = useAppSelector(state => state.streamPlayer.quality)

	/* -------------------------------------------------------------------------- */
	/*                                  Callbacks                                 */
	/* -------------------------------------------------------------------------- */
	const fetchReleaseAndPreparePlaylist = async () => {
		const player = await StreamPlayerService.getPlayerForRelease(code as string)
		const list = await StreamPlayerService.preparePlaylistForQuality(
			player,
			quality as VIDEO_QUALITY_ENUM
		)
		dispatch(setPlaylist(list))
		developmentMessage('PLAYLIST_GENERATED_AND_SET')
	}

	const resetProgress = () => {
		dispatch(setEpisodeIndex(0))
		dispatch(setM3U(null))
		developmentMessage('STREAM_PLAYER_STATE_RESET')
	}

	const selectEpisode = useCallback((src: string) => {
		dispatch(setM3U(src))
		developmentMessage('DIRECT_SET_M3U8_SRC')
	}, [])

	/* -------------------------------------------------------------------------- */
	/*                                   Effect                                   */
	/* -------------------------------------------------------------------------- */
	useEffect(() => {
		// ! Init StreamPlayerService
		StreamPlayerService.init(apiUrl as string)

		/* Set release code */
		if (code === null || (code !== null && code !== releaseCode)) {
			dispatch(setCode(releaseCode))
			resetProgress()
		}

		/* Fetch release player data */
		if (code !== null && playlist === null) {
			fetchReleaseAndPreparePlaylist()
		}

		if (code !== null && code !== releaseCode) {
			fetchReleaseAndPreparePlaylist()
		}

		/* Reset player */
		if (m3u === null && playlist !== null && episodeIndex !== null) {
			dispatch(setM3U(playlist[episodeIndex]))
		}
	}, [code, releaseCode, playlist, m3u, episodeIndex])

	/* -------------------------------------------------------------------------- */
	/*                              Show UI skeleton                              */
	/* -------------------------------------------------------------------------- */
	if (playlist === null || m3u === null || episodeIndex === null) {
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
			wideColumn={
				<EpisodesList setIndex={selectEpisode} list={playlist as string[]} />
			}
			narrowColumn={<VideoView src={m3u as string} />}
		/>
	)
}

export default StreamPlayer
