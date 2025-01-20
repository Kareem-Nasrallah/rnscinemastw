import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState<{
    topicType: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    isHuman: boolean;
  }>({
    topicType: "",
    name: "",
    email: "",
    phone: "",
    message: "",
    isHuman: false,
  });

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const isHumanHandler = () => {
    setForm((pre) => ({ ...form, isHuman: !pre.isHuman }));
  };

  const inputStyle = "w-full p-4 font-medium rounded-md text-sm bg-slate-100";

  const formHandler = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div
      id="contact"
      className="container mx-auto flex flex-col items-center lg:items-start lg:flex-row 2xl:px-32 xl:px-24 lg:px-16 md:px-8 px-2.5"
    >
      <div className="py-12 px-12 w-full 2xl:px-28 xl:px-16 lg:px-12 sm:px-32  border-r-2 border-neutral-100 lg:w-1/2">
        <h2 className="text-3xl my-2.5 text-center font-medium">
          Contact information
        </h2>
        <div className="flex items-center gap-2.5 my-2.5">
          <i className="fa-solid fa-location-dot text-4xl text-fuchsia-700"></i>{" "}
          <span className="my-2.5 text-lg font-medium">
            21 Ahmed Oraby, El Mohandesseen, Giza, Egypt
          </span>
        </div>
        <div className="flex items-center gap-2.5 my-2.5">
          <i className="fa-regular fa-envelope text-3xl text-fuchsia-700"></i>{" "}
          <span className="my-2.5 text-lg font-medium">
            cinemas@arabiacpd.com
          </span>
        </div>
        <div className="my-6" style={{ direction: "rtl" }}>
          <p
            className="my-2.5 font-medium text-lg"
            style={{ fontFamily: '"IBM Plex Sans Arabic", serif' }}
          >
            للمساعدة في مشاكل الحجز الاون لاين برجاء الضغط علي رقم الهاتف التالي
            وارسال رساله علي رقم الواتس اب :
          </p>
          <a
            className="font-medium text-lg text-fuchsia-700"
            href="tel:+201022444148"
          >
            01022444148
          </a>
        </div>
      </div>
      <div className="p-12 w-full lg:w-1/2">
        <h2 className="text-3xl my-2.5 font-medium">Contact us</h2>
        <span className="text-lg font-medium">
          We are here to help! What do you need?
        </span>
        <form
          onSubmit={submitHandler}
          className="flex mt-6 justify-start items-start flex-col gap-4"
        >
          <select
            className={inputStyle}
            value={form.topicType}
            onChange={formHandler}
            name="topicType"
          >
            <option defaultValue={""}>Please Choose The Topic</option>
            <option value="General Inquiry">
              General Inquiry iTop Screen Recorder
            </option>
            <option value="Booking Issues">Online Booking Issues</option>
            <option value="Inquiries For Schools">Inquiries For Schools</option>
            <option value="Inquiries For Companies">
              Inquiries For Companies
            </option>
          </select>
          <input
            type="text"
            name="name"
            className={inputStyle}
            value={form.name}
            onChange={formHandler}
            placeholder="Your Name *"
          />
          <div className="w-full flex gap-4">
            <input
              type="email"
              name="email"
              className={inputStyle}
              value={form.email}
              onChange={formHandler}
              placeholder="Your Email *"
            />
            <input
              type="text"
              name="phone"
              className={inputStyle}
              value={form.phone}
              onChange={formHandler}
              placeholder="Your Phone *"
            />
          </div>
          {form.topicType == "Inquiries For Schools" ||
          form.topicType == "Inquiries For Companies" ? (
            <div className="w-full flex gap-4">
              <input
                type="text"
                name="email"
                className={inputStyle}
                value={form.email}
                onChange={formHandler}
                placeholder={
                  form.topicType == "Inquiries For Schools"
                    ? "Name of School (Optional)"
                    : "Name of Companie (Optional)"
                }
              />
              <input
                type="text"
                name="phone"
                value={form.phone}
                className={inputStyle}
                onChange={formHandler}
                placeholder={
                  form.topicType == "Inquiries For Schools"
                    ? "Number of Students (Optional)"
                    : "Number of Employees (Optioal)"
                }
              />
            </div>
          ) : (
            ""
          )}
          <textarea
            name="message"
            value={form.message}
            onChange={formHandler}
            cols={30}
            rows={10}
            className={inputStyle}
            placeholder="Type Your Message..."
          />
          <label
            htmlFor="isHuman"
            className="flex justify-between items-center bg-neutral-50 w-72 border border-neutral-300 "
            onClick={isHumanHandler}
          >
            <div
              id="checkDiv"
              className="w-40 flex justify-center items-center "
            >
              <input
                className="size-7 mx-2.5 "
                type="checkbox"
                id="isHuman"
                name="isHuman"
                checked={form.isHuman}
              />
              <span>I'm not a robot</span>
            </div>
            <div className="mr-1 py-1.5">
              <img width="50px" src="./ReCAPTCHA_icon.svg.png" />
              <p className="text-xs text-stone-500">
                reCAPTCHA <br />
                Privacy - Terms
              </p>
            </div>
          </label>
          <button
            className="text-white bg-fuchsia-700 mx-auto p-2.5 w-72 rounded-md"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
