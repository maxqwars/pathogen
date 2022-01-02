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

import { Database, DatabaseTypes, INCLUDE_RESOURCE_ENUM } from '@maxqwars/xconn'
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'

import FeedService from '../../services/FeedService'
import { ReleasePosterImage } from '../../components'
import { setUpdates } from '../../slices/serverUpdates'
import styles from './index.module.css'

interface IServerUpdatesProps {}

const ServerUpdates = (props: IServerUpdatesProps) => {
  const dispatch = useAppDispatch()
  const apiUrl = useAppSelector(state => state.appConfig.apiUrl)
  const updates = useAppSelector(state => state.serverUpdates.updates)

  const fetchImage = async (code: string): Promise<DatabaseTypes.ITitle | null> => {
    const X_DATABASE = new Database(apiUrl as string)
    return await X_DATABASE.getTitle({
      code,
      include: [INCLUDE_RESOURCE_ENUM.RAW_POSTER],
      filter: ['poster']
    })
  }

  useEffect(() => {
    FeedService.apiUrl = apiUrl as string
    FeedService.getUpdates().then(updates => dispatch(setUpdates(updates)))
  }, [apiUrl, dispatch])

  if (updates !== null) {
    return (
      <div className={styles['box']}>
        {updates.map(release => (
          <ReleasePosterImage
            key={release.code}
            fetchImageCb={fetchImage}
            className={styles['image']}
            code={release.code as string}
          />
        ))}
      </div>
    )
  }

  return null
}

export default ServerUpdates
