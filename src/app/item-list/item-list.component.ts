import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: any[] = [
    {
      "id": 1,
      "first_name": "Anet",
      "last_name": "Doe",
      "email": "adoe0@comcast.net",
      "gender": "Female",
      "avatar": "https://robohash.org/sintessequaerat.png?size=50x50&set=set1",
      "domain": "Sales",
      "available": false
    },
    {
      "id": 2,
      "first_name": "Honoria",
      "last_name": "Caughte",
      "email": "hcaughte1@google.com.br",
      "gender": "Female",
      "avatar": "https://robohash.org/temporibusporrolaboriosam.png?size=50x50&set=set1",
      "domain": "Finance",
      "available": true           
    },
    {
      "id": 3,
      "first_name": "Wiley",
      "last_name": "Boarder",
      "email": "wboarder2@xing.com",
      "gender": "Male",
      "avatar": "https://robohash.org/laboriosamdolorepossimus.png?size=50x50&set=set1",
      "domain": "Marketing",
      "available": false
    },
    {
      "id": 4,
      "first_name": "Brett",
      "last_name": "Ivetts",
      "email": "bivetts3@netlog.com",
      "gender": "Agender",
      "avatar": "https://robohash.org/ullamsuntet.png?size=50x50&set=set1",
      "domain": "Finance",
      "available": true
    },
    {
      "id": 5,
      "first_name": "Horst",
      "last_name": "Grastye",
      "email": "hgrastye4@dmoz.org",
      "gender": "Male",
      "avatar": "https://robohash.org/utquirepudiandae.png?size=50x50&set=set1",
      "domain": "Finance",
      "available": false
    },
    {
      "id": 6,
      "first_name": "Monique",
      "last_name": "Wilbud",
      "email": "mwilbud5@state.gov",
      "gender": "Female",
      "avatar": "https://robohash.org/maximequiomnis.png?size=50x50&set=set1",
      "domain": "IT",
      "available": true
    },
    {
      "id": 7,
      "first_name": "Kalindi",
      "last_name": "Vinson",
      "email": "kvinson6@g.co",
      "gender": "Female",
      "avatar": "https://robohash.org/occaecatinihilquos.png?size=50x50&set=set1",
      "domain": "Management",
      "available": true
    },
    {
      "id": 8,
      "first_name": "Janos",
      "last_name": "Le Noire",
      "email": "jlenoire7@sakura.ne.jp",
      "gender": "Male",
      "avatar": "https://robohash.org/praesentiumquasicorporis.png?size=50x50&set=set1",
      "domain": "Management",
      "available": true
    },
    {
      "id": 9,
      "first_name": "Corella",
      "last_name": "Coniff",
      "email": "cconiff8@guardian.co.uk",
      "gender": "Bigender",
      "avatar": "https://robohash.org/nihilexcepturiomnis.png?size=50x50&set=set1",
      "domain": "UI Designing",
      "available": false
    },
    {
      "id": 10,
      "first_name": "Cecilia",
      "last_name": "Waldocke",
      "email": "cwaldocke9@gmpg.org",
      "gender": "Female",
      "avatar": "https://robohash.org/commodiestvoluptatem.png?size=50x50&set=set1",
      "domain": "Management",
      "available": true
    },
    {
      "id": 11,
      "first_name": "Suellen",
      "last_name": "Bretton",
      "email": "sbrettona@mapquest.com",
      "gender": "Female",
      "avatar": "https://robohash.org/cupiditatemaioresaut.png?size=50x50&set=set1",
      "domain": "Sales",
      "available": false
    },
    {
      "id": 12,
      "first_name": "Deloris",
      "last_name": "Evered",
      "email": "deveredb@ovh.net",
      "gender": "Female",
      "avatar": "https://robohash.org/blanditiiscumqueimpedit.png?size=50x50&set=set1",
      "domain": "UI Designing",
      "available": false
    },
    {
      "id": 13,
      "first_name": "Candice",
      "last_name": "Harbar",
      "email": "charbarc@home.pl",
      "gender": "Female",
      "avatar": "https://robohash.org/autarchitectotenetur.png?size=50x50&set=set1",
      "domain": "Sales",
      "available": true
    },
    {
      "id": 14,
      "first_name": "John",
      "last_name": "Fine",
      "email": "jfined@facebook.com",
      "gender": "Male",
      "avatar": "https://robohash.org/etvoluptatemoccaecati.png?size=50x50&set=set1",
      "domain": "UI Designing",
      "available": true
    },
    {
      "id": 15,
      "first_name": "Gonzalo",
      "last_name": "Tilliard",
      "email": "gtilliarde@marketwatch.com",
      "gender": "Agender",
      "avatar": "https://robohash.org/voluptatemfacilisodit.png?size=50x50&set=set1",
      "domain": "Sales",
      "available": false
    },
    {
      "id": 16,
      "first_name": "Hertha",
      "last_name": "Sterrick",
      "email": "hsterrickf@nationalgeographic.com",
      "gender": "Female",
      "avatar": "https://robohash.org/rerumoptiorepudiandae.png?size=50x50&set=set1",
      "domain": "Marketing",
      "available": true
    },
    {
      "id": 17,
      "first_name": "Benjamin",
      "last_name": "Challiner",
      "email": "bchallinerg@nydailynews.com",
      "gender": "Male",
      "avatar": "https://robohash.org/architectoomnisquia.png?size=50x50&set=set1",
      "domain": "Marketing",
      "available": false
    },
    {
      "id": 18,
      "first_name": "Lockwood",
      "last_name": "Wermerling",
      "email": "lwermerlingh@imgur.com",
      "gender": "Male",
      "avatar": "https://robohash.org/cumquenoncommodi.png?size=50x50&set=set1",
      "domain": "Sales",
      "available": false
    },
    {
      "id": 19,
      "first_name": "Baillie",
      "last_name": "Mulqueeny",
      "email": "bmulqueenyi@wikispaces.com",
      "gender": "Male",
      "avatar": "https://robohash.org/dolorumvelitquam.png?size=50x50&set=set1",
      "domain": "Business Development",
      "available": false
    },
    {
      "id": 20,
      "first_name": "Quintus",
      "last_name": "Gibbieson",
      "email": "qgibbiesonj@symantec.com",
      "gender": "Male",
      "avatar": "https://robohash.org/delectusconsectetursed.png?size=50x50&set=set1",
      "domain": "Management",
      "available": true
    },
  ];
  
  selectedItem: any = null;

  constructor() { }

  ngOnInit(): void {
  }

  editItem(item: any) {
    // Set the selected item for editing
    this.selectedItem = { ...item }; // Creating a copy to prevent direct manipulation
  }
  
   // Method to save the changes made to the item
   saveChanges() {
    // Add validation if required
    if (this.selectedItem) {
      const index = this.items.findIndex(item => item.id === this.selectedItem.id);
      if (index !== -1) {
        // Update the item in the items array
        this.items[index] = { ...this.selectedItem }; // Creating a copy to prevent direct manipulation
        this.selectedItem = null; // Reset selected item after editing
      } else {
        console.error('Item not found in the items array');
      }
    } else {
      console.error('No item selected for editing');
    }
  }

  addItem(newItem: any) {
    newItem.id = this.items.length + 1; // Generate unique ID
    this.items.push(newItem);
  }
  deleteItem(id: number) {
    const index = this.items.findIndex(item => item.id === id);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

}
