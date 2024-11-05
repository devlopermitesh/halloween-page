import React from 'react'
const filters=[
    {
        filterId:1,
        name:"all"

    },
    {
        filterId:2,
        name:"Bloodyy"
    },
    {
        filterId:3,
        name:"horror"
    },
    {
        filterId:4,
        name:"funny"
    }
]
const FilterHead = () => {
    const [Filter,setFilter]=React.useState<number>(1)
  return (
    <div className='w-full h-8 border-slate-500 border-solid border border-l-black border-r-black border-t-slate-800 -py-1 '>
        <ul className='flex justify-center items-center mx-auto '>
            {
                filters.map((filter:{filterId:number,name:string})=>(
                    <li key={filter.filterId} className={`mx-2 cursor-pointer text-orange-500 text-md md:text-lg lg:text-xl font-jaro ${(filter.filterId===Filter)?"underline":" font-inder"}`} onClick={()=>setFilter(filter.filterId)}>{filter.name}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default FilterHead