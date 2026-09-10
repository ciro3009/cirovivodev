const projects = [
  {
    title: 'Chi Lo Ha Detto?',
    description: 'Gioco web. Indovina chi ha detto la frase celebre in classe. PROSSIMO AGGIORNAMENTO: aggiunta di nuove frasi da parte degli studenti attraverso un form.',
    demo: 'https://ciro3009.github.io/chilhadetto/',
    repo: 'https://github.com/ciro3009/chilhadetto'
  },
  {
    title: 'Gestioni Interrogazioni',
    description: 'Applicazione per la gestione delle interrogazioni scolastiche, con funzionalità di pianificazione e monitoraggio. PROSSIMO AGGIORNAMENTO: salvataggio dei dati su database.',
    demo: 'https://ciro3009.github.io/gestisciinterrogazioni/',
    repo: 'https://github.com/ciro3009/gestisciinterrogazioni'
  },
];

const projectsGrid = document.querySelector('#projects-grid');

projectsGrid.innerHTML = projects.map((project, index) => `
      <article class="project-card">
        <span class="project-number">0${index + 1}</span>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-meta">
          <span>
            <a class="project-link project-demo" href="${project.demo}" target="_blank" rel="noreferrer">SITO ↗</a>
            <a class="project-link project-repo" href="${project.repo}" target="_blank" rel="noreferrer">REPOSITORY ↗</a>
          </span>
        </div>
      </article>
    `).join('');
