import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { NewsTicker } from './components/NewsTicker';
import { FeaturedArticles } from './components/FeaturedArticles';
import { MainContent } from './components/MainContent';
import { HomeContent } from './components/HomeContent';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';
import { AboutClub } from './components/AboutClub';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navigation />
      <NewsTicker />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <FeaturedArticles />
              <MainContent />
              <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <HomeContent />
                  </div>
                  <div className="lg:col-span-1">
                    <Sidebar />
                  </div>
                </div>
              </div>
            </>
          }
        />
        <Route
          path="/introduce"
          element={
            <div className="container mx-auto px-4 py-8">
              <AboutClub />
            </div>
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}
