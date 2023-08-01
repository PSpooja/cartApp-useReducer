import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Ratings from './Ratings';
import { CartState } from '../contextApis/Context';

function Filter(){

   const{productState : {byStock, byFastDelivery, byRatings, searchQuery, sort}, productDispatch } = CartState()
   
   console.log(byStock, byFastDelivery, byRatings, searchQuery, sort)

  return <>
     <div className="filters">
        <span className="title">Filter products</span>
        <span>
          <Form.Check
            inline
            type="radio"
            id={`inline-1`}
            label="Ascending"
            name="group1"
            onChange={() => {
              productDispatch({
                type : "SORT_BY_PRICE",
                payload: "lowToHigh",
              })
            }}

            checked={sort === "lowToHigh" ? true : false}
          />
        </span>
        <span>
          <Form.Check
            inline
            type="radio"
            id={`inline-2`}
            label="descending"
            name="group1"
            onChange={() => {
              productDispatch({
                type : "SORT_BY_PRICE",
                payload: "highToLow",
              })
            }}

            checked={sort === "highToLow" ? true : false}
          />
        </span>
        <span>
          <Form.Check
            inline
            type="checkbox"
            id={`inline-3`}
            label="Include out of Stock"
            name="group1"
            onChange={() => {
              productDispatch({
                type : "FILTER_BY_STOCK",
              })
            }}

            checked={byStock}
          />
        </span>
        <span>
          <Form.Check
            inline
            type="checkbox"
            id={`inline-4`}
            label="Fast Delivery"
            name="group1"
            onChange={() => {
              productDispatch({
                type : "FILTER_BY_FASTDELIVERY",
              })
            }}

            checked={byFastDelivery}
          />
        </span>
        <span>
            <label style={{ paddingRight : 10}}>Rating : </label>
            <Ratings ratings={byRatings}
             onClick={(i)=> productDispatch({
                 type : "FILTER_BY_Rating",
                 payload : i+1,
             })} 
             style={{cursor : 'pointer'}}/>
        </span>

        <Button variant='light' onClick={() => {
              productDispatch({
                type : "CLEAR_FILTER",
              })
            }}>Clear Filters</Button>
     </div>
  </>
}

export default Filter;