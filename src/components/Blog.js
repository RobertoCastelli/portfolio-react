import React from 'react'

function Blog() {

    const blog = "https://www.robertocastelli.dev/"
    const lastArticle = "https://www.robertocastelli.dev/2020/01/012-free-code-camp.html"

    return (
        <div className="blog">
            <h1># BLOG</h1>
            <h3>Diary of an impostor</h3>
            <p>An evolving story of a 40 y.o. kid that wants to become an agile software craftman</p>
            <div className="blog-buttons">
                <button><a href={blog} target="_blank" rel="noopener noreferrer" >TAKE ME THERE</a></button>
                <button><a href={lastArticle} target="_blank" rel="noopener noreferrer" >LAST ARTICLE</a></button>
            </div>
        </div>
    )
}

export default Blog
