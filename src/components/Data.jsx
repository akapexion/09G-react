import React from 'react'

const Data = () => {

    const employees = [
        {
            emp_id: 1,
            emp_name: "Asad Khan",
            emp_email: "asad@gmail.com"
        },
        {
            emp_id: 2,
            emp_name: "Hyder Ali",
            emp_email: "hyder@gmail.com"
        },
        {
            emp_id: 3,
            emp_name: "Saifullah",
            emp_email: "saifullah@gmail.com"
        },
        {
            emp_id: 4,
            emp_name: "Fazail",
            emp_email: "fazail@gmail.com"
        },
        {
            emp_id: 5,
            emp_name: "Zain",
            emp_email: "zain@gmail.com"
        },
        {
            emp_id: 6,
            emp_name: "Samran",
            emp_email: "samran@gmail.com"
        },
        {
            emp_id: 7,
            emp_name: "Zeeshan",
            emp_email: "zeeshan@gmail.com"
        }
    ]

    console.log(employees);

    return (
        <>
            <div className='container grid grid-cols-3 place-items-center'>

                {employees.map((e) => (
                    <div className='border border-gray-300 shadow-md p-3'>

                        <p>EMP ID : {e.emp_id}</p>
                        <p>{e.emp_name}</p>
                        <p>{e.emp_email}</p>

                    </div>
                ))}


            </div>
        </>
    )
}

export default Data
