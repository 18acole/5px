import HeroSection from './components/HeroSection';
import ChallengeSection from './components/ChallengeSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <div style={{ height: '200vh' }}>
        <ChallengeSection />
      </div>
    </main>
  );
}