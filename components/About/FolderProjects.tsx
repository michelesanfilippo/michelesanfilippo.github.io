import { BorderGlowCard } from "@/components/ui/BorderGlowCard";
import { siteConfig } from "@/lib/site-config";
import styles from "./FolderProjects.module.css";

// Ispirato a reactbits.dev/micro/folder-float. Due tentativi precedenti non
// andavano bene: righe su sfondo pieno bianco/nero (stonava col vetro), poi una
// "cartella" con un rettangolo vuoto sopra l'elenco (occupava spazio senza
// senso). Stessa BorderGlowCard delle altre tre, con un lift leggero al hover
// sull'intera card: e' il "float" della cartella senza inventare una forma
// che non regge visivamente.
export function FolderProjects() {
  return (
    <BorderGlowCard className={styles.folder}>
      <span className={styles.kicker}>My side projects</span>
      <ul className={styles.list}>
        {siteConfig.projects.map((project) => (
          <li key={project.href}>
            <a href={project.href} target="_blank" rel="noreferrer noopener" className={styles.item}>
              <span>{project.label}</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M7 17 17 7M9 7h8v8" />
              </svg>
            </a>
          </li>
        ))}
      </ul>
    </BorderGlowCard>
  );
}
