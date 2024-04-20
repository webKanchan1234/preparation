import React, { useEffect, useState } from 'react'
import { Card } from './Card'
import "./style.css"

const Throtlling = () => {
    const [posts, setPosts] = useState([])
    const [page, setPage] = useState(1)



    const handleScroll = async () => {
        try {
            if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
                setPage((pre) => pre + 1)
            }
        } catch (error) {

        }
    }

    useEffect(() => {
        const fetchData = () => {
            fetch(`https://jsonplaceholder.typicode.com/posts?_limit=12&_page=${page}`).then(response => response.json()).then((data) => {
                setPosts(...posts,data)
            })
                .catch((err) => console.log(err))
        }
        fetchData()
    }, [page])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.addEventListener('scroll', handleScroll);
    }, [])

    // useEffect(() => {
      
    // }, [page])
    
    


    console.log(page)
    console.log(posts)


    return (
        <div>
            <h2>Posts</h2>
            <div className="posts">
                {
                    posts?.map((v, idx) => {
                        return (
                            <Card title={v.title} body={v.body} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Throtlling