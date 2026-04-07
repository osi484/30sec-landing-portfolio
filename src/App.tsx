import Hero from './components/Hero';
import Features from './components/Features';
import PreRegistration from './components/PreRegistration';

function App() {
  return (
    <main className="bg-void text-white selection:bg-urgent selection:text-white">
      <Hero />
      <Features />
      <PreRegistration />
      
      <footer className="py-8 text-center text-gray-700 text-xs border-t border-gray-900 bg-void">
        &copy; 2026 30SEC GAME STUDIO. ALL RIGHTS RESERVED.
      </footer>
    </main>
  );
}

export default App;
