import axios from "axios";

function onDrop(acceptedFiles) {
    console.log(acceptedFiles[0]);
    const data = new FormData();
    data.append('file', acceptedFiles[0]);

    axios.post('http://localhost:3002/upload', data)
        .then(function (response) {
            console.log('success sent', data);
        })
        .catch(function (error) {
            console.log(error);
        });
}

export default onDrop;