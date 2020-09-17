import React from 'react';
import './TagForm.css';

const TagForm = ( {setNewTag, addNewTag} ) => {

    return (
        <form onSubmit={(event) => {addNewTag(event)}} className="search-bar">
            <input type="text" placeholder="Add new tag" id="tag-input" onChange={({ target }) => setNewTag(target.value)} />
            <input type="submit" value="submit" className="add-tag-input" />
        </form>
    )
}

export default TagForm;