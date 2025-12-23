import Layout from "@/components/layout/Layout";
import Banner from "@/components/sections/home1/Banner";
import Testimonial from "@/components/sections/home1/Testimonial";
import Gallery from "@/components/sections/home1/Gallery";
import Deal from "@/components/sections/home1/Deal";

export default function Home() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <Banner />
        <Deal />
        <Gallery />
        <Testimonial />
      </Layout>
    </>
  );
}
