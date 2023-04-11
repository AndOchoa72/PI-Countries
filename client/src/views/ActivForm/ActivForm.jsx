import style from './ActivForm.module.css';
import { useState } from 'react';
//import axios from 'axios';
var myerrs = {
  name: "",
  description: "",
  difficulty: "",
  duration: "",
  season: "",
};

var registro = [];

const ActivForm = () => {

  const [form, setForm] = useState({
    name: "",
    description: "",
    difficulty: 0,
    duration: 0,
    season: 0,
  });

  const [errs, setErrs] = useState({
    name: "",
    description: "",
    difficulty: "",
    duration: "",
    season: "",
  });

  const chgHndlrTxt = (event) => {
    const property = event.target.name;
    var value = event.target.value;
    registro.push(['Txt', property, value]);
    validate({...form, [property]: value});
    setForm({...form, [property]: value});
  };

  const chgHndlrInt = (event) => {
    const property = event.target.name;
    var value = Number(event.target.value);
    registro.push(['Int', property, value]);
    validate({...form, [property]: value});
    setForm({...form, [property]: value});
  };

  const fnGetHrs = (str) => {
    return Number.parseFloat(str.replace(':', '.'));
  };

  const chgHndlrTim = (event) => {
    const property = event.target.name;
    const valueT = event.target.value;
    const valueF = fnGetHrs(valueT);
    registro.push(['Tim', property, valueF]);
    validate({...form, [property]: valueF});
    setForm({...form, [property]: valueF});
  };

  const validate = (newform) => {
    // eslint-disable-next-line
    //const regx = new RegExp("/^([A-Za-z])[A-Za-z]{3}", "gi");
//    console.log(newform);

    // Analizo name
    if (newform.name === '') {
//      console.log('Name is Empty.');
//      console.log(myerrs);
//      console.log({...myerrs, name: 'Name is Empty.'});
      myerrs.name = 'Name is Empty.';
    } else if ( newform.name.length < 4){
//      console.log('Name too Short.');
      myerrs.name = 'Name too Short.';
    } else {
//      console.log('Name Ok.');
      myerrs.name = '';
    }

    // Analizo Description
//    console.log(newform);
    if (newform.description === '') {
//      console.log('Description is Empty.');
      myerrs.description = 'Description is Empty.';
    } else if (newform.description.length < 6) {
//      console.log('Description too Short.');
      myerrs.description = 'Description too Short.';
    } else {
//      console.log('Description Ok.');
      myerrs.description = '';
    }

    // Analizo Difficulty
    if(newform.difficulty < 1) {
//      console.log('Difficulty must be greater than 0.');
      myerrs.difficulty = 'Difficulty must be greater than 0.';
    } else if (newform.difficulty.value > 5) {
//      console.log('Difficulty must be lower than 6.');
      myerrs.difficulty = 'Difficulty must be lower than 6.';
    } else {
//      console.log('Difficulty Ok.');
      myerrs.difficulty = '';
    }

    // Analizo Season
    if(newform.season < 1) {
//      console.log('Season must be greater than 0.');
      myerrs.season = 'Season must be greater than 0.';
    } else if (newform.season.value > 4) {
//      console.log('Season must be lower than 5.');
      myerrs.season = 'Season must be lower than 5.';
    } else {
//      console.log('Season Ok.');
      myerrs.season = '';
    }

    // Analizo Duration
    if(newform.duration === 0) {
//      console.log('Duration must be greater than 0.');
      myerrs.duration = 'Duration must be greater than 0.';
    } else {
//      console.log('Duration Ok.');
      myerrs.duration = '';
    }

//    console.log(errs);
//    console.log(myerrs);
//    console.log({...errs, ...myerrs});
    setErrs    ({...errs, ...myerrs});
  };


  const submitHndlr = (event) => {
    event.preventDefault();
    console.log('Consologueando Resultado Form y Registro:');
    console.log(form);
    console.log(registro);
    registro = [];
    /*
    axios.post('http://localhost:3001/activities', form)
         .then(res => {
            console.log('Consol.Res');
            console.log(res);
            alert(res);
            })
         .catch(err=>{
          console.log('Consol.Err');
          console.log(err);
            alert(err);
            });
            */
  };

  return (
    <form
      className={style.anActivForm}
      onSubmit={submitHndlr}>
      <h1>This is the ActivForm view</h1>

        <div className={style.divName}>
          <label >Name: </label>
          <input type="text"
            value={form.name}
            onChange={chgHndlrTxt}
            name="name"/>
          <span>{errs.name}</span>
        </div>

        <div className={style.divDescri}>
          <label >Description: </label>
          <input type="text"
            value={form.description}
            onChange={chgHndlrTxt}
            name="description"/>
          <span>{errs.description}</span>
        </div>

            <div className={style.divDifficul}>
              <label htmlFor='difficulty'>Difficulty:</label>
              <select name = "difficulty" defaultValue = "0"
                onChange={chgHndlrInt} >
                <option hidden >Select Difficulty..</option>
                <option value = "1" >Very Easy</option>
                <option value = "2" >Easy</option>
                <option value = "3" >Medium</option>
                <option value = "4" >Hard</option>
                <option value = "5" >Very Hard</option>
              </select>
              <span>{errs.difficulty}</span>
            </div>

            <div className={style.divDuration}>
              <label htmlFor="duration">Duration:</label>
              <input type="time" name="duration" onChange={chgHndlrTim} />
              <span>{errs.duration}</span>
            </div>

            <div className={style.divSeason}>
              <label htmlFor='season'>Season:</label>
              <select name = "season" defaultValue = "0"
                onChange={chgHndlrInt} >
                <option hidden >Select Season...</option>
                <option value = "1" >Summer</option>
                <option value = "2" >Autumn</option>
                <option value = "3" >Winter</option>
                <option value = "4" >Spring</option>
              </select>
              <span>{errs.season}</span>
            </div>

        <button type="submit">SUBMIT</button>
    </form>
  )
};

/*  // todo: Codigo del Selector por Hr y Min:
             <!--label >Duration: </label>
              <label>Hrs:</label>
              <input style={{width: '2.5em'}}
                type="number"
                value={form.durhr}
                onChange={durHndlr}
                min={0} max={99}
                name="durhr"/>
              <label>Min:</label--> 
              <input style={{width: '2.5em'}}
                type="number"
                value={form.durmin}
                onChange={durHndlr}
                min={0} max={59}
                name="durmin"/>
*/

export default ActivForm;
