import Character from "./components/Character"


function GetCharacter({characters}) {
    console.log(characters)
    return (
        <div>
        {characters && characters.map((char) => <Character char={char}/>)}
        </div>
    )
}

export default GetCharacter

