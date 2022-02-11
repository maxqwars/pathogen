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

import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { DatabaseTypes } from '@maxqwars/xconn'

interface IServerUpdates {
	updates: DatabaseTypes.ITitle[] | null
}

const initialState = {
	updates: null,
} as IServerUpdates

const serverUpdates = createSlice({
	name: 'server-updates',
	initialState,
	reducers: {
		setUpdates(state, action: PayloadAction<DatabaseTypes.ITitle[] | null>) {
			state.updates = action.payload
		},
	},
})

export const { setUpdates } = serverUpdates.actions
export default serverUpdates.reducer
