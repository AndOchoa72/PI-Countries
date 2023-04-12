import style from './ActivForm.module.css';
import { useState } from 'react';
import axios from 'axios';

const ActivForm = () => {

  const [form, setForm] = useState({
    name: "",
    description: "",
    difficulty: "",
    duration: "",
    season: "",
  });

  const [errs, setErrs] = useState({
    name: "",
    description: "",
    difficulty: "",
    duration: "",
    season: "",
  });

  const chgHndlr = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    validate({...form, [property]: value});
    setForm({...form, [property]: value});
  };

  const [dur, setDur] = useState({
    durhr: "",
    durmin: ""
  });

  const durHndlr = (event) => {
    const property = event.target.name;
    const value = event.target.value;
//    validate({...form, [property]: value});
    setDur({...dur, [property]: value});
    setForm({...form, duration: dur.durhr + (dur.durmin/60)});
  };
  
  const validate = (newform) => {
    // eslint-disable-next-line
    //const regx = new RegExp("/^([A-Za-z])[A-Za-z]{3}", "gi");

    if(newform.name === "") {
      setErrs({...errs, name: 'Empty Name.'});
      console.log('Vacio true');
    } else {console.log('Name no vacio.');
        if(newform.name.length < 4) {
        setErrs({...errs, name: 'Short Name.'})
        console.log('Name corto.');
      } else {
        console.log('Name Ok.');
        setErrs({...errs, name: ''});
      }
    }

    if(newform.description.length !== 0) {
      setErrs({...errs, description: ''})
    } else {
      setErrs({...errs, description:'Empty description.'});    
    }

    if(newform.difficulty.length === 0) {
      setErrs({...errs, difficulty: 'Empty difficulty.'});
    } else {
      if(isNaN(newform.difficulty.value)) {
        setErrs({...errs, difficulty: 'Difficulty must be a Number.'});
      } 
    }
  };

  const submitHndlr = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3001/activities', form)
         .then(res => alert(res))
         .catch(err=>alert(err));
  }

  return (
    <form
      className={style.anActivFrorm}
      onSubmit={submitHndlr}>
      <h1>This is the ActivForm view</h1>

        <div>
          <label >Name: </label>
          <input type="text"
            value={form.name}
            onChange={chgHndlr}
            name="name"/>
          <span>{errs.name}</span>
        </div>

        <div>
          <label >Description: </label>
          <input type="text"
            value={form.description}
            onChange={chgHndlr}
            name="description"/>
          <span>{errs.description}</span>
        </div>

        <div style={{display:'flex',
          flexDirection:'column',
          alignItems:'center'}}>
        <div style={{display:'grid',
              gridTemplateColumns: '1fr 1fr 1fr'
            }}>
          <div style={{display:'grid',
              gridTemplateColumns: '1fr'
            }}> 
          <label htmlFor="diffVE">Very Easy</label>
            <input type="radio"
              id="diffVE"
              name="difficulty"
              onChange={chgHndlr}
              value="1" 
              checked />
            <label htmlFor="diffE">Easy</label>
            <input type="radio"
              id="diffE"
              name="difficulty"
              onChange={chgHndlr}
              value="2" />
            <label htmlFor="diffM">Medium</label>
            <input type="radio"
              id="diffM"
              name="difficulty"
              onChange={chgHndlr}
              value="3" />
            <label htmlFor="diffH">Hard</label>
            <input type="radio"
              id="diffH"
              name="difficulty"
              onChange={chgHndlr}
              value="4" />
            <label htmlFor="diffVH">Very Hard</label>
            <input type="radio"
              id="diffVH"
              name="difficulty"
              onChange={chgHndlr}
              value="5" />
          </div>

          <div  style={{display:'grid',
              gridTemplateColumns: '1fr'
            }}>
            <div>
            <label >Duration: </label>
            </div>
            <div style={{display:'flex',
              flexDirection: 'column',
              alignItems: 'center'}}>
            <label>Hours:</label>
            <input style={{width: '2.5em'}}
              type="number"
              value={form.durhr}
              onChange={durHndlr}
              min={0} max={99}
              name="durhr"/>
            </div>
            <div style={{display:'flex',
              flexDirection: 'column',
              alignItems: 'center'}}>
            <label>Minutes:</label>
            <input style={{width: '2.5em'}}
              type="number"
              value={form.durmin}
              onChange={durHndlr}
              min={0} max={59}
              name="durmin"/>
            </div>
          </div>

          <div  style={{display:'grid',
              gridTemplateColumns: '1fr'
            }}>
            <label htmlFor="summer">Summer</label>
            <input type="radio"
              id="summer"
              name="season"
              onChange={chgHndlr}
              value="1"
              checked />
            <label htmlFor="autumn">Autumn</label>
            <input type="radio"
              id="autumn"
              name="season"
              onChange={chgHndlr}
              value="2" />
            <label htmlFor="winter">Winter</label>
            <input type="radio"
              id="winter"
              name="season"
              onChange={chgHndlr}
              value="3" />
            <label htmlFor="spring">Spring</label>
            <input type="radio"
              id="spring"
              name="season"
              onChange={chgHndlr}
              value="4" />
          </div>
        </div>
        </div>
        <button type="submit">SUBMIT</button>
    </form>
  )
};

export default ActivForm;
