import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from './state/actionCreators'
import './App.css'
import skate from './images/skate.gif';

function App({
  // PROPS COME IN SEVERAL FLAVORS:
  // A- data from redux state (injected by STEP-8)
  formValues,
  friends,
  // spinnerOn,
  // B- callbacks to change state (action creators injected by STEP-9)
  changeInput,
  fetchAllFriends,
  postNewFriend,
  updateFriend,

  deleteFriend
  // C- props actually injected by the parent component
}) {
  const onChange = event => {
    changeInput({
      inputName: event.target.name,
      inputValue: event.target.value,
    })
  }
  const onSubmit = event => {
    event.preventDefault()
    postNewFriend({
      fname: formValues.fname,
      lname: formValues.lname,
      skater: false,
    })
  }
  const onSkaters = friend => event => {
    updateFriend({ ...friend, skater: true })
  }
  const onDelete = friend => event => {
    deleteFriend(friend)
  }

  useEffect(() => {

    fetchAllFriends()
  }, [])

  // if (spinnerOn) {
  //   return <div className="spinner">Please Wait</div>
  // }

  return (
    <div className="dtc v-mid cover ph3 ph4-m ph5-l no-repeat center right;background-size: cover" style={{backgroundImage: `url(${skate})`}}>
      {/* here we can add a new friend */}
      <h4>Add a new skater <span>🛹</span></h4>
      <form className='form'  onSubmit={onSubmit}>
        <label>First name
        <input
            value={formValues.fname}
            onChange={onChange}
            name='fname'
          />
        </label><br />

        <label>Last name
        <input
            value={formValues.lname}
            onChange={onChange}
            name='lname'
          />
        </label><br />

        <input class="f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-blue" type='submit' />
      </form>
      
      {/* list of current friends */}
      <h4>The Skaters</h4>
      {
        friends.map(fr => (
          <div
            key={fr.id}
          >
            {fr.fname} {fr.lname} is a{fr.skater ? ' PRO ' : ' NOT '}skater 
            <button className="f6 link dim br3 ph3 pv2 mb2 dib white bg-purple" onClick={onSkaters(fr)}>Mark Skater</button>
            <button className="f6 link dim br3 ph3 pv2 mb2 dib white bg-light-purple"onClick={onDelete(fr)}>Delete</button>
          </div>
        ))
      }
    </div>
  )
}

function mapStateToProps(state) {
  return {
    // what props do we want the component to get from state?
    formValues: state.formValues,
    friends: state.friends,
    // spinnerOn: state.spinnerOn,
    // anything you want and is derived from state
  }
}

// STEP-8 USE connect FROM react-redux TO WRAP OUR COMPONENT
export default connect(
  mapStateToProps,
  actionCreators, // STEP-9 BRING IN THE ACTION CREATORS
)(App)
