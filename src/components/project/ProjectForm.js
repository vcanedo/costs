

function ProjectForm() {
  return (
    <form>
      <div>
        <input type="text" placeholder="Insert project name"/>
      </div>
      <div>
        <input type="number" placeholder="Insert total budget"/>
      </div>
      <div>
        <select name="category_id">
          <option disabled selected>
            Select Category
          </option>
        </select>
      </div>
      <div>
        <input type="submit" value="Create Project" />
      </div>
    </form>
  )

}

export default ProjectForm;
