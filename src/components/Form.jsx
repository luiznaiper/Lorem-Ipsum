import { useState } from 'react'
import data from '../data'
import { nanoid } from 'nanoid'

const Form = () => {
  const [count, setCount] = useState(1)
  const [text, setText] = useState([])

  const handleCount = (e) => {
    setCount(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let amount = parseInt(count)
    setText(data.slice(0, amount))
  }

  return (
    <section className="section-center">
      <h4>try my loren ipsum app</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          min="1"
          step="1"
          max="8"
          value={count}
          onChange={handleCount}
        />
        <button className="btn" type="submit">
          Generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item) => {
          return <p key={nanoid()}>{item}</p>
        })}
      </article>
    </section>
  )
}

export default Form
