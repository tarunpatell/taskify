"use client"
import React, { useEffect, useState } from 'react'
import RemoveBtn from './RemoveBtn'
import Link from "next/link"
import { HiPencilSquare } from "react-icons/hi2";
import AddTopicBtn from './AddTopicBtn';


const getTopics = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/topics", {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch the Topics")
        }
    } catch (error) {
        console.log("Error Loading Topics:", error);
    }
}

interface Topic {
    title: any;
    description: any;
    _id: any;
}



const TopicList = () => {

    // const { topics } = await getTopics();
    const [topics, setTopics] = useState<Topic[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('http://localhost:3000/api/topics', {
                    cache: 'no-store',
                });

                if (!res.ok) {
                    throw new Error('Failed to fetch the Topics');
                }

                const data = await res.json();
                setTopics(data.topics);
            } catch (error) {
                console.error('Error Loading Topics:', error);
            }
        };

        fetchData();
    }, []);




    return (
        <>
            <Link href={"addTopic"}>
                <AddTopicBtn />
            </Link>
            {topics.map((t) => (
                <div className='p-6'>

                    <div className='p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start'>

                        <div>
                            <h2 className='font-bold text-2xl'>{t.title}</h2>
                            <div>{t.description}</div>
                        </div>
                        <div>
                            <RemoveBtn id={t._id} />
                            <Link href={`/editTopic/${t._id}`}>
                                < HiPencilSquare size={24} />
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default TopicList