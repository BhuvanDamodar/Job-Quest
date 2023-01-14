import { Injectable } from "@angular/core";
import { Recruiter } from "./Recruiter";

@Injectable({
    providedIn:'root'
})
export class RecruiterStorage{
    recruiterList:Array<Recruiter>=[]

      addRecruiter(recruiter:Recruiter){
        this.recruiterList.push(recruiter)
      }

    }