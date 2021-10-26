import React , {useState} from 'react'

function AppHeader(props) {

    const {handleChange , searchQuery , handleSubmit} = props

    return (
        
        <div className=" bg-black h-full w-full p-4">
            <form>
                <h1 className="text-red-600 font-bold text-3xl inline-grid px-10">Movie</h1>
                <input type="text" value={searchQuery} onChange={handleChange} />
                <button onClick={handleSubmit}>Seach</button>
            </form>                
        </div>
        
    )
}
export default AppHeader;