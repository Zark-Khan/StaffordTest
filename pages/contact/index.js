import ContactMain from "@/components/Contact";
import Head from "next/head";

export default function Contact({ site_info, og_info }) {
  return (
    <>
      <Head>
        <title>{`Contact - ${
          site_info?.site_info?.title ? site_info?.site_info?.title : ""
        }`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content={`Contact - ${site_info?.site_info?.title}`}
        />
        <meta
          property="og:description"
          content={site_info?.site_info?.tag_line}
        />
        <meta property="og:image" content={og_info?.site_logo} />
        <meta name="description" content={site_info?.site_info?.tag_line} />
        <link rel="icon" href="/images/logo.svg" />
      </Head>
      <main>
        <ContactMain />
      </main>
    </>
  );
}
export const getServerSideProps = async () => {
  const seo_data = await fetch(
    `${process.env.NEXT_PUBLIC_API_PROTOCOL}://${process.env.NEXT_PUBLIC_API_HOST}/wp-json/stafford/v1/site_info/`
  );

  const og_image = await fetch(
    `${process.env.NEXT_PUBLIC_API_PROTOCOL}://${process.env.NEXT_PUBLIC_API_HOST}/wp-json/stafford/v1/site_og_logo/`
  );

  const site_info = (await seo_data?.json()) || null;
  const og_info = (await og_image?.json()) || null;
  return {
    props: {
      site_info: site_info?.response || null,
      og_info: og_info?.response || null,
    },
  };
};
