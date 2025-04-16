import React from "react";
import Error from "./Error";

const AsideForm = () => {
  return (
    <form>
      <div className="block w-full underline">
        <h2 className="block font-bold">Message</h2>
      </div>
      <div>
        <label htmlFor="name" className="block">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="rounded-full border border-current"
        />

        <Error className="my-1">Name is required</Error>
      </div>
      <div>
        <label htmlFor="emailaddress" className="block">
          Email Address
        </label>
        <input
          type="text"
          id="emailaddress"
          className="rounded-full border border-current"
        />
        <Error className="my-1">Email Address is required</Error>
      </div>
      <div>
        <label htmlFor="message" className="block">
          Message
        </label>
        <textarea id="message" className="rounded-2xl border"></textarea>
        <Error className="my-1">Message is required</Error>
      </div>
      <button
        type="submit"
        className="border border-current bg-black text-white hover:bg-white hover:text-black w-full rounded-full py-2.5 px-4"
      >
        Submit
      </button>
    </form>
  );
};

export default AsideForm;
