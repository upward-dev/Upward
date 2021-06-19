import { useRouter } from 'next/dist/client/router';
import {Project} from '../../../components/Project';
import {projectService} from '../../../services/projects';

interface ProjectI {
  title:string;
  description:string;
  url:string;
  from: Date;
  to: Date;
}
export default function EditProject({projectData}) {
  const router = useRouter();
  const {id} = router.query;
  const updateProject = (data:ProjectI) => {
    console.log('triggering update');
    data = Object.assign(data,{...data, UPDATE_PROJECT:true,id:Number(id)});
    return projectService.update(data)
      .then(() => console.log("project updated"))
      .catch(err => console.log(err))
  }
  return (
    <div className="d-flex flex-column min-vh-100 w-100 justify-content-center align-items-center">
      <div className="w-50">
        <h4 className="d-md-flex flex-column w-100 m-4">Edit your Project</h4>
        <Project isHidden={false} id={Number(id)} updateProject={updateProject} initialData={projectData}/>
      </div>
   </div>
  )
}

export async function getServerSideProps({ params }) {
  const projectData = await projectService.get(params.id);

  return {
      props: { projectData } // this gets passed to the Project component to render
      // data when editing a particular project
  }
}