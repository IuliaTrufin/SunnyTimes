import { Component, OnInit } from "@angular/core";
import { LoginServiceService } from "src/app/login-service.service";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.scss"]
})
export class SidenavComponent implements OnInit {
  shouldDisplayModal: boolean = true;
  constructor(public loginService: LoginServiceService) {}

  ngOnInit(): void {}
  onLoginClick() {
    this.loginService.shouldDisplayLogin = true;
  }
}
