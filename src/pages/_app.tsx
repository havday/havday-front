import type { AppProps } from "next/app";
import { GlobalStyle } from "@/styles/global-style";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [client] = useState(new QueryClient({}));

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
    <QueryClientProvider client={client}>
      <GlobalStyle />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
