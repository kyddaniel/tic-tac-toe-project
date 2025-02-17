import { useState } from "react";

export default function Player({ initialName, symbol, isActive, onChangeName }) {

    const [ isEditing, setIsEditing ] = useState(false);
    const [ playerName, setPlayerName ] = useState(initialName);

    function handleEditClick() {
        setIsEditing((editing) => !editing);
        if (isEditing) {
            onChangeName(symbol, playerName);
        }
    }

    function handleNameChange(event) {
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{ playerName }</span>;
    if (isEditing) {
        editablePlayerName = <input type="text" required value={ playerName } onChange={ handleNameChange } />
    }


    return (
        <li className={ isActive ? "active" : undefined }>
            <span>
              { editablePlayerName }
              <span className="player-symbol">{ symbol }</span>
            </span>
            <button onClick={handleEditClick}>{ isEditing ? "Save" : "Edit" }</button>
        </li>
    );
}