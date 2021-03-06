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
import {
	AboutApp,
	AppComponentsList,
	AppLinks,
	SettingsSection,
} from '../../components'

import { CENTERED_COLUMN } from '../../constants/CENTERED_COLUMN'
import { SettingsAppConfig } from '../../containers'

function SettingsPage() {
	const { t } = useTranslation()

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>{t('settings-page-toolbar-label')}</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse='condense'>
					<IonToolbar>
						<IonTitle size='large'>{t('settings-page-toolbar-label')}</IonTitle>
					</IonToolbar>
				</IonHeader>

				<IonGrid>
					<SettingsSection title={t('config-settings-section-label')} />
					<SettingsAppConfig />

					<SettingsSection title={t('config-about-app-section-label')} />
					<AboutApp />

					<IonRow>
						<IonCol {...CENTERED_COLUMN}>
							<AppLinks />
						</IonCol>
					</IonRow>

					<IonRow>
						<IonCol {...CENTERED_COLUMN}>
							<AppComponentsList />
						</IonCol>
					</IonRow>
				</IonGrid>
			</IonContent>
		</IonPage>
	)
}

export default SettingsPage
