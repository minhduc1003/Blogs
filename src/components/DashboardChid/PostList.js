import React from 'react';

const PostList = ({data}) => {
    return (
        <div>
        <table className='table-auto table  '>
          <thead>
            <tr>
              <th>Id</th>
              <th>Post</th>
              <th>Category</th>
              <th>Author</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {
            data.length>0&&data.map((item,index)=>
            <tr  key={index}>
              <td >{index}</td>
              <td className='flex gap-2 items-center'>
              <img src={item.image} className="w-10 h-10 rounded-md" alt="" />
              
              <div className="text-black font-semibold">
                {item.title}
              </div>
              </td>
              <td >{item.category}</td>
              <td >{item.author}</td>
              <td >sda</td>
            </tr>)
          }
            
          </tbody>
        </table>
      </div>
    );
};

export default PostList;