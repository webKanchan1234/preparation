import React, { useEffect, useState } from 'react'
import Card from './Card'
import "./style.css"

const HackeNews = () => {
    const END_POINT = " https://hacker-news.firebaseio.com/v0"
    const PER_PAGE = 8

    // const news_res = {
    //     "title": "title1 by",
    //     "by": "by",
    //     "time": 16325,
    //     "url": "https://example.com/",
    //     "id": "12345",
    // }
    const [items, setItems] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const [itemsIds, setItemsIds] = useState(null)
    const [flag, setFlag] = useState(false)

    const fetchData = async (currPage) => {
        setCurrentPage(currPage)
        setFlag(true)
        let itemsLists = itemsIds
        if (itemsLists === null) {
            const response = await fetch(`${END_POINT}/jobstories.json`)
            itemsLists = await response.json()
            setItemsIds(itemsLists)
        }

        let itemsIdForPage = itemsLists.slice(
            currPage * PER_PAGE,
            currPage * PER_PAGE + PER_PAGE
        )
        // console.log(itemsIdForPage)
        const itemForPage = await Promise.all(
            itemsIdForPage.map((id) =>
                fetch(`${END_POINT}/item/${id}.json`).then(res => res.json())
            )
        )
        // console.log(itemForPage)
        setItems([...items, ...itemForPage])
        setFlag(false)
    }

    useEffect(() => {
        if (currentPage === 0) {
            fetchData(currentPage)
        }
    }, [])

    // console.log(items)

    return (
        <>
            <div className='news'>
                {
                    items.length <= 0 ? "Loading..." : (
                        items.map((item) => {
                            return (
                                <Card   {...item} />
                            )
                        })
                    )
                }

            </div>
            <button style={{ display: "flex", justifyContent: "center", margin: "auto", width: "20%" }} disabled={flag} onClick={() => fetchData(currentPage + 1)}>{flag ? "Loading..." : "More job...."}</button>
        </>
    )
}

export default HackeNews