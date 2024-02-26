"use client";

import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import { PlusIcon } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const ListItems = [
    "Do you rworl",
    "Hehe thats good",
    "What fo you want",
    "goodluch with that",
    "we're doing just fine",
];

const Lists = [
    {
        title: "List 1",
        items: ListItems,
    },
    {
        title: "List 2",
        items: ListItems,
    },
    {
        title: "List 3",
        items: ListItems,
    },
    {
        title: "List 4",
        items: ListItems,
    },
    {
        title: "List 5",
        items: ListItems,
    },
];

const BlockList = () => {
    return (
        <DragDropContext onDragEnd={() => {}}>
            <Droppable
                droppableId="lists"
                type="list"
                direction="horizontal"
            >
                {provided => (
                    <div
                        className="flex w-full flex-wrap"
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        {Lists.map(list => (
                            <div
                                className="bg-slate-200 rounded-md px-5 pb-5 pt-5 w-1/4 mt-5 mr-5"
                                key={list.title}
                            >
                                <div className="flex justify-between items-center">
                                    <h3 className="font-bold text-lg">
                                        {list.title}
                                    </h3>
                                    <Button
                                        asChild
                                        type="button"
                                        size="icon"
                                        variant="ghost"
                                        className="ml-auto"
                                    >
                                        <Link href="#">
                                            <PlusIcon className="h-4 w-4" />
                                        </Link>
                                    </Button>
                                </div>
                                <div className="flex flex-col space-y-2 mt-4">
                                    {list.items.map(item => (
                                        <div
                                            className="bg-white px-4 py-2 rounded-md hover:cursor-pointer hover:border hover:border-black hover:border-spacing-2 active:bg-slate-100"
                                            key={item.length}
                                        >
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default BlockList;
