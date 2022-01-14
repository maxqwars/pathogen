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

import React, { useEffect, useState } from 'react'

import placeholderImage from '../../assets/placeholder.svg'
import DatabaseService from '../../services/DatabaseService'

interface IReleasePosterImageProps {
  className?: string
  code: string
  height?: string
  width?: string
  apiUrl: string
}

const ReleasePosterImage = (props: IReleasePosterImageProps) => {
  const [image, setImage] = useState<null | string>(null)
  const { code, height, width, className, apiUrl } = props

  useEffect(() => {
    DatabaseService.init(apiUrl)
    DatabaseService.getPosterImage(code).then(image => setImage(image))
  }, [code, apiUrl])

  return (
    <img
      height={height}
      width={width}
      className={className}
      src={image === null ? placeholderImage : `data:image/jpeg;charset=utf-8;base64,${image}`}
      alt=""
    />
  )
}

export default ReleasePosterImage
