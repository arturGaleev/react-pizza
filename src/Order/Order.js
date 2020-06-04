import React from 'react'
import styled from 'styled-components'

import {
  DialogContent,
  DialogFooter,
  ConfirmButton,
  getPrice
} from '../FoodDialog/FoodDialog'
import { formatPrice } from '../Data/FoodData'


const OrderStyled = styled.div`
  position: fixed;
  right: 0px;
  top: 48px;
  width: 340px;
  background-color: white;
  height: calc(100% - 48px);
  z-index: 10;
  box-shadow: 4px 0px 5px 4px grey;
  display: flex;
  flex-direction: column;
`

const OrderContent = styled(DialogContent)`
  padding: 20px;
  height: 100%;
`

const OrderContainer = styled.div`
  padding: 10px 0px;
  border-bottom: 1px solid grey;
  ${({ editable }) =>
  editable
    ? `
    &:hover {
      cursor: pointer;
      background-color: #e7e7e7;
    }
  `
    : `
    pointer-events: none; 
  `}
`

const OrderItem = styled.div`
  padding: 10px 0px;
  display: grid;
  grid-template-columns: 20px 150px 20px 60px;
  justify-content: space-between;
`

const DetailItem = styled.div`
  color: gray;
  font-size: 10px;
`

export function Order({orders}) {
  return (
    <OrderStyled>
      {
        orders.length === 0 ? (
          <OrderContent>
            Your order
          </OrderContent>
        ) : (
          <OrderContent>
            {" "}
            <OrderContainer>
              Your Order:
            </OrderContainer>
            {" "}
            {orders.map(order => (
              <OrderContainer>
                <OrderItem>
                  <div>{order.quantity}</div>
                  <div>{order.name}</div>
                  <div />
                  <div>{formatPrice(getPrice(order))}</div>
                </OrderItem>
              </OrderContainer>
            ))}
          </OrderContent>
        )
      }
      <DialogFooter>
        <ConfirmButton>Add to order</ConfirmButton>
      </DialogFooter>
    </OrderStyled>
  )

}
