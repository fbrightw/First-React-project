import React, {useState} from 'react';

function Folders(props) {

    const [folderName, setFolderName] = useState("Name of folder")

    function onFolderTextChange(e){
        setFolderName(e.target.value)
    }

    return (
        <div className="folder-container">
           <div className="folder">
               <input value={folderName} onChange={onFolderTextChange}></input>
               {/*<input value="Name of subfolder" onChange=></input>*/}
           </div>
            <button>
                <i className="bi bi-plus-circle-fill"></i>
            </button>
        </div>
    );
}

export default Folders;