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

import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import App from './App';
import { Provider } from 'react-redux'
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import store from './redux/store'

// ! DEBUG
(() => {
  if (process.env.NODE_ENV === 'development') {
    store.subscribe(() => {
      console.log(store.getState());
    })
  }
})()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


// ! Disable service workers in development mode
process.env.NODE_ENV === 'development'
  ? serviceWorkerRegistration.unregister()
  : serviceWorkerRegistration.register()

// ! Enable web-vitals
if (process.env.NODE_ENV === 'development') {
  reportWebVitals()
}
