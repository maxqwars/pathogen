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

import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { VIDEO_QUALITY_ENUM } from '../enums/VIDEO_QUALITY_ENUM'
import { DatabaseTypes } from '@maxqwars/xconn'

interface IVideoPlayer {
  quality: VIDEO_QUALITY_ENUM | null
  code: string | null
  playlist: DatabaseTypes.IPlayerObjectPlaylist | null
  active: number | null
}

const initialState = {
  quality: null,
  code: null,
  playlist: null,
  active: null
} as IVideoPlayer

const videoPlayer = createSlice({
  name: 'video-player',
  initialState,
  reducers: {
    setQuality(state, action: PayloadAction<VIDEO_QUALITY_ENUM | null>) {
      state.quality = action.payload
    },
    setCode(state, action: PayloadAction<string | null>) {
      state.code = action.payload
    },
    setPlaylist(state, action: PayloadAction<DatabaseTypes.IPlayerObjectPlaylist | null>) {
      state.playlist = action.payload
    },
    setActive(state, action: PayloadAction<number | null>) {
      state.active = action.payload
    }
  }
})

export const { setQuality, setCode, setPlaylist, setActive } = videoPlayer.actions
export default videoPlayer.reducer
