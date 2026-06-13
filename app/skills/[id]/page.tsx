import { mockAISkills } from "@/app/data";
import { notFound } from "next/navigation";

const SkillDetails = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const { id } = await params;
  const skill = mockAISkills.find((skill) => skill.id === id);

  if (!skill) {
    return notFound();
  }

  return (
    <article className="max-w-md mx-auto p-4 flex flex-col gap-4 ">
      <h1>{skill.name}</h1>
      <p>{skill.description}</p>
      <p>Created: {skill.created.toDateString()}</p>
      <p>Updated: {skill.updated.toDateString()}</p>
    </article>
  );
};

export default SkillDetails;
