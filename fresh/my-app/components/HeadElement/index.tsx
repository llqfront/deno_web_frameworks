import { h } from "preact";
import { Head } from "$fresh/runtime.ts";

export type HeadProps = {
  url?: URL;
  title: string;
  description: string;
  keywords: string;
};

export function HeadElement({ description, title, keywords, url }: HeadProps) {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" sizes="32x32" />
      <meta name="renderer" content="webkit" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Head>
  );
}
