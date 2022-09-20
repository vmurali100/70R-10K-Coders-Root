import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAllPosts } from '../Store/slice'

export const Posts = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const postsDetails = useSelector((state) => state.posts)
    console.log(postsDetails.posts)

    localStorage.setItem("posts",JSON.stringify(postsDetails.posts))

    const getPosts = () => {
        dispatch(getAllPosts())

    }

    useEffect(()=>{
        getPosts();
    },[])

    const handleEdit=(post)=>{
        navigate(`/Edit/${post.id}`)
    }

    const handleDelete=(post)=>{
        navigate(`/Delete/${post.id}`)
    }
  return (
    <div className='container'>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>TITLE</th>
                    <th>BODY</th>
                    <th>EDIT</th>
                    <th>DELETE</th>
                </tr>
            </thead>
            <tbody>
                {postsDetails.posts.map((post,i)=>{
                    return <tr key={i}>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                        <td>{post.body}</td>
                        <td>
                            <button type="button" className='btn btn-warning' onClick={()=>{handleEdit(post)}}>EDIT</button>
                        </td>
                        <td>
                            <button type="button" className='btn btn-danger' onClick={()=>{handleDelete(post)}}>DELETE</button>
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
  )
}
