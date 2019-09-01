import React from 'react'
import {connect}  from 'react-redux'
import {IncrementAction,DecrementAction} from './redux-store'
function Counter({count,IncrementAction,DecrementAction}) {
    return (
        <div >
            <h1>counter redux view</h1>
            {count}
            <button onClick={DecrementAction}>dec</button>
            <button onClick={IncrementAction}>inc</button>
        </div>
    )
}

const mapStateToProps=(state)=>({
    count:state
})
const mapDispatchToProps={
    IncrementAction ,
    DecrementAction
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter)
