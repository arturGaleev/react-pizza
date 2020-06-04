import React, {Fragment} from 'react'
import styled from 'styled-components'

import { foods, formatPrice } from '../Data/FoodData'
import { Food, FoodGrid, FoodLabel } from './FoodGrid'

const MenuStyled = styled.div`
  margin: 0 400px 50px 20px;
`

export function Menu({setOpenFood}) {
  return <MenuStyled>
    {
      Object.entries(foods).map(([sectionName, foods]) => (
        <Fragment key={sectionName}>
          <h1>{sectionName}</h1>
          <FoodGrid>
            {foods.map((food, idx) => (
              <Food
                key={idx}
                img={food.img}
                onClick={() => {
                  setOpenFood(food)
                }}
              >
                <FoodLabel>
                  <div>{food.name}</div>
                  <div>{formatPrice(food.price)}</div>
                </FoodLabel>
              </Food>
            ))}
          </FoodGrid>
        </Fragment>
      ))
    }

  </MenuStyled>
}
