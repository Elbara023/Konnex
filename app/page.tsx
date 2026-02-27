export default function Home() {
  return (
    <main style={{ width: "100vw", height: "100dvh", margin: 0, padding: 0, overflow: "hidden" }}>
      <iframe
        src="/game"
        title="Golden Dragon Snake"
        style={{ width: "100%", height: "100%", border: "0", display: "block" }}
        allow="fullscreen; clipboard-write"
      />
    </main>
  );
}
