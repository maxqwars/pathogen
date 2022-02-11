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

import { createSlice } from '@reduxjs/toolkit'
import { DatabaseTypes } from '@maxqwars/xconn'
import { VIDEO_QUALITY_ENUM } from '../enums/VIDEO_QUALITY_ENUM'

/* -------------------------------------------------------------------------- */
/*                               State interface                              */
/* -------------------------------------------------------------------------- */
interface IStreamPlayer {
	quality: VIDEO_QUALITY_ENUM | null
	code: string | null
	m3u: string | null
	host: string | null
	episodeIndex: number | null
	playlist: DatabaseTypes.ITitlePlayer | null
}

/* -------------------------------------------------------------------------- */
/*                                Initial state                               */
/* -------------------------------------------------------------------------- */
const initialState = {
	quality: null,
	code: null,
	m3u: null,
	host: null,
	episodeIndex: null,
	playlist: null,
} as IStreamPlayer

/* -------------------------------------------------------------------------- */
/*                                    Slice                                   */
/* -------------------------------------------------------------------------- */
const streamPlayer = createSlice({
	name: 'stream-player',
	initialState,
	reducers: {},
})

/* -------------------------------------------------------------------------- */
/*                                   Exports                                  */
/* -------------------------------------------------------------------------- */
export default streamPlayer.reducer
// export const {} = streamPlayer.actions
