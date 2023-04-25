import CurrentSandwich from './CurrentSandwich';
import Ingredients from './Ingredients';
import Saved from './Saved';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import uniqid from 'uniqid';

function Home() {
    const breadImg = process.env.PUBLIC_URL + "/images/ingredients/bread.png";
    const condimentImg = process.env.PUBLIC_URL + "/images/ingredients/condiment.png";
    const vegImg = process.env.PUBLIC_URL + "/images/ingredients/lettuce.png";
    const meatImg = process.env.PUBLIC_URL + "/images/ingredients/meat.png";
    const cheeseImg = process.env.PUBLIC_URL + "/images/ingredients/cheese.png";
    const tomatoImg = process.env.PUBLIC_URL + "/images/ingredients/tomato.png"

    const ingredients = [{
        id: 0,
        name: 'white bread',
        type: 'bread',
        icon: breadImg
    },
    {
        id: 1,
        name: 'lettuce',
        type: 'veg',
        icon: vegImg
    },
    {
        id: 2,
        name: 'tomato',
        type: 'veg',
        icon: tomatoImg
    },
    {
        id: 3,
        name: 'bacon',
        type: 'meat',
        icon: meatImg
    },
    {
        id: 4,
        name: 'mustard',
        type: 'condiment',
        icon: condimentImg
    },
    {
        id: 5,
        name: 'cheddar',
        type: 'cheese',
        icon: cheeseImg
    },
    {
        id: 6,
        name: 'ketchup',
        type: 'condiment',
        icon: condimentImg
    },
    {
        id: 7,
        name: 'mayonnaise',
        type: 'condiment',
        icon: condimentImg
    },
    {
        id: 8,
        name: 'olive oil',
        type: 'condiment',
        icon: condimentImg
    },
    {
        id: 9,
        name: 'Italian dressing',
        type: 'condiment',
        icon: condimentImg
    },
    {
        id: 10,
        name: 'pickles',
        type: 'veg',
        icon: vegImg
    },
    {
        id: 11,
        name: 'brie',
        type: 'cheese',
        icon: cheeseImg
    },
    {
        id: 12,
        name: 'american cheese',
        type: 'cheese',
        icon: cheeseImg
    },
    {
        id: 13,
        name: 'balsamic vinegarette',
        type: 'condiment',
        icon: condimentImg
    },
    {
        id: 14,
        name: 'apple',
        type: 'veg',
        icon: vegImg
    },
    {
        id: 15,
        name: 'pumpernickel',
        type: 'bread',
        icon: breadImg
    },
    {
        id: 16,
        name: 'turkey',
        type: 'meat',
        icon: meatImg
    },
    {
        id: 17,
        name: 'chicken',
        type: 'meat',
        icon: meatImg
    },
    {
        id: 18,
        name: 'roast beef',
        type: 'meat',
        icon: meatImg
    },
    {
        id: 19,
        name: 'rye',
        type: 'bread',
        icon: breadImg
    },
    {
        id: 20,
        name: 'multigrain',
        type: 'bread',
        icon: breadImg
    }];

    // all ingredient options
    const [ingredientList] = useState(ingredients.sort((a, b) => {
        const typeA = a.type.toUpperCase(); // ignore upper and lowercase
        const typeB = b.type.toUpperCase(); // ignore upper and lowercase
        if (typeA < typeB) {
            return -1;
        }
        if (typeA > typeB) {
            return 1;
        }

        // names must be equal
        return 0;
    }));

    // set current sandwich
    const [sandwich, setSandwich] = useState({
        id: uniqid(),
        name: 'New Sandwich',
        ingredients: [],
        starred: false
    });

    // set saved sandwiches from local storage if exists
    const [saved, setSaved] = useState(window.localStorage.getItem('saved') && window.localStorage.getItem('saved') !== 'undefined' ? JSON.parse(window.localStorage.getItem('saved')) : [])

    // remove sandwich from saved
    function removeFromSaved(item) {
        setSaved(
            saved.filter(s =>
                s.id !== item.id
            ))
    };

    // add ingredient to sandwich
    function onAdd(ingredient) {
        setSandwich(prevSandwich => {
            return {
                ...prevSandwich,
                ingredients: [...prevSandwich.ingredients, ingredient.id]
            }
        })
        updateSandwichId()
    };

    // remove ingredient from sandwich
    function onRemove(index) {
        const newIng = [...sandwich.ingredients];
        newIng.splice(index, 1)
        setSandwich(prevSandwich => {
            return {
                ...prevSandwich,
                ingredients: newIng
            }
        })
        updateSandwichId();
    };

    // display ingredient name on current sandwich
    function displayIngName(id) {

        return ingredientList.find(obj => obj.id === id).name;
    }

    // display ingredient icon on current sandwich
    function displayIngIcon(id) {
        return ingredientList.find(obj => obj.id === id).icon;

    }

    // update the name of the current sandwich
    function updateName(name) {
        setSandwich((prevSandwich) => {
            return {
                ...prevSandwich,
                name: name
            }
        })
        updateSandwichId();
    };

    // update sandwich id on clear, save, add, or remove ing
    function updateSandwichId() {
        setSandwich((prevSandwich) => {
            return {
                ...prevSandwich,
                id: uniqid()
            }
        })
    }

    // add sandwich to saved list
    function onSave() {
        setSaved(
            [...saved].concat(sandwich)
        )
        clearCurrent();
    };

    // clear ingredients from current sandwich
    function clearCurrent() {
        setSandwich((prevSandwich) => {
            return {
                ...prevSandwich,
                id: uniqid(),
                name: 'New Sandwich',
                ingredients: []
            };
        })
    };

    // replace sandwich of same name
    function onReplaceSaved() {
        const oldSavedNames = [...saved].map((obj) => {
            return obj.name
        });
        const replaceIndex = oldSavedNames.indexOf(sandwich.name)
        setSaved(
            [...saved].map((obj, index) => {
                if (index === replaceIndex) {
                    return sandwich
                } else {
                    return obj
                }
            })
        )
        clearCurrent()
    }

    return (
        <Container fluid>
            <Row>
                <Col sm={1}>
                    <CurrentSandwich
                        sandwich={sandwich}
                        setSandwich={setSandwich}
                        clearCurrent={clearCurrent}
                        displayIngName={displayIngName}
                        displayIngIcon={displayIngIcon}
                        remove={onRemove}
                        updateName={updateName}
                        save={onSave}
                        saved={saved}
                        replaceSaved={onReplaceSaved}
                    />
                </Col>
                <Col>
                    <Ingredients
                        ingredients={ingredientList}
                        sandwich={sandwich}
                        add={onAdd}
                    />
                </Col>
                <Col>
                    <Saved
                        saved={saved}
                        setSaved={setSaved}
                        removeFromSaved={removeFromSaved}
                        displayIngName={displayIngName}
                        displayIngIcon={displayIngIcon}
                        currentSandwich={sandwich}
                        setSandwich={setSandwich}
                    />
                </Col>
            </Row>
        </Container>
    )
};
export default Home