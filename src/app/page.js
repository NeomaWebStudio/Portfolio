import styles from "./page.module.css";
import ContactPage from "./components/ContactPage";

export default function Home() {
  return (
    <div className={styles.page}>
      <ContactPage />
    </div>
  );
}
