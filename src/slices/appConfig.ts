// Copyright (C) 2021 Maxim "maxqwars" Maximenko <maxqwars@gmail.com>
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

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IAppConfig {
  baseUrl: string | null;
}

const initialState = {
  baseUrl: null,
} as IAppConfig;

const appConfig = createSlice({
  name: "app-config",
  initialState,
  reducers: {
    setBaseUrl(state, action: PayloadAction<string | null>) {
      state.baseUrl = action.payload;
    },
  },
});

export const { setBaseUrl } = appConfig.actions;
export default appConfig.reducer;