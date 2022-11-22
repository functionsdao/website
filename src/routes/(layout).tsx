import { Outlet } from "@solidjs/router";
import Header from "../components/Header";

export default function Layout() {
  return (
    <div class="flex flex-col items-center">
      <Header />
      <Outlet />
    </div>
  );
}
