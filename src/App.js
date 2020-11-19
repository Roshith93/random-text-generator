import React, { useState } from 'react'
import data from './data'
import Button from './components/Button'

function App() {
  const [inpVal, setInpVal] = useState(0)
  const [textData, setTextData] = useState([])
  const handleChange = (e) => {
    const { value } = e.target
    setInpVal(value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    let amount = parseInt(inpVal)
    if(inpVal <= 0) {
      amount = 1
    }
     if(inpVal > 8){
      amount = 8
    }
    setTextData(data.slice(0,amount))
  }

  return (
    <section className='section-center'>
      <h2>Lorem ipsum Alternativr</h2>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>Paragraph</label>
        <input
          type='number'
          id='amount'
          className='lorem-form'
          onChange={handleChange}
          name='amount'
        />
        <Button />
      </form>
      <article className='lorem-text'>
        <p>{textData}</p>
      </article>
    </section>
  )
}

export default App
