/* @refresh reload */
import "./index.css";
import { render } from "solid-js/web";

import { Router } from "@solidjs/router";
import Routes from "./routes";
import { configureChains, chain, createClient } from "@wagmi/core";
import { publicProvider } from "@wagmi/core/providers/public";

const { chains, provider, webSocketProvider } = configureChains(
  [chain.mainnet, chain.polygon],
  [publicProvider()]
);

const client = createClient({
  autoConnect: true,
  provider,
  webSocketProvider,
});

render(
  () => (
    <Router>
      <Routes />
    </Router>
  ),
  document.getElementById("root") as HTMLElement
);
