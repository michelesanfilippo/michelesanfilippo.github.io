import { Reveal } from "@/components/Reveal/Reveal";
import { SplitFlapText } from "@/components/ui/SplitFlapText";
import { siteConfig } from "@/lib/site-config";
import styles from "./Contact.module.css";

const github = siteConfig.socialLinks.find((l) => l.label === "GitHub")!;
const linkedin = siteConfig.socialLinks.find((l) => l.label === "LinkedIn")!;

export function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <Reveal className={styles.wrap}>
        <h2 className={styles.title}>
          <SplitFlapText text="GET IN TOUCH" />
        </h2>

        <p className={styles.text}>
          Let&apos;s get in touch! You can find me on social medias:
          <span className={styles.icons}>
            <a
              className={`${styles.icon} ${styles.linkedin}`}
              href={linkedin.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM2.4 9.5h5.16V21H2.4V9.5Zm7.74 0h4.95v1.57h.07c.69-1.2 2.37-2.02 4.06-2.02 3.43 0 4.38 2.1 4.38 5.35V21h-5.16v-5.7c0-1.43-.51-2.4-1.78-2.4-1.1 0-1.75.74-2.04 1.45-.1.25-.13.6-.13.96V21h-5.16s.07-10.4 0-11.5Z" />
              </svg>
            </a>
            <a
              className={`${styles.icon} ${styles.github}`}
              href={github.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 1.5a10.5 10.5 0 0 0-3.32 20.46c.52.1.71-.23.71-.5v-1.76c-2.9.64-3.52-1.4-3.52-1.4-.47-1.2-1.15-1.52-1.15-1.52-.94-.65.07-.64.07-.64 1.04.08 1.59 1.07 1.59 1.07.93 1.6 2.43 1.14 3.02.87.1-.68.36-1.14.66-1.4-2.31-.27-4.74-1.16-4.74-5.16 0-1.14.4-2.07 1.07-2.8-.11-.27-.47-1.33.1-2.77 0 0 .86-.28 2.83 1.07a9.8 9.8 0 0 1 5.16 0c1.96-1.35 2.82-1.07 2.82-1.07.57 1.44.21 2.5.1 2.77.67.73 1.07 1.66 1.07 2.8 0 4.01-2.44 4.89-4.76 5.15.38.33.71.97.71 1.96v2.9c0 .28.19.62.72.51A10.5 10.5 0 0 0 12 1.5Z" />
              </svg>
            </a>
          </span>
          <br />
          or you can directly text me
          <a
            className={`${styles.icon} ${styles.mail}`}
            href={`mailto:${siteConfig.contactEmail}`}
            aria-label={`Email: ${siteConfig.contactEmail}`}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2.5" y="4.5" width="19" height="15" rx="2.2" />
              <path d="m3.2 5.5 8.8 7 8.8-7" />
            </svg>
          </a>
        </p>
      </Reveal>
    </section>
  );
}
