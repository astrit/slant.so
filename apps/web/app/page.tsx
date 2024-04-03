import Home from "&/home/home";
import Link from "@/link/link";

export default function Page(): JSX.Element {
  return (
    <Home>
      <h1>{`SLΛ\\T`}</h1>
      <footer>
        <span>
          <Link href="https://lona.is">{`L O \\ Λ`}</Link>
        </span>
        <div>{`×`}</div>
        <span>
          <Link href="https://astrit.co">{`IIIIII`}</Link>
        </span>
      </footer>
    </Home>
  );
}
