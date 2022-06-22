import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { addGame } from 'src/app/store/game.action';

@Component({
  selector: 'app-game-creation',
  templateUrl: './game-creation.component.html',
  styleUrls: ['./game-creation.component.scss']
})
export class GameCreationComponent implements OnInit {
  submitButtonFocused: boolean = false;

  constructor(
    private store: Store,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  createGame = new FormGroup({
    gameName: new FormControl('', Validators.required),
    bundle: new FormControl('', [Validators.required, Validators.pattern(/^([A-Za-z]{1}[A-Za-z\d_]*\.)+[A-Za-z][A-Za-z\d_]*$/)]),
    owner: new FormControl('', [Validators.required, Validators.email]),
    icon: new FormControl(null, Validators.required),
    id: new FormControl(new Date().getTime() + '-' + Math.round(Math.random() * 1000)) // id ayarladim 
  })

  create() {
    this.createGame.markAllAsTouched();
    if (this.createGame.valid) {
      this.store.dispatch(addGame({ game: this.createGame.value }));
      this.toastr.success('game created successfully !');
      this.createGame.reset();
      this.router.navigateByUrl('/');
    }
  }

  onImageSelect(event: any) {
    console.log(event.target.files);
    if ((event.target.files as File[]).length > 0) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.createGame.get('icon')?.setValue(reader.result as any);
      };
    }
  }
  

  // error kontrolleri icin 
  hasError(controlName: string, error = 'required') {
    return this.createGame.get(controlName)?.touched && this.createGame.get(controlName)?.hasError(error);
  }
}
