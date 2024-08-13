import type { AppProps } from 'next/app';
import { TenantProvider } from '@/contexts/TenantContext';
import '../styles/globals.css';
import '../styles/fl.css';
import '../styles/lfg.css';
import '../config/i18n';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <TenantProvider>
            <Component {...pageProps} />
        </TenantProvider>
    );
}

export default MyApp;
