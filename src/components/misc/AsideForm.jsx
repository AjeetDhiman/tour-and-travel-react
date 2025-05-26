import React from "react";
import Error from "./Error";

const AsideForm = () => {
  return (
    <div>
      <div className="block w-full">
        <h2 className="block font-bold">Message</h2>
      </div>
      <hr className="mt-1 w-full border-2 border-black" />
      <form className="sm:mt-10 mt-6">
        <div className="mb-2.5">
          <label htmlFor="name" className="mb-3.5 block font-bold">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="h-[39px] w-full rounded-full border border-current"
          />

          <Error className="my-1"></Error>
        </div>
        <div className="mb-2.5">
          <label htmlFor="emailaddress" className="mb-3.5 block font-bold">
            Email Address
          </label>
          <input
            type="text"
            id="emailaddress"
            className="h-[39px] w-full rounded-full border border-current"
          />
          <Error className="my-1"></Error>
        </div>
        <div className="mb-2.5">
          <label htmlFor="message" className="mb-3.5 block font-bold">
            Message
          </label>
          <textarea
            id="message"
            className="rounded-2xl border w-full"
            rows={8}
          ></textarea>
          <Error className="my-1"></Error>
        </div>
        <button
          type="submit"
          className="w-full cursor-pointer rounded-full border border-current bg-black px-4 py-2.5 text-white hover:bg-white hover:text-black"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AsideForm;
