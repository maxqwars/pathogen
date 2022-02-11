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

import { Database } from '@maxqwars/xconn'
import CoreApiServer from './CoreApiService'

class StreamPlayerService extends CoreApiServer {
	private database: Database | null = null

	init(url: string) {
		this.apiUrl = url
		this.database = new Database(this.apiUrl)
	}

	async getPlaylistForRelease() {
		throw Error('Not implemented')
	}

	async getQualityPreset() {
		throw Error('Not implemented')
	}

	async setQualityPreset() {
		throw Error('Not implemented')
	}

	async getEpisodeIndexForRelease() {
		throw Error('Not implemented')
	}

	async setEpisodeIndexForRelease() {
		throw Error('Not implemented')
	}
}

export default new StreamPlayerService()
