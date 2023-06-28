import React from 'react';
import Modal from './Modal';

import { FaSearch } from 'react-icons/fa';
import { BsFilterLeft } from 'react-icons/bs';

const Search = () => {
    return (
        <>
            <div className='d-flex justify-content-end m-3'>
                <FaSearch className='fs-4 mx-2' />
                <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                >
                    <BsFilterLeft /> Filter
                </button>
            </div>
            <Modal />
        </>
    )
}

export default Search
