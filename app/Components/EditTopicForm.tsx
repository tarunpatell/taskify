"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';


// interface EditTopicForm {
//     id: any;
//     title: any;
//     description: any;
// }

const EditTopicForm = ({ id, title, description }: any) => {
    const router = useRouter();
    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);



    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
                method: 'PUT',
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ newTitle, newDescription })
            });
            if (!res.ok) {
                throw new Error('failed to update Topic')
            }
            router.refresh();
            router.push("/");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='flex flex-col gap-3 mx-6'>
                <input
                    onChange={(e) => setNewTitle(e.target.value)}
                    value={newTitle}
                    className='border border-slate-500 px-8 py-2'
                    type='text'
                    placeholder='Topic Title' />

                <input
                    onChange={(e) => setNewDescription(e.target.value)}
                    value={newDescription}
                    className='border border-slate-500 px-8 py-2'
                    type='text'
                    placeholder='Topic Description' />
                <button className='bg-green-600 font-bold text-white py-3 px-6 w-fit'>Update Topic</button>
            </form>
        </div>
    )
}

export default EditTopicForm