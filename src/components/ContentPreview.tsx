"use client";

import { useQuery, type QueryResponseInitial } from "@sanity/react-loader";
import type { QueryParams } from "sanity";
import { PAGE_QUERY } from "studio/lib/queries";
import type { BasicPage } from "studio/types";
import Content from "./Content";

type ContentPreviewProps = {
  initial: QueryResponseInitial<BasicPage>;
  params: QueryParams;
};

export default function ContentPreview({
  initial,
  params,
}: ContentPreviewProps) {
  const { data } = useQuery<BasicPage>(PAGE_QUERY, params, { initial });

  return <Content data={data} />;
}
