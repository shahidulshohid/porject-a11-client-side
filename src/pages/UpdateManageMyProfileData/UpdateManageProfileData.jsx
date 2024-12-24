import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../../hook/useAuth";
import axios from "axios";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const UpdateManageProfileData = () => {
  const { user } = useAuth();
  const [startDate, setStartDate] = useState(new Date());
  const { id } = useParams();
  console.log(id);

  const [volunteerNeedsDetails, setVolunteerNeedsDetails] = useState({});

  useEffect(() => {
    document.title = 'Be a volunteer page | Volunteer management'
    fetchJobData();
  }, [id]);

  const fetchJobData = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/be-volunteer/${id}`
    );
    setVolunteerNeedsDetails(data);
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const thumbnail = form.thumbnail.value 
    const title = form.title.value 
    const category = form.category.value 
    const number = form.number.value 
    const deadline = startDate
    const email = form.email.value
    const name = form.name.value 
    const location = form.location.value
    const description = form.location.value 
    const formData = {
      thumbnail,
      title,
      category,
      location,
      number,
      deadline,
      name,
      email,
      description
    };

    // make a post request
    try {
      const {data} = await axios.put(
        `${import.meta.env.VITE_API_URL}/update-manage-profile/${id}`,
        formData
      );
      form.reset();
      toast.success("Data update successfully", {
        position: "top-center",
      });
      console.log(data)
    } catch (error) {
      toast.error("Something went wrong", {
        position: "top-center",
      });
    }
  };
  return (
    <div className="my-12 mx-4 lg:mx-0">
      <h3 className="text-center my-3 text-3xl text-white">
        Update My profile 
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="lg:flex gap-3">
          <div className="w-full">
            <label className="text-gray-700 " htmlFor="job_title">
              Thumbnail
            </label>
            <input
              name="thumbnail"
              type="text"
              defaultValue={volunteerNeedsDetails.thumbnail}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            />
          </div>
          <div className="w-full">
            <label className="text-gray-700 " htmlFor="job_title">
              Post Title
            </label>
            <input
              name="title"
              type="text"
              defaultValue={volunteerNeedsDetails.title}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            />
          </div>
        </div>
        <div className="lg:flex gap-3">
          <div className="w-full">
            <div className="flex flex-col gap-2">
              <label className="text-gray-700" htmlFor="category">
                Category
              </label>
              <select
                name="category"
                defaultValue={volunteerNeedsDetails.category}
                className="border p-2 rounded-md bg-white"
              >
                <option value="Healthcare">Healthcare</option>
                <option value="Education">Education</option>
                <option value="Social service">Social service</option>
                <option value="Animal welfare">Animal welfare</option>
              </select>
            </div>
          </div>
          <div className="w-full">
            <label className="text-gray-700 " htmlFor="job_title">
              Location
            </label>
            <input
              name="location"
              type="text"
              defaultValue={volunteerNeedsDetails.location}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            />
          </div>
        </div>
        <div className="lg:flex gap-3">
          <div className="w-full">
            <label className="text-gray-700 " htmlFor="job_title">
              No. of volunteers needed
            </label>
            <input
              name="number"
              type="number"
              defaultValue={volunteerNeedsDetails.number}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            />
          </div>
          <div className="w-full">
            <div className="flex flex-col gap-2 ">
              <label className="text-gray-700">Deadline</label>

              {/* Date Picker Input Field */}
              <DatePicker
                className="border p-2 rounded-md w-full bg-white"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
          </div>
        </div>
        {/* Organizer name and email */}
        <div className="lg:flex gap-3">
          <div className="w-full">
            <label className="text-gray-700 " htmlFor="job_title">
              Organizer Name
            </label>
            <input
              name="name"
              type="text"
              defaultValue={volunteerNeedsDetails.name}
              disabled
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            />
          </div>
          <div className="w-full">
            <label className="text-gray-700 " htmlFor="job_title">
              Organizer Email
            </label>
            <input
              name="email"
              type="email"
              defaultValue={volunteerNeedsDetails.email}
              disabled
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <label className="text-gray-700 " htmlFor="description">
            Description
          </label>
          <textarea
            defaultValue={volunteerNeedsDetails.description}
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            name="description"
            id="description"
          ></textarea>
        </div>
        <div className="flex justify-end mt-6">
          <button className="disabled:cursor-not-allowed px-8 py-2.5 leading-5 text-black text-xl transition-colors duration-300 transhtmlForm bg-amber-200 rounded-md hover:bg-amber-200 focus:outline-none focus:bg-amber-200 w-full">
           Update Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateManageProfileData;








