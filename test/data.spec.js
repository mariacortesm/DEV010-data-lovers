import { filterDirector, filterProducer, extractTitle, computeVehicle, computeFemaleCharacterPercentage } from '../src/data.js';

describe('filterDirector', () => {
  it('is a function', () => {
    expect(typeof filterDirector).toBe('function');
  });

  it('Deberia retornar nueve directores`', () => {
    const director = "Hayao Miyazaki";
    expect(filterDirector(director).length).toBe(9);
  });
});

describe('filterProducer', () => {
  it('is a function', () => {
    expect(typeof filterProducer).toBe('function');
  });

  it('Deberia retornar un productor', () => {
    const producer = "Toru Hara";
    expect(filterProducer(producer).length).toBe(1);
  });
});

describe('computeVehicle', () => {
  it('is a function', () => {
    expect(typeof computeVehicle).toBe('function');
  });

  it('Debería retornar vehículos', () => {
    const vehicles = [{
      "id": "90b72513-afd4-4570-84de-a56c312fdf81",
      "title": "The Cat Returns",
      "description": "Haru, a schoolgirl bored by her ordinary routine, saves the life of an unusual cat and suddenly her world is transformed beyond anything she ever imagined. The Cat King rewards her good deed with a flurry of presents, including a very shocking proposal of marriage to his son! Haru embarks on an unexpected journey to the Kingdom of Cats where her eyes are opened to a whole other world.",
      "director": "Hiroyuki Morita",
      "producer": "Toshio Suzuki",
      "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/8/87/The_Cat_Returns.jpg",
      "release_date": "2002",
      "rt_score": "89",
      "people": [
        {
          "id": "6b3facea-ea33-47b1-96ce-3fc737b119b8",
          "name": "Renaldo Moon aka Moon aka Muta",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/e7/Muta.png",
          "gender": "Male",
          "age": "NA",
          "eye_color": "White",
          "hair_color": "Beige",
          "specie": "Cat"
        },
        {
          "id": "3042818d-a8bb-4cba-8180-c19249822d57",
          "name": "Cat King",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/3/34/The_Cat_King.jpg",
          "gender": "Male",
          "age": "87",
          "eye_color": "Emerald",
          "hair_color": "Grey",
          "specie": "Cat"
        },
        {
          "id": "58d1973f-f247-47d7-9358-e56cb0d2b5a6",
          "name": "Yuki",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/eb/New_queen%2C_Yuki.JPG",
          "gender": "Female",
          "age": "NA",
          "eye_color": "Blue",
          "hair_color": "White",
          "specie": "Cat"
        },
        {
          "id": "a3d8e70f-46a0-4e5a-b850-db01620d6b92",
          "name": "Haru Yoshioka",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/2/27/Haru_Yoshioka.jpg",
          "gender": "Female",
          "age": "17",
          "eye_color": "Brown",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "466bc926-2024-4653-ac63-fe52f2dc8c7b",
          "name": "Natori",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c4/Natori.jpg",
          "gender": "Male",
          "age": "NA",
          "eye_color": "Blue",
          "hair_color": "Grey",
          "specie": "Cat"
        },
        {
          "id": "269dcd81-8037-45bb-892b-1c86c9696222",
          "name": "Toto",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8d/Toto.png",
          "gender": "Male",
          "age": "NA",
          "eye_color": "Black",
          "hair_color": "Dark Blue",
          "specie": "Bird"
        },
        {
          "id": "5b2a28f6-91d4-4382-aedc-b27094e763b0",
          "name": "Prince Lune",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/9/90/Prince_Lune.jpg",
          "gender": "Male",
          "age": "Adult",
          "eye_color": "Dark brown",
          "hair_color": "Russian blue",
          "specie": "Cat"
        },
        {
          "id": "17aca709-3049-48fc-95a6-e802c01125a2",
          "name": "Hiromi",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Hiromi.png",
          "gender": "Female",
          "age": "17",
          "eye_color": "Brown",
          "hair_color": "Light brown",
          "specie": "Human"
        },
        {
          "id": "911d38e2-ada4-4481-89a2-ba414422d4e4",
          "name": "Naoko Yoshioka",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/6/64/Naoko_Yoshioka.jpg",
          "gender": "Female",
          "age": "Adult",
          "eye_color": "Light Brown",
          "hair_color": "Light brown",
          "specie": "Human"
        }
      ],
      "locations": [
        {
          "id": "a8bd9c03-7c80-4a97-b7c0-6a668acaf576",
          "name": "The Cat Kingdom",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/a/a9/Baron022.jpg",
          "climate": "Continental",
          "terrain": "Plain",
          "surface_water": "30",
          "residents": [
            {
              "id": "6b3facea-ea33-47b1-96ce-3fc737b119b8",
              "name": "Renaldo Moon aka Moon aka Muta"
            },
            {
              "id": "3042818d-a8bb-4cba-8180-c19249822d57",
              "name": "Cat King"
            },
            {
              "id": "58d1973f-f247-47d7-9358-e56cb0d2b5a6",
              "name": "Yuki"
            },
            {
              "id": "a3d8e70f-46a0-4e5a-b850-db01620d6b92",
              "name": "Haru"
            }
          ]
        }
      ],
      "vehicles": []
    },
    {
      "id": "cd3d059c-09f4-4ff3-8d63-bc765a5184fa",
      "title": "Howl's Moving Castle",
      "description": "When Sophie, a shy young woman, is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking home.",
      "director": "Hayao Miyazaki",
      "producer": "Toshio Suzuki",
      "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/0/08/Howl%27s_Moving_Castle.jpg",
      "release_date": "2004",
      "rt_score": "87",
      "people": [
        {
          "id": "fa9b410f-cad4-457d-ac71-86b0afa6cf0a",
          "name": "Howl Jenkins Pendragon",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/f/fe/Howl_Jenkins_Pendragon.jpg",
          "gender": "Male",
          "age": "27",
          "eye_color": "Bright blue",
          "hair_color": "Bright blue",
          "specie": "Wizard"
        },
        {
          "id": "cbbe548f-dfb4-4d53-81d3-06c203dbb2ff",
          "name": "Sophie Hatter",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/f/f4/Sophie_short_hair.jpg",
          "gender": "Female",
          "age": "18",
          "eye_color": "Brown",
          "hair_color": "White",
          "specie": "Human"
        },
        {
          "id": "1287b275-6c32-4113-947f-519316d4a6be",
          "name": "Witch of the Waste",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/e1/Howls-moving-castle-disneyscreencaps.com-10507.jpg",
          "gender": "Female",
          "age": "59",
          "eye_color": "Brown",
          "hair_color": "White",
          "specie": "Witch/Human"
        },
        {
          "id": "b73f58ab-454a-42d6-9812-63e8f235a388",
          "name": "Calcifer",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/2/2a/Calcifer.png",
          "gender": "Male",
          "age": "NA",
          "eye_color": "Dark Brown",
          "hair_color": "Orange-yellow",
          "specie": "Demon"
        },
        {
          "id": "d03ca1e2-16ab-45d1-9b81-c2b0f7b35de1",
          "name": "Markl",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/5/5d/Markl.jpg",
          "gender": "Male",
          "age": "10",
          "eye_color": "Dark Brown",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "45237428-93bf-4dd6-97ce-f10647300429",
          "name": "Prince Justin or Turnip Head",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d9/Prince_Justin.png",
          "gender": "Male",
          "age": "20-30",
          "eye_color": "Grey",
          "hair_color": "Blonde",
          "specie": "Human/Scarecrow"
        },
        {
          "id": "8f66024e-c84f-445a-9ab5-0b31a6ae354d",
          "name": "Madame Suliman",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/6/64/Madame_Suliman.png",
          "gender": "Female",
          "age": "50",
          "eye_color": "Grey",
          "hair_color": "White",
          "specie": "Human"
        },
        {
          "id": "ccc705e4-aa2a-4929-b0dc-4b8a09fd290d",
          "name": "Heen",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/a/a7/Heen.png",
          "gender": "Male",
          "age": "NA",
          "eye_color": "Brown",
          "hair_color": "Beige-white",
          "specie": "Dog"
        },
        {
          "id": "3148150f-6ccb-4383-8af5-0c40f03c825e",
          "name": "Lettie Hatter",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/1c/Lettie_Hatter.png",
          "gender": "Female",
          "age": "16",
          "eye_color": "Blue",
          "hair_color": "Blonde",
          "specie": "Human"
        },
        {
          "id": "06610030-0560-47ac-bc18-be80d85c4dad",
          "name": "Fanny Hatter/Honey",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c6/Honey.png",
          "gender": "Female",
          "age": "Adult",
          "eye_color": "Grey",
          "hair_color": "Blonde",
          "specie": "Human"
        }
      ],
      "locations": [
        {
          "id": "b6bac992-a858-4d57-8477-9652d73caaa1",
          "name": "Ingary",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/4/48/Ingary.png",
          "climate": "Mild",
          "terrain": "Hill",
          "surface_water": "30",
          "residents": [
            "TODO"
          ]
        }
      ],
      "vehicles": [
        {
          "id": "2354305f-dccd-4c44-a79e-cc60ba7376e6",
          "name": "Howl's castle",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/e6/Howls_Castle.jpg",
          "description": "Wizard Howl's home. It's scale changes from scene to scene.",
          "vehicle_class": "Moving castle",
          "length": "unknown",
          "pilot": {
            "id": "fa9b410f-cad4-457d-ac71-86b0afa6cf0a",
            "name": "Howl Jenkins Pendragon"
          }
        }
      ]
    },
    {
      "id": "112c1e67-726f-40b1-ac17-6974127bb9b9",
      "title": "Tales from Earthsea",
      "description": "Something bizarre has come over the land. The kingdom is deteriorating. People are beginning to act strange... What's even more strange is that people are beginning to see dragons, which shouldn't enter the world of humans. Due to all these bizarre events, Ged, a wandering wizard, is investigating the cause. During his journey, he meets Prince Arren, a young distraught teenage boy. While Arren may look like a shy young teen, he has a severe dark side, which grants him strength, hatred, ruthlessness and has no mercy, especially when it comes to protecting Teru. For the witch Kumo this is a perfect opportunity. She can use the boy's 'fears' against the very one who would help him, Ged.",
      "director": "Gorō Miyazaki",
      "producer": "Toshio Suzuki",
      "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/0/09/%C3%96v%C3%A4rlden.jpg",
      "release_date": "2006",
      "rt_score": "41",
      "people": [
        {
          "id": "68df798d-f73d-4c70-b4ad-05dd84910436",
          "name": "Ged",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/3/33/Ged.jpg",
          "gender": "Male",
          "age": "Adult",
          "eye_color": "Brown",
          "hair_color": "Black",
          "specie": "Human"
        },
        {
          "id": "3f3163bb-e2da-4e87-a1bf-ae2dfcde1a09",
          "name": "Arren / Lebannen",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/ee/Arren.png",
          "gender": "Male",
          "age": "17",
          "eye_color": "Dark brown",
          "hair_color": "Dark brown",
          "specie": "Human"
        },
        {
          "id": "84ba6d3d-d225-4a92-bbbc-147808826425",
          "name": "Therru",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/1a/Therru.jpg",
          "gender": "Female",
          "age": "circa 14-17",
          "eye_color": "Dark brown",
          "hair_color": "Dark brown",
          "specie": "Human"
        },
        {
          "id": "60469915-e18e-4cf3-b43d-95ea56cc300c",
          "name": "Tenar",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/4/4f/Tenar.jpg",
          "gender": "Female",
          "age": "Adult",
          "eye_color": "Grey",
          "hair_color": "Blonde",
          "specie": "Human"
        },
        {
          "id": "9bd3091a-8ae2-4741-9265-7f83ec55663a",
          "name": "King of Enlad",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/ec/King-enlad.jpg",
          "gender": "Male",
          "age": "Adult",
          "eye_color": "Dark brown",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "59d22f97-f45d-4a6c-b473-13ee9e69082a",
          "name": "Cob",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/ce/Cob.jpg",
          "gender": "Male",
          "age": "Adult",
          "eye_color": "Violet",
          "hair_color": "Purple",
          "specie": "Arch-mage/Human"
        },
        {
          "id": "da00cee4-90a2-413b-8cef-c65e57f7e41",
          "name": "Hare",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/1e/Hare.jpg",
          "gender": "Male",
          "age": "Adult",
          "eye_color": "Dark brown",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "e024d74b-ca9f-49a7-92fb-e8723c6183e4",
          "name": "Hazia Dealer",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/1b/Hazia_Dealer.png",
          "gender": "Male",
          "age": "Adult",
          "eye_color": "Dark brown",
          "hair_color": "Brown",
          "specie": "Human"
        }
      ],
      "locations": [
        {
          "id": "bcc54f38-8847-45b0-97b1-307c94b2b517",
          "name": "Enland",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/0e/Ged007.jpg",
          "climate": "Wet",
          "terrain": "Earthsea",
          "surface_water": "100",
          "residents": [
            "TODO"
          ]
        }
      ],
      "vehicles": []
    },];
    expect(computeVehicle(vehicles).length).toBe(1);
  });
});

describe('computeFemaleCharacterPercentage', () => {
  it('is a function', () => {
    expect(typeof computeFemaleCharacterPercentage).toBe('function');
  });
});

it('Deberia retornar el porcentaje de personajes femeninos', () => {
  const femaleCharacters = [{
    "id": "90b72513-afd4-4570-84de-a56c312fdf81",
    "title": "The Cat Returns",
    "description": "Haru, a schoolgirl bored by her ordinary routine, saves the life of an unusual cat and suddenly her world is transformed beyond anything she ever imagined. The Cat King rewards her good deed with a flurry of presents, including a very shocking proposal of marriage to his son! Haru embarks on an unexpected journey to the Kingdom of Cats where her eyes are opened to a whole other world.",
    "director": "Hiroyuki Morita",
    "producer": "Toshio Suzuki",
    "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/8/87/The_Cat_Returns.jpg",
    "release_date": "2002",
    "rt_score": "89",
    "people": [
      {
        "id": "6b3facea-ea33-47b1-96ce-3fc737b119b8",
        "name": "Renaldo Moon aka Moon aka Muta",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/e7/Muta.png",
        "gender": "Male",
        "age": "NA",
        "eye_color": "White",
        "hair_color": "Beige",
        "specie": "Cat"
      },
      {
        "id": "3042818d-a8bb-4cba-8180-c19249822d57",
        "name": "Cat King",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/3/34/The_Cat_King.jpg",
        "gender": "Male",
        "age": "87",
        "eye_color": "Emerald",
        "hair_color": "Grey",
        "specie": "Cat"
      },
      {
        "id": "58d1973f-f247-47d7-9358-e56cb0d2b5a6",
        "name": "Yuki",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/eb/New_queen%2C_Yuki.JPG",
        "gender": "Female",
        "age": "NA",
        "eye_color": "Blue",
        "hair_color": "White",
        "specie": "Cat"
      },
      {
        "id": "a3d8e70f-46a0-4e5a-b850-db01620d6b92",
        "name": "Haru Yoshioka",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/2/27/Haru_Yoshioka.jpg",
        "gender": "Female",
        "age": "17",
        "eye_color": "Brown",
        "hair_color": "Brown",
        "specie": "Human"
      },
      {
        "id": "466bc926-2024-4653-ac63-fe52f2dc8c7b",
        "name": "Natori",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c4/Natori.jpg",
        "gender": "Male",
        "age": "NA",
        "eye_color": "Blue",
        "hair_color": "Grey",
        "specie": "Cat"
      },
      {
        "id": "269dcd81-8037-45bb-892b-1c86c9696222",
        "name": "Toto",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8d/Toto.png",
        "gender": "Male",
        "age": "NA",
        "eye_color": "Black",
        "hair_color": "Dark Blue",
        "specie": "Bird"
      },
      {
        "id": "5b2a28f6-91d4-4382-aedc-b27094e763b0",
        "name": "Prince Lune",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/9/90/Prince_Lune.jpg",
        "gender": "Male",
        "age": "Adult",
        "eye_color": "Dark brown",
        "hair_color": "Russian blue",
        "specie": "Cat"
      },
      {
        "id": "17aca709-3049-48fc-95a6-e802c01125a2",
        "name": "Hiromi",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Hiromi.png",
        "gender": "Female",
        "age": "17",
        "eye_color": "Brown",
        "hair_color": "Light brown",
        "specie": "Human"
      },
      {
        "id": "911d38e2-ada4-4481-89a2-ba414422d4e4",
        "name": "Naoko Yoshioka",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/6/64/Naoko_Yoshioka.jpg",
        "gender": "Female",
        "age": "Adult",
        "eye_color": "Light Brown",
        "hair_color": "Light brown",
        "specie": "Human"
      }
    ],
    "locations": [
      {
        "id": "a8bd9c03-7c80-4a97-b7c0-6a668acaf576",
        "name": "The Cat Kingdom",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/a/a9/Baron022.jpg",
        "climate": "Continental",
        "terrain": "Plain",
        "surface_water": "30",
        "residents": [
          {
            "id": "6b3facea-ea33-47b1-96ce-3fc737b119b8",
            "name": "Renaldo Moon aka Moon aka Muta"
          },
          {
            "id": "3042818d-a8bb-4cba-8180-c19249822d57",
            "name": "Cat King"
          },
          {
            "id": "58d1973f-f247-47d7-9358-e56cb0d2b5a6",
            "name": "Yuki"
          },
          {
            "id": "a3d8e70f-46a0-4e5a-b850-db01620d6b92",
            "name": "Haru"
          }
        ]
      }
    ],
    "vehicles": []
  },
  {
    "id": "cd3d059c-09f4-4ff3-8d63-bc765a5184fa",
    "title": "Howl's Moving Castle",
    "description": "When Sophie, a shy young woman, is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking home.",
    "director": "Hayao Miyazaki",
    "producer": "Toshio Suzuki",
    "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/0/08/Howl%27s_Moving_Castle.jpg",
    "release_date": "2004",
    "rt_score": "87",
    "people": [
      {
        "id": "fa9b410f-cad4-457d-ac71-86b0afa6cf0a",
        "name": "Howl Jenkins Pendragon",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/f/fe/Howl_Jenkins_Pendragon.jpg",
        "gender": "Male",
        "age": "27",
        "eye_color": "Bright blue",
        "hair_color": "Bright blue",
        "specie": "Wizard"
      },
      {
        "id": "cbbe548f-dfb4-4d53-81d3-06c203dbb2ff",
        "name": "Sophie Hatter",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/f/f4/Sophie_short_hair.jpg",
        "gender": "Female",
        "age": "18",
        "eye_color": "Brown",
        "hair_color": "White",
        "specie": "Human"
      },
      {
        "id": "1287b275-6c32-4113-947f-519316d4a6be",
        "name": "Witch of the Waste",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/e1/Howls-moving-castle-disneyscreencaps.com-10507.jpg",
        "gender": "Female",
        "age": "59",
        "eye_color": "Brown",
        "hair_color": "White",
        "specie": "Witch/Human"
      },
      {
        "id": "b73f58ab-454a-42d6-9812-63e8f235a388",
        "name": "Calcifer",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/2/2a/Calcifer.png",
        "gender": "Male",
        "age": "NA",
        "eye_color": "Dark Brown",
        "hair_color": "Orange-yellow",
        "specie": "Demon"
      },
      {
        "id": "d03ca1e2-16ab-45d1-9b81-c2b0f7b35de1",
        "name": "Markl",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/5/5d/Markl.jpg",
        "gender": "Male",
        "age": "10",
        "eye_color": "Dark Brown",
        "hair_color": "Brown",
        "specie": "Human"
      },
      {
        "id": "45237428-93bf-4dd6-97ce-f10647300429",
        "name": "Prince Justin or Turnip Head",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d9/Prince_Justin.png",
        "gender": "Male",
        "age": "20-30",
        "eye_color": "Grey",
        "hair_color": "Blonde",
        "specie": "Human/Scarecrow"
      },
      {
        "id": "8f66024e-c84f-445a-9ab5-0b31a6ae354d",
        "name": "Madame Suliman",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/6/64/Madame_Suliman.png",
        "gender": "Female",
        "age": "50",
        "eye_color": "Grey",
        "hair_color": "White",
        "specie": "Human"
      },
      {
        "id": "ccc705e4-aa2a-4929-b0dc-4b8a09fd290d",
        "name": "Heen",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/a/a7/Heen.png",
        "gender": "Male",
        "age": "NA",
        "eye_color": "Brown",
        "hair_color": "Beige-white",
        "specie": "Dog"
      },
      {
        "id": "3148150f-6ccb-4383-8af5-0c40f03c825e",
        "name": "Lettie Hatter",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/1c/Lettie_Hatter.png",
        "gender": "Female",
        "age": "16",
        "eye_color": "Blue",
        "hair_color": "Blonde",
        "specie": "Human"
      },
      {
        "id": "06610030-0560-47ac-bc18-be80d85c4dad",
        "name": "Fanny Hatter/Honey",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c6/Honey.png",
        "gender": "Female",
        "age": "Adult",
        "eye_color": "Grey",
        "hair_color": "Blonde",
        "specie": "Human"
      }
    ],
    "locations": [
      {
        "id": "b6bac992-a858-4d57-8477-9652d73caaa1",
        "name": "Ingary",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/4/48/Ingary.png",
        "climate": "Mild",
        "terrain": "Hill",
        "surface_water": "30",
        "residents": [
          "TODO"
        ]
      }
    ],
    "vehicles": [
      {
        "id": "2354305f-dccd-4c44-a79e-cc60ba7376e6",
        "name": "Howl's castle",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/e6/Howls_Castle.jpg",
        "description": "Wizard Howl's home. It's scale changes from scene to scene.",
        "vehicle_class": "Moving castle",
        "length": "unknown",
        "pilot": {
          "id": "fa9b410f-cad4-457d-ac71-86b0afa6cf0a",
          "name": "Howl Jenkins Pendragon"
        }
      }
    ]
  },
  {
    "id": "112c1e67-726f-40b1-ac17-6974127bb9b9",
    "title": "Tales from Earthsea",
    "description": "Something bizarre has come over the land. The kingdom is deteriorating. People are beginning to act strange... What's even more strange is that people are beginning to see dragons, which shouldn't enter the world of humans. Due to all these bizarre events, Ged, a wandering wizard, is investigating the cause. During his journey, he meets Prince Arren, a young distraught teenage boy. While Arren may look like a shy young teen, he has a severe dark side, which grants him strength, hatred, ruthlessness and has no mercy, especially when it comes to protecting Teru. For the witch Kumo this is a perfect opportunity. She can use the boy's 'fears' against the very one who would help him, Ged.",
    "director": "Gorō Miyazaki",
    "producer": "Toshio Suzuki",
    "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/0/09/%C3%96v%C3%A4rlden.jpg",
    "release_date": "2006",
    "rt_score": "41",
    "people": [
      {
        "id": "68df798d-f73d-4c70-b4ad-05dd84910436",
        "name": "Ged",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/3/33/Ged.jpg",
        "gender": "Male",
        "age": "Adult",
        "eye_color": "Brown",
        "hair_color": "Black",
        "specie": "Human"
      },
      {
        "id": "3f3163bb-e2da-4e87-a1bf-ae2dfcde1a09",
        "name": "Arren / Lebannen",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/ee/Arren.png",
        "gender": "Male",
        "age": "17",
        "eye_color": "Dark brown",
        "hair_color": "Dark brown",
        "specie": "Human"
      },
      {
        "id": "84ba6d3d-d225-4a92-bbbc-147808826425",
        "name": "Therru",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/1a/Therru.jpg",
        "gender": "Female",
        "age": "circa 14-17",
        "eye_color": "Dark brown",
        "hair_color": "Dark brown",
        "specie": "Human"
      },
      {
        "id": "60469915-e18e-4cf3-b43d-95ea56cc300c",
        "name": "Tenar",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/4/4f/Tenar.jpg",
        "gender": "Female",
        "age": "Adult",
        "eye_color": "Grey",
        "hair_color": "Blonde",
        "specie": "Human"
      },
      {
        "id": "9bd3091a-8ae2-4741-9265-7f83ec55663a",
        "name": "King of Enlad",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/ec/King-enlad.jpg",
        "gender": "Male",
        "age": "Adult",
        "eye_color": "Dark brown",
        "hair_color": "Brown",
        "specie": "Human"
      },
      {
        "id": "59d22f97-f45d-4a6c-b473-13ee9e69082a",
        "name": "Cob",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/ce/Cob.jpg",
        "gender": "Male",
        "age": "Adult",
        "eye_color": "Violet",
        "hair_color": "Purple",
        "specie": "Arch-mage/Human"
      },
      {
        "id": "da00cee4-90a2-413b-8cef-c65e57f7e41",
        "name": "Hare",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/1e/Hare.jpg",
        "gender": "Male",
        "age": "Adult",
        "eye_color": "Dark brown",
        "hair_color": "Brown",
        "specie": "Human"
      },
      {
        "id": "e024d74b-ca9f-49a7-92fb-e8723c6183e4",
        "name": "Hazia Dealer",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/1b/Hazia_Dealer.png",
        "gender": "Male",
        "age": "Adult",
        "eye_color": "Dark brown",
        "hair_color": "Brown",
        "specie": "Human"
      }
    ],
    "locations": [
      {
        "id": "bcc54f38-8847-45b0-97b1-307c94b2b517",
        "name": "Enland",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/0e/Ged007.jpg",
        "climate": "Wet",
        "terrain": "Earthsea",
        "surface_water": "100",
        "residents": [
          "TODO"
        ]
      }
    ],
    "vehicles": []
  },]
  expect(computeFemaleCharacterPercentage(femaleCharacters)).toBe(40.74074074074074);
});

describe('extractTitle', () => {
  it('is a function', () => {
    expect(typeof extractTitle).toBe('function');
  });
});

it('Debería ordenar de la A a la Z', () => {
  const title = [
    {
      "id": "112c1e67-726f-40b1-ac17-6974127bb9b9",
      "title": "Tales from Earthsea",
      "description": "Something bizarre has come over the land. The kingdom is deteriorating. People are beginning to act strange... What's even more strange is that people are beginning to see dragons, which shouldn't enter the world of humans. Due to all these bizarre events, Ged, a wandering wizard, is investigating the cause. During his journey, he meets Prince Arren, a young distraught teenage boy. While Arren may look like a shy young teen, he has a severe dark side, which grants him strength, hatred, ruthlessness and has no mercy, especially when it comes to protecting Teru. For the witch Kumo this is a perfect opportunity. She can use the boy's 'fears' against the very one who would help him, Ged.",
      "director": "Gorō Miyazaki",
      "producer": "Toshio Suzuki",
      "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/0/09/%C3%96v%C3%A4rlden.jpg",
      "release_date": "2006",
      "rt_score": "41",
      "people": [
        {
          "id": "68df798d-f73d-4c70-b4ad-05dd84910436",
          "name": "Ged",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/3/33/Ged.jpg",
          "gender": "Male",
          "age": "Adult",
          "eye_color": "Brown",
          "hair_color": "Black",
          "specie": "Human"
        },
        {
          "id": "3f3163bb-e2da-4e87-a1bf-ae2dfcde1a09",
          "name": "Arren / Lebannen",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/ee/Arren.png",
          "gender": "Male",
          "age": "17",
          "eye_color": "Dark brown",
          "hair_color": "Dark brown",
          "specie": "Human"
        },
        {
          "id": "84ba6d3d-d225-4a92-bbbc-147808826425",
          "name": "Therru",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/1a/Therru.jpg",
          "gender": "Female",
          "age": "circa 14-17",
          "eye_color": "Dark brown",
          "hair_color": "Dark brown",
          "specie": "Human"
        },
        {
          "id": "60469915-e18e-4cf3-b43d-95ea56cc300c",
          "name": "Tenar",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/4/4f/Tenar.jpg",
          "gender": "Female",
          "age": "Adult",
          "eye_color": "Grey",
          "hair_color": "Blonde",
          "specie": "Human"
        },
        {
          "id": "9bd3091a-8ae2-4741-9265-7f83ec55663a",
          "name": "King of Enlad",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/ec/King-enlad.jpg",
          "gender": "Male",
          "age": "Adult",
          "eye_color": "Dark brown",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "59d22f97-f45d-4a6c-b473-13ee9e69082a",
          "name": "Cob",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/ce/Cob.jpg",
          "gender": "Male",
          "age": "Adult",
          "eye_color": "Violet",
          "hair_color": "Purple",
          "specie": "Arch-mage/Human"
        },
        {
          "id": "da00cee4-90a2-413b-8cef-c65e57f7e41",
          "name": "Hare",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/1e/Hare.jpg",
          "gender": "Male",
          "age": "Adult",
          "eye_color": "Dark brown",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "e024d74b-ca9f-49a7-92fb-e8723c6183e4",
          "name": "Hazia Dealer",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/1b/Hazia_Dealer.png",
          "gender": "Male",
          "age": "Adult",
          "eye_color": "Dark brown",
          "hair_color": "Brown",
          "specie": "Human"
        }
      ],
      "locations": [
        {
          "id": "bcc54f38-8847-45b0-97b1-307c94b2b517",
          "name": "Enland",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/0e/Ged007.jpg",
          "climate": "Wet",
          "terrain": "Earthsea",
          "surface_water": "100",
          "residents": [
            "TODO"
          ]
        }
      ],
      "vehicles": []
    },{
      "id": "cd3d059c-09f4-4ff3-8d63-bc765a5184fa",
      "title": "Howl's Moving Castle",
      "description": "When Sophie, a shy young woman, is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking home.",
      "director": "Hayao Miyazaki",
      "producer": "Toshio Suzuki",
      "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/0/08/Howl%27s_Moving_Castle.jpg",
      "release_date": "2004",
      "rt_score": "87",
      "people": [
        {
          "id": "fa9b410f-cad4-457d-ac71-86b0afa6cf0a",
          "name": "Howl Jenkins Pendragon",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/f/fe/Howl_Jenkins_Pendragon.jpg",
          "gender": "Male",
          "age": "27",
          "eye_color": "Bright blue",
          "hair_color": "Bright blue",
          "specie": "Wizard"
        },
        {
          "id": "cbbe548f-dfb4-4d53-81d3-06c203dbb2ff",
          "name": "Sophie Hatter",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/f/f4/Sophie_short_hair.jpg",
          "gender": "Female",
          "age": "18",
          "eye_color": "Brown",
          "hair_color": "White",
          "specie": "Human"
        },
        {
          "id": "1287b275-6c32-4113-947f-519316d4a6be",
          "name": "Witch of the Waste",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/e1/Howls-moving-castle-disneyscreencaps.com-10507.jpg",
          "gender": "Female",
          "age": "59",
          "eye_color": "Brown",
          "hair_color": "White",
          "specie": "Witch/Human"
        },
        {
          "id": "b73f58ab-454a-42d6-9812-63e8f235a388",
          "name": "Calcifer",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/2/2a/Calcifer.png",
          "gender": "Male",
          "age": "NA",
          "eye_color": "Dark Brown",
          "hair_color": "Orange-yellow",
          "specie": "Demon"
        },
        {
          "id": "d03ca1e2-16ab-45d1-9b81-c2b0f7b35de1",
          "name": "Markl",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/5/5d/Markl.jpg",
          "gender": "Male",
          "age": "10",
          "eye_color": "Dark Brown",
          "hair_color": "Brown",
          "specie": "Human"
        },
        {
          "id": "45237428-93bf-4dd6-97ce-f10647300429",
          "name": "Prince Justin or Turnip Head",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d9/Prince_Justin.png",
          "gender": "Male",
          "age": "20-30",
          "eye_color": "Grey",
          "hair_color": "Blonde",
          "specie": "Human/Scarecrow"
        },
        {
          "id": "8f66024e-c84f-445a-9ab5-0b31a6ae354d",
          "name": "Madame Suliman",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/6/64/Madame_Suliman.png",
          "gender": "Female",
          "age": "50",
          "eye_color": "Grey",
          "hair_color": "White",
          "specie": "Human"
        },
        {
          "id": "ccc705e4-aa2a-4929-b0dc-4b8a09fd290d",
          "name": "Heen",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/a/a7/Heen.png",
          "gender": "Male",
          "age": "NA",
          "eye_color": "Brown",
          "hair_color": "Beige-white",
          "specie": "Dog"
        },
        {
          "id": "3148150f-6ccb-4383-8af5-0c40f03c825e",
          "name": "Lettie Hatter",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/1c/Lettie_Hatter.png",
          "gender": "Female",
          "age": "16",
          "eye_color": "Blue",
          "hair_color": "Blonde",
          "specie": "Human"
        },
        {
          "id": "06610030-0560-47ac-bc18-be80d85c4dad",
          "name": "Fanny Hatter/Honey",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c6/Honey.png",
          "gender": "Female",
          "age": "Adult",
          "eye_color": "Grey",
          "hair_color": "Blonde",
          "specie": "Human"
        }
      ],
      "locations": [
        {
          "id": "b6bac992-a858-4d57-8477-9652d73caaa1",
          "name": "Ingary",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/4/48/Ingary.png",
          "climate": "Mild",
          "terrain": "Hill",
          "surface_water": "30",
          "residents": [
            "TODO"
          ]
        }
      ],
      "vehicles": [
        {
          "id": "2354305f-dccd-4c44-a79e-cc60ba7376e6",
          "name": "Howl's castle",
          "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/e6/Howls_Castle.jpg",
          "description": "Wizard Howl's home. It's scale changes from scene to scene.",
          "vehicle_class": "Moving castle",
          "length": "unknown",
          "pilot": {
            "id": "fa9b410f-cad4-457d-ac71-86b0afa6cf0a",
            "name": "Howl Jenkins Pendragon"
          }
        }
      ]
    },];  
  expect(extractTitle(title)).toEqual([{
    "id": "cd3d059c-09f4-4ff3-8d63-bc765a5184fa",
    "title": "Howl's Moving Castle",
    "description": "When Sophie, a shy young woman, is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking home.",
    "director": "Hayao Miyazaki",
    "producer": "Toshio Suzuki",
    "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/0/08/Howl%27s_Moving_Castle.jpg",
    "release_date": "2004",
    "rt_score": "87",
    "people": [
      {
        "id": "fa9b410f-cad4-457d-ac71-86b0afa6cf0a",
        "name": "Howl Jenkins Pendragon",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/f/fe/Howl_Jenkins_Pendragon.jpg",
        "gender": "Male",
        "age": "27",
        "eye_color": "Bright blue",
        "hair_color": "Bright blue",
        "specie": "Wizard"
      },
      {
        "id": "cbbe548f-dfb4-4d53-81d3-06c203dbb2ff",
        "name": "Sophie Hatter",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/f/f4/Sophie_short_hair.jpg",
        "gender": "Female",
        "age": "18",
        "eye_color": "Brown",
        "hair_color": "White",
        "specie": "Human"
      },
      {
        "id": "1287b275-6c32-4113-947f-519316d4a6be",
        "name": "Witch of the Waste",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/e1/Howls-moving-castle-disneyscreencaps.com-10507.jpg",
        "gender": "Female",
        "age": "59",
        "eye_color": "Brown",
        "hair_color": "White",
        "specie": "Witch/Human"
      },
      {
        "id": "b73f58ab-454a-42d6-9812-63e8f235a388",
        "name": "Calcifer",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/2/2a/Calcifer.png",
        "gender": "Male",
        "age": "NA",
        "eye_color": "Dark Brown",
        "hair_color": "Orange-yellow",
        "specie": "Demon"
      },
      {
        "id": "d03ca1e2-16ab-45d1-9b81-c2b0f7b35de1",
        "name": "Markl",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/5/5d/Markl.jpg",
        "gender": "Male",
        "age": "10",
        "eye_color": "Dark Brown",
        "hair_color": "Brown",
        "specie": "Human"
      },
      {
        "id": "45237428-93bf-4dd6-97ce-f10647300429",
        "name": "Prince Justin or Turnip Head",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/d/d9/Prince_Justin.png",
        "gender": "Male",
        "age": "20-30",
        "eye_color": "Grey",
        "hair_color": "Blonde",
        "specie": "Human/Scarecrow"
      },
      {
        "id": "8f66024e-c84f-445a-9ab5-0b31a6ae354d",
        "name": "Madame Suliman",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/6/64/Madame_Suliman.png",
        "gender": "Female",
        "age": "50",
        "eye_color": "Grey",
        "hair_color": "White",
        "specie": "Human"
      },
      {
        "id": "ccc705e4-aa2a-4929-b0dc-4b8a09fd290d",
        "name": "Heen",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/a/a7/Heen.png",
        "gender": "Male",
        "age": "NA",
        "eye_color": "Brown",
        "hair_color": "Beige-white",
        "specie": "Dog"
      },
      {
        "id": "3148150f-6ccb-4383-8af5-0c40f03c825e",
        "name": "Lettie Hatter",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/1c/Lettie_Hatter.png",
        "gender": "Female",
        "age": "16",
        "eye_color": "Blue",
        "hair_color": "Blonde",
        "specie": "Human"
      },
      {
        "id": "06610030-0560-47ac-bc18-be80d85c4dad",
        "name": "Fanny Hatter/Honey",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c6/Honey.png",
        "gender": "Female",
        "age": "Adult",
        "eye_color": "Grey",
        "hair_color": "Blonde",
        "specie": "Human"
      }
    ],
    "locations": [
      {
        "id": "b6bac992-a858-4d57-8477-9652d73caaa1",
        "name": "Ingary",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/4/48/Ingary.png",
        "climate": "Mild",
        "terrain": "Hill",
        "surface_water": "30",
        "residents": [
          "TODO"
        ]
      }
    ],
    "vehicles": [
      {
        "id": "2354305f-dccd-4c44-a79e-cc60ba7376e6",
        "name": "Howl's castle",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/e6/Howls_Castle.jpg",
        "description": "Wizard Howl's home. It's scale changes from scene to scene.",
        "vehicle_class": "Moving castle",
        "length": "unknown",
        "pilot": {
          "id": "fa9b410f-cad4-457d-ac71-86b0afa6cf0a",
          "name": "Howl Jenkins Pendragon"
        }
      }
    ]
  },
  {
    "id": "112c1e67-726f-40b1-ac17-6974127bb9b9",
    "title": "Tales from Earthsea",
    "description": "Something bizarre has come over the land. The kingdom is deteriorating. People are beginning to act strange... What's even more strange is that people are beginning to see dragons, which shouldn't enter the world of humans. Due to all these bizarre events, Ged, a wandering wizard, is investigating the cause. During his journey, he meets Prince Arren, a young distraught teenage boy. While Arren may look like a shy young teen, he has a severe dark side, which grants him strength, hatred, ruthlessness and has no mercy, especially when it comes to protecting Teru. For the witch Kumo this is a perfect opportunity. She can use the boy's 'fears' against the very one who would help him, Ged.",
    "director": "Gorō Miyazaki",
    "producer": "Toshio Suzuki",
    "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/0/09/%C3%96v%C3%A4rlden.jpg",
    "release_date": "2006",
    "rt_score": "41",
    "people": [
      {
        "id": "68df798d-f73d-4c70-b4ad-05dd84910436",
        "name": "Ged",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/3/33/Ged.jpg",
        "gender": "Male",
        "age": "Adult",
        "eye_color": "Brown",
        "hair_color": "Black",
        "specie": "Human"
      },
      {
        "id": "3f3163bb-e2da-4e87-a1bf-ae2dfcde1a09",
        "name": "Arren / Lebannen",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/ee/Arren.png",
        "gender": "Male",
        "age": "17",
        "eye_color": "Dark brown",
        "hair_color": "Dark brown",
        "specie": "Human"
      },
      {
        "id": "84ba6d3d-d225-4a92-bbbc-147808826425",
        "name": "Therru",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/1a/Therru.jpg",
        "gender": "Female",
        "age": "circa 14-17",
        "eye_color": "Dark brown",
        "hair_color": "Dark brown",
        "specie": "Human"
      },
      {
        "id": "60469915-e18e-4cf3-b43d-95ea56cc300c",
        "name": "Tenar",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/4/4f/Tenar.jpg",
        "gender": "Female",
        "age": "Adult",
        "eye_color": "Grey",
        "hair_color": "Blonde",
        "specie": "Human"
      },
      {
        "id": "9bd3091a-8ae2-4741-9265-7f83ec55663a",
        "name": "King of Enlad",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/ec/King-enlad.jpg",
        "gender": "Male",
        "age": "Adult",
        "eye_color": "Dark brown",
        "hair_color": "Brown",
        "specie": "Human"
      },
      {
        "id": "59d22f97-f45d-4a6c-b473-13ee9e69082a",
        "name": "Cob",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/ce/Cob.jpg",
        "gender": "Male",
        "age": "Adult",
        "eye_color": "Violet",
        "hair_color": "Purple",
        "specie": "Arch-mage/Human"
      },
      {
        "id": "da00cee4-90a2-413b-8cef-c65e57f7e41",
        "name": "Hare",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/1e/Hare.jpg",
        "gender": "Male",
        "age": "Adult",
        "eye_color": "Dark brown",
        "hair_color": "Brown",
        "specie": "Human"
      },
      {
        "id": "e024d74b-ca9f-49a7-92fb-e8723c6183e4",
        "name": "Hazia Dealer",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/1/1b/Hazia_Dealer.png",
        "gender": "Male",
        "age": "Adult",
        "eye_color": "Dark brown",
        "hair_color": "Brown",
        "specie": "Human"
      }
    ],
    "locations": [
      {
        "id": "bcc54f38-8847-45b0-97b1-307c94b2b517",
        "name": "Enland",
        "img": "https://static.wikia.nocookie.net/studio-ghibli/images/0/0e/Ged007.jpg",
        "climate": "Wet",
        "terrain": "Earthsea",
        "surface_water": "100",
        "residents": [
          "TODO"
        ]
      }
    ],
    "vehicles": []
  },]);
});