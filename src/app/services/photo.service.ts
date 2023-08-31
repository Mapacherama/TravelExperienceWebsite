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
      { image: 'Berlin_Zoo_Entrance.jpg', name: 'The entrance to the Zoo looked pretty incredible', price: '18€', travelType: 'Nature Spot' },
      { image: 'Elephants_1.jpg', name: 'Elephant in high summer', price: '18€', travelType: 'Nature Spot' },
      { image: 'Pelicans.jpg', name: 'Big birds strutting about', price: '18€', travelType: 'Nature Spot' },
      { image: 'Penguins.jpg', name: 'Big birds strutting about', price: '18€', travelType: 'Nature Spot' },
      { image: 'Penguin_Swimming.jpg', name: 'Big birds strutting about', price: '18€', travelType: 'Nature Spot' },
      { image: 'Squirrel_Monkey.jpg', name: 'The squirrel Monkey is highly vocal and have around 25-30 different types of call.', price: '18€', travelType: 'Nature Spot' },
      { image: 'Lions.jpg', name: 'The squirrel Monkey is highly vocal and have around 25-30 different types of call.', price: '18€', travelType: 'Nature Spot' },
      { image: 'Flamingos.jpg', name: 'The squirrel Monkey is highly vocal and have around 25-30 different types of call.', price: '18€', travelType: 'Nature Spot' },
      { image: 'Buffalos_Eating.jpg', name: 'The squirrel Monkey is highly vocal and have around 25-30 different types of call.', price: '18€', travelType: 'Nature Spot' },
      { image: 'Vulture.jpg', name: 'The squirrel Monkey is highly vocal and have around 25-30 different types of call.', price: '18€', travelType: 'Nature Spot' },
      { image: 'Giraffe.jpg', name: 'The squirrel Monkey is highly vocal and have around 25-30 different types of call.', price: '18€', travelType: 'Nature Spot' },
      { image: 'Monkeys_On_A_Rock.jpg', name: 'The squirrel Monkey is highly vocal and have around 25-30 different types of call.', price: '18€', travelType: 'Nature Spot' },
      { image: 'Monkeys_Eating.jpg', name: 'The squirrel Monkey is highly vocal and have around 25-30 different types of call.', price: '18€', travelType: 'Nature Spot' },
      { image: 'Hairy_Beasts.jpg', name: 'The squirrel Monkey is highly vocal and have around 25-30 different types of call.', price: '18€', travelType: 'Nature Spot' },
      { image: 'Panda_1.jpg', name: 'Seeing this panda was pretty great', price: '18€', travelType: 'Nature Spot' },
      { image: 'Panda_Eating.jpg', name: 'Panda eating some bamboo', price: '18€', travelType: 'Nature Spot' },
    ],
    'Samurai Museum': [
      { image: 'Kurosawa_Akira_Movies.jpg', name: 'Scary looking mask', price: '18€', travelType: 'Nature Spot' },
      { image: 'Red_mask.jpg', name: 'Scary looking mask', price: '18€', travelType: 'Nature Spot' },
      { image: 'Red_And_Gold_Mask.jpg', name: 'Scary looking mask', price: '18€', travelType: 'Nature Spot' },
      { image: 'Dragon_Blade.jpg', name: 'Scary looking mask', price: '18€', travelType: 'Nature Spot' },
      { image: 'Cloudy_Blade.jpg', name: 'Scary looking mask', price: '18€', travelType: 'Nature Spot' },
      { image: 'All_Kinds_Of_Samurai_Swords.jpg', name: 'Scary looking mask', price: '18€', travelType: 'Nature Spot' },
      { image: 'All_Kinds_Of_Samurai_Swords_Left.jpg', name: 'Scary looking mask', price: '18€', travelType: 'Nature Spot' },
      { image: 'All_Kinds_Of_Samurai_Swords_Right.jpg', name: 'Scary looking mask', price: '18€', travelType: 'Nature Spot' },
      { image: 'Leaf_Helmet.jpg', name: 'Cool looking design', price: '18€', travelType: 'Nature Spot' },
      { image: 'Brown_Mask.jpg', name: 'Cool looking design', price: '18€', travelType: 'Nature Spot' },
      { image: 'Dragon_Helmet.jpg', name: 'Cool looking design', price: '18€', travelType: 'Nature Spot' },
      { image: 'Gold_Helmet_And_Box.jpg', name: 'Cool looking design', price: '18€', travelType: 'Nature Spot' },
      { image: 'All_Kinds_Of_Habaki.jpg', name: 'Cool looking design', price: '18€', travelType: 'Nature Spot' },
      { image: 'More_Habaki.jpg', name: 'Cool looking design', price: '18€', travelType: 'Nature Spot' },
      { image: 'Mustache_Yellow_Armor.jpg', name: 'Cool looking design', price: '18€', travelType: 'Nature Spot' },
      { image: 'Another_Mustache_Set.jpg', name: 'Cool looking design', price: '18€', travelType: 'Nature Spot' },
      { image: 'Samurai_Armor_With_Box.jpg', name: 'Cool looking design', price: '18€', travelType: 'Nature Spot' },
      { image: 'Favourite_Samurai_Armor.jpg', name: 'Cool looking design', price: '18€', travelType: 'Nature Spot' },
      { image: 'Full_Armor.jpg', name: 'Cool looking design', price: '18€', travelType: 'Nature Spot' },
      { image: 'Entire_Samurai_Set.jpg', name: 'Cool looking design', price: '18€', travelType: 'Nature Spot' },
      { image: 'Blade_Zoom.jpg', name: 'This blade stood out to me.', price: '18€', travelType: 'Nature Spot' },
      { image: 'Another_Samurai_Set_Black_Yellow.jpg', name: 'Cool looking design', price: '18€', travelType: 'Nature Spot' },
      { image: 'Set_To_The_Right.jpg', name: 'Cool looking design', price: '18€', travelType: 'Nature Spot' },
      { image: 'Holographic_Theater.jpg', name: 'They played these theater plays every 30 minutes', price: '18€', travelType: 'Nature Spot' },
      { image: 'Different_Types_Of_Masks.jpg', name: 'All kinds of samurai masks', price: '18€', travelType: 'Nature Spot' },
      { image: 'Japanese_Soldiers.jpg', name: 'All kinds of samurai masks', price: '18€', travelType: 'Nature Spot' },
      { image: 'Incredible_View.jpg', name: 'All kinds of samurai masks', price: '18€', travelType: 'Nature Spot' },
      { image: 'Mulan_Dragon.jpg', name: 'This dragon reminded me of Mulan', price: '18€', travelType: 'Nature Spot' },
      { image: 'Japanese_Samurai_Art.jpg', name: 'This dragon reminded me of Mulan', price: '18€', travelType: 'Nature Spot' },
      { image: 'More_Japanese_Art.jpg', name: 'This dragon reminded me of Mulan', price: '18€', travelType: 'Nature Spot' },
      { image: 'Colored_Japanese_Art.jpg', name: 'This dragon reminded me of Mulan', price: '18€', travelType: 'Nature Spot' },
      { image: 'Japanese_Art_Book.jpg', name: 'This dragon reminded me of Mulan', price: '18€', travelType: 'Nature Spot' },
      { image: 'Japanese_Art_Book_II.jpg', name: 'This dragon reminded me of Mulan', price: '18€', travelType: 'Nature Spot' },
      { image: 'Japanese_Art_Book_III.jpg', name: 'This dragon reminded me of Mulan', price: '18€', travelType: 'Nature Spot' },
      { image: 'Screen_Of_War.jpg', name: 'This dragon reminded me of Mulan', price: '18€', travelType: 'Nature Spot' },
      { image: 'Screen_Of_Hunting.jpg', name: 'This dragon reminded me of Mulan', price: '18€', travelType: 'Nature Spot' },
      { image: 'Gold_Saddle.jpg', name: 'This dragon reminded me of Mulan', price: '18€', travelType: 'Nature Spot' },
      { image: 'Gold_Helmet.jpg', name: 'This dragon reminded me of Mulan', price: '18€', travelType: 'Nature Spot' },
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
      { image: 'St_Matthews_Church.jpg', name: "St. Matthäus-Kirche is a historic neo-Gothic church situated in Berlin's Kulturforum, renowned for its architectural beauty and its significance in the city's religious and cultural landscape.", price: 'Free', travelType: 'Cultural' },
      { image: 'Grophaus_Brau.jpg', name: "St. Matthäus-Kirche is a historic neo-Gothic church situated in Berlin's Kulturforum, renowned for its architectural beauty and its significance in the city's religious and cultural landscape.", price: 'Free', travelType: 'Cultural' },
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
      { image: 'East_Side_Gallery_Cover.jpg', name: 'This is the most famous artwork in the Eastern Gallery', price: 'Free', travelType: 'Art' },
      { image: 'Road_To_Eastern_Gallery.jpg', name: 'On my way to the gallery, and art is everywhere.', price: 'Free', travelType: 'Art' },
      { image: 'Famous_Art.jpg', name: 'This is the most famous artwork in the Eastern Gallery', price: 'Free', travelType: 'Art' },
      { image: 'Einstein_Art.jpg', name: 'This is the most famous artwork in the Eastern Gallery', price: 'Free', travelType: 'Art' },
      { image: 'Change_Life.jpg', name: 'This is the most famous artwork in the Eastern Gallery', price: 'Free', travelType: 'Art' },
      { image: 'Change_Life_Left_Text.jpg', name: 'This is the most famous artwork in the Eastern Gallery', price: 'Free', travelType: 'Art' },
      { image: 'Dragon_Art.jpg', name: 'This is the most famous artwork in the Eastern Gallery', price: 'Free', travelType: 'Art' },
      { image: 'Peace_Art.jpg', name: 'This is the most famous artwork in the Eastern Gallery', price: 'Free', travelType: 'Art' },
      { image: 'Save_Earth_Art.jpg', name: 'This is the most famous artwork in the Eastern Gallery', price: 'Free', travelType: 'Art' },
      { image: 'Marrionets_Art.jpg', name: 'This is the most famous artwork in the Eastern Gallery', price: 'Free', travelType: 'Art' },
      { image: 'German_Flag_Star_Of_David.jpg', name: 'This is the most famous artwork in the Eastern Gallery', price: 'Free', travelType: 'Art' },
      { image: 'Hand_Forward_Art.jpg', name: 'This is the most famous artwork in the Eastern Gallery', price: 'Free', travelType: 'Art' },
      { image: 'Pretty_Bridge_At_The_End.jpg', name: 'This is the most famous artwork in the Eastern Gallery', price: 'Free', travelType: 'Art' },
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
      { image: 'St_Nikolai_Kirche.jpg', name: "St. Nikolai-Kirche: A historic landmark church located in Spandau, Berlin, showcasing Gothic architecture.", price: 'Free', travelType: 'Landmark' },
    ],
    'Thai weekend market': [
      { image: 'Road_Towards_The_Thai_Market.jpg', name: 'Came accross this Thai Market while walking around', price: 'Free', travelType: 'Food' },
      { image: 'Best_Food.jpg', name: 'Came accross this Thai Market while walking around', price: 'Free', travelType: 'Food' },
      { image: 'Lot_Of_People.jpg', name: 'Came accross this Thai Market while walking around', price: 'Free', travelType: 'Food' },
      { image: 'All_Kinds_Of_Food.jpg', name: 'Came accross this Thai Market while walking around', price: 'Free', travelType: 'Food' },
      { image: 'Lucky_Cat.jpg', name: 'Came accross this Thai Market while walking around', price: 'Free', travelType: 'Food' },
    ],
    'Topography of Terror': [
      { image: 'Topography_Of_Terror.jpg', name: "Topography of Terror: Berlin's chilling museum on Nazi atrocities, set at former Gestapo and SS headquarters.", price: 'Free', travelType: 'Food' },
    ],
    'Hahneberg': [
      { image: 'Hahneberg_Information_Board.jpg', name: 'Board providing information about the main attraction.', price: 'Free', travelType: 'Scenic' },
      { image: 'Hahneberg_Right_Side.jpg', name: 'Hahneberg: A scenic hill in Berlin, offering panoramic views, walking trails, and a rich history.', price: 'Free', travelType: 'Scenic' },
      { image: 'City_Is_Never_Far.jpg', name: 'The City is never far away in Berlin, beautiful nature is everywhere.', price: 'Free', travelType: 'Scenic' },
      { image: 'Hahneberg_Side_View.jpg', name: 'On my way running up the mountain.', price: 'Free', travelType: 'Scenic' },
      { image: 'Natural_Arch.jpg', name: 'Had to crouch underneath the natural arch to get to the top.', price: 'Free', travelType: 'Scenic' },
      { image: 'Sheep_Eating_Grass.jpg', name: 'Had to crouch underneath the natural arch to get to the top.', price: 'Free', travelType: 'Scenic' },
    ],
};

  getImagesBySubject(): any{
    return this.imagesBySubject;
  }
}
