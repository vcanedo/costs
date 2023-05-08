import { useState } from 'react';

import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton';

import styles from '../project/ProjectForm.module.css'

function ServiceForm() {

  function submit() {

  }

  function handleChange() {
    
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Service name"
        name="name"
        placeholder="Insert service name"
        handleOnChange={handleChange}
      />
    </form>
  )
}


export default ServiceForm;
