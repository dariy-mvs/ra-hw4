
import './App.css';
import CardItem from './CardItem';
import CardList from './CardList';
import './Card.css';
import Homepage from './Homepage';

function App() {
  return (
    <div className="App">
      <CardList>
      <CardItem 
        text={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis quaerat quibusdam architecto."} 
        title={"title card"}
        img={"https://vypechka-online.ru/wp-content/uploads/2019/09/0SXAklSfD7E.jpg"}/>
              <CardItem 
        text={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis quaerat quibusdam architecto."} 
        title={"title card"}
        />
      </CardList>
      <Homepage />
    </div>
  );
}

export default App;
