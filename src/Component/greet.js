import React from 'react'

//ini tanpa props
// export const Greet = () => <h1>haii ini functional</h1>

//ini dengan props
export const Greet = props => {
    return (
        <div>
            <h1>hai { props.name } umur { props.umur }</h1>
            {props.children}
        </div>
    )
}

// export default Greet