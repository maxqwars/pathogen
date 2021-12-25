// Copyright (C) 2021 Maxim "maxqwars" Maximenko <maxqwars@gmail.com>
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

import { Storage } from "@capacitor/storage";

enum CONFIG_KEYS_ENUM {
  BASE_URL = "BASE_URL",
}

class appConfigService {
  async getBaseUrl() {
    const { value } = await Storage.get({
      key: CONFIG_KEYS_ENUM.BASE_URL,
    });
    return value;
  }

  async setBaseUrl(value: string) {
    await Storage.set({
      key: CONFIG_KEYS_ENUM.BASE_URL,
      value: value,
    });
  }
}

export default new appConfigService();
