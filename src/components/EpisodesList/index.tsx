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

import React from 'react'
import { IonCard, IonList, IonItem, IonLabel, IonButton } from '@ionic/react'

type Props = {
	list: string[]
	// eslint-disable-next-line no-unused-vars
	setIndex: { (src: string): void }
}

function EpisodesList(props: Props) {
	const { list, setIndex } = props
	return (
		<IonCard>
			<IonList>
				{list.map(key => (
					<IonItem key={key}>
						<IonLabel>{key}</IonLabel>
						<IonButton
							onClick={() => {
								setIndex(key)
							}}
						>
							Set
						</IonButton>
					</IonItem>
				))}
			</IonList>
		</IonCard>
	)
}

export default EpisodesList
