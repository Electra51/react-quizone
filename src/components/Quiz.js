import React from 'react'
import { useLoaderData } from 'react-router-dom'

const TopicDetails = () => {
  const topicData = useLoaderData()
//   console.log(bookData)
  const { image, title, desc, authors, publisher, year, rating, pdf, price } =
    topicData

    return (
      
    <div className="grid align-middle">
      
      <div class="grid gap-4 grid-cols-2 border-2 border-xy">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
</div>
       
    </div>
  )
}

export default TopicDetails