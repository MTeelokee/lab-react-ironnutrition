import { useState } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import { Row, Divider, Button } from 'antd';

// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.

function App() {
  const [myFood, setMyFood] = useState(foods);






  return (
    <div className="App">
      <AddFoodForm {...foods}/>
      {/* <Button> Hide Form / Add New Food </Button> */}

      {/* Display Search component here */}

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {myFood.map((e, i) => {
          console.log(e);
          return <FoodBox key={i} {...e} setMyFood={setMyFood} />;
        })}
        {/* Render the list of Food Box components here */}
      </Row>
    </div>
  );
}

export default App;
