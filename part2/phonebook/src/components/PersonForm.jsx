export const PersonForm = ({newNum , addName, newName , handleNameChange , handleNumChange}) =>{
    return(
        <form onSubmit={addName}>
        <div>
          name: <input 
            value={newName}
            onChange={handleNameChange}
          />
          <div>number: <input 
              value={newNum}
              onChange={handleNumChange}
          /></div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}