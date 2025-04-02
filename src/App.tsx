import GameContainer from './components/GameContainer';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <div className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md">
          <GameContainer />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;