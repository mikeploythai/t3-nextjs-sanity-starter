import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import { client } from "studio/lib/client";
import { PAGES_QUERY, PAGE_QUERY } from "studio/lib/queries";
import { loadQuery } from "studio/lib/store";
import type { BasicPage } from "studio/types";
import Content from "~/components/Content";
import ContentPreview from "~/components/ContentPreview";

type PageProps = {
  params?: {
    pathname?: string[];
  };
};

export async function generateStaticParams() {
  const pages = await client.fetch<BasicPage[]>(PAGES_QUERY);

  return pages.map(({ pathname }) => ({
    pathname: pathname.current.substring(1).split("/"),
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const pathname = !!params?.pathname ? `/${params.pathname.join("/")}` : "/";
  const { data } = await loadQuery<BasicPage>(PAGE_QUERY, { pathname });

  return {
    title: data.title.toUpperCase(),
  };
}

export default async function Page({ params }: PageProps) {
  const pathname = !!params?.pathname ? `/${params.pathname.join("/")}` : "/";
  const initial = await loadQuery<BasicPage>(
    PAGE_QUERY,
    { pathname },
    { perspective: draftMode().isEnabled ? "previewDrafts" : "published" },
  );

  if (!initial.data) notFound();

  return draftMode().isEnabled ? (
    <ContentPreview initial={initial} params={{ pathname }} />
  ) : (
    <Content data={initial.data} />
  );
}
