"use client";

import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes";
import { BsSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import { useEffect, useState } from "react";

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
            className="cursor-pointer text-2xl rounded-full"
            aria-label="Toggle theme"
            title="Toggle theme"
            type="button"
        >
            {currentTheme === "dark" ? (
                <BsSunFill className="text-white" />
            ) : (
                <BsFillMoonStarsFill className="text-black" />
            )}
        </Button>
    );
}
