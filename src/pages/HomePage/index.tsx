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

import {
	IonCol,
	IonContent,
	IonGrid,
	IonHeader,
	IonPage,
	IonRow,
	IonTitle,
	IonToolbar,
} from '@ionic/react'

import React from 'react'
import { useTranslation } from 'react-i18next'
import { AppNeedSetupCard } from '../../components'
import { CENTERED_COLUMN } from '../../constants/CENTERED_COLUMN'
import { ServerUpdates } from '../../containers'
import { useAppSelector } from '../../redux/hooks'
import { LARGE_CENTERED_COLUMN } from '../../constants/LARGE_CENTERED_COLUMN'

const HomePage = () => {
	const apiUrl = useAppSelector(state => state.appConfig.apiUrl)
	const { t } = useTranslation()

	const page = (content: React.ReactNode) => (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>{t('home-page-toolbar-label')}</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse='condense'>
					<IonToolbar>
						<IonTitle size='large'>{t('home-page-toolbar-label')}</IonTitle>
					</IonToolbar>
				</IonHeader>
				{content}
			</IonContent>
		</IonPage>
	)

	if (apiUrl?.length === 0) {
		return page(
			<IonGrid>
				<IonRow>
					<IonCol {...CENTERED_COLUMN}>
						<AppNeedSetupCard />
					</IonCol>
				</IonRow>
			</IonGrid>
		)
	}

	return page(
		<IonGrid>
			<IonRow className='ion-align-items-start'>
				<IonCol {...LARGE_CENTERED_COLUMN}>
					<ServerUpdates />
				</IonCol>
			</IonRow>
		</IonGrid>
	)
}

export default HomePage
