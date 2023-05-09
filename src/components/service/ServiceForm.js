import { useState } from 'react';

import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton';

import styles from '../project/ProjectForm.module.css'

function ServiceForm({handleSubmit, btnText, projectData}) {

  function submit() {

  }

  function handleChange(e) {

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
      <Input
        type="number"
        text="Service cost"
        name="cost"
        placeholder="Insert total value"
        handleOnChange={handleChange}
      />
      <Input
        type="text"
        text="Service description"
        name="description"
        placeholder="Describe the service"
        handleOnChange={handleChange}
      />
      <SubmitButton text={btnText} />
    </form>
  )
}


export default ServiceForm;
