import Auction from "../components/Auction";

export default function Homepage() {
  return (
    <div class="flex flex-col gap-12 w-[60vw]">
      <Auction />
      <h1 class="text-5xl font-bold">
        Functions unlock digital ownership for developers
      </h1>
      <div class="w-full flex flex-col gap-4">
        <h2 class="text-2xl font-bold">What are Functions?</h2>
        <p>
          And here we explain what this is in hopefully understandable manner.
          And here we explain what this is in hopefully understandable manner.
          And here we explain what this is in hopefully understandable manner.
          And here we explain what this is in hopefully understandable manner.
          And here we explain what this is in hopefully understandable manner.
        </p>
      </div>
      <details>
        <summary>This is simple summary</summary>
        <p>Content</p>
      </details>
      <details>
        <summary>This is simple summary</summary>
        <p>Content</p>
      </details>
      <details>
        <summary>This is simple summary</summary>
        <p>Content</p>
      </details>
    </div>
  );
}
