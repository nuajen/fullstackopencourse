const Header = (props) => {
    return (
        <div>
    <h1>The course is {props.course}</h1>
        </div>
    )
}

const Content = (props) => {
    return (
        <div>
            <p> The first part is <b> "{props.part1}" </b> with {props.exercises1} exercises.</p>
            <p> The second part is <b> "{props.part2}" </b> with  {props.exercises2} exercises.</p>
            <p> The third part is <b>"{props.part3}" </b> with  {props.exercises3} exercises.</p>
        </div>
    )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

    const Total = exercises1+exercises2+exercises3

  return (
      <div>
        <Header course={course} />
          <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3}/>
          <p> Total number of {Total} </p>
      </div>

  )
}

export default App
