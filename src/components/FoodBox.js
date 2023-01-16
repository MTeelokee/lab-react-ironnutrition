import { Card, Col, Button } from 'antd';

// Iteration 2
function FoodBox({ name, image, calories, servings, setMyFood, key }) {
  const removeFood = (id) => {
    setMyFood((oldState) => {
      return [...oldState].filter((e) => e.name !== name);
    });
  };

  return (
    <Col>
      <Card title={name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={`${image}`} height={60} alt="food" />
        <p>{calories}</p>
        <p>{servings}</p>
        <p>
          <b>{`Total Calories: ${calories * servings} `}</b> kcal
        </p>
        <Button type="primary" onClick={() => removeFood(key)}>
          {' '}
          Delete{' '}
        </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
