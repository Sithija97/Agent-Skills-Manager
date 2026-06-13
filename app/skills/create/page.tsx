const CreateSkill = () => {
  async function createSkill(formData: FormData) {
    "use server";
    console.log({
      name: formData.get("name"),
      description: formData.get("description"),
      category: formData.get("category"),
    });
  }

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-semibold mb-6">Create Skill</h1>
      <form action={createSkill} className="flex flex-col gap-4">
        <label className="form-control">
          <div className="label">
            <span className="label-text">Skill Name</span>
          </div>
          <input
            type="text"
            name="name"
            placeholder="e.g. React"
            className="input input-bordered w-full"
          />
        </label>

        <label className="form-control">
          <div className="label">
            <span className="label-text">Description</span>
          </div>
          <textarea
            name="description"
            placeholder="Describe the skill..."
            className="textarea textarea-bordered w-full"
            rows={4}
          />
        </label>

        <label className="form-control">
          <div className="label">
            <span className="label-text">Category</span>
          </div>
          <input
            type="text"
            name="category"
            placeholder="e.g. Frontend"
            className="input input-bordered w-full"
          />
        </label>

        <button type="submit" className="btn btn-primary mt-2">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateSkill;
