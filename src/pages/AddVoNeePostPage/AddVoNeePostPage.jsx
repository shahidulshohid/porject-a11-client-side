import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../../hook/useAuth";

const AddVoNeePostPage = () => {
  const { user } = useAuth();
  const [startDate, setStartDate] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const thumbnail = form.thumbnail.value;
    const title = form.title.value;
    const category = form.category.value;
    const location = form.location.value;
    const number = form.number.value;
    const deadline = startDate;
    const name = form.name.value;
    const email = form.email.value;
    const description = form.description.value;
    console.log(
      thumbnail,
      title,
      category,
      location,
      number,
      deadline,
      name,
      email,
      description
    );
  };
  return (
    <div className="py-24 mx-4 lg:mx-0">
      <form onSubmit={handleSubmit}>
      <div className="lg:flex gap-3">
        <div className="w-full">
          <label className="text-gray-700 " htmlFor="job_title">
            Thumbnail
          </label>
          <input
            name="thumbnail"
            type="text"
            placeholder="Thumbnail "
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
            placeholder="Post Title"
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
            <select name="category" className="border p-2 rounded-md">
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
            placeholder="Location"
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
            placeholder="No. of volunteers needed "
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
          />
        </div>
        <div className="w-full">
          <div className="flex flex-col gap-2 ">
            <label className="text-gray-700">Deadline</label>

            {/* Date Picker Input Field */}
            <DatePicker
              className="border p-2 rounded-md w-full"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
        </div>
      </div>
      <div className="lg:flex gap-3">
        <div className="w-full">
          <label className="text-gray-700 " htmlFor="job_title">
            Organizer Name
          </label>
          <input
            name="name"
            type="text"
            defaultValue={user?.displayName}
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
            defaultValue={user?.email}
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
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
          name="description"
          id="description"
        ></textarea>
      </div>
      <div className="flex justify-end mt-6">
        <button className="disabled:cursor-not-allowed px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
          Save
        </button>
      </div>
      </form>
    </div>
  );
};

export default AddVoNeePostPage;