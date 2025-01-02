"use client";
import { setTheme, toggleTheme } from "@/redux/features/themeSlice";
import { AppDispatch, RootState } from "@/redux/store/store";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

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
