import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PhotoService {

  constructor() { }

  getImages(): any[] {
    // For now, we'll return a mock promise. You can replace this with an actual HTTP request or other logic.
    return [
      { source: '../../assets/images/Brandenburger_Tor_Selfie_With_Text.png', alt: 'Description 1', title: 'Title 1' },
      { source: '../../assets/images/MzDDFx6PsYJKP8KZl69Hqfe6Rsbu0Ktqig7_m1qPtjI-1537x2048.jpg', alt: 'Description 2', title: 'Title 2' },
      // ... more images
    ];
  }

  imagesBySubject = {
    'Berlin Zoo': [
      { image: 'Elephants_1.jpg', name: 'Elephant in high summer', price: '18€', travelType: 'Nature Spot' },
      { image: 'Pelicans.jpg', name: 'Big birds strutting about', price: '18€', travelType: 'Nature Spot' },
      { image: 'Panda_1.jpg', name: 'Seeing this panda was pretty great', price: '18€', travelType: 'Nature Spot' },
      { image: 'Panda_Eating.jpg', name: 'Panda eating some bamboo', price: '18€', travelType: 'Nature Spot' },
    ],
    'Samurai Museum': [
      { image: 'Red_mask.jpg', name: 'Scary looking mask', price: '18€', travelType: 'Nature Spot' },
      { image: 'Leaf_Helmet.jpg', name: 'Cool looking design', price: '18€', travelType: 'Nature Spot' },
      { image: 'Holographic_Theater.jpg', name: 'They played these theater plays every 30 minutes', price: '18€', travelType: 'Nature Spot' },
      { image: 'Different_Types_Of_Masks.jpg', name: 'All kinds of samurai masks', price: '18€', travelType: 'Nature Spot' },
    ],
    'War Museum': [
      { image: 'War_Museum_Cover.jpg', name: 'Entrance board towards the war museum', price: 'Free', travelType: 'Cultural' },
      { image: 'German_WW2_Aircraft .jpg', name: 'Airplane used during the Second World War', price: 'Free', travelType: 'Cultural' },
      { image: 'Hindenburg_Statue.jpg', name: 'Replica of the Hindenburg statue that used to be next to the freedom monument', price: 'Free', travelType: 'Cultural' },
    ],
    'Mitte': [
      { image: 'Golden_Dome_Synagogue.jpg', name: 'Golden Dome Synagogue: Majestic Beauty.', price: 'Free', travelType: 'Cultural' },
      { image: 'Restaurant_Leading_To_Musea.jpg', name: 'Restaurant gateway to diverse museums; dine, then explore artistry.', price: 'Free', travelType: 'Cultural' },
      { image: 'Old_Postal_Building.jpg', name: 'Historic Mitte postal office: architectural marvel, timeless elegance captured.', price: 'Free', travelType: 'Cultural' },
      { image: 'Rotes_Rathaus.jpg', name: 'Rotes Rathaus: stunning architecture; starting point for Swastika-era Berlin tour.', price: 'Free', travelType: 'Cultural' },
    ],
    'Run in the Woods': [
      { image: 'History_Is_Everywhere.jpg', name: 'Even during a random run in the forest I found this interesting piece of history.', price: 'Free', travelType: 'History' },
      { image: 'History_Is_Everywhere_II.jpg', name: 'The second plaque explaining information about the people killed at the Berlin Wall.', price: 'Free', travelType: 'History' },
      { image: 'Deer_Information_Board.jpg', name: 'Information board about deers and buck. These boards where everywhere.', price: 'Free', travelType: 'Nature' },
      { image: 'Logs_Cut_Down.jpg', name: 'Loggers have been putting in the work.', price: 'Free', travelType: 'Nature' },
      { image: 'Tree_Over_Green_River.jpg', name: "Tree's falls, casting ripples on emerald river's serene canvas.", price: 'Free', travelType: 'Nature' },
      { image: 'Cool_Looking_River.jpg', name: "I was flabbergasted by the beauty of this forest.", price: 'Free', travelType: 'Nature' },
    ],
    'Eastern Gallery': [
      { image: 'Famous_Art.jpg', name: 'This is the most famous artwork in the Eastern Gallery', price: 'Free', travelType: 'Art' },
    ],
    'Museum Island': [
      { image: 'Arabian_Carpet.jpg', name: 'This is the most famous artwork in the Eastern Gallery', price: 'Free', travelType: 'Art' },
      { image: 'Berliner_Dom.jpg', name: 'One of the most prominent historical landmarks in the city and is the largest church in Berlin.', price: 'Free', travelType: 'Art' },
      { image: 'Egyptian_Art.jpg', name: 'Pharaoh Seti I before Osiris, wall painting from the Tomb of Seti I at the Valley of the Kings.', price: 'Free', travelType: 'Art' },
    ],
    'Spandau': [
      { image: 'Memorial_Stone.jpg', name: 'Memorial stone for fallen soldiers.', price: 'Free', travelType: 'Art' },
      { image: 'House_Wall_Painting.jpg', name: 'Jewish builder studies a picture; a moment of reflection amidst urban canvas.', price: 'Free', travelType: 'Art' },
      { image: 'Ukraine_And_Equality.jpg', name: "Ukrainian and LGBTQ flags: Germany's vibrant change towards peace and diversity.", price: 'Free', travelType: 'Art' },
    ],
    'Thai weekend market': [
      { image: 'Road_Towards_The_Thai_Market.jpg', name: 'Came accross this Thai Market while walking around', price: 'Free', travelType: 'Food' },
    ],
    // ... more subjects
};

  getImagesBySubject(): any{
    return this.imagesBySubject;
  }
}
