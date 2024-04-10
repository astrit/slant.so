import Link from "@/link/link"
import Home from "&/home/home"

export default function Page(): JSX.Element {
  return (
    <Home>
      <h1>
        <span>{`S`}</span>
        <span>{`L`}</span>
        <span>{`Λ`}</span>
        <span>{`\\`}</span>
        <span>{`T`}</span>
      </h1>
      <footer>
        <span>
          <Link href="https://lona.is">{`L O \\ Λ`}</Link>
        </span>
        <div>{`×`}</div>
        <span>
          <Link href="https://astrit.co">{`IIIIII`}</Link>
        </span>
      </footer>
      <code>npm i @slant/core</code>
    </Home>
  )
}
