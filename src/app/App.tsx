import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { AppRoutes } from 'routing/AppRoutes';
import { GlobalStyle } from 'ui/theme/GlobalStyle';

export const App = () => {
  return (
    <>
      <div className="app">
        <AppRoutes />
        <ToastContainer
          className="toast-container"
          toastClassName="custom-toast"
          position="top-right"
          pauseOnFocusLoss={false}
          closeButton={false}
          draggablePercent={50}
          theme="colored"
          hideProgressBar
          newestOnTop
        />
      </div>
      <GlobalStyle />
    </>
  );
};
