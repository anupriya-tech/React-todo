function Cards(Detail) {
  return (
    {
      <div>
      
      Detail.map((student)=>{
        return (<div className="Card.css">
          <img src={student.images} />
          Name: {student.name}
          Age: {student.age}
          college: {props.college}
          </div>
        );
      }
      </div>
    );
  }


  
export default Cards;
