import React from "react";
import './ImageLinkForm.css';



const ImageLinkForm = () => {
    return (
        <div className="ma4 mt0">
            <p className="f4">
                {'This Magic Brain will detect face in your pictures. Give it a try...'}
            </p>

            <div className="form center">
                <div className=" center pa4 br3 shadow-5">
                    <input className="f6 pa2 w-60 center" type="text" />
                    <button className="w-30 grow f5 link ph3 pv2 dib white bg-light-purple">Detect</button>
                </div>
            </div>



        </div>
    )

}
export default ImageLinkForm;