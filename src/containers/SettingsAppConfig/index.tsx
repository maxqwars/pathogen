// Copyright (C) 2021 Maxim "maxqwars" Maximenko <maxqwars@gmail.com>
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

import { IonCol, IonRow } from '@ionic/react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'

import { APIServerControl } from '../../components'
import AppConfigService from '../../services/AppConfigService'
import { CENTERED_COLUMN } from '../../constants/CENTERED_COLUMN'
import React from 'react'
import { setBaseUrl } from '../../slices/appConfig'

interface ISettingsAppConfigProps {}

const SettingsAppConfig = (props: ISettingsAppConfigProps) => {
  const baseUrl = useAppSelector(state => state.appConfig.baseUrl)
  const dispatch = useAppDispatch()

  const defineBaseUrl = (url: string) => {
    AppConfigService.setApiServerUrl(url)
    dispatch(setBaseUrl(url))
  }

  return (
    <IonRow>
      <IonCol {...CENTERED_COLUMN}>
        <APIServerControl url={baseUrl === null ? '' : baseUrl} onUrlChanged={url => defineBaseUrl(url)} />
      </IonCol>
    </IonRow>
  )
}

export default SettingsAppConfig
