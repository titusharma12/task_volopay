import React, { useState } from 'react';


const Modal = () => {
    const [value, setValue] = useState(false)
    const [valueChange, setValueChange] = useState("")
    const [values, setValues] = useState(false)
    const [valueChanges, setValueChanges] = useState("")

    const handleClick = () => {
        if (!value) {
            setValueChange("subscription");
        } else {
            setValueChange("")
        }
        setValue(!value);
    }

    const handleClicks = () => {
        if (!values) {
            setValueChanges("burner");
        } else {
            setValueChanges("")
        }
        setValues(!value);
    }

    const handleSave = () => {
        if (valueChange == "subscription" && valueChanges == "burner") {
            localStorage.setItem('search', "Both");
            window.location.reload()
        }
        else if (valueChange == "subscription") {
            localStorage.setItem('search', "subscription");
            window.location.reload()
        }
        else if (valueChanges == "burner") {
            localStorage.setItem('search', "burner");
            window.location.reload()
        }
    }
    return (
        <>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Filters</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className='d-flex flex-column'>
                                <div>
                                    Type
                                </div>
                                <div className='my-2'>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" onClick={handleClick} />
                                        <label className="form-check-label" for="inlineCheckbox1">Subscription</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" onClick={handleClicks} />
                                        <label className="form-check-label" for="inlineCheckbox2">Burner</label>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" aria-label="Close" onClick={handleSave}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal
