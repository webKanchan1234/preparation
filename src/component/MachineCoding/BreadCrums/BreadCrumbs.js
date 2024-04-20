import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const BreadCrumbs = () => {
  const {pathname}=useLocation()
  const path = pathname.split("/").filter(x=>x)
  console.log(path)
  let breadcrumpath="";
  return (
    <div>
      {/* {path.length>0 && <Link to="/">Home</Link>}   /// for not show in home page */}
      <Link to="/">Home</Link>
      {
        path.map((name,index)=>{
          breadcrumpath +=`/${name}`

          const isLast = index === path.length-1
          return isLast ? (<span>/{name}</span>) : (
            
            <span>
              /<Link to={breadcrumpath}>{name}</Link>
              </span>
          )
        })
      }
    </div>
  )
}

export default BreadCrumbs