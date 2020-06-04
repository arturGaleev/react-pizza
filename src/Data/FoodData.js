export function formatPrice(price) {
  return price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  })
}

export const foodItems = [
  {
    name: 'Cheese Pizza',
    img: 'https://via.placeholder.com/740x100.jpg',
    section: 'Pizza',
    price: 5
  },
  {
    name: 'Pepperoni Pizza',
    img: 'https://via.placeholder.com/740x100.jpg',
    section: 'Pizza',
    price: 3
  },
  {
    name: 'Chicken Pizza',
    img: 'https://via.placeholder.com/740x100.jpg',
    section: 'Pizza',
    price: 4
  },
  {
    name: 'Veggie Pizza',
    img: 'https://via.placeholder.com/740x100.jpg',
    section: 'Pizza',
    price: 1
  },
  {
    name: 'Burger',
    img: 'https://via.placeholder.com/740x100.jpg',
    section: 'Sandwich',
    price: 2
  },
  {
    name: 'Gyro',
    img: 'https://via.placeholder.com/740x100.jpg',
    section: 'Sandwich',
    price: 1
  },
  {
    name: 'Shrimp PoBoy',
    img: 'https://via.placeholder.com/740x100.jpg',
    section: 'Sandwich',
    price: 2
  },
  {
    name: 'Fries',
    img: 'https://via.placeholder.com/740x100.jpg',
    section: 'Sides',
    price: 1.5
  }
]

export const foods = foodItems.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = []
  }
  res[food.section].push(food)
  return res
}, {})


