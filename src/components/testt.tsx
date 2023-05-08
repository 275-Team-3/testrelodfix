import React, { useState } from "react";
import { Button } from "react-bootstrap";

// Have some default initial data if the user is new
let loadedData = [29, 44, 55];

// You can make up your own key however you want, but make it unique!
const saveDataKey = "MY-PAGE-DATA";

// Check if the user's data already exists
const previousData = localStorage.getItem(saveDataKey);
// If the data doesn't exist, `getItem` returns null
if (previousData !== null) {
    loadedData = JSON.parse(previousData);
}

function Testt(): JSX.Element {
    const [data, setData] = useState<number[]>(loadedData);

    function addRandom() {
        const newNumber = Math.floor(Math.random() * 100);
        setData([...data, newNumber]);
    }

    function saveData() {
        localStorage.setItem(saveDataKey, JSON.stringify(data));
    }

    return (
        <div>
            <ol>
                {data.map((value: number) => (
                    <li key={value}>{value}</li>
                ))}
            </ol>
            <Button onClick={saveData}>Save Data</Button>
            <Button onClick={addRandom}>Add new random number</Button>
        </div>
    );
}
export default Testt;
