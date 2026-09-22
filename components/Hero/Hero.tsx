import { Avatar } from "@/components/Avatar/Avatar";
import { Greeting } from "./Greeting";
import { InfoCard } from "./InfoCard";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.split}>
        <div className={styles.avatarSide}>
          <Avatar />
          <InfoCard />
        </div>
        <span className={styles.divider} aria-hidden="true" />
        <div className={styles.textSide}>
          <Greeting />
        </div>
      </div>
    </section>
  );
}
