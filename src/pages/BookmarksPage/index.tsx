// Copyright (C) 2022 Maxim "maxqwars" Maximenko <maxqwars@gmail.com>
//
// This file is part of pathogen.
//
// pathogen is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// pathogen is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with pathogen.  If not, see <http://www.gnu.org/licenses/>.

import {
	IonCardHeader,
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
import { CENTERED_COLUMN } from '../../constants/CENTERED_COLUMN'

function BookmarksPage() {
	const { t } = useTranslation()

	return (
		<IonPage>
			<IonHeader>
				<IonToolbar>
					<IonTitle>{t('bookmarks-tab-label')}</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse='condense'>
					<IonToolbar>
						<IonTitle size='large'>{t('bookmarks-tab-label')}</IonTitle>
					</IonToolbar>
				</IonHeader>

				<IonGrid>
					<IonRow>
						<IonCol {...CENTERED_COLUMN}>
							<IonCardHeader>
								<IonTitle>Not implemented</IonTitle>
							</IonCardHeader>
						</IonCol>
					</IonRow>
				</IonGrid>
			</IonContent>
		</IonPage>
	)
}

export default BookmarksPage
