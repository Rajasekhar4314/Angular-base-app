import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: "./servers.component.html",
  styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = "No server was created"
  serverName: String = 'Gcp mc'
  username: String = '';
  accountCreated: boolean = false;
  accountName: String = ''
  accountStatus: String = ''


  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)

    this.accountStatus = Math.random() > 0.5 ? 'online' : 'offline'
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus = "Server is created"
  }

  onUpdateServerName(event : any){
    // console.log("ent :", event)
    this.serverName = event.target.value;
  }

  //  Assignment
  resetUserName(){
    this.username = ''
  }

  createAccount(){
    this.accountCreated = true;

    // this.accountName = "Account created created successfully, name is "+ this.accountName
  }

  getAccountStatus(){
    return this.accountStatus;
  }

  getColor(){
    return this.accountStatus === "online" ? "green" : "red";
  }

}
