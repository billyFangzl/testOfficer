import { Component, OnInit } from '@angular/core';
import { TestappService } from './testapp.service';
import {Officer} from './officer';


@Component({
  selector: 'app-officer',
  templateUrl: './officer.component.html',
  styleUrls: ['./officer.component.css']
})
export class OfficerComponent implements OnInit {


  lofficer:string="";
  fofficer:string="";
  iofficer:string="";
  search_result:Officer[];
  constructor(private tservice:TestappService) { }

  searchOfficer(){
    this.tservice.getOfficers().subscribe((data:Officer[])=>{
      this.search_result = data;
    });
  }
  searchby(){
    this.tservice.searchOfficer(this.lofficer,this.fofficer,this.iofficer).subscribe((data:any)=>{
      this.search_result = data;
    });
  }
  ngOnInit() {
  }

}
