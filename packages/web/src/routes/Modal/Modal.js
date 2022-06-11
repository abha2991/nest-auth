import React from "react"




const Modal=(props)=>{
  return(
      <>
      <div className="modal fade" id={props.id} data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby={props.id} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <form>
                                <input type="text" name={props.name} value={props.data} onChange={props.onChange} className="form-control mb-3"/>
                                <div className="d-flex justify-content-between text-center">
                                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Save</button>
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
                                            onClick={props.onClick}>Close</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
      </>
  )
}

export default Modal
