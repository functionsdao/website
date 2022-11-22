export default function Market() {
  return (
    <div class="w-full">
      <div class="h-20">Filter FUn ctions</div>
      <div class="flex">
        <aside>
          <details>
            <summary>TYPE</summary>
            <input type="text" placeholder="search" />
            <ul>
              <li>
                <input type="checkbox" /> <label>ALGORITHM</label>
              </li>
              <li>
                <input type="checkbox" /> <label>UI</label>
              </li>
            </ul>
          </details>
          <details>
            <summary>RUNTIME</summary>
          </details>
          <details>
            <summary>LANGUAGE</summary>
          </details>
          <details>
            <summary>LICENSE FEES</summary>
          </details>
          <details>
            <summary>LAST BID</summary>
          </details>
        </aside>
        <div class="w-full">Functions</div>
      </div>
    </div>
  );
}
