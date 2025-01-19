import "./contact.scss";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState<{
    topicType: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    isHuman: boolean;
    NameSchool: string;
    NameCompanie: string;
    NumberEmployees: string;
    NumberStudents: string;
  }>({
    topicType: "",
    name: "",
    email: "",
    phone: "",
    message: "",
    isHuman: false,
    NameSchool: "",
    NameCompanie: "",
    NumberEmployees: "",
    NumberStudents: "",
  });

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setForm({
      topicType: "",
      name: "",
      email: "",
      phone: "",
      message: "",
      isHuman: false,
      NameSchool: "",
      NameCompanie: "",
      NumberEmployees: "",
      NumberStudents: "",
    });
  };

  const isHumanHandler = () => {
    setForm((pre) => ({ ...form, isHuman: !pre.isHuman }));
  };

  const formHandler = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div id="contact" className="container">
      <div className="information">
        <h2>Contact information</h2>
        <div>
          <i className="fa-solid fa-location-dot"></i>{" "}
          <span>21 Ahmed Oraby, El Mohandesseen, Giza, Egypt</span>
        </div>
        <div>
          <i className="fa-regular fa-envelope"></i>{" "}
          <span>cinemas@arabiacpd.com</span>
        </div>
        <div className="arabic">
          <p>
            للمساعدة في مشاكل الحجز الاون لاين برجاء الضغط علي رقم الهاتف التالي
            وارسال رساله علي رقم الواتس اب :
          </p>
          <a href="tel:+201022444148">01022444148</a>
        </div>
      </div>
      <div className="form">
        <h2>Contact us</h2>
        <span>We are here to help! What do you need?</span>
        <form onSubmit={submitHandler}>
          <select
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
            value={form.name}
            onChange={formHandler}
            placeholder="Your Name *"
          />
          <div>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={formHandler}
              placeholder="Your Email *"
            />
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={formHandler}
              placeholder="Your Phone *"
            />
          </div>
          {form.topicType == "Inquiries For Companies" && (
            <div>
              <input
                type="text"
                name="NameCompanie"
                value={form.NameCompanie}
                onChange={formHandler}
                placeholder="NameCompanie"
              />
              <input
                type="text"
                name="NumberEmployees"
                value={form.NumberEmployees}
                onChange={formHandler}
                placeholder="Number of Employees (Optioal)"
              />
            </div>
          )}
          {form.topicType == "Inquiries For Schools" && (
            <div>
              <input
                type="text"
                name="NameSchool"
                value={form.NameSchool}
                onChange={formHandler}
                placeholder="Name of School (Optional)"
              />
              <input
                type="text"
                name="NumberStudents"
                value={form.NumberStudents}
                onChange={formHandler}
                placeholder="Number of Students (Optional)"
              />
            </div>
          )}
          <textarea
            name="message"
            value={form.message}
            onChange={formHandler}
            cols={30}
            rows={10}
            placeholder="Type Your Message..."
          />
          <label htmlFor="isHuman" id="isHuman" onClick={isHumanHandler}>
            <div id="checkDiv">
              <input type="checkbox" name="isHuman" checked={form.isHuman} />
              <span>I'm not a robot</span>
            </div>
            <div id="checkText">
              <img src="./ReCAPTCHA_icon.svg.png" />
              <p>
                reCAPTCHA <br />
                Privacy - Terms
              </p>
            </div>
          </label>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
