import { Reveal } from "@/components/Reveal/Reveal";
import { BorderGlowCard } from "@/components/ui/BorderGlowCard";
import { siteConfig } from "@/lib/site-config";
import { FolderProjects } from "./FolderProjects";
import styles from "./About.module.css";

function BackendIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="6" rx="1.4" />
      <rect x="3" y="14" width="18" height="6" rx="1.4" />
      <circle cx="7" cy="7" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="7" cy="17" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FrontendIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4.5" width="18" height="15" rx="1.6" />
      <path d="M3 8.5h18" />
      <circle cx="6" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="8.4" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function About() {
  const { education, experience, skills } = siteConfig;

  return (
    <section id="about" className={styles.section}>
      <Reveal>
        <h2 className={styles.heading}>About</h2>
        <p className={styles.bio}>{siteConfig.bio}</p>
      </Reveal>

      {/* Nessun divisore verticale al centro, a differenza della hero: le due
          colonne sono solo il gap della griglia. */}
      <div className={styles.grid}>
        <Reveal delayMs={80} className={styles.column}>
          <BorderGlowCard>
            <span className={styles.cardKicker}>{education.title}</span>
            <p className={styles.cardText}>
              <strong>{education.school}</strong> ({education.period}) — {education.grade}
              <br />
              {education.degree}.
              <br />
              {education.thesis}
            </p>
          </BorderGlowCard>

          <BorderGlowCard>
            <span className={styles.cardKicker}>{experience.title}</span>
            <p className={styles.cardText}>{experience.text}</p>
          </BorderGlowCard>

          <BorderGlowCard>
            <span className={styles.cardKicker}>{skills.title}</span>
            <div className={styles.skillGroup}>
              <span className={styles.skillLabel}>
                <BackendIcon /> Back-end
              </span>
              <div className={styles.tags}>
                {skills.backend.map((skill) => (
                  <span key={skill} className={styles.tag}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className={styles.skillGroup}>
              <span className={styles.skillLabel}>
                <FrontendIcon /> Front-end
              </span>
              <div className={styles.tags}>
                {skills.frontend.map((skill) => (
                  <span key={skill} className={styles.tag}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </BorderGlowCard>
        </Reveal>

        <Reveal delayMs={160} className={styles.column}>
          <FolderProjects />
        </Reveal>
      </div>
    </section>
  );
}
