import ListGroup from "./components/ListGroup";

function App() {
    let cities = ["New York", "San Francisco", "Tokyo", "Paris"];

    const onSelectedItem = (item: string) => console.log(item);

    return (
        <div>
            <ListGroup
                header={"Cities"}
                items={cities}
                onSelectedItem={onSelectedItem}
            />
        </div>
    );
}

export default App;
