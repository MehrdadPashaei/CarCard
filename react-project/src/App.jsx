import CardComponent from "./components/CardComponent.jsx";
import './App.css';


function App() {

  return (
      <div>
          <CardComponent
              img="../public/Car.jpg"
              title="Lizard"
              description="Chevrolet is an iconic American car brand known for its reliable,dependable,and affroadable vehicles. Founded in 1911,Chevy has become one of the most recognizable car brands in the world. "
              share='SHARE'
              learn="LEARN MORE"
          />
      </div>
  )
}

export default App
