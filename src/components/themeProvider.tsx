"use client"
import * as React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';

export function ThemeProvider ({children, ...props }
    :ThemeProviderProps){
        return <NextThemeProvider {...props}>{children}</NextThemeProvider>
    }