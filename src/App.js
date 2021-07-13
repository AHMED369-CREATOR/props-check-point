import './App.css';
import Profile from './Profile/Profile';
import image from './image.jpg';

function App() {
  const handleName = (name) => {
    alert(name);
  };
  return (
    <div className='App'>
      <Profile
        fullName='Anis HAKIM'
        bio='bio'
        profession='Software engineer'
        handleName={handleName}
      >
        {image}
      </Profile>
    </div>
  );
}

export default App;
