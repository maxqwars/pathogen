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

import { Database, DatabaseTypes, INCLUDE_RESOURCE_ENUM } from '@maxqwars/xconn'
import CoreApiService from './CoreApiService'

class DatabaseService extends CoreApiService {
	private database: Database | null = null

	private readonly RELEASE_CACHE_KEY_PREFIX = 'RELEASE_CACHE_'

	init(url: string) {
		this.apiUrl = url
		this.database = new Database(this.apiUrl)
	}

	async getPosterImage(code: string): Promise<string | null> {
		if (this.database !== null) {
			const release = await this.database.getTitle({
				code,
				include: [INCLUDE_RESOURCE_ENUM.RAW_POSTER],
				filter: ['posters'],
			})
			return release?.posters?.medium?.rawBase64File as string
		}

		return null
	}

	async getRelease(code: string): Promise<DatabaseTypes.ITitle | null> {
		// ! If XDatabase not init, return null
		if (this.database === null) {
			return null
		}

		const rawCache = (await (
			await this.storage.get({ key: this.RELEASE_CACHE_KEY_PREFIX + code })
		).value) as string | null
		const cacheData: DatabaseTypes.ITitle | null =
			rawCache === null ? null : (JSON.parse(rawCache) as DatabaseTypes.ITitle)

		// ? Check cache results
		if (cacheData === null) {
			const release = await this.database.getTitle({
				code,
				remove: ['player'],
			})
			if (release !== null) {
				await this.storage.set({
					key: this.RELEASE_CACHE_KEY_PREFIX + code,
					value: JSON.stringify(release),
				})
				return release
			}
		}

		// try {
		//   const updated = await this._database.getTitle({ code, filter: ['updated'] })
		//   if (updated !== null && cacheData !== null && cacheData.updated !== null) {
		//     if (((updated?.updated as unknown as number) > cacheData.updated) as unknown as number) {
		//       console.log('Cache require update')
		//     }
		//   }
		// } catch {
		//   return cacheData
		// }

		return cacheData
	}

	async getTitle(code: string): Promise<DatabaseTypes.ITitle | null> {
		if (this.database === null) {
			return null
		}

		try {
			return await this.database.getTitle({ code })
		} catch (e) {
			return null
		}
	}
}

export default new DatabaseService()
