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

import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'

import FeedService from '../../services/FeedService'
import { setUpdates } from '../../slices/serverUpdates'
import styles from './index.module.css'

interface IServerUpdatesProps {}

const ServerUpdates = (props: IServerUpdatesProps) => {
  const dispatch = useAppDispatch()
  const apiUrl = useAppSelector(state => state.appConfig.apiUrl)

  useEffect(() => {
    FeedService.apiUrl = apiUrl as string
    FeedService.getUpdates().then(updates => dispatch(setUpdates(updates)))
  }, [apiUrl, dispatch])

  return <div className={styles['box']}>none</div>
}

export default ServerUpdates
