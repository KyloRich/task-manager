import Header from './components/Header'
function App() {
  
  return (
    <div className="container">
   <Header />
    </div>
 
  );
}

Header.defaultProps = {
   title: 'Task Manager',
}

export default App;
