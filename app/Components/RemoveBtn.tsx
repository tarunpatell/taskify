'use client'

import React from 'react'
import { FaTrash } from "react-icons/fa";


export default function RemoveBtn({ id }:any) {
    // const router = useRouter();
    const removeTopic = async () => {
        const confirmed = confirm("Are you sure!");

        if (confirmed) {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/topics?id=${id}`, {
                method: 'DELETE',
            });
            if (res.ok) {
                window.location.reload();
                // router.push("/");
                // router.refresh();
            };
        }
    }

    return (
        <button onClick={removeTopic} className='text-red-400'>
            < FaTrash size={24} />
        </button>
    )
}

