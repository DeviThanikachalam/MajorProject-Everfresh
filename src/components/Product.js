import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';

function Product(props) {
  const AboutContent = [
    {
      img: props.Images.Artichokeimg,
      title: 'Artichoke',
      description: 'Have lots of fiber, which is good for digestion, and they give you vitamins and minerals to keep your overall health in check.',
   },
   {
      img: props.Images.Asparagusimg,
      title: 'Asparagus',
      description: 'Loaded with folate and antioxidants, promoting healthy aging and potentially reducing inflammation.',
   },
   {
      img: props.Images.Beetrootimg,
      title: 'Beetroot',
      description: 'Packed with essential nutrients, beetroots may support blood pressure regulation and provide sustained energy.',
   },
   {
      img: props.Images.Broccoliimg,
      title: 'Broccoli',
      description: 'A nutrient powerhouse, providing vitamins C and K, fiber, and compounds linked to cancer prevention.',
   },
   {
      img: props.Images.Cabbageimg,
      title: 'Cabbage',
      description: 'A cruciferous vegetable with vitamins C and K, known for potential anti-inflammatory and digestive benefits.',
   },
   {
      img: props.Images.Carrotimg,
      title: 'Carrot',
      description: 'Known for promoting good eyesight, carrots are a crunchy, low-calorie snack packed with beta-carotene and fiber for overall health.',
   },
   {
      img: props.Images.Cauliflowerimg,
      title: 'Cauliflower',
      description: 'A low-calorie alternative, cauliflower is rich in vitamins and fiber, contributing to heart and digestive health.',
   },
   {
      img: props.Images.Cucumberimg,
      title: 'Cucumber',
      description: 'Hydrating and low in calories, cucumbers contain antioxidants that may contribute to skin health and hydration.',
   },
   {
      img: props.Images.Eggplantimg,
      title: 'Eggplant',
      description: 'Rich in fiber and antioxidants, eggplants may support heart health and digestion.',
   },
   {
      img: props.Images.GreenBeansimg,
      title: 'Green Beans',
      description: 'Low in calories and high in vitamins A and C, green beans contribute to skin health and immune function.',
   },
   {
    img: props.Images.Lettuceimg,
    title: 'Lettuce',
    description: 'Low in calories and high in water content, lettuce contributes to hydration and provides vitamins A and K for overall health.',
 },
 {
    img: props.Images.Mushroomimg,
    title: 'Mushrooms',
    description: 'A unique source of vitamin D, mushrooms support immune function and are rich in antioxidants and essential nutrients.',
 },
 {
    img: props.Images.Onionimg,
    title: 'Onion',
    description: 'Onions contain antioxidants and anti-inflammatory compounds, supporting heart health and immune function.',
 },
 {
    img: props.Images.Peasimg,
    title: 'Peas',
    description: 'Packed with protein, fiber, and various vitamins and minerals, peas support digestion and provide sustained energy.',
 },
 {
    img: props.Images.Potatoimg,
    title: 'Potato',
    description: 'A good source of energy, potatoes provide essential nutrients and fiber, supporting digestive health.',
 },
 {
    img: props.Images.Radishimg,
    title: 'Radish',
    description: 'Low in calories and high in fiber, radishes support digestion and provide vitamins C and B6 for overall health.',
 },
 {
    img: props.Images.Spinachimg,
    title: 'Spinach',
    description: 'Rich in iron and vitamins A and C, spinach promotes blood health and supports immune function.',
 },
 {
    img: props.Images.Tomatoimg,
    title: 'Tomato',
    description: 'Rich in antioxidants, tomatoes support heart health and are a great source of vitamins C and K, promoting skin health.',
 },
 {
    img: props.Images.Zucchiniimg,
    title: 'Zucchini',
    description: 'Low in calories and rich in water, zucchini provides vitamins and minerals that contribute to hydration and overall health.',
 }
    
  ];

  return (
    <div>
      <div className='Product'>
        <div className='Productbox'>
          <div className='ProductText'>
            <h1>Our Products</h1>
            <strong>
            <p>
              A mix of healthy fruits and veggies, full of good stuff like antioxidants and fiber, gives your body what it needs for overall health, glowing skin, and a strong immune system. It's the perfect base for a healthy and balanced diet.
            </p>
            </strong>
            <div className='ProductButtons'>
                <Link to="/prediction">
                    <button>
                      Predict Here<span>&rarr;</span>
                    </button>
                  </Link>
            </div>
          </div>
          <div className='ProductCards'>
            {AboutContent.map((product, index) => (
              <div className='Cards' key={index}>
                <img src={product.img} alt={product.title} />
                <h2>{product.title}</h2>
                <p>{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
