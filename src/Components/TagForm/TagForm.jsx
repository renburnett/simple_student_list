import React from 'react';
import './TagForm.css';

const TagForm = ( {setNewTag, addNewTag} ) => {

    return (
        <form onSubmit={(event) => {addNewTag(event)}} className="search-bar">
        <input type="text" placeholder="Add new tag" className="text-input" onChange={({ target }) => setNewTag(target.value)} />
        <input type="submit" value="submit"/>
        </form>
    )
}

export default TagForm;