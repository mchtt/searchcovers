import React from "react";
import Artist from '../artist/artist'
import {
  Button,
  FormControl,
  Input,
  InputLabel
} from '@material-ui/core'

const Form = ({ search, value, onChange, artist, datas }) => {

  return (
    <div className="form grid-container">
      <form className="grid-item" onSubmit={e => { search(e, value) }}>
        <FormControl className='input'>
          <InputLabel htmlFor='my-input' />
          <Input
            id='my-input'
            aria-describedby='my-helper-text'
            value={value}
            onChange={e => onChange(e)}
          />
          <Button type='submit' className='btn' variant='contained'>
            <i className='material-icons'>add_circle</i>
          </Button>
        </FormControl>
      </form>
      <Artist className="grid-item" artist={artist} />
    </div>
  );
};

export default Form;
