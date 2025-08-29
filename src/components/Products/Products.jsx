import React, { useState } from "react";
import Heading from "../Heading/Heading";
import productList from "../ProductList/ProductList";
import Card from "../Card/Card";

const Products = () => {
  const categoryTabs = ["All", "Fruits", "Vagetables", "Dairy", "SeaFood"];
  const [activeTab, setActiveTab] = useState("All");
  const renderCard = productList.map((product) => {
    return (
      <Card
        key={product.id}
        image={product.image}
        title={product.title}
        price={product.price}
      />
    );
  });

  return (
    <section>
      <div className="max-w-[1200px] mx-auto px-10 py-10">
        <Heading highlight="Our" content="Products" />

        {/* Tabs */}
        <div className="flex gap-5 justify-center mt-10 py-10">
          {categoryTabs.map((tab) => {
            return (
              <button
                key={tab}
                className={` px-5 py-2 text-lg rounded-[10px] cursor-pointer ${
                  activeTab === tab
                    ? "bg-gradient-to-b from-orange-400 to-orange-500 text-white"
                    : "bg-zinc-100"
                } `}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            );
          })}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {renderCard}
        </div>
      </div>
    </section>
  );
};

export default Products;
