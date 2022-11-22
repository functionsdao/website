import { Routes, Route } from "@solidjs/router";
import Homepage from "./routes/(homepage)";
import Market from "./routes/market/(market)";
import AppLayout from "./routes/(layout)";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" component={AppLayout}>
        <Route path="/" component={Homepage} />
        <Route path="/market" component={Market} />
      </Route>
    </Routes>
  );
}
