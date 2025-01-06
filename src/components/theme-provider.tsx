"use client";
import {  RootState } from "@/redux/store/store";
import React, { useEffect } from "react";
import {  useSelector } from "react-redux";

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const appTheme = useSelector((state: RootState) => state.theme);
  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (!appTheme.isThemeSelected && localTheme) {
      setTheme(localTheme);
    } else {
      setTheme(appTheme.mode);
    }
  }, [appTheme]);
  const setTheme = (theme: string) => {
    if (typeof window !== "undefined") {
      const root = document.documentElement;
      if (theme === "dark") {
        root.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        root.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    }
  };

  return <body className={`  `}>{children}</body>;
}

export default ThemeProvider;
