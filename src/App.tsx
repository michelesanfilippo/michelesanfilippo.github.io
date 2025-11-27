import React from 'react'
import FloatingLines from './components/FloatingLines'
import ProfileCard from './components/ProfileCard'
import SpotlightCard from './components/SpotlightCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function App() {
  return (
    <div className="main-container" style={{ width: '100%', height: '100vh', position: 'relative', overflow: 'hidden' }}>
      {/* FloatingLines Background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <FloatingLines 
          enabledWaves={['top', 'middle', 'bottom']}
          lineCount={[10, 15, 20]}
          lineDistance={[8, 6, 4]}
          bendRadius={5.0}
          bendStrength={-0.5}
          interactive={true}
          parallax={true}
        />
      </div>

      {/* Social Icons - Centro Alto */}
      <div className="social-icons" style={{
        position: 'absolute',
        top: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 10,
        display: 'flex',
        gap: '1.5rem',
        alignItems: 'center'
      }}>
        <a
          href="https://www.instagram.com/michele_sanfi/?hl=it"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: '1.4rem',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#C13584';
            e.currentTarget.style.transform = 'scale(1.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>

        <a
          href="https://github.com/michelesanfilippo"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: '1.4rem',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#FFD700';
            e.currentTarget.style.transform = 'scale(1.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>

        <a
          href="https://it.linkedin.com/in/michele-sanfilippo-b22404157"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: '1.4rem',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#0077B5';
            e.currentTarget.style.transform = 'scale(1.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>

      {/* ProfileCard - Centro Sinistra */}
      <div className="profile-card-container" style={{ 
        position: 'absolute', 
        left: '14%', 
        top: '50%', 
        transform: 'translateY(-50%) scale(1.08)',
        zIndex: 10 
      }}>
        <ProfileCard
          name="Michele Sanfilippo"
          title="Software Engineer"
          handle="michelesanfilippo"
          status="I build stuff."
          contactText="Contact Me"
          avatarUrl="/avatar/download.png"
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={true}
          onContactClick={() => window.location.href = 'mailto:michelesanfilippo01@gmail.com?subject=Hi Michele! I\'m here from your page'}
        />
      </div>

      {/* SpotlightCards - Centro Destra */}
      <div className="spotlight-cards-container" style={{ 
        position: 'absolute', 
        right: '12%', 
        top: '50%', 
        transform: 'translateY(-50%) scale(1.08)',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        maxWidth: '660px',
        width: '100%',
        height: '80svh',
        maxHeight: '540px'
      }}>
        {/* Prima riga con Background, Education e Skills */}
        <div style={{ display: 'flex', gap: '0.5rem', flex: 1, minHeight: 0 }}>
          <div style={{ flex: 1, minWidth: 0, display: 'flex' }}>
            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(216, 27, 143, 0.2)">
              <h2 style={{ color: 'white', marginBottom: '0.5rem', fontSize: '0.85rem' }}>Background</h2>
              <p style={{ color: '#aaa', fontSize: '0.6rem', lineHeight: '1.4' }}>👋 Hi there i'm Michele, 
                I currently live in Palermo, Sicily. <br/> <br/>
                I love programming and challenging myself every day, 
                so I can learn as much as possible. I enjoy challenging projects and finding the best solutions! <br/><br/>
                Besides programming, in my free time I like to keep an eye on some open-source projects, 
                related to genAI that allow me to stay updated. <br/><br/>
                Outside the tech context, I have many hobbies, 
                I like photography because it allows me to capture and preserve special moments, 
                I like playing soccer with friends and I am passionate about the world of collecting 
                cards and mangas.</p>
            </SpotlightCard>
          </div>

          <div style={{ flex: 1.5, minWidth: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div style={{ flex: 1, display: 'flex', minHeight: 0 }}>
              <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 38, 255, 0.2)">
                <h2 style={{ color: 'white', marginBottom: '0.5rem', fontSize: '0.85rem' }}>Education</h2>
                <p style={{ color: '#aaa', fontSize: '0.6rem', lineHeight: '1.4' }}>🎓 Università degli studi di Palermo (2017 - 2020)<br/><br/>
                  Bachelor's degree in Computer Science with thesis: Graph theory and application algorithms for social networks, with a grade of 105/110.</p>
              </SpotlightCard>
            </div>

            <div style={{ flex: 1, display: 'flex', minHeight: 0 }}>
              <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(8, 245, 115, 0.2)">
                <h2 style={{ color: 'white', marginBottom: '0.5rem', fontSize: '0.85rem' }}>Skills</h2>
                <p style={{ color: '#aaa', fontSize: '0.6rem', lineHeight: '1.4' }}>I mainly work as back-end engineer with: 
                  Java, Spring, Docker, SQL, JavaScript, HTML, CSS, Git, AWS. <br/><br/>
                  I also have experience with 
                  Python, C/C++, Node.js and TypeScript. <br/><br/>
                  I work by adopting Agile methodology and devOps principles.</p>
              </SpotlightCard>
            </div>
          </div>
        </div>

        {/* Card orizzontale sotto */}
        <div style={{ width: '100%', minHeight: 0 }}>
          <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(227, 243, 9, 0.1)">
            <h2 style={{ color: 'white', marginBottom: '0.4rem', fontSize: '0.85rem' }}>Experience</h2>
            <p style={{ color: '#aaa', fontSize: '0.6rem', lineHeight: '1.4' }}>I work as software engineer since 2020 mainly in financial services.
              <br/><br/>
              I've collaborated with various clients, like as banks and insurance companies, 
              contributing to the development of scalable and efficient software solutions.
              <br/><br/>
              I'm passionate about learning new technologies and improving my skills to deliver high-quality products.
            </p>
          </SpotlightCard>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 10,
        color: 'rgba(255, 255, 255, 0.6)',
        fontSize: '0.75rem',
        fontWeight: 400,
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        display: 'flex',
        alignItems: 'center',
        gap: '0.4rem'
      }}>
        Built with{' '}
        <a 
          href="https://react.dev/" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            color: 'rgba(255, 255, 255, 0.9)',
            textDecoration: 'none',
            borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
            transition: 'all 0.2s ease',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.3rem'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#61dafb';
            e.currentTarget.style.borderBottomColor = '#61dafb';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)';
            e.currentTarget.style.borderBottomColor = 'rgba(255, 255, 255, 0.3)';
          }}
        >
          <FontAwesomeIcon icon={faReact} style={{ fontSize: '1rem' }} />
          React
        </a>
      </div>
    </div>
  )
}

export default App