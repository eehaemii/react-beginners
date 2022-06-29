import React, {useState, useEffect} from 'react'

function Hello() {
    function byFn() {
        console.log("bye")
    }
    function hiFn() {
        console.log("created")
        return byFn
    }
    useEffect(hiFn, [])
    return <h1>Hello</h1>
}

function Toggle() {
    const [showing, setShowing] = useState(false)
    const onClickShowing = () => setShowing((prev) => !prev)
    
    useEffect(() => {
        console.log("I run only once.")
    }, [])
    return(
        <div>
            {showing ? <Hello/> : null}
            <button onClick={onClickShowing}>{showing ? "Hide" : "Show"}</button>
        </div>
    )
}

export default Toggle