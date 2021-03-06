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

import React, { useEffect } from 'react'
import Hls from 'hls.js'
import appNoticeMessage from '../../functions/appNoticeMessage'

type Props = {
	src: string // ? Link to m3u8
}

function VideoView(props: Props) {
	const { src } = props

	useEffect(() => {
		if (Hls.isSupported()) {
			try {
				const video = document.getElementById('player') as HTMLVideoElement
				const hls = new Hls()
				hls.loadSource(src)
				hls.attachMedia(video)
			} catch (e) {
				appNoticeMessage('Failed init HLS player')
			}
		} else {
			appNoticeMessage('Sorry, you browser not supported HLS')
		}
	}, [src])

	// eslint-disable-next-line jsx-a11y/media-has-caption
	return <video id='player' width={300} height={150} controls />
}

export default VideoView
