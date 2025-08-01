"use client";
import React from 'react';
import ToolCard from './ToolCard';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Loader from '../UI/Loader/Loader';
import defultImg from '../../../public/images/market/tool.svg'
import { fetchAllTools } from '@/redux/features/tools/toolThunk';
import { useEffect } from 'react';
const ToolList = () => {
    const { loading, tools, searchTool } = useSelector(state => state.tool);
    const dispatch = useDispatch();
    useEffect(() => {
        if (!searchTool) {
            dispatch(fetchAllTools());
        }
    }, [dispatch, searchTool]);
    if (loading) return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
    )


return (
    <div className="min-h-screen px-5 py-10 ">
        <h1 className="text-4xl my-12 sm:pl-10 md:pl-20">Tools</h1>
        <div className="flex flex-row flex-wrap justify-center gap-4 sm:px-20 md:px-0">
            {tools.map((tool, index) => (
                <ToolCard
                    key={index}
                    image={tool.images||tool.image}
                    name={tool.toolName}
                    id={tool._id}
                    price={tool.price}
                    description={tool.description}
                />
            ))}
        </div>
    </div>
);
};

export default ToolList;
