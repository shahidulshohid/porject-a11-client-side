import React from "react";
import Swal from "sweetalert2";
import { IoMdMailOpen } from "react-icons/io";
import { PiPhoneCallFill } from "react-icons/pi";
function ContactSection() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "88f9a790-8572-4074-aec2-b48c5e4ba0a7");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Email sent successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="my-12 bg-gray-100 px-6 py-12 rounded-xl" id="contact">
      <h3 className="text-3xl  text-black font-bold text-center">
        GET IN TOUCH
      </h3>
      <div className="md:flex justify-between space-y-5 md:space-y-0 md:gap-5 lg:gap-12">
        <div className="flex-1">
          <h3 className="text-4xl font-bold mb-2">
            Dont't hesitate to contact us
          </h3>
          <p className="font-semibold text-lg mb-2">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>
          <div className="flex gap-3 items-center">
            <div>
              <IoMdMailOpen className="size-12" />
            </div>
            <div>
              <h4 className="text-xl font-semibold">Mail me</h4>
              <p className="text-sm font-semibold">
                shahidulislamshohi7@gmail.com
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-center mt-3">
            <div>
              <PiPhoneCallFill className="size-12" />
            </div>
            <div>
              <h4 className="text-xl font-semibold">Mail me</h4>
              <p className="text-sm font-semibold">+01738283277</p>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <form onSubmit={onSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                name="message"
                className="textarea textarea-bordered"
                id=""
              ></textarea>
            </div>
            <button
              className="btn bg-green-500 border-green-500 text-lg text-white mt-3 hover:text-black"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
