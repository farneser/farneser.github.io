import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {ThemeProvider} from "./components/ui/theme-provider.tsx";
import {GoogleReCaptchaProvider} from "react-google-recaptcha-v3";
import {getRecaptchaSiteKey} from "@/lib/utils.ts";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider defaultTheme="light" storageKey="ui-theme">
            <GoogleReCaptchaProvider reCaptchaKey={getRecaptchaSiteKey()}>
                <App/>
            </GoogleReCaptchaProvider>
        </ThemeProvider>
    </StrictMode>,
)
