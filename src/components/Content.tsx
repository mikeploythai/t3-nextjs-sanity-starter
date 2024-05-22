import Link from "next/link";
import type { BasicPage } from "studio/types";

export default function Content({ data }: { data: BasicPage }) {
  return (
    <main>
      <hgroup>
        <h1>This is the {data.title} page.</h1>
        {data.description ? <p>{data.description}</p> : null}
      </hgroup>

      <Link href="/studio">Open Sanity Studio</Link>
    </main>
  );
}
