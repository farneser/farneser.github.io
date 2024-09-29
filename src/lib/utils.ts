import {clsx, type ClassValue} from "clsx"
import {twMerge} from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const getBaseUrl = () => {
    let baseUrl = import.meta.env.VITE_API_URL

    if (!baseUrl) {
        baseUrl = "http://localhost:8080"
    }

    if (baseUrl.endsWith("/")) {
        baseUrl = baseUrl.slice(0, -1);
    }

    return baseUrl;
}

export const getRecaptchaSiteKey = () => {
    return import.meta.env.VITE_RECAPTCHA_SITE_KEY
}