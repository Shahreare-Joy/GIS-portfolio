import { AboutSection } from './components/AboutSection';
import { DownloadsSection } from './components/DownloadsSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-ink">
      <Header />
      <main>
        <Hero />
        <ProjectsSection />
        <SkillsSection />
        <AboutSection />
        <DownloadsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
