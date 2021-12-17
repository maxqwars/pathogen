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
import { albumsOutline, cogOutline, homeOutline, searchOutline } from 'ionicons/icons';

import APP_ROUTES from './constants/APP_ROUTES'
import { AppRoutes } from './components';
import { IonReactRouter } from '@ionic/react-router';

(() => {
  if (process.env.NODE_ENV === 'development') {
    console.log(process.env)
  }
})();

// ???
setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>

        {/*  */}
        <IonRouterOutlet>
          <AppRoutes appRoutes={APP_ROUTES} />
        </IonRouterOutlet>

        {/*  */}
        <IonTabBar slot="bottom">
          {/*  */}
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={homeOutline} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>

          {/*  */}
          <IonTabButton tab="search" href="/search">
            <IonIcon icon={searchOutline} />
            <IonLabel>Search</IonLabel>
          </IonTabButton>

          {/*  */}
          <IonTabButton tab="bookmarks" href="/bookmarks">
            <IonIcon icon={albumsOutline} />
            <IonLabel>Bookmarks</IonLabel>
          </IonTabButton>

          {/*  */}
          <IonTabButton tab="settings" href="/settings">
            <IonIcon icon={cogOutline} />
            <IonLabel>Settings</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
