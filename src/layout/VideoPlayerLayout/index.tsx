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

import { IonGrid, IonRow, IonCol } from '@ionic/react'
import React from 'react'

interface IVideoPlayerLayoutProps {
	narrowColumn: React.ReactNode
	wideColumn: React.ReactNode
}

function VideoPlayerLayout(props: IVideoPlayerLayoutProps) {
	const { narrowColumn, wideColumn } = props

	return (
		<IonGrid>
			<IonRow className='ion-align-self-center'>
				<IonCol
					sizeXs='12'
					sizeSm='12'
					sizeMd='4'
					sizeLg='3'
					sizeXl='2'
					offsetXs='0'
					offsetSm='0'
					offsetMd='0'
					offsetLg='0'
					offsetXl='0'
				>
					{wideColumn}
				</IonCol>
				<IonCol
					sizeXs='12'
					sizeSm='12'
					sizeMd='6'
					sizeLg='7'
					sizeXl='4'
					offsetXs='0'
					offsetSm='0'
					offsetMd='1'
					offsetLg='1'
					offsetXl='3'
				>
					{narrowColumn}
				</IonCol>
			</IonRow>
		</IonGrid>
	)
}

export default VideoPlayerLayout
