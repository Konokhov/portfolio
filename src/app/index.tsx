import {ChangeEvent, useEffect} from 'react';
import {useGetMockQuery} from '../store/mockapi/mock.api';
import Footer from '@components/footer';
import Header from '@components/header';
import MainContent from '@components/main-content';
import PageLayout from '@components/page-layout';
import useTheme from '../hooks/use-theme';

function App() {
  const {theme, setTheme} = useTheme();
  const {data = []} = useGetMockQuery('portfolio');

  const toggleTheme = (e: ChangeEvent<HTMLInputElement>) => {
    switch (e.target.value) {
      case 'dark':
        setTheme('dark');
        break;
      case 'light':
        setTheme('light');
        break;
      case 'auto':
        setTheme('auto');
        break;
    }
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <PageLayout>
      <Header />
      <MainContent />
      <Footer toggleTheme={toggleTheme} theme={theme} />
    </PageLayout>
  );
}

export default App;
