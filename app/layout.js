import { Inter } from "next/font/google";
import "./globals.css";
import BootstrapLoader from "@/section/Bootstarp";
import Script from "next/script";
import "../public/assets/css/animate.css";
import "../public/assets/css/all.css";
import "../public/assets/css/bootstrap.min.css";
import "../public/assets/css/boxicons.min.css";
import "../public/assets/css/bootstrap-icons.css";
import "../public/assets/css/swiper-bundle.css";
import "../public/assets/css/style.css";
import Header from "@/section/Header";
import Footer from "@/section/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "SilverLine Law",
    template: "%s - SliverLine Law",
  },
  description:
    "Silver Line is a Law Firm registered in the Republic of Maldives by a partnership of licensed and experienced legal professionals. We provide legal services of a wide range,including representing clients at court, legal advice and consultation, preparation of legal documents, review of legaldocuments, legal drafting and translation, legal research,representing clients in negotiation processes, and providing legal assistance in setting up businesses and other legal entities including companies and foreign investments in the Maldives. We provide all legal services to both national and international clients, in areas such as constitutional and administrative law, criminal law, business law, taxation, banking and insurance, land and conveyance, law of torts, employment law, and family law.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Load WOW.js for animations */}
        <Script id="wow" src="/js/wow.min.js" strategy="beforeInteractive" />
        {/* Initialize WOW.js */}
        <Script id="initWow" strategy="lazyOnload">
          {`new WOW().init();`}
        </Script>
      </head>
      <body className={inter.className}>
        <BootstrapLoader />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
