import React,{ReactChild, useState} from 'react'

interface AccordianProps {
  title: string;
  children: React.ReactNode[];
}

export default function Accordian(props:AccordianProps) {
  console.log(props);
  return (
    <div>
      <h1>{props.title}</h1>
      <div>
        {props.children}
      </div>
      
    </div>
    
  )
  /*
  const [isHidden,setIsHidden] = useState<boolean>(true);
  return (
    <section className="d-flex flex-column w-sm-100 w-50 justify-content-start align-items-center">
        <h2>Create Your Profile</h2>
        <p>Profile section would go here....</p>
        <div className="w-100" id="accordion" role="tablist" aria-multiselectable="true">
          {
            components.map((Comp,idx) => (
              <div className="card">
              <div className="card-header" role="tab" id="headingOne">
                <h5 className="mb-0">
                  <a className="collapsed" onClick={() => setIsHidden(!isHidden)} data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    {componentDetails[idx].componentTitle}
                  </a>
                </h5>
              </div>
              <div id="collapseOne" className={`collapse ${isHidden && "show"}`} role="tabpanel" aria-labelledby="headingOne">
                <div className="card-block">
                  <Comp key={idx} {...componentDetails[idx]}/>
                </div>
              </div>
            </div>

            ))
          }
      </div>
      </section>
  )
  */
}
