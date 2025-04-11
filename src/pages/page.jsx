import React from 'react'
import ColorPicker  from "../JSON/color.json";
import Card from '../components/cards';

const Home = () => {
  return (
    <>
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
    { ColorPicker.map((items,index) =>(
    <Card key={index} colorData={items} />
))}
    </div>
    </>
  )
}

export default Home