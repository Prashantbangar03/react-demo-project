import React from 'react'
import projects from '../projects'
import DashboardComponent from '../components/DashboardComponent'

const DashboardContainer =()=>{
  return(
    <div className="col-4">
      {projects.map(project => <DashboardComponent props={project}/>)}
    </div>
  );
};

export default DashboardContainer