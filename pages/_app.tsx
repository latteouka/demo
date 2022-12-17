import "../styles/globals.css";
import type { AppProps } from "next/app";
import { store } from "../utils/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "next-themes";
import { darkTheme } from "../stitches.config";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        value={{ dark: darkTheme.className, light: "light" }}
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
