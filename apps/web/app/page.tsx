import Image from "next/image";
import "./style.css";
export default function Page(): JSX.Element {
  return (
    <main>
      <header>
        <svg viewBox="0 0 49 12">
          <path d="M7 4c.1-1-1.4-2.5-3.5-1.8s-1.9 3.3 1.1 3.7c3.5.5 2.9 3.1 1.3 3.8-1.7.7-3.9 0-3.9-1.7M13.2 2v8h4.7M22.9 10l3-8 3 8M34.3 2l3 8M41.9 2h6m-3 0v8" />
        </svg>
      </header>
      <div className="authors">
        <figure>
          <Image
            src="/lona.png"
            width="48"
            height="48"
            title="Lona"
            alt="Lona"
          />
          <Image
            src="/astrit.png"
            width="48"
            height="48"
            title="Astrit"
            alt="Astrit"
          />
        </figure>
        <footer>
          <span data-author="Design">{`Lona`}</span>
          <span className="separator">{`×`}</span>
          <span data-author="Code">{`Astrit`}</span>
        </footer>
      </div>

      <small>Scheduled for Release in 2024</small>
    </main>
  );
}
