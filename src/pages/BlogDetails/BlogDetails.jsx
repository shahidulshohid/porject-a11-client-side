import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
    const {id} = useParams()
    const [details, setDetails] = useState([])
    useEffect(()=> {
        fetch('/blog.json')
        .then(res => res.json())
        .then(data => {
            const detailsData = data.find(fil => fil.id == id)
            setDetails(detailsData)
        })
    }, [])
    console.log(details)
    return (
        <div>
            <div>
                <img src={details.image} alt="" />
            </div>
        </div>
    );
};

export default BlogDetails;