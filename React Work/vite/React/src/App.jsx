
import './App.css'
import Card from './card'
import pic from './images/Kush.jpg'

function App() {
  

  return (
    <div className='app'>
      <Card name="Kush Chauhan" pic={pic} roll="2200320150036" />
      <Card/>
      <Card/>
    </div>
  )
}

export default App
