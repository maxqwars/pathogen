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

import { IonButton, IonCard, IonIcon, IonInput, IonItem } from '@ionic/react'
import React, { useState } from 'react'

// eslint-disable-next-line import/extensions
import { qrCode } from 'ionicons/icons'
import { useTranslation } from 'react-i18next'

interface IAPIServerControlProps {
	url: string
	// eslint-disable-next-line no-unused-vars
	onUrlChanged: { (url: string): void }
}

function APIServerControl(props: IAPIServerControlProps) {
	const { url, onUrlChanged } = props
	const { t } = useTranslation()
	const [inputValue, setInputValue] = useState(url)

	const onInputChange = () => {
		if (inputValue?.length > 0) {
			onUrlChanged(inputValue)
		}
	}

	return (
		<IonCard>
			<IonItem>
				<IonInput
					placeholder={t('api-server-control-placeholder')}
					value={inputValue}
					onIonChange={e => {
						setInputValue(e.detail.value!)
					}}
					onIonBlur={() => {
						if (inputValue.length !== 0) {
							onInputChange()
						} else {
							setInputValue(url === null ? '' : url)
						}
					}}
				/>

				<IonButton
					fill='clear'
					disabled={inputValue.length === 0}
					onClick={() => onInputChange()}
				>
					{t('apply-label')}
				</IonButton>

				<IonButton fill='clear'>
					<IonIcon icon={qrCode} />
				</IonButton>
			</IonItem>
		</IonCard>
	)
}

export default APIServerControl
