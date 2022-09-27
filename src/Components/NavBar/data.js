import React from 'react';

export const links = [
    {
        id: 1,
        text: 'Home',
        svg: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
         className="bi bi-house-door" viewBox="0 0 16 16">
            <path
            d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/>
        </svg>,
        url: '#home'
    },
    {
        id: 2,
        text: 'Todo list',
        svg: null,
        url: '#toDo'
    },
    {
        id: 3,
        text: null,
        svg:
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 className="bi bi-person-fill" viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
            </svg>,
        url: '#authorization'
    }
]

export const options = [
    {
        value: 0,
        label: 'Listening',
    },
    {
        value: 1,
        label: 'Reading',
    },
    {
        value: 2,
        label: 'Writing',
    },
    {
        value: 3,
        label: 'Speaking',
    },
];