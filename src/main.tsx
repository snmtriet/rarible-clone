import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store, { persistor } from './store'
import { PersistGate } from 'redux-persist/integration/react'
import App from './App'

import './index.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  // </React.StrictMode>,
)
