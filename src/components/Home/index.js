import {v4} from 'uuid'

import {useState} from 'react'

import './index.css'

const Home = () => {
  const [user, setUser] = useState('')
  const [list, setList] = useState([])

  // add user  in  list
  const addUserInput = e => {
    e.preventDefault()
    const inputLength = user.length
    const data = {
      id: v4(),
      word: user.toLocaleUpperCase(),
      length: inputLength,
    }
    setList([...list, data])
    setUser('')
  }

  // display empty list View
  const emptyListView = () => (
    <>
      <div className="empty-view">
        <img
          src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
          alt="no user inputs"
        />
      </div>
    </>
  )

  // display list of items
  const displayListView = () => (
    <>
      <ul>
        {list.map(eachItem => (
          <li key={eachItem.id}>
            <div>
              <p className="character">
                {eachItem.word} : {eachItem.length}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </>
  )

  // condition to display views
  const condition = list.length === 0

  return (
    <>
      <div className="app-page">
        {/* Character container */}
        <div className="list-container">
          <h1 className="main-heading">Count the characters like a boss...</h1>
          {/* condition to display views */}
          {condition ? emptyListView() : displayListView()}
        </div>
        {/* Input Container */}
        <div className="user-container">
          <h1 className="main-heading-2">Character Counter</h1>
          {/* input form */}
          <form onSubmit={addUserInput}>
            <input
              type="text"
              value={user}
              placeholder="Enter the Characters here"
              onChange={e => setUser(e.target.value)}
            />
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Home
