import type { AppProps } from "next/app";
import { GlobalStyle } from "@/styles/global-style";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/queryClient";
import Navbar from "@/components/navbar/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  if (process.env.NODE_ENV === "development") {
    if (typeof window === "undefined") {
      (async () => {
        const { server } = await import("@/mock/server");
        server.listen();
      })();
    } else {
      (async () => {
        const { worker } = await import("@/mock/browser");
        worker.start();
      })();
    }
  }

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Navbar />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
