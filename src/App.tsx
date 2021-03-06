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

/* eslint-disable import/extensions */

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/* Theme variables */
import './theme/variables.css'

/* Import i18n */
import './i18n'

import {
	IonApp,
	IonIcon,
	IonLabel,
	IonPage,
	IonRouterOutlet,
	IonTabBar,
	IonTabButton,
	IonTabs,
	setupIonicReact,
	useIonLoading,
} from '@ionic/react'
import { Redirect, Route } from 'react-router'

import {
	appsOutline,
	cogOutline,
	folderOutline,
	searchOutline,
} from 'ionicons/icons'

import { IonReactRouter } from '@ionic/react-router'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useAppSelector } from './redux/hooks'
import {
	BookmarksPage,
	HomePage,
	ReleasePage,
	SearchPage,
	SettingsPage,
	SetupPage,
	WelcomePageAlt,
} from './pages'

/* ---------------------------- Setup Ionic React --------------------------- */
setupIonicReact()

function App() {
	const { t } = useTranslation()
	const [present, dismiss] = useIonLoading()
	const appReady = useAppSelector(state => state.appGuard.appReady)
	const isFirstLaunch = useAppSelector(state => state.appGuard.isFirstLaunch)

	useEffect(() => {
		if (appReady) {
			dismiss()
		} else {
			present()
		}
	}, [appReady, dismiss, present])

	// If app not ready, return empty page
	if (!appReady) {
		return (
			<IonApp>
				<IonPage />
			</IonApp>
		)
	}

	// If app ready and this launch is fist launch, show welcome page
	if (appReady && isFirstLaunch) {
		return (
			<IonApp>
				<IonReactRouter>
					<IonRouterOutlet>
						<Route path='/' component={WelcomePageAlt} />
						<Route path='/setup:url' component={WelcomePageAlt} />
					</IonRouterOutlet>
				</IonReactRouter>
			</IonApp>
		)
	}

	// Run app in normal mode
	return (
		<IonApp>
			<IonReactRouter>
				<IonTabs>
					<IonRouterOutlet>
						<Route path='/home' component={HomePage} />
						<Route path='/settings' component={SettingsPage} />
						<Route path='/setup:url' component={SetupPage} />
						<Route path='/search' component={SearchPage} />
						<Route path='/search/:query' component={SearchPage} />
						<Route path='/bookmarks' component={BookmarksPage} />
						<Route path='/release/:code' component={ReleasePage} />
						<Route exact path='/'>
							{appReady ? <Redirect to='/home' /> : null}
						</Route>
						<Route exact path='/release'>
							{appReady ? <Redirect to='/home' /> : null}
						</Route>
					</IonRouterOutlet>

					<IonTabBar slot='bottom'>
						<IonTabButton tab='home' href='/home'>
							<IonIcon icon={appsOutline} />
							<IonLabel>{t('home-tab-label')}</IonLabel>
						</IonTabButton>

						<IonTabButton tab='search' href='/search'>
							<IonIcon icon={searchOutline} />
							<IonLabel>{t('search-tab-label')}</IonLabel>
						</IonTabButton>

						<IonTabButton tab='bookmarks' href='/bookmarks'>
							<IonIcon icon={folderOutline} />
							<IonLabel>{t('bookmarks-tab-label')}</IonLabel>
						</IonTabButton>

						<IonTabButton tab='settings' href='/settings'>
							<IonIcon icon={cogOutline} />
							<IonLabel>{t('settings-tab-label')}</IonLabel>
						</IonTabButton>
					</IonTabBar>
				</IonTabs>
			</IonReactRouter>
		</IonApp>
	)
}

export default App
