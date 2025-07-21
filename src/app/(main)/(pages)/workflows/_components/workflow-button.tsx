"use client"
import  react from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useModal } from '@/providers/modal-provider'
import CustomModal from "@/components/global/custom-modal";
import Workflowform from "@/components/forms/workflow-form";
type Props={
  title:string,
  subheading:string,
}

const WorkflowButton=({title,subheading}:Props)=>{
    const {setOpen,setClose}=useModal();
    // const {credits}=useBilling();
    const handleClick=()=>{
        setOpen(
            <CustomModal
              title="Create a Workflow Automation"
              subheading="Workflows are a powerfull that help you automate tasks."
            >
              <Workflowform />
            </CustomModal>
          )
    }
    return(
        <Button
        size={'icon'}
    
              onClick={handleClick}
   
      >
        <Plus />
        
      </Button>
    )
}

export default WorkflowButton;