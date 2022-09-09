import React, {useState} from 'react';

function FileUploadPage(){
	const [selectedFile, setSelectedFile] = useState();
	const [IsSelected, setIsSelected] = useState(false);

    const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsSelected(true);
	};

    const handleSubmission = () => {
		const formData = new FormData();

		formData.append('File', selectedFile);

    
        console.log({"file":selectedFile.name,"remark":"logo"})
        // {'file' selectedFile.name ,}

		fetch(
			'http://127.0.0.1:8080/file/upload',
			{
				method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
				body: {"file":selectedFile.name,"remark":"logo"},
			}
		)
			.then((response) => response.json())
			.then((result) => {
				console.log('Success:', result);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};
	
    return(
        <div>
                 <input type="file" name="file" onChange={changeHandler} />
                 {IsSelected? (
                     <div>
                         <p>Filename: {selectedFile.name}</p>
                         <p>Filetype: {selectedFile.type}</p>
                         <p>Size in bytes: {selectedFile.size}</p>
                         <p>
                             lastModifiedDate:{' '}
                             {selectedFile.lastModifiedDate.toLocaleDateString()}
                         </p>
                     </div>
                 ) : (
                     <p>Select a file to show details</p>
                 )}
                 <div>
                     <button onClick={handleSubmission}>Submit</button>
                 </div>
             </div>
         )

	
}

export default FileUploadPage