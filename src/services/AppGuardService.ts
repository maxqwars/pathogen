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

import CoreAppService from './CoreAppService'
import { APP_GUARD_KEY_ENUM } from '../enums/APP_GUARD_KEY_ENUM'

class AppGuardService extends CoreAppService {
	async getIsFirstLaunch(): Promise<boolean> {
		const { value } = await this.storage.get({
			key: APP_GUARD_KEY_ENUM.IS_FIRST_LAUNCH,
		})

		return value === null ? true : value.length > 0
	}

	async setIsFirstLaunch(value: boolean): Promise<void> {
		await this.storage.set({
			key: APP_GUARD_KEY_ENUM.IS_FIRST_LAUNCH,
			value: value ? '_' : '',
		})
	}
}

export default new AppGuardService()
