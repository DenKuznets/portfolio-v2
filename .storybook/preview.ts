import type { Preview, StoryObj } from "@storybook/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import { Theme } from "../src/ts/theme";
import "@fontsource/barlow-semi-condensed/600.css";
import "@fontsource/barlow-semi-condensed/700.css";
import { INITIAL_VIEWPORTS, DEFAULT_VIEWPORT } from "@storybook/addon-viewport";
import "@storybook/addon-console";
import { Provider } from "react-redux";
import { setupStore } from "../src/app/store";
import React from "react";

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
};

export const decorators = [
    // Adds global styles and theme switching support.
    withThemeFromJSXProvider({
        GlobalStyles: CssBaseline,
        // Uncomment for theme switching
        Provider: ThemeProvider,
        themes: {
            // Provide your custom themes here
            light: Theme,
            // dark: darkTheme,
        },
        defaultTheme: "light",
    }),
];

export default preview;
