import ListGroup from 'react-bootstrap/ListGroup';

const ingredientList = [{
    id: 0,
    name: 'white bread',
    type: 'bread'
},
{
    id: 1,
    name: 'lettuce',
    type: 'veg'
},
{
    id: 2,
    name: 'tomato',
    type: 'veg'
},
{
    id: 3,
    name: 'bacon',
    type: 'meat'
},
{
    id: 4,
    name: 'mustard',
    type: 'condiment'
},
{
    id: 5,
    name: 'cheddar',
    type: 'cheese'
}]
const Ingredients = ()=>{
    return(
        <>
        <h3>Ingredients</h3>
        <ListGroup>
        {ingredientList.map((ing, index)=>{
            return(
                <ListGroup.Item key={index}>{ing.name}</ListGroup.Item>
            )
        })}
        </ListGroup>
        </>
    )
}

export default Ingredients