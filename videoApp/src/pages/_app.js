
import { HMSRoomProvider } from '@100mslive/react-sdk';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '.';
import { StrictMode } from 'react';
function MyApp({ Component, pageProps }) {
  return (
    <StrictMode>
    <HMSRoomProvider>
      <Home />
    </HMSRoomProvider>
  </StrictMode>
  );
}

export default MyApp;
