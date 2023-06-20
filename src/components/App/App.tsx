import AppContent from "../appContent/AppContent";
import AppProvider from "../appProvider/AppProvider";

const App = (): JSX.Element => {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
};

export default App;
