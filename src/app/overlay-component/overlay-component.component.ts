import { Component, OnInit } from "@angular/core";
import { LoginServiceService } from "../login-service.service";

@Component({
  selector: "app-overlay-component",
  templateUrl: "./overlay-component.component.html",
  styleUrls: ["./overlay-component.component.scss"]
})
export class OverlayComponentComponent implements OnInit {
  constructor(public loginService: LoginServiceService) {}

  ngOnInit(): void {}

  onLoginClick() {
    this.loginService.shouldDisplayLogin = false;
    this.loginService.isLoggedIn = true;
  }
  onCancelClick() {
    this.loginService.shouldDisplayLogin = false;
  }
}
