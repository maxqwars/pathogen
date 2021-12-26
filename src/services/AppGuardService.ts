// Copyright (C) 2021 Maxim "maxqwars" Maximenko <maxqwars@gmail.com>
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

import { Storage } from "@capacitor/storage";

enum APP_GUARD_KEY_ENUM {
  IS_FIRST_LAUNCH = "IS_FIRST_LAUNCH",
}

class AppGuardService {
  async getIsFirstLaunch(): Promise<boolean> {
    const { value } = await Storage.get({
      key: APP_GUARD_KEY_ENUM.IS_FIRST_LAUNCH,
    });

    return value === null ? true : (value.length > 0);
  }

  async setIsFirstLaunch(value: boolean): Promise<void> {
    await Storage.set({
      key: APP_GUARD_KEY_ENUM.IS_FIRST_LAUNCH,
      value: value ? "_" : "",
    });
  }
}

export default new AppGuardService();
