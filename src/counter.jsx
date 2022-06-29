import React, {useState, useEffect} from 'react'
import styles from './App.module.css'

function Counter(){
    // counter
    const [counter, setValue] = useState(0)
    const onClick = () => setValue((prev) => prev + 1)
    useEffect(() => {
        console.log("I run when 'counter' changes.")
      }, [counter])
    const [keyword, setKeyword] = useState("")

    const onChange = (event) => setKeyword(event.target.value)
    useEffect(() => {
        console.log("I run when 'keyword' changes.")
      }, [keyword])

    useEffect(() => {
        console.log("I run when 'keyword' & 'counter' changes.")
    }, [keyword, counter])
    // useEffect(() => {
    //   if(keyword !== "" && keyword.length > 5) {
    //     console.log("SEARCH FOR", keyword)
    //   }
    // }, [keyword])
    return(
        <div>
            <input value={keyword} onChange={onChange} type="text" placeholder="search here..."/>
            <h1 className={styles.title}>{counter}</h1>
            <button onClick={onClick}>click me</button>
        </div>
    )
}

export default Counter