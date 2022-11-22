import { A } from "@solidjs/router";
import { connect } from "@wagmi/core";
import { MetaMaskConnector } from "@wagmi/core/connectors/metaMask";

export default function Header() {
  return (
    <div class="fixed flex justify-between items-center pl-4 pr-4 w-full h-12 bg-blue-200">
      <A href="/" class="flex-1">
        <span>Functions</span>
      </A>
      <div class="flex-1">
        <input class="w-full" type="text" placeholder="Seach" />
      </div>
      <nav class="flex-1">
        <ul class="flex gap-4 justify-end">
          <A href="/market" class="cursor-pointer">
            <li>Market</li>
          </A>
          <li>Twitter</li>
          <li>OpenSea</li>
          <li
            onClick={async () => {
              const a = await connect({
                connector: new MetaMaskConnector(),
              });

              console.log(a);
            }}
          >
            Connect
          </li>
        </ul>
      </nav>
    </div>
  );
}
