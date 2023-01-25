import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const Saved = () => {
    const saved = JSON.parse(window.localStorage.getItem('saved'))
    console.log(saved)
    return (
        <main>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Ingredients</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {saved.map((item,index) => {
                    return (<tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.ingredients}</td>
                        <td><Button>Load</Button></td>
                        <td><Button>Remove</Button></td>
                    </tr>)
})}
                </tbody>

            </Table>
        </main>
    )
}

export default Saved