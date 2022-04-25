import React from 'react'

export default function CollegeTable(props) {
    const college = props.colleges;
    const headerTable = <tr>
    <th>
    Name 
</th>
<th>
    Country 
</th>
</tr>
    const collegeList = 
     props.Colleges.map(ele =>
        <tr>
            <td>
                {ele.name}
            </td>
            <td>
                {ele.country}
            </td>
        </tr>
    )
    
  return (
      <>
      {!college?<p>you havent search anything yet!</p>:{headerTable ,collegeList}}
    {/* <div>
        <tr>
        <th>
        Name 
    </th>
    <th>
        Country 
    </th>
    </tr> 
        {collegeList}
    </div> */}
    </>
  )
}
