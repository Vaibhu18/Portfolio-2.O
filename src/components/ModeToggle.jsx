"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ModeToggle() {
    const { theme, setTheme } = useTheme()

    return (
        <>
            <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                {theme === "dark"
                    ? <Sun />
                    : <Moon />
                }
            </button>
        </>
    )
}
