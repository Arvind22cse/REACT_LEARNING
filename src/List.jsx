import PropTypes from 'prop-types';
function List(props){
  const category=props.category;
   const itemlist=props.items;
   console.log(itemlist);
   //marks.sort((a,b)=>b.name.localeCompare(a.name));

  // marks.sort((a,b)=>a.name.localeCompare(b.name));
   //const HighCGPA=marks.filter(stud=>stud.CGPA>8.00)
   const listItems=itemlist.map(item=><li key={item.id}>
    {item.food} : &nbsp;
    <b>{item.rate}</b> 
  
   </li>)
    // const Marks=HighCGPA.map(stud=><li key={stud.rollno}>
    //     {stud.rollno} : &nbsp;
    //     {stud.name} : &nbsp;
    //      <b>{stud.CGPA}</b>
    //    </li>)

   return(
    <>

    <h2 className="list-category">{category}</h2>
   <ul className="list-items">{listItems}</ul>
    {/* <ul>{Marks}</ul> */}
    </>
   )
}
List.propTypes={
    category:PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id:PropTypes.number,
                                              food:PropTypes.string,
                                              rate:PropTypes.number
    })),

}
List.defaultProps={
  category:"NULL",
  items:[]
}
export default List;