import React from 'react';
import styles from './All.module.css';
import { BiRefresh } from 'react-icons/bi';

const data = [
    {
        name: 'Mixmax',
        budget_name: 'Software subscription',
        owner_id: 1,
        spent: {
            value: 100,
            currency: "SGD"
        },
        available_to_spend: {
            value: 1000,
            currency: "SGD"
        },
        card_type: "burner",
        expiry: '9 feb',
        limit: 100,
        status: 'active'
    },
    {
        name: 'Quickbooks’',
        budget_name: 'Software subscription',
        owner_id: 2,
        spent: {
            value: 50,
            currency: "SGD"
        },
        available_to_spend: {
            value: 250,
            currency: "SGD"
        },
        card_type: "subscription",
        limit: 10,
        status: 'active'
    }
]

const values = localStorage.getItem('search');

const All = () => {
    return (
        <>
            <div className="container text-center my-3">
                <div className="row align-items-start">
                    {values == "Both" && (
                        data.map((item) => {
                            return (
                                <>
                                    <div className="col-md-4 my-3">
                                        <div className={`${styles.card} card p-2`}>
                                            <div className="card-body">
                                                <div className="d-flex justify-content-between">
                                                    <div className={` ${styles.box} d-flex flex-column`}>
                                                        <h2>{item.name}</h2>
                                                        <div className='d-flex'>
                                                            <p className={styles.colors}>{item.budget_name}</p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <button type="button" class="btn btn-warning">{item.card_type}</button>
                                                    </div>
                                                </div>
                                                {item.card_type == "burner" && (
                                                    <div className="d-flex flex-column">
                                                        <h6 className='text-start'>Expiry</h6>
                                                        <p className='text-start'>{item.expiry}</p>
                                                    </div>
                                                )}
                                                {item.card_type == "subscription" && (
                                                    <div className="d-flex flex-column">
                                                        <h6 className='text-start'>limit</h6>
                                                        <p className='text-start'>{item.limit}</p>
                                                    </div>
                                                )}
                                                <div className="progress-stacked">
                                                    <div className="progress" role="progressbar" aria-label="Segment one" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: '50%' }}>
                                                        <div className={`${styles.bar} progress-bar bg-success`}></div>
                                                    </div>
                                                    <div className="progress" role="progressbar" aria-label="Segment two" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: '50%' }}>
                                                        <div className={`${styles.bars} progress-bar bg-success`}></div>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-column justify-centent-between my-2">
                                                    <div className="d-flex justify-content-between">
                                                        <div className='d-flex'>
                                                            <p className={styles.circles}></p>
                                                            <p>Spent</p>
                                                        </div>
                                                        <h5>{item.spent.value} SGD</h5>
                                                    </div>
                                                    <div className="d-flex justify-content-between">
                                                        <div className='d-flex'>
                                                            <p className={styles.circle}></p>
                                                            <p>Balance</p>
                                                        </div>
                                                        <h5>{item.available_to_spend.value} SGD</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* One of three columns */}
                                    </div>
                                </>
                            );
                        })
                    )}
                    {
                        data.map((item) => {
                            return (
                                <>
                                    {values == item.card_type && (
                                        <div className="col-md-4 my-3">
                                            <div className={`${styles.card} card p-2`}>
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between">
                                                        <div className={` ${styles.box} d-flex flex-column`}>
                                                            <h2>{item.name}</h2>
                                                            <div className='d-flex'>
                                                                <p className={styles.colors}>{item.budget_name}</p>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <button type="button" class="btn btn-warning">{item.card_type}</button>
                                                        </div>
                                                    </div>
                                                    {item.card_type == "burner" && (
                                                        <div className="d-flex flex-column">
                                                            <h6 className='text-start'>Expiry</h6>
                                                            <p className='text-start'>{item.expiry}</p>
                                                        </div>
                                                    )}
                                                    {item.card_type == "subscription" && (
                                                        <div className="d-flex flex-column">
                                                            <h6 className='text-start'>limit</h6>
                                                            <p className='text-start'>{item.limit}</p>
                                                        </div>
                                                    )}
                                                    <div className="progress-stacked">
                                                        <div className="progress" role="progressbar" aria-label="Segment one" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: '50%' }}>
                                                            <div className={`${styles.bar} progress-bar bg-success`}></div>
                                                        </div>
                                                        <div className="progress" role="progressbar" aria-label="Segment two" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: '50%' }}>
                                                            <div className={`${styles.bars} progress-bar bg-success`}></div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex flex-column justify-centent-between my-2">
                                                        <div className="d-flex justify-content-between">
                                                            <div className='d-flex'>
                                                                <p className={styles.circles}></p>
                                                                <p>Spent</p>
                                                            </div>
                                                            <h5>{item.spent.value} SGD</h5>
                                                        </div>
                                                        <div className="d-flex justify-content-between">
                                                            <div className='d-flex'>
                                                                <p className={styles.circle}></p>
                                                                <p>Balance</p>
                                                            </div>
                                                            <h5>{item.available_to_spend.value} SGD</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* One of three columns */}
                                        </div>
                                    )}
                                </>
                            );
                        })
                    }
                </div>
            </div >
        </>
    )
}

export default All
