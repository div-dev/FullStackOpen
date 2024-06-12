
export const Filter = ({filter , handleOnChange}) =>{
    return(
        <form>
            <div>
                filter shown with <input 
                    value={filter}
                    onChange={handleOnChange}
                />
            </div>
        </form>
    )
}