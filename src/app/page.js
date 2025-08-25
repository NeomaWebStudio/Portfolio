import Image from "next/image";
import styles from "./page.module.css";
import Header from "../component/header/header";
import ContactPage from "../component/contactPage/ContactPage";
import Footer from "../component/footer/Footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <ContactPage />
      <Footer />
    </div>
  );
}
