/* eslint-disable no-unused-vars */
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

/* eslint-disable class-methods-use-this */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */

import { Database, DatabaseTypes } from '@maxqwars/xconn'
import { VIDEO_QUALITY_ENUM } from '../enums/VIDEO_QUALITY_ENUM'
import CoreApiService from './CoreApiService'

class StreamPlayerService extends CoreApiService {
	private database: Database | null = null

	private QUALITY_PRESET_CONF_KEY = 'QUALITY_PRESET'

	init(url: string) {
		this.apiUrl = url
		this.database = new Database(this.apiUrl)
	}

	async getPlayerForRelease(
		code: string
	): Promise<DatabaseTypes.ITitlePlayer | null> {
		if (this.database !== null) {
			const release = await this.database.getTitle({ code, filter: ['player'] })
			return release?.player as DatabaseTypes.ITitlePlayer
		}
		return null
	}

	async getQuality(): Promise<VIDEO_QUALITY_ENUM> {
		const { value } = await this.storage.get({
			key: this.QUALITY_PRESET_CONF_KEY,
		})

		return value === null
			? VIDEO_QUALITY_ENUM.FULL_HD
			: (value as VIDEO_QUALITY_ENUM)
	}

	async setQuality(preset: VIDEO_QUALITY_ENUM): Promise<void> {
		await this.storage.set({
			key: this.QUALITY_PRESET_CONF_KEY,
			value: preset,
		})
	}

	async preparePlaylistForQuality(
		player: DatabaseTypes.ITitlePlayer,
		quality: VIDEO_QUALITY_ENUM
	): Promise<string[]> {
		const qualityPlaylist = []
		const { host, playlist } = player

		for (const key in playlist) {
			const { hls } = playlist[key as unknown as number]

			switch (quality) {
				case VIDEO_QUALITY_ENUM.FULL_HD:
					qualityPlaylist.push(`https://${host}${hls?.fhd}`)
					break

				case VIDEO_QUALITY_ENUM.HD:
					qualityPlaylist.push(`https://${host}${hls?.hd}`)
					break

				case VIDEO_QUALITY_ENUM.SD:
					qualityPlaylist.push(`https://${host}${hls?.sd}`)
					break

				default:
					qualityPlaylist.push(`https://${host}${hls?.sd}`)
			}
		}

		return qualityPlaylist
	}

	async getEpisodeIndexForRelease() {
		throw Error('Not implemented')
	}

	async setEpisodeIndexForRelease() {
		throw Error('Not implemented')
	}
}

export default new StreamPlayerService()
