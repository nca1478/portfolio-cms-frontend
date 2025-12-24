import { PortfolioContent, ThemeToggle } from '@/components';
import { PortfolioProvider } from '@/context';
import { getPortfolioData } from '@/lib';

const HomePage = async () => {
  const portfolioData = await getPortfolioData();

  return (
    <PortfolioProvider initialData={portfolioData}>
      <div className="relative">
        <PortfolioContent />
        <ThemeToggle className="bg-background hidden sm:fixed sm:bottom-8 sm:right-8 sm:flex" />
      </div>
    </PortfolioProvider>
  );
};

export default HomePage;
