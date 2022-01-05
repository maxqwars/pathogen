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

import { DatabaseTypes, Updates } from '@maxqwars/xconn'
import CoreApiService from './CoreApiService'

class FeedService extends CoreApiService {
  public async getUpdates(): Promise<DatabaseTypes.ITitle[] | null> {
    if (typeof this.__apiUrl === 'undefined') {
      return null
    }

    const X_UPDATES = new Updates(this.__apiUrl)

    try {
      return await X_UPDATES.getUpdates({ limit: 4, filter: ['code'] })
    } catch (e) {
      console.log(e)
      return null
    }
  }
}

export default new FeedService()
