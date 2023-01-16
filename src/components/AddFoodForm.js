import React from 'react';
import { Divider, Input } from 'antd';
import { useState } from 'react';
export default function AddFoodForm() {
  
const [food,setFood] = useState ('')
const [name,setName] = useState ('')
const [image,setImage] = useState ('')
const [calories,setCalories] = useState ('')
const [servings,setServings] = useState ('')






    const handleSubmit= (e) =>{
    e.preventDefault()
    

  };




  return (
    <form>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input /> component
      <Input value={''} type="text" onChange={''} />
      <label>Image</label>
      <Input /> component
      <Input value={''} type="text" onChange={''} />
      <label>Calories</label>
      <Input /> component
      <Input value={''} type="text" onChange={''} />
      <label>Servings</label>
      <Input /> component
      <Input value={''} type="text" onChange={''} />
      <button type="submit">Create</button>
    </form>
  );
}
