/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
/* Theme variables */
import './theme/variables.css';
import './i18n'

import { HomePage, SettingsPage } from './pages'
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { Redirect, Route } from 'react-router';
import { appsOutline, cogOutline, folderOutline, searchOutline } from 'ionicons/icons';
import { useAppDispatch, useAppSelector } from './redux/hooks';

import { IonReactRouter } from '@ionic/react-router';
import appConfigService from './services/appConfigService';
import { setBaseUrl } from './slices/appConfig'
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next'

// ! DEBUG
(() => {
  if (process.env.NODE_ENV === 'development') {
    console.log(process.env)
  }
})();

setupIonicReact();

const App: React.FC = () => {
  const { t } = useTranslation()
  const appConfigBaseUrl = useAppSelector(state => state.appConfig.baseUrl)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (appConfigBaseUrl === null) {
      appConfigService.getBaseUrl()
        .then(value => dispatch(setBaseUrl(value === null ? '' : value)))
    }
  }, [appConfigBaseUrl, dispatch])

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>

          {/*  */}
          <IonRouterOutlet>
            {/* <AppRoutes appRoutes={APP_ROUTES} /> */}
            <Route path="/home" component={HomePage} />
            <Route path="/settings" component={SettingsPage} />
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
          </IonRouterOutlet>

          {/*  */}
          <IonTabBar slot="bottom">
            {/*  */}
            <IonTabButton tab="home" href="/home">
              <IonIcon icon={appsOutline} />
              <IonLabel>{t('home-tab-label')}</IonLabel>
            </IonTabButton>

            {/*  */}
            <IonTabButton tab="search" href="/search">
              <IonIcon icon={searchOutline} />
              <IonLabel>{t('search-tab-label')}</IonLabel>
            </IonTabButton>

            {/*  */}
            <IonTabButton tab="bookmarks" href="/bookmarks">
              <IonIcon icon={folderOutline} />
              <IonLabel>{t('bookmarks-tab-label')}</IonLabel>
            </IonTabButton>

            {/*  */}
            <IonTabButton tab="settings" href="/settings">
              <IonIcon icon={cogOutline} />
              <IonLabel>{t('settings-tab-label')}</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  )
};

export default App;
