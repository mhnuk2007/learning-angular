import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {

  objectKeys = Object.keys;


  // Signals to store param values
  queryParamsData = signal<{[key: string]: any}>({});
  routeParamId = signal<number|null>(null);

  constructor(public route: ActivatedRoute) {}

  ngOnInit() {
    // Subscribe to query params
    this.route.queryParams.subscribe(params => {
      this.queryParamsData.set(params);
      console.log('Query Params:', params);
    });

    // Subscribe to route params
    this.route.params.subscribe(params => {
      this.routeParamId.set(params['id'] ? +params['id'] : null);
      console.log('Route Params:', params);
    });
  }

}
