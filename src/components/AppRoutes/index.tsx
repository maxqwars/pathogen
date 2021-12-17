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

import { Redirect, Route } from 'react-router'

import IRoute from '../../typings/IRoute'
import React from 'react'

interface IAppRoutesProps {
  appRoutes: IRoute[];
}

const AppRoutes = (props: IAppRoutesProps) => {
  return (
    <>
      {
        props.appRoutes.map((route) =>
          route.redirect ? (
            <Route path={route.path} key={route.path}>
              <Redirect to={route.redirect} />
            </Route>
          ) : (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          )
        )
      }</>
  )
}

export default AppRoutes
