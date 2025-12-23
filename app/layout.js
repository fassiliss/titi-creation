import "@/node_modules/react-modal-video/css/modal-video.css";
import "public/assets/css/style.css";
import "public/assets/css/responsive.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { niconne, poppins, tangerine } from "@/lib/font";

export const metadata = {
  title: "Titi Creation | Authentic Ethio-Italian Cuisine in Nashville",
  description:
    "Homemade lasagna, tiramisu, and authentic Ethio-Italian cuisine in Nashville. Perfect for birthdays, graduations, weddings, and corporate events. Order online or call 615-569-9687.",
  keywords:
    "lasagna, tiramisu, Ethiopian Italian food, Nashville catering, event catering, homemade pasta, Nashville food delivery",
  icons: {
    icon: "/assets/images/favicon.png",
  },
  openGraph: {
    title: "Titi Creation | Authentic Ethio-Italian Cuisine",
    description:
      "Homemade lasagna, tiramisu, and authentic Ethio-Italian cuisine in Nashville. Perfect for special events.",
    url: "https://titicreation.com",
    siteName: "Titi Creation",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${niconne.variable} ${poppins.variable} ${tangerine.variable}`}
    >
      <head>
        <link rel="icon" href="/assets/images/favicon.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
