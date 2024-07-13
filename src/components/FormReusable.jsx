const FormReusable = ({ labelFor, label, type }) => {
  return (
    <div className="">
      <label
        htmlFor={labelFor ? labelFor : null}
        className="block capitalize text-[#A6AAAE] text-[1rem]"
      >
        {label ? label : null}
      </label>
      <input
        type={type}
        name={labelFor}
        id={labelFor}
        className="border-[#FBD0BA] border bg-[#FEF0E9] py-2 rounded-lg mt-1 w-full outline-none"
      />
    </div>
  );
};
export default FormReusable;
