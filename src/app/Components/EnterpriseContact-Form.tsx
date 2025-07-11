import { useState } from "react";
import Select from "react-select";
import countryData from "country-telephone-data";

export default function EnterpriseContactForm() {
  const [selectedCountry, setSelectedCountry] = useState(
    countryData.allCountries.find((c) => c.iso2 === "us")
  );
  const [phoneNumber, setPhoneNumber] = useState("");
  const [inputValues, setInputValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    job: "",
    company: "",
  });

  const handleInputChange = (key: string, value: string) => {
    setInputValues((prev) => ({ ...prev, [key]: value }));
  };

  const getInputStyle = (value: string) =>
    value ? "bg-[#eaf1fb] text-black" : "bg-transparent text-white";

  const countryOptions = countryData.allCountries.map((country) => ({
    value: country.iso2,
    label: `${country.name} +${country.dialCode}`,
    dialCode: country.dialCode,
    iso2: country.iso2,
    name: country.name,
  }));

  return (
<div className="max-w-7xl mx-auto px-3 py-4 md:py-6 flex gap-3 md:gap-6 text-[11px] md:text-[14px] flex-wrap">
  <div className="w-full md:w-[40%] flex flex-col justify-between h-full">

    <div>
      <h1 className="text-[32px] md:text-[48px] font-[600] leading-tight">Let's connect</h1>
      <p className="text-[20px] md:text-[20px] mt-6 md:mt-12 leading-snug">
        We’d love to answer any questions — just send us your contact info, and we’ll schedule a call.
      </p>

      <div className="mt-6 md:mt-12 max-w-4xl flex flex-col gap-4 md:flex-row md:justify-between md:gap-6">
        <div className="space-y-3 md:space-y-4">
          {[
            "View our award-winning platform in action",
            "Discuss your talent strategy and pricing information",
            "Learn why 30% of the Fortune 500 choose Upwork",
          ].map((text, index) => (
            <div key={index} className="flex gap-4">
              <img src="/Images/Correct.svg" className="object-contain h-[20px] w-[20px] md:h-[24px] md:w-[24px]" />
              <label>{text}</label>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="mt-12 md:mt-88">
      <p className="text-[11px] md:text-[12px] font-bold">TRUSTED BY</p>
      <div className="flex items-center gap-3 md:gap-4 mt-2 flex-wrap">
        <img src="/Images/small-img1svg.svg" className="h-[35px] md:h-[45px]" />
        <img src="/Images/small-img2.svg" className="h-[35px] md:h-[45px]" />
        <img src="/Images/small-img3png.png" className="h-[35px] md:h-[45px]" />
        <img src="/Images/small-img4.png" className="h-[35px] md:h-[45px]" />
        <p className="text-[11px] md:text-[12px] font-bold">AND MORE</p>
      </div>
    </div>
  </div>

  <div className="w-full md:w-[55%]">
    <div className="bg-black md:bg-[#1c1c1c] rounded-[24px] md:rounded-[32px] px-5 md:px-10 pt-8 md:pt-10 pb-10 md:pb-14">
      <h1 className="text-[20px] md:text-[24px] font-semibold mb-4 md:mb-6">Tell us about yourself</h1>

      <form className="space-y-4">

        <div className="flex flex-col md:flex-row gap-3">
          <input
            type="text"
            placeholder="First Name"
            onChange={(e) => handleInputChange("firstName", e.target.value)}
            className={`w-full border border-[#313131] rounded-md px-3 py-2 md:px-4 md:py-3 placeholder-[#a5a5a5] text-sm md:text-base ${getInputStyle(inputValues.firstName)}`}
          />
          <input
            type="text"
            placeholder="Last Name"
            onChange={(e) => handleInputChange("lastName", e.target.value)}
            className={`w-full border border-[#313131] rounded-md px-3 py-2 md:px-4 md:py-3 placeholder-[#a5a5a5] text-sm md:text-base ${getInputStyle(inputValues.lastName)}`}
          />
        </div>

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => handleInputChange("email", e.target.value)}
          className={`w-full border border-[#313131] rounded-md px-3 py-2 md:px-4 md:py-3 placeholder-[#a5a5a5] text-sm md:text-base ${getInputStyle(inputValues.email)}`}
        />

        <div className="w-full flex flex-col md:flex-row gap-2 items-start md:items-center border border-[#313131] rounded-md px-3 py-2">
          <div className="w-full md:min-w-[170px]">
            <Select
              options={countryOptions}
              onChange={(selected: any) => setSelectedCountry(selected)}
              defaultValue={countryOptions.find((c) => c.iso2 === "us")}
              isSearchable
              className="text-white"
              formatOptionLabel={(country: any) => (
                <div className="flex items-center gap-2">
                  <img
                    src={`https://flagcdn.com/w40/${country.iso2}.png`}
                    alt={country.name}
                    className="w-5 h-4 object-cover rounded-sm"
                  />
                  <span>{country.name}</span>
                </div>
              )}
              styles={{
                control: (base) => ({
                  ...base,
                  backgroundColor: "transparent",
                  border: "none",
                  boxShadow: "none",
                  color: "white",
                }),
                menu: (base) => ({
                  ...base,
                  backgroundColor: "black",
                  color: "white",
                  maxHeight: 300
                }),
                option: (base, { isFocused, isSelected }) => ({
                  ...base,
                  backgroundColor: isSelected || isFocused ? "#2a2a2a" : "black",
                  color: "white",
                  cursor: "pointer",
                }),
                input: (base) => ({
                  ...base,
                  color: "white",
                }),
                singleValue: (base) => ({
                  ...base,
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }),
                menuList: (base) => ({
                  ...base,
                  padding: 0,
                }),
              }}
            />
          </div>
          <span className="text-white min-w-[40px] mt-2 md:mt-0">+{selectedCountry?.dialCode}</span>
          <input
            type="tel"
            placeholder="Phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full bg-transparent border border-transparent focus:border-white outline-none text-white placeholder-[#a5a5a5] px-3 py-2 md:px-4 md:py-3 rounded-md text-sm md:text-base"
          />
        </div>

        <input
          type="text"
          placeholder="Job title"
          onChange={(e) => handleInputChange("job", e.target.value)}
          className={`w-full border border-[#313131] rounded-md px-3 py-2 md:px-4 md:py-3 placeholder-[#a5a5a5] text-sm md:text-base ${getInputStyle(inputValues.job)}`}
        />

        <input
          type="text"
          placeholder="Company name"
          onChange={(e) => handleInputChange("company", e.target.value)}
          className={`w-full border border-[#313131] rounded-md px-3 py-2 md:px-4 md:py-3 placeholder-[#a5a5a5] text-sm md:text-base ${getInputStyle(inputValues.company)}`}
        />

        <div className="relative w-full">
          <select
            className="w-full bg-transparent border border-[#313131] rounded-md px-3 py-2 md:px-4 md:py-3 text-[#a5a5a5] pr-10 text-sm md:text-base appearance-none"
            defaultValue=""
          >
            <option
              value=""
              disabled
              style={{ color: "#a5a5a5", backgroundColor: "black" }}
              className="text-[#a5a5a5]"
            >
              Select company size
            </option>
            <option className="bg-black text-white" value="1-10">1-10</option>
            <option className="bg-black text-white" value="11-50">11-50</option>
            <option className="bg-black text-white" value="51-200">51-200</option>
            <option className="bg-black text-white" value="201-500">201-500</option>
            <option className="bg-black text-white" value="500+">500+</option>
          </select>

          <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
            <svg
              className="w-4 h-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        <button
          type="submit"
          className="bg-[#95df05] text-black px-8 md:px-12 py-2.5 md:py-3 rounded-xl font-[400] mt-4 text-sm md:text-base"
        >
          Submit
        </button>

        <p className="text-[12px] md:text-[14px] text-white mt-4 md:mt-6 leading-snug">
          We’ll use your personal information to contact you, schedule a call, and communicate about Enterprise Suite and Upwork services. The use of your information is governed by Upwork's{" "}
          <a href="#" className="text-[#95df05] underline hover:text-[#108a00] transition-all">Privacy Policy</a>.
        </p>
        <p className="text-[12px] md:text-[14px] text-white mt-2 leading-snug">
          For technical issues and general inquiries, please contact{" "}
          <a href="#" className="text-[#95df05] underline hover:text-[#108a00] transition-all">Upwork support</a>.
        </p>
      </form>
    </div>
  </div>
</div>

  );
}
