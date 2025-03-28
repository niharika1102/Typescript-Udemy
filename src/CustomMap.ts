/// reference types="@types/google.maps"/>
import { User } from "./User";
import { Company } from "./Company";

const { AdvancedMarkerElement } = (await google.maps.importLibrary('marker')) as google.maps.MarkerLibrary;

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divId) as HTMLElement,
      {
        zoom: 5,
        center: { lat: 0, lng: 0 },
      }
    );
  }

    addUserMarker(user: User): void {
        new google.maps.marker.AdvancedMarkerElement({
            map: this.googleMap,
            position: {
                lat: user.location.lat,
                lng: user.location.lng,
            }
        })
    }
    
    addCompanyMarker(ucompany: Company): void {

    }
}
