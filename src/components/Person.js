import Email from './Email'
import Pet from './Pet'

const Person = (props) => {
    return (
      <div class="personCont">
        <h2>My name is {props.name} and I am {props.age} year(s) old.</h2>
        <Pet petName = {props.petName} />
        <Email email ={props.email} />
      </div>
    )
  }

export default Person;