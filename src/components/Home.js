import CurrentSandwich from './CurrentSandwich';
import Ingredients from './Ingredients';
import Saved from './Saved';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import uniqid from 'uniqid';
import ingredients from '../ingredients/ingredients.json';
import ingImgs from '../ingredients/images.json';

function Home() {
    // all ingredient options sorted alphabetically
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
        const curIng = ingredientList.find(obj => obj.id === id);
        if (curIng.name === 'tomato'){
            return `${process.env.PUBLIC_URL}${ingImgs.find(obj => obj.type === 'tomato').img}`;
        } else {
            return `${process.env.PUBLIC_URL}${ingImgs.find(obj => obj.type === curIng.type).img}`
        }
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
                <Col sm={1} md={4} lg={4}>
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
                <Col sm={1} md={4} lg={4}>
                    <Ingredients
                        ingredients={ingredientList}
                        displayIngIcon={displayIngIcon}
                        sandwich={sandwich}
                        add={onAdd}
                    />
                </Col>
                <Col sm={3} md={4} lg={4}>
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