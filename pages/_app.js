import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import Main from "@/components/main";
import Context from "@/context/context";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Context>
      <ThemeRegistry>
        <Main Component={Component} pageProps={pageProps} />
      </ThemeRegistry>
    </Context>
  );
}
