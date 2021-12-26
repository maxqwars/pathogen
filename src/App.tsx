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
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
  useIonLoading
} from '@ionic/react';
import { Redirect, Route } from 'react-router';
import { appsOutline, cogOutline, folderOutline, searchOutline } from 'ionicons/icons';

import { IonReactRouter } from '@ionic/react-router';
import { useAppSelector } from './redux/hooks';
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

/* ---------------------------------- Debug --------------------------------- */
if (process.env.NODE_ENV !== 'production') {
  console.log('NODE_ENV_VARIABLES', process.env)
}

/* -------------------------------------------------------------------------- */
/*                            Configure Ionic React                           */
/* -------------------------------------------------------------------------- */
setupIonicReact({
  mode: 'md'
});

/* -------------------------------------------------------------------------- */
/*                                 Application                                */
/* -------------------------------------------------------------------------- */
const App: React.FC = () => {
  const { t } = useTranslation()
  const appReady = useAppSelector(state => state.appGuard.appReady)
  const isFirstLaunch = useAppSelector(state => state.appGuard.isFirstLaunch)
  const [present, dismiss] = useIonLoading()

  useEffect(() => {
    if (appReady) { dismiss() } else { present() }
  }, [appReady])

  /* 
  * If app not ready, show blank page
  */
  if (!appReady) {
    return (
      <IonApp>
        <IonPage></IonPage>
      </IonApp>
    )
  }

  /* 
  * If app ready and not configured, show welcome page
  */
  if (appReady && isFirstLaunch) {
    return (
      <IonApp>
        <IonPage>Configure you app</IonPage>
      </IonApp>
    )
  }

  /* 
  * Run app in `normal` mode
  */
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
              {appReady ? <Redirect to="/home" /> : null}
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
