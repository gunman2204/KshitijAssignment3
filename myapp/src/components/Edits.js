import React from 'react'

export default function Edit() {
    return (
        <div>
            <div id="addelement2" className="addelement">
                <div className="d-flex justify-content-between my-2 mx-4">
                    <span className=" text2">Change Amount or Description</span>
                    <a href="#"><button type="button" id="closeinput2" className="btn btn-dark closebtn" >X</button></a>
                </div>
                <form className="row g-3 d-flex justify-content-between my-2 mx-4">
                    <div className="col-auto">
                        <label htmlFor="changeAmount" className="visually-hidden">Password</label>
                        <input className="form-control" id="changeAmount" placeholder="Enter New Amount" />
                    </div>
                    <div className="col-auto">
                        <label htmlFor="changeDescription" className="visually-hidden">Password</label>
                        <input className="form-control" id="changeDescription" placeholder="Enter New description" />
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-dark mb-3" onclick="createFolder()">Change</button>
                    </div>
                </form>
            </div>

        </div>
    )
}
