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

/* eslint-disable no-param-reassign */

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { VIDEO_QUALITY_ENUM } from '../enums/VIDEO_QUALITY_ENUM'

/* -------------------------------------------------------------------------- */
/*                               State interface                              */
/* -------------------------------------------------------------------------- */
interface IStreamPlayer {
	quality: VIDEO_QUALITY_ENUM | null
	code: string | null
	m3u: string | null
	episodeIndex: number | null
	playlist: string[] | null
}

/* -------------------------------------------------------------------------- */
/*                                Initial state                               */
/* -------------------------------------------------------------------------- */
const initialState = {
	quality: null,
	code: null,
	m3u: null,
	episodeIndex: null,
	playlist: null,
} as IStreamPlayer

/* -------------------------------------------------------------------------- */
/*                                    Slice                                   */
/* -------------------------------------------------------------------------- */
const streamPlayer = createSlice({
	name: 'stream-player',
	initialState,
	reducers: {
		setQuality(state, action: PayloadAction<VIDEO_QUALITY_ENUM | null>) {
			state.quality = action.payload
		},
		setCode(state, action: PayloadAction<string | null>) {
			state.code = action.payload
		},
		setM3U(state, action: PayloadAction<string | null>) {
			state.m3u = action.payload
		},
		setEpisodeIndex(state, action: PayloadAction<number | null>) {
			state.episodeIndex = action.payload
		},
		setPlaylist(state, action: PayloadAction<string[] | null>) {
			state.playlist = action.payload
		},
	},
})

/* -------------------------------------------------------------------------- */
/*                                   Exports                                  */
/* -------------------------------------------------------------------------- */
export default streamPlayer.reducer
export const { setQuality, setCode, setM3U, setEpisodeIndex, setPlaylist } =
	streamPlayer.actions
