function Search(props){
    return (
        <div className="search">
          <input 
                className="search-bar" 
                placeholder="Search mail"
                onChange={e => props.setSearchedWord(e.target.value)}
            />
        </div>
    )
}
export default Search