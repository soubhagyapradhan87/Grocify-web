import React from "react";
import Heading from "../Heading/Heading";
import FruitsCat from "../../assets/fruits-and-veggies.png";
import DairyCat from "../../assets/dairy-and-eggs.png";
import MeatCat from "../../assets/meat-and-seafood.png";
import CustomButton from "../CustomButton/CustomButton";

const Category = () => {
  const renderCards = category.map((card) => {
    return (
      <div className="flex-1 mt-10 md:mt-1 ">
        <div className="w-full min-h-[30vh] relative">
          <img src={card.image} alt="" className="absolute -bottom-5"/>
        </div>
        <div className="bg-zinc-200 pt-17 p-8 rounded-xl">
          <h3 className="text-zinc-800 text-3xl font-bold">{card.title}</h3>
          <p className="text-zinc-500 mt-3 mb-9">{card.desc}</p>
          <CustomButton bText="See All" />
        </div>
      </div>
    );
  });
  return (
    <section>
      <div className="max-w-[1200px] mx-auto px-10 py-20">
        <Heading highlight="Shop" content="By Category" />
        <div className="flex md:flex-row flex-col gap-10 md:mt-15">{renderCards}</div>
      </div>
    </section>
  );
};

export default Category;

const category = [
  {
    id: 1,
    title: "Fruits & Veggies",
    desc: "Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.",
    image: FruitsCat,
  },
  {
    id: 2,
    title: "Dairy & Eggs",
    desc: "Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.",
    image: DairyCat,
  },
  {
    id: 3,
    title: "Meat & SeaFoods",
    desc: "High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.",
    image: MeatCat,
  },
];
