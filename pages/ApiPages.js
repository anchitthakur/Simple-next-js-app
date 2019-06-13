import { useState, useEffect } from 'react';
import Api from '../components/Api';
import Layout from '../components/Layout';
import React, { Component } from 'react'

const ApiPages = () => {
    const [pages, setPages] = useState([1, 2, 3, 4, 5]);
    const [page, setPage] = useState(1)
    const clickHandler = (p) => {
        setPage(p);
    }
    
    const increaseHandler = () => {
        let arr = []
        for (let i in pages) {
            console.log(arr)
            arr.push(parseInt(pages[i]) + 1)
        }
        console.log(arr)
        setPages(arr)
    }

    const decreaseHandler = () => {
        let arr = []
        for (let i in pages) {
            console.log(arr)
            arr.push(parseInt(pages[i]) - 1)
        }
        console.log(arr)
        setPages(arr)
    }
    return (
        <Layout>
            <Api page={page} />
            <ul className="pagination">
                <li className={pages[0]>1?"page-item ":"page-item disabled"}>
                    <a className="page-link" onClick={decreaseHandler}>-</a>
                </li>
                <li className="page-item ">
                    <a className="page-link" onClick={() => clickHandler(pages[0])}>{pages[0]}</a>
                </li>
                <li className="page-item">
                    <a className="page-link" onClick={() => clickHandler(pages[1])}>{pages[1]}</a>
                </li>
                <li className="page-item">
                    <a className="page-link" onClick={() => clickHandler(pages[2])}>{pages[2]}</a>
                </li>
                <li className="page-item">
                    <a className="page-link" onClick={() => clickHandler(pages[3])}>{pages[3]}</a>
                </li>
                <li className="page-item">
                    <a className="page-link" onClick={() => clickHandler(pages[4])}>{pages[4]}</a>
                </li>
                <li className="page-item">
                    <a className="page-link" enabled="true" onClick={increaseHandler}>+</a>
                </li>
            </ul>
        </Layout>)
}

export default ApiPages;