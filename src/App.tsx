import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import HomePage from '@/pages/HomePage';
import StartHerePage from '@/pages/StartHerePage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import SolutionsPage from '@/pages/SolutionsPage';
import SolutionDetailPage from '@/pages/SolutionDetailPage';
import IndustriesPage from '@/pages/IndustriesPage';
import IndustryDetailPage from '@/pages/IndustryDetailPage';
import BundlesPage from '@/pages/BundlesPage';
import BundleDetailPage from '@/pages/BundleDetailPage';
import StackScorePage from '@/pages/StackScorePage';
import SchedulePage from '@/pages/SchedulePage';
import NotFoundPage from '@/pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/start-here" element={<StartHerePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/solutions/:slug" element={<SolutionDetailPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/industries/:slug" element={<IndustryDetailPage />} />
          <Route path="/bundles" element={<BundlesPage />} />
          <Route path="/bundles/:slug" element={<BundleDetailPage />} />
          <Route path="/stack-score" element={<StackScorePage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
