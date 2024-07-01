import DetailPage from "@/components/DetailPage";
import Head from "next/head";

function index({ data, site_info, og_info }) {
  return (
    <>
      <Head>
        <title>
          {`${data?.Project_post_title ? data?.Project_post_title : ""} - ${
            site_info?.site_info?.title ? site_info?.site_info?.title : ""
          }`}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content={`${data?.Project_post_title} - ${site_info?.site_info?.title}`}
        />
        <meta
          property="og:description"
          content={data?.project_post_subtitle_}
        />
        <meta
          property="og:image"
          content={data?.social_sharing?.url || og_info?.site_logo}
        />

        <meta name="description" content={data?.project_post_subtitle_} />
        <link rel="icon" href="/images/logo.svg" />
      </Head>
      <main>
        <DetailPage data={data} />
      </main>
    </>
  );
}
export const getServerSideProps = async (context) => {
  const { id } = context.params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_PROTOCOL}://${process.env.NEXT_PUBLIC_API_HOST}/wp-json/stafford/v1/project/${id}`
  );

  const seo_data = await fetch(
    `${process.env.NEXT_PUBLIC_API_PROTOCOL}://${process.env.NEXT_PUBLIC_API_HOST}/wp-json/stafford/v1/site_info/`
  );

  const og_image = await fetch(
    `${process.env.NEXT_PUBLIC_API_PROTOCOL}://${process.env.NEXT_PUBLIC_API_HOST}/wp-json/stafford/v1/site_og_logo/`
  );

  const data = (await response?.json()) || null;
  const site_info = (await seo_data?.json()) || null;
  const og_info = (await og_image?.json()) || null;

  return {
    props: {
      data: data?.response || null,
      site_info: site_info?.response || null,
      og_info: og_info?.response || null,
    },
  };
};
export default index;
