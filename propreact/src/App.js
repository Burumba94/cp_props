import Profile from "./profile/component/Profile";
import ImageProfile from "./profile/component/ImageProfile";
import './App.css';
const styleProfile = {textAlign: 'center', size:150};
const styleInfo = {textAlign: 'center', fontSize:12, color:'red'};

const App = () => (
  <div>
    <div style = {styleProfile} >
      <ImageProfile/>
    </div>

    <div style = {styleInfo}>
      <Profile FullName = "Benoît Moussépoua SAGNA"
              Bio = "Designer et Photographe Amateur"
              Profession = "Dév Web"/>;
    </div>
  </div>
);
export default App