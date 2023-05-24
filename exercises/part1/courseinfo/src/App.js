const Header = function(props){
  return (
    <>
    <h1>{props.course.name}</h1>
    </>
  )
}

const Part = (props) => {
  return(
    <>
      <p>{props.part} {props.exercise}</p>
    </>
  )
}
function Content(props){
  console.log(props)
  return(
    <>
    <Part part={props.course.parts[0].name} exercise={props.course.parts[0].exercises}/>
    <Part part={props.course.parts[1].name} exercise={props.course.parts[1].exercises}/>
    <Part part={props.course.parts[2].name} exercise={props.course.parts[2].exercises}/>
    </>

  )
}

const Total = (props)=>{
  console.log(props)
  const e1 = props.course.parts[0].exercises
  const e2 = props.course.parts[1].exercises
  const e3 = props.course.parts[2].exercises
  return(
    <>
    <p>
     Number of exercises {e1+e2+e3}
    </p>
    </>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course}/>
    </div>
  )
}

export default App;
