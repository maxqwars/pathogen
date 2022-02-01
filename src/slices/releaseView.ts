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

import { DatabaseTypes } from '@maxqwars/xconn'

/* -------------------------------------------------------------------------- */
/*                               State interface                              */
/* -------------------------------------------------------------------------- */
interface IReleaseView {
  releaseData: DatabaseTypes.ITitle | null
  code: string | null
}

/* -------------------------------------------------------------------------- */
/*                                Initial state                               */
/* -------------------------------------------------------------------------- */
const initialState = {
  releaseData: null,
  code: null
} as IReleaseView

/* -------------------------------------------------------------------------- */
/*                                    Slice                                   */
/* -------------------------------------------------------------------------- */
const releaseView = createSlice({
  name: 'release-view',
  initialState,
  reducers: {
    setRelease(state, action: PayloadAction<DatabaseTypes.ITitle | null>) {
      state.releaseData = action.payload
    },
    setCode(state, action: PayloadAction<string | null>) {
      state.code = action.payload
    }
  }
})

/* -------------------------------------------------------------------------- */
/*                                   Exports                                  */
/* -------------------------------------------------------------------------- */
export default releaseView.reducer
export const { setRelease, setCode } = releaseView.actions
