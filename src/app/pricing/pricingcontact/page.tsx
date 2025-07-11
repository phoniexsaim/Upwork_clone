"use client"
import React, { useMemo } from 'react'
import { useState } from 'react';

export default function EnterpriseContactForm() {
const [phoneCountryCode, setPhoneCountryCode] = useState('+258');
const [showCompanySizeDropdown, setShowCompanySizeDropdown] = useState(false);
const [showCountryDropdown, setShowCountryDropdown] = useState(false);
const [searchQuery, setSearchQuery] = useState('');

//  const  countryOptions: Country
//     [
//         {"name": "Afghanistan", "code": "+93"},
//         {"name": "Albania", "code": "+355"},
//         {"name": "Algeria", "code": "+213"},
//         {"name": "American Samoa", "code": "+1-684"},
//         {"name": "Andorra", "code": "+376"},
//         {"name": "Angola", "code": "+244"},
//         {"name": "Anguilla", "code": "+1-264"},
//         {"name": "Antarctica", "code": "+672"},
//         {"name": "Antigua and Barbuda", "code": "+1-268"},
//         {"name": "Argentina", "code": "+54"},
//         {"name": "Armenia", "code": "+374"},
//         {"name": "Aruba", "code": "+297"},
//         {"name": "Australia", "code": "+61"},
//         {"name": "Austria", "code": "+43"},
//         {"name": "Azerbaijan", "code": "+994"},
//         {"name": "Bahamas", "code": "+1-242"},
//         {"name": "Bahrain", "code": "+973"},
//         {"name": "Bangladesh", "code": "+880"},
//         {"name": "Barbados", "code": "+1-246"},
//         {"name": "Belarus", "code": "+375"},
//         {"name": "Belgium", "code": "+32"},
//         {"name": "Belize", "code": "+501"},
//         {"name": "Benin", "code": "+229"},
//         {"name": "Bermuda", "code": "+1-441"},
//         {"name": "Bhutan", "code": "+975"},
//         {"name": "Bolivia", "code": "+591"},
//         {"name": "Bosnia and Herzegovina", "code": "+387"},
//         {"name": "Botswana", "code": "+267"},
//         {"name": "Brazil", "code": "+55"},
//         {"name": "British Indian Ocean Territory", "code": "+246"},
//         {"name": "British Virgin Islands", "code": "+1-284"},
//         {"name": "Brunei", "code": "+673"},
//         {"name": "Bulgaria", "code": "+359"},
//         {"name": "Burkina Faso", "code": "+226"},
//         {"name": "Burundi", "code": "+257"},
//         {"name": "Cambodia", "code": "+855"},
//         {"name": "Cameroon", "code": "+237"},
//         {"name": "Canada", "code": "+1"},
//         {"name": "Cape Verde", "code": "+238"},
//         {"name": "Cayman Islands", "code": "+1-345"},
//         {"name": "Central African Republic", "code": "+236"},
//         {"name": "Chad", "code": "+235"},
//         {"name": "Chile", "code": "+56"},
//         {"name": "China", "code": "+86"},
//         {"name": "Christmas Island", "code": "+61"},
//         {"name": "Cocos Islands", "code": "+61"},
//         {"name": "Colombia", "code": "+57"},
//         {"name": "Comoros", "code": "+269"},
//         {"name": "Cook Islands", "code": "+682"},
//         {"name": "Costa Rica", "code": "+506"},
//         {"name": "Croatia", "code": "+385"},
//         {"name": "Cuba", "code": "+53"},
//         {"name": "Curacao", "code": "+599"},
//         {"name": "Cyprus", "code": "+357"},
//         {"name": "Czech Republic", "code": "+420"},
//         {"name": "Democratic Republic of the Congo", "code": "+243"},
//         {"name": "Denmark", "code": "+45"},
//         {"name": "Djibouti", "code": "+253"},
//         {"name": "Dominica", "code": "+1-767"},
//         {"name": "Dominican Republic", "code": "+1-809, +1-829, +1-849"},
//         {"name": "East Timor", "code": "+670"},
//         {"name": "Ecuador", "code": "+593"},
//         {"name": "Egypt", "code": "+20"},
//         {"name": "El Salvador", "code": "+503"},
//         {"name": "Equatorial Guinea", "code": "+240"},
//         {"name": "Eritrea", "code": "+291"},
//         {"name": "Estonia", "code": "+372"},
//         {"name": "Eswatini", "code": "+268"},
//         {"name": "Ethiopia", "code": "+251"},
//         {"name": "Falkland Islands", "code": "+500"},
//         {"name": "Faroe Islands", "code": "+298"},
//         {"name": "Fiji", "code": "+679"},
//         {"name": "Finland", "code": "+358"},
//         {"name": "France", "code": "+33"},
//         {"name": "French Polynesia", "code": "+689"},
//         {"name": "Gabon", "code": "+241"},
//         {"name": "Gambia", "code": "+220"},
//         {"name": "Georgia", "code": "+995"},
//         {"name": "Germany", "code": "+49"},
//         {"name": "Ghana", "code": "+233"},
//         {"name": "Gibraltar", "code": "+350"},
//         {"name": "Greece", "code": "+30"},
//         {"name": "Greenland", "code": "+299"},
//         {"name": "Grenada", "code": "+1-473"},
//         {"name": "Guam", "code": "+1-671"},
//         {"name": "Guatemala", "code": "+502"},
//         {"name": "Guernsey", "code": "+44-1481"},
//         {"name": "Guinea", "code": "+224"},
//         {"name": "Guinea-Bissau", "code": "+245"},
//         {"name": "Guyana", "code": "+592"},
//         {"name": "Haiti", "code": "+509"},
//         {"name": "Honduras", "code": "+504"},
//         {"name": "Hong Kong", "code": "+852"},
//         {"name": "Hungary", "code": "+36"},
//         {"name": "Iceland", "code": "+354"},
//         {"name": "India", "code": "+91"},
//         {"name": "Indonesia", "code": "+62"},
//         {"name": "Iran", "code": "+98"},
//         {"name": "Iraq", "code": "+964"},
//         {"name": "Ireland", "code": "+353"},
//         {"name": "Isle of Man", "code": "+44-1624"},
//         {"name": "Israel", "code": "+972"},
//         {"name": "Italy", "code": "+39"},
//         {"name": "Ivory Coast", "code": "+225"},
//         {"name": "Jamaica", "code": "+1-876"},
//         {"name": "Japan", "code": "+81"},
//         {"name": "Jersey", "code": "+44-1534"},
//         {"name": "Jordan", "code": "+962"},
//         {"name": "Kazakhstan", "code": "+7"},
//         {"name": "Kenya", "code": "+254"},
//         {"name": "Kiribati", "code": "+686"},
//         {"name": "Kosovo", "code": "+383"},
//         {"name": "Kuwait", "code": "+965"},
//         {"name": "Kyrgyzstan", "code": "+996"},
//         {"name": "Laos", "code": "+856"},
//         {"name": "Latvia", "code": "+371"},
//         {"name": "Lebanon", "code": "+961"},
//         {"name": "Lesotho", "code": "+266"},
//         {"name": "Liberia", "code": "+231"},
//         {"name": "Libya", "code": "+218"},
//         {"name": "Liechtenstein", "code": "+423"},
//         {"name": "Lithuania", "code": "+370"},
//         {"name": "Luxembourg", "code": "+352"},
//         {"name": "Macau", "code": "+853"},
//         {"name": "Madagascar", "code": "+261"},
//         {"name": "Malawi", "code": "+265"},
//         {"name": "Malaysia", "code": "+60"},
//         {"name": "Maldives", "code": "+960"},
//         {"name": "Mali", "code": "+223"},
//         {"name": "Malta", "code": "+356"},
//         {"name": "Marshall Islands", "code": "+692"},
//         {"name": "Mauritania", "code": "+222"},
//         {"name": "Mauritius", "code": "+230"},
//         {"name": "Mayotte", "code": "+262"},
//         {"name": "Mexico", "code": "+52"},
//         {"name": "Micronesia", "code": "+691"},
//         {"name": "Moldova", "code": "+373"},
//         {"name": "Monaco", "code": "+377"},
//         {"name": "Mongolia", "code": "+976"},
//         {"name": "Montenegro", "code": "+382"},
//         {"name": "Montserrat", "code": "+1-664"},
//         {"name": "Morocco", "code": "+212"},
//         {"name": "Mozambique", "code": "+258"},
//         {"name": "Myanmar", "code": "+95"},
//         {"name": "Namibia", "code": "+264"},
//         {"name": "Nauru", "code": "+674"},
//         {"name": "Nepal", "code": "+977"},
//         {"name": "Netherlands", "code": "+31"},
//         {"name": "Netherlands Antilles", "code": "+599"},
//         {"name": "New Caledonia", "code": "+687"},
//         {"name": "New Zealand", "code": "+64"},
//         {"name": "Nicaragua", "code": "+505"},
//         {"name": "Niger", "code": "+227"},
//         {"name": "Nigeria", "code": "+234"},
//         {"name": "Niue", "code": "+683"},
//         {"name": "North Korea", "code": "+850"},
//         {"name": "North Macedonia", "code": "+389"},
//         {"name": "Northern Mariana Islands", "code": "+1-670"},
//         {"name": "Norway", "code": "+47"},
//         {"name": "Oman", "code": "+968"},
//         {"name": "Pakistan", "code": "+92"},
//         {"name": "Palau", "code": "+680"},
//         {"name": "Palestine", "code": "+970"},
//         {"name": "Panama", "code": "+507"},
//         {"name": "Papua New Guinea", "code": "+675"},
//         {"name": "Paraguay", "code": "+595"},
//         {"name": "Peru", "code": "+51"},
//         {"name": "Philippines", "code": "+63"},
//         {"name": "Pitcairn", "code": "+64"},
//         {"name": "Poland", "code": "+48"},
//         {"name": "Portugal", "code": "+351"},
//         {"name": "Puerto Rico", "code": "+1-787, +1-939"},
//         {"name": "Qatar", "code": "+974"},
//         {"name": "Republic of the Congo", "code": "+242"},
//         {"name": "Reunion", "code": "+262"},
//         {"name": "Romania", "code": "+40"},
//         {"name": "Russia", "code": "+7"},
//         {"name": "Rwanda", "code": "+250"},
//         {"name": "Saint Barthelemy", "code": "+590"},
//         {"name": "Saint Helena", "code": "+290"},
//         {"name": "Saint Kitts and Nevis", "code": "+1-869"},
//         {"name": "Saint Lucia", "code": "+1-758"},
//         {"name": "Saint Martin", "code": "+590"},
//         {"name": "Saint Pierre and Miquelon", "code": "+508"},
//         {"name": "Saint Vincent and the Grenadines", "code": "+1-784"},
//         {"name": "Samoa", "code": "+685"},
//         {"name": "San Marino", "code": "+378"},
//         {"name": "Sao Tome and Principe", "code": "+239"},
//         {"name": "Saudi Arabia", "code": "+966"},
//         {"name": "Senegal", "code": "+221"},
//         {"name": "Serbia", "code": "+381"},
//         {"name": "Seychelles", "code": "+248"},
//         {"name": "Sierra Leone", "code": "+232"},
//         {"name": "Singapore", "code": "+65"},
//         {"name": "Sint Maarten", "code": "+1-721"},
//         {"name": "Slovakia", "code": "+421"},
//         {"name": "Slovenia", "code": "+386"},
//         {"name": "Solomon Islands", "code": "+677"},
//         {"name": "Somalia", "code": "+252"},
//         {"name": "South Africa", "code": "+27"},
//         {"name": "South Korea", "code": "+82"},
//         {"name": "South Sudan", "code": "+211"},
//         {"name": "Spain", "code": "+34"},
//         {"name": "Sri Lanka", "code": "+94"},
//         {"name": "Sudan", "code": "+249"},
//         {"name": "Suriname", "code": "+597"},
//         {"name": "Svalbard and Jan Mayen", "code": "+47"},
//         {"name": "Sweden", "code": "+46"},
//         {"name": "Switzerland", "code": "+41"},
//         {"name": "Syria", "code": "+963"},
//         {"name": "Taiwan", "code": "+886"},
//         {"name": "Tajikistan", "code": "+992"},
//         {"name": "Tanzania", "code": "+255"},
//         {"name": "Thailand", "code": "+66"},
//         {"name": "Togo", "code": "+228"},
//         {"name": "Tokelau", "code": "+690"},
//         {"name": "Tonga", "code": "+676"},
//         {"name": "Trinidad and Tobago", "code": "+1-868"},
//         {"name": "Tunisia", "code": "+216"},
//         {"name": "Turkey", "code": "+90"},
//         {"name": "Turkmenistan", "code": "+993"},
//         {"name": "Turks and Caicos Islands", "code": "+1-649"},
//         {"name": "Tuvalu", "code": "+688"},
//         {"name": "U.S. Virgin Islands", "code": "+1-340"},
//         {"name": "Uganda", "code": "+256"},
//         {"name": "Ukraine", "code": "+380"},
//         {"name": "United Arab Emirates", "code": "+971"},
//         {"name": "United Kingdom", "code": "+44"},
//         {"name": "United States", "code": "+1"},
//         {"name": "Uruguay", "code": "+598"},
//         {"name": "Uzbekistan", "code": "+998"},
//         {"name": "Vanuatu", "code": "+678"},
//         {"name": "Vatican", "code": "+379"},
//         {"name": "Venezuela", "code": "+58"},
//         {"name": "Vietnam", "code": "+84"},
//         {"name": "Wallis and Futuna", "code": "+681"},
//         {"name": "Western Sahara", "code": "+212"},
//         {"name": "Yemen", "code": "+967"},
//         {"name": "Zambia", "code": "+260"},
//         {"name": "Zimbabwe", "code": "+263"}
    
//   ];

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    workEmail: '',
    phone: '',
    jobTitle: '',
    companyName: '',
    companySize: '1-49'
  });
  
  type Country = {
    name: string;
    code: string;
    flag: string;
  }; 

  const countryOptions: Country[] = [
    { name: "India", code: "+91", flag: "🇮🇳" },
    { name: "United States", code: "+1", flag: "🇺🇸" },
    { name: "United Kingdom", code: "+44", flag: "🇬🇧" },
    { name: "Germany", code: "+49", flag: "🇩🇪" },
    { name: "Australia", code: "+61", flag: "🇦🇺" },
  ];

  const companySizeOptions: string[] = [
    "1-49 employees",
    "50-149 employees",
    "150-249 employees",
    "250-999 employees",
    "1000+ employees",
  ];
  


  
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
  };

  const filteredCountries = useMemo(() => {
    if (!searchQuery) return countryOptions;
    return countryOptions.filter(country => 
      country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      country.code.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);


  return (
    <div className='bg-black w-full min-h-screen'>
        <div className='flex justify-between items-center p-[15px] pb-[40px] md:px-[28px] md:py-[30px]'>
            <div>
              <svg width="80" height="24" viewBox="0 0 82 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_816_51980)">
                <path d="M22.2651 16.0054C20.0015 16.0054 18.503 14.253 18.085 13.5742C18.6213 9.2802 20.1908 7.92253 22.2651 7.92253C24.3158 7.92253 25.909 9.56436 25.909 11.964C25.9169 14.3635 24.3158 16.0054 22.2651 16.0054ZM22.2651 5.28613C18.574 5.28613 16.5076 7.69362 15.916 10.1722C15.2456 8.90921 14.7487 7.22002 14.3623 5.64923H9.25931V12.0034C9.25931 14.3083 8.21033 16.0133 6.15968 16.0133C4.10903 16.0133 2.93385 14.3083 2.93385 12.0034L2.95752 5.64923H0.015625V12.0034C0.015625 13.8584 0.615045 15.5397 1.71135 16.7395C2.83921 17.9787 4.37719 18.626 6.15968 18.626C9.70888 18.626 12.1854 15.9028 12.1854 12.0034V7.73309C12.5561 9.13812 13.4395 11.8377 15.1273 14.2057L13.5499 23.1963H16.5391L17.5802 16.8263C17.9194 17.1105 18.2822 17.363 18.6686 17.592C19.6624 18.2234 20.8139 18.5786 21.997 18.6181C21.997 18.6181 22.1784 18.626 22.273 18.626C25.9326 18.626 28.843 15.7923 28.843 11.964C28.843 8.13565 25.9248 5.28613 22.2651 5.28613Z" fill="#95DF00"/>
                <path d="M76.3001 11.3397C78.5795 10.4477 79.9991 7.95342 79.9991 5.64855H77.073C77.0809 7.96132 75.2274 9.39002 73.1058 9.39002V0.683594H70.1797V18.2306H73.1058V12.8079H73.863L77.9564 18.2306H81.616L76.3001 11.3397Z" fill="#95DF00"/>
                <path d="M64.5319 7.00682V5.64915H61.6453V18.2233H64.5714V13.2979C64.5714 10.2668 64.8474 8.08822 68.9093 8.37238V5.49918C67.0164 5.3571 65.5415 5.75177 64.5319 7.00682Z" fill="#95DF00"/>
                <path d="M44.2165 5.64941L42.0949 14.4427L39.8313 5.64941H36.1086L33.8371 14.4427L31.7234 5.64941H28.7578L32.0073 18.2315H35.5249L37.9699 9.29617L40.3913 18.2315H43.9089L47.3477 5.64941H44.2165Z" fill="#95DF00"/>
                <path d="M53.7887 16.0133C51.7065 16.0133 50.1449 14.3714 50.1449 11.964C50.1449 9.55647 51.7144 7.92253 53.7887 7.92253C55.8394 7.92253 57.4326 9.56436 57.4326 11.964C57.4326 14.3636 55.8394 16.0133 53.7887 16.0133ZM53.7887 5.28613C50.1054 5.28613 47.2188 8.14355 47.2188 11.964C47.2188 15.7844 50.1054 18.6181 53.7887 18.6181C57.4483 18.6181 60.3587 15.7844 60.3587 11.964C60.3587 8.14355 57.4562 5.28613 53.7887 5.28613Z" fill="#95DF00"/>
                </g>
                <defs>
                <clipPath id="clip0_816_51980">
                <rect width="82" height="24" fill="white"/>
                </clipPath>
                </defs>
             </svg>
          </div>
          <div>
            <span className='text-white text-[14px] md:text-[16px] mr-[5px]'>Job seeker?</span> 
            <a href='#' className='text-[#95df00] underline text-[14px] md:text-[16px]'>Join as a freelancer</a>
          </div>
       </div>  
       <div className='flex flex-col md:flex-row px-[1rem] md:pl-[32px] w-full relative pt-[25px]'>
        <div className='flex flex-col justify-between'>
          <div>
            <h1 className='leading-[1.04em] tracking-[.96px] text-[32px] md:text-[46px] font-bold mb-[24px] md:mb-[48px]'>Let's connect</h1>
            <p className='text-[20px] leading-[1.5em] tracking-[.4px] font-normal mb-[48px]'>We’d love to answer any questions — just send us your contact info, and we’ll schedule a call.</p>
            <div className='md:flex hidden just-center items-center mb-[24px]'>
             <svg
                className="w-5 h-5 text-white border-white border-2 p-[2px] rounded-full"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
                 >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className='ml-[10px]'>View our award-winning platform in action</span>
            </div>
            <div className=' just-center items-center mb-[24px] md:flex hidden'>
            <svg
                className="w-5 h-5 text-white border-white border-2 p-[2px] rounded-full"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
                 >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className='ml-[10px]'>Discuss your talent strategy and pricing information</span>
            </div>
            <div className=' just-center items-center mb-[24px] md:flex hidden'>
            <svg
                className="w-5 h-5 text-white border-white border-2 p-[2px] rounded-full"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
                 >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className='ml-[10px]'>Learn why 30% of the Fortune 500 choose Upwork</span>
            </div>
          </div>

            <div className='flex flex-col'>
                <h1 className='text-[12px] font-500 leading-[1.2em] tracking-[1.2px] uppercase mb-[8px] md:mb-0'>Trusted by</h1>
                <div  className='flex justify-between flex-row  md:items-center items-start'>
                <svg  className='w-[86px] md:w-[100] md:h-[61px] h-[45px]' viewBox="0 0 117 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M100.887 28.4635V29.918V29.9762H98.9673V33.5835C98.9673 34.0489 99.0255 34.398 99.2 34.5726C99.3746 34.8053 99.6655 34.8635 100.015 34.8635C100.073 34.8635 100.247 34.8635 100.364 34.8053C100.538 34.7471 100.655 34.6889 100.771 34.6307L100.829 34.5726V36.0271C100.713 36.0853 100.538 36.1435 100.247 36.2016C100.131 36.2016 100 36.2162 99.8691 36.2307C99.7382 36.2453 99.6073 36.2598 99.491 36.2598C97.92 36.2598 97.1637 35.4453 97.1637 33.8162V29.918H94.4291V36.0853H92.5673V29.918H91.2873V28.4635H92.5673V27.4162C92.5673 26.8925 92.6837 26.4271 92.9164 26.0198C93.1491 25.5544 93.4982 25.2635 93.9055 25.0307C94.3128 24.798 94.8364 24.6816 95.36 24.6816C95.8255 24.6816 96.1746 24.7398 96.4073 24.798H96.4655V26.3689L96.4073 26.3107C96.1164 26.1944 95.8255 26.1362 95.5928 26.1362C95.1855 26.1362 94.8946 26.2525 94.72 26.4853C94.5455 26.718 94.4291 27.0089 94.4291 27.4744V28.4635H97.1637V26.718H97.2219L98.9673 26.1944H99.0255V28.4635H100.887ZM53.2364 25.5544C53.4109 25.3798 53.7019 25.2635 53.9928 25.2635C54.3419 25.2635 54.5746 25.3798 54.8073 25.5544C54.9819 25.7871 55.0982 26.0198 55.0982 26.3107C55.0982 26.6016 54.9819 26.8926 54.7491 27.0671C54.5746 27.2416 54.2837 27.358 53.9928 27.358C53.7019 27.358 53.4691 27.2416 53.2364 27.0671C53.0037 26.8344 52.8873 26.6016 52.8873 26.3107C52.8873 26.0198 53.0037 25.7289 53.2364 25.5544ZM45.9637 32.1289L45.44 33.5253H45.3819C45.3237 33.2344 45.1491 32.7107 44.9164 32.1289L42.1819 25.4962H39.5055V36.0853H41.2509V29.5689V28.1144C41.2509 27.9504 41.2325 27.805 41.2163 27.678C41.2039 27.5796 41.1928 27.4924 41.1928 27.4162H41.2509C41.2915 27.7001 41.3604 27.9275 41.4181 28.1181C41.4431 28.2008 41.4661 28.2766 41.4837 28.3471L44.7419 36.0853H45.9637L49.2219 28.2889C49.2434 28.2244 49.2649 28.1359 49.2894 28.0354L49.2894 28.0353C49.331 27.8641 49.3813 27.6577 49.4546 27.4744H49.5128C49.4546 28.2307 49.4546 28.9289 49.4546 29.3944V36.1435H51.3164V25.4962H48.7564L45.9637 32.1289ZM53.0619 28.4635H54.8655V36.0853H53.0619V28.4635ZM61.3819 28.4053C61.0328 28.3471 60.6837 28.2889 60.3346 28.2889C59.52 28.2889 58.7637 28.4635 58.1237 28.8126C57.4837 29.1616 56.96 29.6853 56.6691 30.2671C56.32 30.9071 56.1455 31.6053 56.1455 32.478C56.1455 33.2344 56.32 33.8744 56.6109 34.4562C56.96 35.038 57.3673 35.5035 58.0073 35.7944C58.5891 36.0853 59.2873 36.2598 60.0437 36.2598C60.9164 36.2598 61.6728 36.0853 62.2546 35.7362V34.1071L62.1964 34.1653C61.9055 34.3398 61.6146 34.5144 61.3237 34.6307C60.9746 34.7471 60.6837 34.8053 60.4509 34.8053C59.6946 34.8053 59.1709 34.5725 58.7637 34.1653C58.3564 33.6998 58.1237 33.118 58.1237 32.3616C58.1237 31.6053 58.3564 30.9653 58.7637 30.4998C59.1709 30.0344 59.7528 29.8016 60.4509 29.8016C61.0328 29.8016 61.6728 29.9762 62.1964 30.3835L62.2546 30.4416V28.6962C62.0219 28.5798 61.7309 28.4635 61.3819 28.4053ZM66.2109 28.7544C66.56 28.4635 66.9673 28.3471 67.4328 28.3471C67.7237 28.3471 67.9564 28.4053 68.0146 28.4635H68.0728V30.2089L68.0146 30.1507C67.9564 30.0926 67.7819 30.0344 67.6073 29.9762C67.52 29.9762 67.4328 29.9616 67.3455 29.9471C67.2582 29.9325 67.1709 29.918 67.0837 29.918C66.6182 29.918 66.2109 30.1507 65.92 30.558C65.5709 30.9653 65.4546 31.5471 65.4546 32.1871V36.0853H63.7091V28.4635H65.5128V29.8016C65.6873 29.3362 65.92 28.9871 66.2109 28.7544ZM72.3782 28.2889C71.0982 28.2889 70.0509 28.638 69.3528 29.3944C68.5964 30.1507 68.2473 31.1398 68.2473 32.3616C68.2473 33.5253 68.5964 34.5144 69.2946 35.2126C69.9928 35.9107 70.9819 36.2598 72.1455 36.2598C73.4255 36.2598 74.4146 35.9107 75.1128 35.1544C75.8691 34.398 76.2182 33.4089 76.2182 32.1871C76.2182 30.9653 75.8691 30.0344 75.1709 29.3362C74.5891 28.638 73.6 28.2889 72.3782 28.2889ZM72.32 34.8053C72.96 34.8053 73.4837 34.5725 73.8328 34.1653C74.24 33.6998 74.3564 33.0598 74.4146 32.3616C74.4146 31.5471 74.1819 30.9071 73.8328 30.4998C73.4837 30.0926 72.96 29.8598 72.32 29.8598C71.6219 29.8598 71.1564 30.0344 70.7491 30.4998C70.3419 30.9071 70.1673 31.5471 70.1673 32.3616C70.1673 33.118 70.3419 33.758 70.7491 34.1653C71.0982 34.5725 71.68 34.8053 72.32 34.8053ZM80.3491 31.6053C79.7673 31.3726 79.4182 31.198 79.2437 31.0235C79.1273 30.9071 79.011 30.6744 79.011 30.4416C79.011 30.2089 79.0691 30.0344 79.3019 29.918C79.5346 29.8016 79.7673 29.6853 80.1164 29.6853C80.4073 29.6853 80.7564 29.7435 81.0473 29.8016C81.2822 29.8486 81.5171 29.9715 81.7213 30.0783C81.7701 30.1038 81.817 30.1283 81.8619 30.1507L81.92 30.2089V28.5216H81.8619C81.7752 28.5 81.6886 28.4703 81.5959 28.4385C81.4397 28.3849 81.2664 28.3254 81.0473 28.2889C80.6982 28.2307 80.4073 28.2307 80.1746 28.2307C79.3019 28.2307 78.6037 28.4635 78.0219 28.8707C77.44 29.278 77.2073 29.8598 77.2073 30.558C77.2073 30.9071 77.2655 31.2562 77.3819 31.4889C77.4982 31.7216 77.6728 32.0126 77.9637 32.1871C78.1964 32.3616 78.6037 32.5944 79.0691 32.8271C79.2049 32.8853 79.3341 32.937 79.4526 32.9844L79.4527 32.9844L79.4528 32.9844C79.6898 33.0792 79.8837 33.1568 80 33.2344C80.1746 33.3507 80.3491 33.4671 80.4073 33.5835C80.4655 33.6998 80.5237 33.8162 80.5237 33.9907C80.5237 34.5144 80.1164 34.7471 79.3019 34.7471C79.011 34.7471 78.6619 34.6889 78.3128 34.5725C77.9055 34.4562 77.5564 34.2816 77.2655 34.0489L77.2073 33.9907V35.7362H77.2655C77.5564 35.8525 77.8473 35.9689 78.2546 36.0271C78.314 36.0356 78.3722 36.0441 78.4291 36.0524C78.7625 36.101 79.0534 36.1435 79.3019 36.1435C80.2328 36.1435 80.9891 35.9107 81.571 35.5035C82.1528 35.038 82.4437 34.5144 82.4437 33.758C82.4437 33.2344 82.3273 32.7689 81.9782 32.478C81.8871 32.4259 81.7901 32.368 81.6867 32.3063L81.6864 32.3061C81.3277 32.0918 80.891 31.831 80.3491 31.6053ZM84.2473 29.3944C84.9455 28.638 85.9928 28.2889 87.2728 28.2889C88.4946 28.2889 89.4255 28.638 90.0655 29.3362C90.7637 30.0344 91.1128 30.9653 91.1128 32.1871C91.1128 33.4089 90.7637 34.398 90.0073 35.1544C89.3091 35.9107 88.32 36.2598 87.04 36.2598C85.8764 36.2598 84.8873 35.9107 84.1891 35.2126C83.491 34.5144 83.1419 33.5253 83.1419 32.3616C83.1419 31.1398 83.5491 30.1507 84.2473 29.3944ZM88.7273 34.1653C88.3782 34.5725 87.8546 34.8053 87.2146 34.8053C86.5164 34.8053 85.9928 34.5725 85.6437 34.1653C85.2364 33.758 85.0619 33.118 85.0619 32.3616C85.0619 31.5471 85.2364 30.9071 85.6437 30.4998C86.0509 30.0344 86.5164 29.8598 87.2146 29.8598C87.8546 29.8598 88.3782 30.0926 88.7273 30.4998C89.0764 30.9071 89.3091 31.5471 89.3091 32.3616C89.2509 33.0598 89.0764 33.6998 88.7273 34.1653Z" fill="white"/>
                <path d="M16 21.9473H24.6109V30.3254H16V21.9473Z" fill="#F25022"/>
                <path d="M25.5419 21.9473H34.1528V30.3254H25.5419V21.9473Z" fill="#7FBA00"/>
                <path d="M16 31.1982H24.6109V39.6346H16V31.1982Z" fill="#00A4EF"/>
                <path d="M25.5419 31.1982H34.1528V39.6346H25.5419V31.1982Z" fill="#FFB900"/>
                </svg>
                <svg className='md:h-[61px] md:w-[76px] w-[56px] h-[45px]' viewBox="0 0 76 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M57.8408 27.8336C57.8408 27.3595 58.1371 26.8262 58.9075 26.8262C59.5593 26.8262 59.9149 27.3002 59.9742 27.8336C59.9742 28.3669 59.5593 28.841 58.9075 28.841C58.1371 28.841 57.8408 28.3077 57.8408 27.8336ZM59.6779 27.8336C59.6779 27.3595 59.3816 27.0632 58.9075 27.0632C58.4334 27.0632 58.0779 27.3595 58.0779 27.8336C58.0779 28.2484 58.4334 28.604 58.9075 28.604C59.3816 28.604 59.6779 28.3077 59.6779 27.8336ZM58.6704 27.9521H58.8482L59.0853 28.3669H59.3816L59.0853 27.8928C59.263 27.8928 59.3816 27.7743 59.3816 27.5965C59.3816 27.3595 59.263 27.241 59.026 27.241H58.3742V28.3669H58.6704V27.9521ZM59.1445 27.5965C59.1445 27.478 59.026 27.478 58.9075 27.478V27.4188H58.6705V27.7151H58.9667C59.0853 27.7151 59.1445 27.7151 59.1445 27.5965Z" fill="white"/>
                    <path d="M25.3667 29.1367H26.6111V34.7663H25.426L25.3667 29.1367Z" fill="white"/>
                    <path d="M25.3667 26.8848H26.6111V28.6625H25.3667V26.8848Z" fill="white"/>
                    <path d="M53.4556 26.8262H54.7V34.7077H53.5148L53.4556 26.8262Z" fill="white"/>
                    <path d="M55.5297 26.8262H56.7741V34.7077H55.5889L55.5297 26.8262Z" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.063 29.1367H22.8185C23.9445 29.1367 24.3 30.0256 24.2408 30.4997C24.2408 31.033 24.0037 31.5071 23.7074 31.6256C24.2408 31.8626 24.6556 32.5145 24.5963 33.1071C24.5371 34.5886 23.0556 34.7071 22.463 34.7071H16.063V29.1367ZM22.3445 33.8775C22.8185 33.8775 23.2334 33.5219 23.2334 33.0478C23.2334 32.5738 22.8185 32.1589 22.3445 32.1589H17.2482V33.8182L22.3445 33.8775ZM22.9371 30.6775C22.9371 31.0923 22.5815 31.3886 22.1667 31.3886L17.2482 31.3293V29.9663H22.1667C22.5815 29.9663 22.9371 30.2626 22.9371 30.6775Z" fill="white"/>
                    <path d="M46.9371 29.1374C46.463 29.1374 45.4556 29.3744 45.3964 30.3226C45.3964 31.1522 45.8704 31.567 46.1075 31.6263C45.7519 31.8041 45.3964 32.4559 45.3964 32.9892C45.3964 33.5818 45.6334 34.7078 47.5297 34.7078H52.7445V33.8781H47.7075C47.2334 33.8781 46.8186 33.5226 46.8186 33.0485C46.8186 32.5744 47.2334 32.1596 47.7075 32.1596H52.5075V31.33H47.589C47.1741 31.33 46.8186 31.0337 46.8186 30.6189C46.8186 30.2041 47.1741 29.9078 47.589 29.9078H52.7445V29.0781L46.9371 29.1374Z" fill="white"/>
                    <path d="M43.2038 30.8559H44.4482C44.4482 29.4929 43.7963 29.0781 42.0778 29.0781H38.7001C37.9297 29.0781 36.626 29.4337 36.626 30.5596C36.626 31.6855 37.1001 32.1596 38.463 32.1596H42.4926C42.9667 32.1596 43.4408 32.4559 43.4408 32.9892C43.4408 33.5226 43.1445 33.8781 42.3149 33.8781H39.1149C38.7001 33.8781 37.8704 33.8189 37.8704 32.9892H36.626C36.626 33.7003 36.7445 34.767 38.6408 34.767H42.6112C43.3815 34.767 44.6852 34.4115 44.6852 32.9892C44.6852 31.567 43.5001 31.3892 42.7889 31.3892H38.7593C38.1075 31.3892 37.8704 30.9744 37.8704 30.6781C37.8704 30.3818 38.1075 29.967 38.7593 29.967H42.2556C42.8482 29.967 43.2038 30.2041 43.2038 30.8559Z" fill="white"/>
                    <path d="M34.4926 30.8559H35.7371C35.7371 29.4929 35.0852 29.0781 33.3667 29.0781H29.9889C29.2186 29.0781 27.9149 29.4337 27.9149 30.5596C27.9149 31.6855 28.3889 32.1596 29.7519 32.1596H33.7815C34.2556 32.1596 34.7297 32.4559 34.7297 32.9892C34.7297 33.5226 34.4334 33.8781 33.6037 33.8781H30.4037C29.9889 33.8781 29.1593 33.8189 29.1593 32.9892H27.8556C27.8556 33.7003 27.9741 34.767 29.8704 34.767H33.8408C34.6111 34.767 35.9149 34.4115 35.9149 32.9892C35.9149 31.567 34.7297 31.3892 34.0186 31.3892H29.9889C29.3371 31.3892 29.1 30.9744 29.1 30.6781C29.1 30.3818 29.3371 29.967 29.9889 29.967H33.4852C34.1371 29.967 34.4926 30.2041 34.4926 30.8559Z" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M53.1592 44.7815C55.0555 44.7815 54.2852 43.063 53.9296 42.4704C53.3963 41.6408 50.7889 37.0186 50.7889 37.0186H22.4629C22.4629 37.0186 19.8555 41.5815 19.3222 42.4704C18.9666 43.063 18.2555 44.7223 20.1518 44.7223L53.1592 44.7815Z" fill="#EA2227"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M27.8353 26.9335H45.0205C45.0205 26.9335 40.6946 19.2298 39.6872 17.5112C38.739 15.9112 38.2057 15.1409 36.3687 15.1409C34.5316 15.0816 34.0576 15.852 33.0501 17.5112C32.1613 19.1112 27.8353 26.9335 27.8353 26.9335Z" fill="#EA2227"/>
                </svg>
                    <img src="/Images/AirbnbPricing.jpg" alt="Airbnb" className='md:w-[100px] w-[82px] h-[45px] md:h-auto'/>
                    <img src="/Images/GlassdoorPricing.jpg" alt="Airbnb" className='md:flex hidden w-[100px] h-auto'/>
                    <h1 className='uppercase text-[12px] font-500 leading-[1.2em] tracking-[1.2px] md:flex hidden'>And more</h1>
                    <span></span>
                    <span></span>
                </div>
            </div>

        </div>

        <div className=" md:px-4 sm:px-6 lg:px-8">
      <div className="w-full md:w-[592px] font-normal py-[10px] md:mx-auto md:bg-[#1c1c1c] md:rounded-[40px] shadow-md overflow-hidden">
        <div className="md:p-8">
          <h1 className=" text-[20px] md:text-2xl font-bold text-white mb-[24px] md:mb-[40px]">
            Tell us about yourself
          </h1>
          
          <form onSubmit={handleSubmit}>
            <div className="w-full mb-[15px] justify-between flex flex-col md:flex-row gap-[20px] ">
              <div className='w-full'>
                <input
                  type="text"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 text-[13px] border-2 bg-[#1c1c1c] text-white border-[#313131] rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                  required
                />
              </div>
              
              <div className='w-full'>
                <input
                  type="text"
                  placeholder="Last tname"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 text-[13px] border-2 bg-[#1c1c1c] text-white border-[#313131] rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                  required
                />
                 </div>
            </div>             
              
              <div className="space-y-4">
                <div>
                  <input
                    type="email"
                    placeholder='Work email address'
                    value={formData.workEmail}
                    onChange={handleChange}
                    className="w-full px-4 text-[13px] py-2 border-2 bg-[#1c1c1c] text-white border-[#313131] rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                    required
                  />
                </div>
                
                <div>
                  <div className="flex items-center mb-1">
                 
                  </div>
                  
                  <div className="flex border-2 border-[#313131] outline-gray-300 rounded-md">
      <div className="relative w-1/3 mr-2">
        <button
          type="button"
          className="w-full flex items-center justify-between py-2 px-3 rounded-l-md bg-[#1c1c1c] text-white text-sm"
          onClick={() => setShowCountryDropdown(!showCountryDropdown)}
        >
          <div className="flex items-center">
            {phoneCountryCode && (
              <span className="mr-2">
                {countryOptions.find(c => c.code === phoneCountryCode)?.flag}
              </span>
            )}
            <span>{phoneCountryCode}</span>
          </div>
          <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        
        {showCountryDropdown && (
          <div className="absolute z-10 mt-1 left-[-3] w-[450px] bg-[#1c1c1c] text-white rounded-md shadow-lg max-h-60 overflow-auto">
            <div className="sticky top-0 p-2 bg-[#1c1c1c]">
              <input
                type="text"
                placeholder="Search for country"
                className="w-full px-4 py-2 bg-[#2c2c2c] text-white rounded border border-gray-600 focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
            </div>
            <div className="py-1">
              {filteredCountries.map((country) => (
                <div
                  key={country.code}
                  className={`flex items-center px-3 py-2 cursor-pointer hover:bg-[#2c2c2c] ${
                    phoneCountryCode === country.code ? 'bg-[#2c2c2c]' : ''
                  }`}
                  onClick={() => {
                    setPhoneCountryCode(country.code);
                    setShowCountryDropdown(false);
                  }}
                >
                  <span className="mr-2">{country.flag}</span>
                  <span className="flex-1">
                    {country.name} {country.code}
                  </span>
                  {phoneCountryCode === country.code && (
                    <span className="text-gray-300">✓</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <input
        type="tel"
        name="phone"
        className="w-full px-4 text-[13px] py-2 rounded-r-md bg-[#1c1c1c] text-white focus:outline-none"
        placeholder="Phone number"
      />
    </div>
                </div>
              </div>
            
            <div className="space-y-4 mb-4">
              <div>
                <input
                  type="text"
                  placeholder="Job title"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  className="w-full px-4 text-[13px] py-2 border-2 bg-[#1c1c1c] mt-[15px] border-[#313131] rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                  required
                />
              </div>
              
              <div>
                <input
                  type="text"
                  placeholder='Company name'
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full px-4 text-[13px] py-2 border-2 bg-[#1c1c1c] border-[#313131] rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
                  required
                />
              </div>
            </div>
            
            <div className="mb-4"> 
              <div className="relative mt-1">
                <button
                  type="button"
                  className="relative w-full bg-[#1c1c1c] text-[#a5a5a5] border-2 border-[#313131] rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-300 sm:text-sm"
                  onClick={() => setShowCompanySizeDropdown(!showCompanySizeDropdown)}
                >
                  <span className="block truncate">{formData.companySize}</span>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </button>
                
                {showCompanySizeDropdown && (
                  <ul className="absolute z-10 mt-3 w-[240px] shadow-sm shadow-gray-200 text-[#a5a5a5] rounded-[8px] bg-[#1c1c1c] max-h-60  py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                    {companySizeOptions.map((size, index) => (
                      <li
                        key={index}
                        className={`cursor-pointer select-none relative py-2 pl-4 pr-9 text-[#a5a5a5] ${
                          formData.companySize === size ? '' : ''
                        }`}
                        
                        onClick={() => {
                          setFormData(prev => ({ ...prev, companySize: size }));
                          setShowCompanySizeDropdown(false);
                        }}
                      >
                        <div className="flex items-center">
                            
                          <span className="font-normal block truncate">
                            {size}
                          </span>
                        </div>
                        {formData.companySize === size && (
                          <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-[#535353]">
                            ✓
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            
            <button
              type="submit"
              className="w-[150px] bg-[#95DF00] text-[#181818] py-[14px] px-[48px] rounded-[15px]  hover:scale-95 font-medium"
            >
              Submit
            </button>
          </form>
          
          <div className="mt-6 text-xs text-gray-500">
            <p className="mb-[48px] text-[14px] leading-[1.2em] tracking-[.42px] text-[#d9d9d9]">
              We’ll use your personal information to contact you, schedule a call, and communicate about Enterprise Suite and Upwork services. The use of your information is governed by Upwork’s<span className='text-[14px] underline text-[#95DF00]'> Privacy Policy.</span></p>
            <p className=' text-[14px] leading-[1.2em] tracking-[.42px] text-[#d9d9d9]'>
              For technical issues and general inquiries, please contact <span className='text-[14px] text-[#95DF00] underline'>Upwork support.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
       </div>
       <div className="pt-5 pb-[1.5rem] flex flex-col md:flex-row justify-between items-start md:items-center text-sm text-[#A5A5A5] pl-[1rem] md:px-[2rem]">
          <p className="mb-3 md:mb-0 text-[#d9d9d9]">© 2015 - 2025 Upwork® Global Inc.</p>
          <div className="flex flex-wrap items-start flex-col md:flex-row md:justify-center gap-4 text-white md:ml-[30px]">
            <a href="#" className="text-[#d9d9d9] hover:text-[#108a00]">Privacy Policy</a>
            <a href="#" className="text-[#d9d9d9] hover:text-[#108a00]">Terms of Service</a>
            <a href="#" className="text-[#d9d9d9] hover:text-[#108a00]">Cookie Settings</a>
          </div>
        </div>
    </div>
  )
}

