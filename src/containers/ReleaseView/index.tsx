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

import { DatabaseTypes } from '@maxqwars/xconn'
import React, { useEffect, useState } from 'react'
import { ReleaseBriefly, ReleaseDetails } from '../../components'
import { useAppSelector } from '../../redux/hooks'
import DatabaseService from '../../services/DatabaseService'
import { ReleaseViewLayout } from '../../layout'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

interface IReleaseViewProps {
  releaseCode: string
}

const ReleaseView = (props: IReleaseViewProps) => {
  const [releaseData, setReleaseData] = useState<null | DatabaseTypes.ITitle>(null)
  const { releaseCode } = props
  const apiUrl = useAppSelector(state => state.appConfig.apiUrl)

  useEffect(() => {
    DatabaseService.init(apiUrl as string)
    DatabaseService.getTitle(releaseCode).then(data => setReleaseData(data))
  }, [apiUrl, releaseCode])

  if (releaseData === null) {
    return (
      <ReleaseViewLayout
        narrowColumn={
          <>
            <Skeleton height={240} />
            <br />
            <Skeleton height={60} />
            <br />
            <Skeleton height={100} />
          </>
        }
        wideColumn={
          <>
            <Skeleton height={40} />
            <br />
            <Skeleton height={80} />
            <br />
            <Skeleton height={280} />
          </>
        }
        // playerVideoView={
        //   <>
        //     <Skeleton height={260} />
        //   </>
        // }
        // playerEpisodeSelector={
        //   <>
        //     <Skeleton height={35} />
        //     <br />
        //     <Skeleton height={25} />
        //     <br />
        //     <Skeleton height={25} />
        //     <br />
        //     <Skeleton height={25} />
        //     <br />
        //     <Skeleton height={25} />
        //   </>
        // }
      />
    )
  }

  return (
    <ReleaseViewLayout
      narrowColumn={<ReleaseBriefly release={releaseData} />}
      wideColumn={<ReleaseDetails release={releaseData} />}
    />
  )
}

export default ReleaseView
