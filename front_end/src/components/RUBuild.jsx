import React from 'react'
import { useState} from 'react'

function RUBuild() {
  const [workspace,setWorkspace] = useState("/root/DU-L1_Profiling_Automation/RU_Binary/L3-Daily/L3-Daily_2211_Pre_Intg_100mhz")
  const [duMacAddress,setDuMacAddress] = useState("3c:fd:fe:d0:28:18")
  const [branch,setBranch] = useState("DU-L1_Src_22.11R_Pre_Intg")
  const [ruEthPort,setRuEthPort] = useState("enp103s0f0")
  const [inputProfiling,setInputProfiling] = useState("/root/DU-L1_Profiling_Automation/input_profiling")
  const [scriptPath,setScriptPath] =useState("/root/DU-L1_Profiling_Automation/profiling_automation_script/RU_Compilation_script_3CC_1RU")
  const [reboot,setReboot]=useState("no")
  const [ruIpAddress,setRuIpAddress]=useState("root")
  const [ruPassword,setRuPassword]=useState("root123")


  return (
    <div> 
      <div className='d-flex flex-column'>
          <div className='d-flex flex-row justify-content-start'>
            <label className=''>Workspace</label>
             <input type='text' onChange={(e)=>setWorkspace(e.target.value)} value={workspace} size={100}/>
          </div>
        <div className='d-flex flex-row justify-content-start'>
          <lable>DU Mac Address</lable><input type='text' onChange={(e)=>setDuMacAddress(e.target.value)} value={duMacAddress} size={100}/>
        </div>
        <div className='d-flex flex-row justify-content-start'>
          <lable>Branch/Tag</lable><input type='text' onChange={(e)=>setBranch(e.target.value)} value={branch} size={100}/>
        </div>
        <div className='d-flex flex-row justify-content-start'>
          <lable>RU Eth Port</lable><input type='text' onChange={(e)=>setRuEthPort(e.target.value)} value={ruEthPort} size={100}/>
        </div>
        <div className='d-flex flex-row justify-content-start'>
          <lable>Input Path</lable><input type='text' onChange={(e)=>setInputProfiling(e.target.value)} value={inputProfiling} size={100}/>
        </div>
        <div className='d-flex flex-row justify-content-start'>
          <lable>Script Path</lable><input type='text' onChange={(e)=>setScriptPath(e.target.value)} value={scriptPath} size={100}/>
        </div>

        <div className='d-flex flex-row justify-content-start'>
          <lable>Reboot Require</lable><input type='text' onChange={(e)=>setReboot(e.target.value)} value={reboot} size={100}/>
        </div>
        <div className='d-flex flex-row justify-content-start'>
          <lable>IP Address</lable><input type='text' onChange={(e)=>setRuIpAddress(e.target.value)} value={ruIpAddress} size={100}/>
        </div>
        <div className='d-flex flex-row justify-content-start'>
          <lable>RU Password</lable><input type='text' onChange={(e)=>setRuPassword(e.target.value)} value={ruPassword} size={100}/>
        </div>
      
      <div><button className="btn btn-success">Build</button></div>
      
      </div>
      
    </div>
  )
}

export default RUBuild
