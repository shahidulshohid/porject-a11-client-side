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
    return (
        <div className="my-12">
            <div className="flex gap-5 bg-white">
          <div className="w-full h-[280px] flex-1">
            <img className="w-full h-[280px] object-cover" src={details.image} alt="" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-black mt-2">
              {details.title}
            </h3>
            <p className="text-gray-500">
              {details.description}
            </p>
          </div>
        </div>
        </div>
    );
};

export default BlogDetails;