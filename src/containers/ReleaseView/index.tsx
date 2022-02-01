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

import 'react-loading-skeleton/dist/skeleton.css'

import React, { useEffect } from 'react'
import { ReleaseBriefly, ReleaseDetails } from '../../components'

import DatabaseService from '../../services/DatabaseService'
import { ReleaseViewLayout } from '../../layout'
import Skeleton from 'react-loading-skeleton'
import { setRelease } from '../../slices/releaseView'
import { useAppSelector } from '../../redux/hooks'
import { useDispatch } from 'react-redux'

interface IReleaseViewProps {
  releaseCode: string
}

const ReleaseView = (props: IReleaseViewProps) => {
  const { releaseCode } = props
  const releaseData = useAppSelector(state => state.releaseView.releaseData)
  const apiUrl = useAppSelector(state => state.appConfig.apiUrl)
  const dispatch = useDispatch()

  useEffect(() => {
    DatabaseService.init(apiUrl as string)
    DatabaseService.getTitle(releaseCode).then(data => dispatch(setRelease(data)))
  }, [apiUrl, releaseCode, dispatch])

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
