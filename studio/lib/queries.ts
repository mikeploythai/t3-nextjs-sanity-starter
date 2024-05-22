import { groq } from "next-sanity";

export const PAGES_QUERY = groq`*[_type == "basicPage"]`;

export const PAGE_QUERY = groq`*[_type == "basicPage" && pathname.current == $pathname][0]`;
