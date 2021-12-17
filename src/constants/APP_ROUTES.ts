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

import {
  HomePage,
} from "../pages";
import IRoute from "../typings/IRoute";

const APP_ROUTES: IRoute[] = [
  {
    path: "/home",
    exact: true,
    component: HomePage,
  },
  // {
  //   path: "/settings",
  //   exact: true,
  //   component: SettingsPage,
  // },
  // {
  //   path: "/search",
  //   exact: true,
  //   component: SearchPage,
  // },
  // {
  //   path: "/bookmarks",
  //   exact: true,
  //   component: BookmarksPage,
  // },
  // {
  //   path: "/release/:id",
  //   exact: true,
  //   component: ReleasePage,
  // }
];

export default APP_ROUTES;