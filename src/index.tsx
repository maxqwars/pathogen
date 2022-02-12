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

import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'

import { setAppReady, setIsFirstLaunch } from './slices/appGuard'

import App from './App'
import AppConfigService from './services/AppConfigService'
import AppGuardService from './services/AppGuardService'
import reportWebVitals from './reportWebVitals'
import { setApiUrl } from './slices/appConfig'
import store from './redux/store'
import StreamPlayerService from './services/StreamPlayerService'
import { setQuality } from './slices/streamPlayer'

/* -------------------------------------------------------------------------- */
/*                                 Prepare app                                */
/* -------------------------------------------------------------------------- */
async function initApp() {
	store.dispatch(setAppReady(false))

	const apiServerUrl = await AppConfigService.getApiUrl()
	const isFirstLaunch = await AppGuardService.getIsFirstLaunch()
	const quality = await StreamPlayerService.getQuality()

	store.dispatch(setApiUrl(apiServerUrl !== null ? apiServerUrl : null))
	store.dispatch(setIsFirstLaunch(isFirstLaunch))
	store.dispatch(setQuality(quality))

	store.dispatch(setAppReady(true))
	localStorage.removeItem('118nextLng')
}

initApp()

/* -------------------------------------------------------------------------- */
/*                                     App                                    */
/* -------------------------------------------------------------------------- */
ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
)

serviceWorkerRegistration.register()
reportWebVitals()
