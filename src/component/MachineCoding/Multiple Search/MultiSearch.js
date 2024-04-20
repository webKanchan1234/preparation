import React, { createRef, useEffect, useState } from 'react'
import "./style.css"
import { Pill } from './Pill'

const MultiSearch = () => {
    const [search, setSearch] = useState("")
    const [suggestions, setSuggestions] = useState([])
    const [selected, setSelected] = useState([])
    const [uniqueSelected, setUniqueSelected] = useState(new Set())
    const inputRef=createRef()


    useEffect(() => {
        const fetchData = () => {
            fetch(`https://dummyjson.com/users/search?q=${search}`).then(response => response.json()).then(data => {
                setSuggestions(data)
            })
        }
        fetchData()
    }, [search])


    // console.log(suggestions.users)

    const selectUser = (user)=>{
        // console.log(user)
        setSelected([...selected,user])
        setUniqueSelected(new Set([...uniqueSelected, user.email]))
        setSearch('')
        inputRef.current.focus()
        
    }
    // console.log(selected)

    const deleteUser = (user)=>{
        // console.log(v)
        const updatedUsers = selected.filter((v)=>
            v.id !== user.id
        )
        setSelected(updatedUsers)
        const updateEmail = new Set(uniqueSelected)
        updateEmail.delete(user.email)
        setUniqueSelected(updateEmail)

    }

    const handleKeyDown = (e) =>{
        if(e.key==="Backspace" && e.target.value=="" && selected.length>0){
            const lastUser = selected[selected.length-1]
            deleteUser(lastUser)

        }
    }
    const enterValue = (e)=>{
        if(e.key === "Enter"){
            console.log(e.target.value)
        }
    }

    return (
        <div className='multi-search'>
            <div className="input">
                {
                    selected && selected?.map((v)=>{
                        return (
                            <Pill image={v.image} text={v.firstName} onClick={()=>deleteUser(v)}/>
                        )
                    })
                }
               
                <input type="text" ref={inputRef} onKeyPress={enterValue} onKeyDown={handleKeyDown} value={search} placeholder='Search by name....' onChange={(e) => setSearch(e.target.value)} />
            </div>
            <div className="suggestions" style={{display:search ? "block":"none"}} >
                {
                    suggestions?.users?.map((v) => {
                        return !uniqueSelected.has(v.email) ? (
                            <div className='sugg' onClick={()=>selectUser(v)}>
                                <div className="img">
                                    <img src={v.image} alt="" />
                                </div>
                                <p>{v.firstName}</p>
                            </div>
                        ) : <></>
                    })
                }
            </div>

        </div>
    )
}

export default MultiSearch