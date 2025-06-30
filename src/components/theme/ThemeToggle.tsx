"use client";

import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IoMdMoon, IoMdSunny } from "react-icons/io";

export default function ThemeToggle() {
    const { theme, setTheme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    return (
        <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
            className="cursor-pointer rounded-full"
            aria-label="Toggle theme"
            title="Toggle theme"
            type="button"
        >
            {currentTheme === "dark" ? (
                <IoMdMoon className="size-6" />

            ) : (
                <IoMdSunny className="size-6" />

            )}
        </Button>
    );
}
