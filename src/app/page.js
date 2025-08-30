import Image from "next/image";
import styles from "./page.module.css";
import Header from "../component/header/header";
import ContactPage from "../component/contactPage/ContactPage";
import Footer from "../component/footer/Footer";
import Skills from "@/component/skills/skills";
import Team from "@/component/team/team";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
						<Team/>
						<Skills/>
      <ContactPage />
      <Footer />
    </div>
  );
}
