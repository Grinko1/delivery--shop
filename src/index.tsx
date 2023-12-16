import { createRoot } from 'react-dom/client';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';

import 'shared/config/i18n/i18n';
import { ErrorBoundary } from 'app/providers/errorBoundary';
import 'app/styles/index.scss';
import { StoreProvider } from 'app/providers/storeProvider/ui/StoreProvider';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <StoreProvider>
    <BrowserRouter>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </StoreProvider>
);
