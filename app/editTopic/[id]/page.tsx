import EditTopicForm from '@/app/Components/EditTopicForm'
import React from 'react'

// interface topic {
//     id: string;
//     title: string;
//     description: string;
// }

// interface params {
//     id: string;
// }

const getTopicById = async (id: any) => {
    try {
        const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
            cache: "no-store",
        });
        console.log(res)
        if (!res.ok) {
            throw new Error("failed to fetch topic")
        }

        return res.json();
    } catch (error) {
        console.log(error);
    }
}



export default async function EditTopic({ params }: { params: { id: string } }) {
    const { id }: any = params;

    const { topic } = await getTopicById(id);

    const { title, description } = topic;

    return <EditTopicForm id={id}
        title={title} description={description}
    />
}
