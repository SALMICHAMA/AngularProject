export class ListAnimalService {
  animals = [
    {
      id: 1,
      name: 'Chat',
      environment: 'city',
      groups: 'felin',
    },
    {
      id: 2,
      name: 'Chien',
      environment: 'city',
      groups: 'Canin',
    },
    {
      id: 3,
      name: 'Lion',
      environment: 'Savane',
      groups: 'felin',
    }
  ];

  getColumns(): string[] {
    return ['name', 'environment', 'groups']}

}
