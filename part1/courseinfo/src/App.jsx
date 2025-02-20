import Header from "./Header"
import Content from "./Content"
import Total from "./Total"

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const total = exercises1 + exercises2 + exercises3

  return (
    <>
      <Header course={course} />
      <Content part={part1} ex={exercises1} />
      <Content part={part2} ex={exercises2} />
      <Content part={part3} ex={exercises3} />
      <Total total={total}/>
    </>
  )
}

export default App