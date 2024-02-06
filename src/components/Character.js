function Character({char}) {
    return (
        <div>
          
            <h2>{char.name} </h2>
            <img src={char.image} />
            <h3>Status: {char.status}</h3>
        </div>
    )
}

export default Character