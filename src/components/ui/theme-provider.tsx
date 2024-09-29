import {createContext, ReactNode, useContext, useEffect, useState} from "react"

type Theme = "dark" | "light"

type ThemeProviderProps = {
    children: ReactNode
    defaultTheme?: Theme
    storageKey?: string
}

type ThemeProviderState = {
    theme: Theme
    setTheme: (theme: Theme) => void
    nextTheme: () => void,
}

const initialState: ThemeProviderState = {
    theme: "light",
    setTheme: () => null,
    nextTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider(
    {
        children,
        defaultTheme = "light",
        storageKey = "ui-theme",
        ...props
    }: ThemeProviderProps
) {
    const [theme, setTheme] = useState<Theme>(
        () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
    )

    useEffect(() => {
        const root = window.document.documentElement

        root.classList.remove("light", "dark")

        root.classList.add(theme)

        localStorage.setItem(storageKey, theme)
    }, [storageKey, theme])

    const value = {
        theme,
        setTheme: (theme: Theme) => {
            setTheme(theme)
        },
        nextTheme: () => {
            setTheme((theme) => (theme === "light" ? "dark" : "light"))
        },
    }

    return (
        <ThemeProviderContext.Provider {...props} value={value}>
            {children}
        </ThemeProviderContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeProviderContext)

    if (context === undefined)
        throw new Error("useTheme must be used within a ThemeProvider")

    return context
}
