import React, {useState} from 'react';

const MyAccordion = ({question, answer}) => {
    const [show, setShow] = useState(false);
    return (
        <>
           {/* <h1 className="flex flex-col items-center justify-center">{question}</h1>
           <p className="flex flex-col items-center justify-center">{answer}</p> */}
           <div className="flex justify-center m-5">
                 {/* className="grid-cols-[200px_minmax(900px,_1fr)_100px] */}
              <h3 className="flex flex-col items-center justify-center bg-orange-500 h-14 w-2/5">{question} </h3>
              <div onClick={ ()=> setShow(!show)} className="flex justify-end m-3 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
                     {show? "➖":"➕"}
              </div>
              {/* <span className="flex flex-row px-9">+</span> */}
           </div>
           {
               show && <p className="flex flex-col items-center justify-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">{answer}</p>
           }
        </>
    )
};

export default MyAccordion;
