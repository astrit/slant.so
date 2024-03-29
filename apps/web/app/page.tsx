import Image from "next/image";
import "./style.css";
export default function Page(): JSX.Element {
  return (
    <main>
      <header>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 84 24">
          <path
            fill="currentColor"
            stroke="none"
            d="M13.9 8.1c-.1-.8-.5-1.4-1.2-1.8-.7-.4-1.5-.6-2.6-.6-.7 0-1.4.1-1.9.3-.5.2-1 .5-1.3.9-.3.4-.5.8-.5 1.3 0 .4.1.8.3 1.1.2.3.5.5.8.7.3.2.7.4 1.1.5.4.1.7.2 1 .3l1.7.4c.4.1.9.3 1.4.4.5.2 1 .4 1.5.8.5.3.9.7 1.2 1.2.3.5.5 1.1.5 1.8 0 .8-.2 1.6-.7 2.3-.5.7-1.1 1.2-2 1.6-.9.4-2 .6-3.3.6-1.2 0-2.2-.2-3.1-.5-.9-.4-1.6-.9-2-1.5-.5-.6-.8-1.4-.8-2.2h2.1c.1.6.3 1.1.6 1.5.4.4.8.7 1.4.8.6.2 1.2.3 1.9.3.8 0 1.5-.1 2.1-.3.6-.2 1.1-.6 1.5-1 .4-.4.5-.9.5-1.5 0-.5-.2-.9-.5-1.3-.3-.3-.7-.6-1.2-.8-.5-.2-1-.4-1.6-.5l-2-.5c-1.3-.3-2.3-.8-3.1-1.5-.8-.6-1.1-1.5-1.1-2.5 0-.9.3-1.6.8-2.3.5-.7 1.2-1.2 2-1.5.8-.4 1.8-.6 2.8-.6 1.1 0 2 .2 2.9.5.8.4 1.5.8 2 1.5.5.6.8 1.3.8 2.1h-2ZM23.1 20V4h2.1v14.3h7.9V20h-10Zm18.1 0h-2.1l6-16h2l6 16H51L46.2 6.5h-.1L41.2 20ZM60.1 4h-2l6 16h2.1L60.1 4Zm12 1.7V4h12v1.7h-5V20h-1.9V5.7h-5.1Z"
          />
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
          <span className="separator">{`&`}</span>
          <span data-author="Code">{`Astrit`}</span>
        </footer>
      </div>

      <small>
        {/* <cite>
          <code>
            S L Λ <strong>&#65128;</strong> T
          </code>
          {" — "}
        </cite> */}
        Scheduled for Release in 2024
      </small>
    </main>
  );
}
